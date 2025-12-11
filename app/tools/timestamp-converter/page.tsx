import { Metadata } from 'next'
import { TimestampConverter } from '@/components/tools/TimestampConverter'

export const metadata: Metadata = {
  title: 'Unix Timestamp Converter - Convert Timestamps Online',
  description: 'Convert between Unix timestamps and human-readable dates. Free timestamp converter tool.',
  keywords: ['timestamp converter', 'unix timestamp', 'epoch converter', 'date to timestamp', 'timestamp to date'],
}

export default function TimestampPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 dark:text-white">Unix Timestamp Converter</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Convert between Unix timestamps and human-readable dates.
        </p>
      </div>
      <TimestampConverter />
    </div>
  )
}
