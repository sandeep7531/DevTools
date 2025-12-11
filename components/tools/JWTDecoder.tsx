'use client'

import { useState } from 'react'
import { jwtDecode } from 'jwt-decode'
import { AlertCircle, Info } from 'lucide-react'

export function JWTDecoder() {
  const [token, setToken] = useState('')
  const [decoded, setDecoded] = useState<{ header: any; payload: any } | null>(null)
  const [error, setError] = useState('')

  const handleDecode = (value: string) => {
    setToken(value)
    setError('')
    
    if (!value.trim()) {
      setDecoded(null)
      return
    }

    try {
      const parts = value.split('.')
      if (parts.length !== 3) {
        throw new Error('Invalid JWT format. JWT should have 3 parts separated by dots.')
      }

      // Decode header
      const header = JSON.parse(atob(parts[0]))
      
      // Decode payload using jwt-decode
      const payload = jwtDecode(value)

      setDecoded({ header, payload })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid JWT token')
      setDecoded(null)
    }
  }

  const formatJSON = (obj: any) => {
    return JSON.stringify(obj, null, 2)
  }

  const formatTimestamp = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleString()
  }

  return (
    <div className="space-y-6">
      {/* Token Input */}
      <div className="space-y-2">
        <label className="block text-sm font-medium dark:text-white">JWT Token</label>
        <textarea
          value={token}
          onChange={(e) => handleDecode(e.target.value)}
          placeholder="Paste your JWT token here..."
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
        />
      </div>

      {/* Error */}
      {error && (
        <div className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400">
          <AlertCircle className="w-5 h-5" />
          <span>{error}</span>
        </div>
      )}

      {/* Decoded Output */}
      {decoded && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Header */}
          <div className="space-y-2">
            <label className="block text-sm font-medium dark:text-white">Header</label>
            <div className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900">
              <pre className="text-sm overflow-x-auto">
                <code>{formatJSON(decoded.header)}</code>
              </pre>
            </div>
          </div>

          {/* Payload */}
          <div className="space-y-2">
            <label className="block text-sm font-medium dark:text-white">Payload</label>
            <div className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900">
              <pre className="text-sm overflow-x-auto">
                <code>{formatJSON(decoded.payload)}</code>
              </pre>
            </div>
          </div>
        </div>
      )}

      {/* Payload Details */}
      {decoded?.payload && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold dark:text-white">Payload Claims</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(decoded.payload as Record<string, any>).map(([key, value]) => (
              <div key={key} className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800">
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                  {key}
                </div>
                <div className="font-mono text-sm break-all dark:text-white">
                  {key === 'exp' || key === 'iat' || key === 'nbf'
                    ? `${value} (${formatTimestamp(value)})`
                    : typeof value === 'object'
                    ? JSON.stringify(value)
                    : String(value)}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Info */}
      <div className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
        <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-blue-800 dark:text-blue-400">
          <p className="font-semibold mb-2">Important Notes:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>This tool only decodes the JWT, it does not verify the signature</li>
            <li>All processing happens in your browser - your tokens are not sent anywhere</li>
            <li>Never paste production tokens on untrusted sites</li>
            <li>Common claims: iss (issuer), sub (subject), exp (expiration), iat (issued at)</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
