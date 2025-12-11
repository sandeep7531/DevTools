import { Metadata } from 'next'
import { URLTool } from '@/components/tools/URLTool'

export const metadata: Metadata = {
  title: 'URL Encoder & Decoder - Free Online Tool',
  description: 'Encode and decode URLs with support for query parameters. Free URL encoder tool.',
  keywords: ['url encoder', 'url decoder', 'urlencode', 'urldecode', 'percent encoding'],
}

export default function URLEncoderPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 dark:text-white">URL Encoder & Decoder</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Encode and decode URLs with support for query parameters.
        </p>
      </div>
      <URLTool />
    </div>
  )
}
