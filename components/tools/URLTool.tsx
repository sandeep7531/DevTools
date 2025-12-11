'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { copyToClipboard } from '@/lib/utils'

export function URLTool() {
  const [mode, setMode] = useState<'encode' | 'decode'>('encode')
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [copied, setCopied] = useState(false)

  const handleEncode = () => {
    if (!input) {
      setOutput('')
      return
    }
    try {
      const encoded = encodeURIComponent(input)
      setOutput(encoded)
    } catch (err) {
      setOutput('Error encoding URL')
    }
  }

  const handleDecode = () => {
    if (!input) {
      setOutput('')
      return
    }
    try {
      const decoded = decodeURIComponent(input)
      setOutput(decoded)
    } catch (err) {
      setOutput('Error decoding URL')
    }
  }

  const handleProcess = () => {
    if (mode === 'encode') {
      handleEncode()
    } else {
      handleDecode()
    }
  }

  const handleCopy = async () => {
    if (!output) return
    try {
      await copyToClipboard(output)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const parseQueryString = (url: string) => {
    try {
      const urlObj = new URL(url)
      const params: Record<string, string> = {}
      urlObj.searchParams.forEach((value, key) => {
        params[key] = value
      })
      return params
    } catch {
      return null
    }
  }

  const queryParams = mode === 'decode' && output ? parseQueryString(output) : null

  return (
    <div className="space-y-6">
      {/* Mode Toggle */}
      <div className="flex gap-2 p-1 bg-gray-100 dark:bg-gray-900 rounded-lg w-fit">
        <button
          onClick={() => { setMode('encode'); setInput(''); setOutput('') }}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            mode === 'encode'
              ? 'bg-white dark:bg-gray-800 shadow'
              : 'hover:bg-gray-200 dark:hover:bg-gray-800'
          }`}
        >
          Encode
        </button>
        <button
          onClick={() => { setMode('decode'); setInput(''); setOutput('') }}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            mode === 'decode'
              ? 'bg-white dark:bg-gray-800 shadow'
              : 'hover:bg-gray-200 dark:hover:bg-gray-800'
          }`}
        >
          Decode
        </button>
      </div>

      {/* Input */}
      <div className="space-y-2">
        <label className="block text-sm font-medium dark:text-white">
          {mode === 'encode' ? 'Text/URL to Encode' : 'URL to Decode'}
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={
            mode === 'encode'
              ? 'Enter text or URL...'
              : 'Enter encoded URL...'
          }
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
        />
      </div>

      {/* Controls */}
      <div className="flex gap-4">
        <button
          onClick={handleProcess}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
        >
          {mode === 'encode' ? 'Encode' : 'Decode'}
        </button>
        <button
          onClick={() => { setInput(''); setOutput('') }}
          className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium"
        >
          Clear
        </button>
      </div>

      {/* Output */}
      {output && (
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="block text-sm font-medium dark:text-white">Output</label>
            <button
              onClick={handleCopy}
              className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 inline mr-2 text-green-500" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 inline mr-2" />
                  Copy
                </>
              )}
            </button>
          </div>
          <div className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 font-mono text-sm whitespace-pre-wrap break-all">
            {output}
          </div>
        </div>
      )}

      {/* Query Parameters */}
      {queryParams && Object.keys(queryParams).length > 0 && (
        <div className="space-y-2">
          <label className="block text-sm font-medium dark:text-white">Query Parameters</label>
          <div className="space-y-2">
            {Object.entries(queryParams).map(([key, value]) => (
              <div key={key} className="flex items-center gap-4 p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800">
                <span className="font-medium text-sm text-gray-600 dark:text-gray-400 w-32 flex-shrink-0">
                  {key}
                </span>
                <span className="font-mono text-sm break-all dark:text-white">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Examples */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
        <h3 className="font-semibold mb-4 dark:text-white">Examples</h3>
        <div className="space-y-3">
          <div className="text-sm">
            <div className="font-medium mb-1 dark:text-white">Original:</div>
            <code className="text-xs text-gray-600 dark:text-gray-400">
              https://example.com?name=John Doe&email=john@example.com
            </code>
          </div>
          <div className="text-sm">
            <div className="font-medium mb-1 dark:text-white">Encoded:</div>
            <code className="text-xs text-gray-600 dark:text-gray-400 break-all">
              https://example.com?name=John%20Doe&email=john%40example.com
            </code>
          </div>
        </div>
      </div>
    </div>
  )
}
