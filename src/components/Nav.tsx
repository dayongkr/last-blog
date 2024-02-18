'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()
  return (
    <nav className="flex w-full items-center gap-6">
      <Link
        href="/"
        className={cn(
          'text-sm capitalize text-gray-400 hover:text-gray-600',
          !pathname.startsWith('/about') && 'text-gray-900 dark:text-gray-100'
        )}
      >
        blog
      </Link>
      <Link
        href="/about"
        className={cn(
          'text-sm capitalize text-gray-400 hover:text-gray-600',
          pathname.startsWith('/about') && 'text-gray-900 dark:text-gray-100'
        )}
      >
        about
      </Link>
    </nav>
  )
}
