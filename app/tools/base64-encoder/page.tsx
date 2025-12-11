import { Metadata } from 'next'
import { Base64Tool } from '@/components/tools/Base64Tool'

export const metadata: Metadata = {
  title: 'Base64 Encoder & Decoder - Free Online Tool',
  description: 'Encode and decode Base64 strings instantly. Supports text and file encoding. Free, fast, and secure.',
  keywords: ['base64 encoder', 'base64 decoder', 'base64 converter', 'encode base64', 'decode base64'],
}

export default function Base64Page() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 dark:text-white">Base64 Encoder & Decoder</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Encode and decode Base64 strings instantly in your browser.
        </p>
      </div>
      <Base64Tool />
    </div>
  )
}
