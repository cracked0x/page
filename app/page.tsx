import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 space-y-8">
      <div className="relative">
        <img
          src="https://raw.githubusercontent.com/cracked0x/.github/main/banner.gif"
          alt="cracked0x"
          className='rounded-sm'
          width={300}
          height={300}
        />
      </div>

      <Link href="https://example.com" target="_blank" rel="noopener noreferrer">
        <Button
          className='rounded-sm font-bold h-8'
        >Get Cracked</Button>
      </Link>

      <div className="flex space-x-4">
        <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          🐦
        </Link>
        <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
          🐙
        </Link>
      </div>
    </main>
  )
}

