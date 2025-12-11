'use client'

import { useState, useMemo } from 'react'
import { AlertCircle, Check, Copy } from 'lucide-react'
import { copyToClipboard } from '@/lib/utils'

const commonPatterns = [
  { name: 'Email', pattern: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$', flags: '' },
  { name: 'URL', pattern: 'https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b', flags: 'g' },
  { name: 'Phone (US)', pattern: '^(\\+1)?[-.\\s]?\\(?\\d{3}\\)?[-.\\s]?\\d{3}[-.\\s]?\\d{4}$', flags: '' },
  { name: 'Date (YYYY-MM-DD)', pattern: '^\\d{4}-\\d{2}-\\d{2}$', flags: '' },
  { name: 'IP Address', pattern: '^(?:[0-9]{1,3}\\.){3}[0-9]{1,3}$', flags: '' },
  { name: 'Hex Color', pattern: '^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$', flags: '' },
]

export function RegexTester() {
  const [pattern, setPattern] = useState('')
  const [flags, setFlags] = useState({ g: true, i: false, m: false })
  const [testString, setTestString] = useState('')
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  const regex = useMemo(() => {
    if (!pattern) return null
    try {
      const flagStr = Object.entries(flags)
        .filter(([_, enabled]) => enabled)
        .map(([flag]) => flag)
        .join('')
      return new RegExp(pattern, flagStr)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid regex')
      return null
    }
  }, [pattern, flags])

  const matches = useMemo(() => {
    if (!regex || !testString) return []
    setError('')
    try {
      const matches = Array.from(testString.matchAll(regex))
      return matches.map((match, i) => ({
        index: i,
        match: match[0],
        position: match.index,
        groups: match.slice(1),
      }))
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error matching')
      return []
    }
  }, [regex, testString])

  const highlightedText = useMemo(() => {
    if (!testString) return []
    if (matches.length === 0) return [{ text: testString, matched: false }]

    const parts: { text: string; matched: boolean }[] = []
    let lastIndex = 0

    matches.forEach((match) => {
      if (match.position !== undefined && match.position > lastIndex) {
        parts.push({ text: testString.slice(lastIndex, match.position), matched: false })
      }
      parts.push({ text: match.match, matched: true })
      lastIndex = (match.position || 0) + match.match.length
    })

    if (lastIndex < testString.length) {
      parts.push({ text: testString.slice(lastIndex), matched: false })
    }

    return parts
  }, [testString, matches])

  const handleCopyPattern = async () => {
    if (!pattern) return
    try {
      const flagStr = Object.entries(flags)
        .filter(([_, enabled]) => enabled)
        .map(([flag]) => flag)
        .join('')
      await copyToClipboard(`/${pattern}/${flagStr}`)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const loadPattern = (p: typeof commonPatterns[0]) => {
    setPattern(p.pattern)
    setFlags({ g: p.flags.includes('g'), i: p.flags.includes('i'), m: p.flags.includes('m') })
    setError('')
  }

  return (
    <div className="space-y-6">
      {/* Pattern Input */}
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium dark:text-white">Regular Expression Pattern</label>
          <div className="flex gap-2">
            <div className="flex-1 flex items-center border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800">
              <span className="px-3 text-gray-500">/</span>
              <input
                type="text"
                value={pattern}
                onChange={(e) => setPattern(e.target.value)}
                placeholder="Enter regex pattern..."
                className="flex-1 px-2 py-3 outline-none bg-transparent"
              />
              <span className="px-3 text-gray-500">/</span>
            </div>
            <button
              onClick={handleCopyPattern}
              disabled={!pattern}
              className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors disabled:opacity-50"
            >
              {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Flags */}
        <div className="flex gap-6 flex-wrap">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={flags.g}
              onChange={(e) => setFlags({ ...flags, g: e.target.checked })}
              className="rounded border-gray-300 dark:border-gray-700"
            />
            <span className="text-sm dark:text-white">
              <strong>g</strong> - Global
            </span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={flags.i}
              onChange={(e) => setFlags({ ...flags, i: e.target.checked })}
              className="rounded border-gray-300 dark:border-gray-700"
            />
            <span className="text-sm dark:text-white">
              <strong>i</strong> - Case insensitive
            </span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={flags.m}
              onChange={(e) => setFlags({ ...flags, m: e.target.checked })}
              className="rounded border-gray-300 dark:border-gray-700"
            />
            <span className="text-sm dark:text-white">
              <strong>m</strong> - Multiline
            </span>
          </label>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400">
          <AlertCircle className="w-5 h-5" />
          <span>{error}</span>
        </div>
      )}

      {/* Test String */}
      <div className="space-y-2">
        <label className="block text-sm font-medium dark:text-white">Test String</label>
        <textarea
          value={testString}
          onChange={(e) => setTestString(e.target.value)}
          placeholder="Enter text to test against your regex..."
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Results */}
      {testString && (
        <div className="space-y-2">
          <label className="block text-sm font-medium dark:text-white">
            Matches: {matches.length}
          </label>
          <div className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 font-mono text-sm whitespace-pre-wrap break-words">
            {highlightedText.length > 0 ? (
              highlightedText.map((part, i) => (
                <span
                  key={i}
                  className={part.matched ? 'bg-yellow-200 dark:bg-yellow-600 text-gray-900 dark:text-white' : ''}
                >
                  {part.text}
                </span>
              ))
            ) : (
              <span className="text-gray-500">No matches</span>
            )}
          </div>
        </div>
      )}

      {/* Match Details */}
      {matches.length > 0 && (
        <div className="space-y-2">
          <label className="block text-sm font-medium dark:text-white">Match Details</label>
          <div className="space-y-2">
            {matches.map((match) => (
              <div key={match.index} className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-mono text-sm font-semibold dark:text-white">Match {match.index + 1}</span>
                  <span className="text-xs text-gray-500">Position: {match.position}</span>
                </div>
                <div className="font-mono text-sm p-2 bg-gray-50 dark:bg-gray-900 rounded">
                  {match.match}
                </div>
                {match.groups.length > 0 && (
                  <div className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                    Groups: {match.groups.map((g, i) => `$${i + 1}: "${g}"`).join(', ')}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Common Patterns */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
        <h3 className="font-semibold mb-4 dark:text-white">Common Patterns</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {commonPatterns.map((p) => (
            <button
              key={p.name}
              onClick={() => loadPattern(p)}
              className="text-left p-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
            >
              <div className="font-medium text-sm mb-1 dark:text-white">{p.name}</div>
              <code className="text-xs text-gray-600 dark:text-gray-400 break-all">
                /{p.pattern}/{p.flags}
              </code>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
