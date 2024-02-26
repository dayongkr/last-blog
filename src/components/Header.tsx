import Link from 'next/link'
import { FaGithub } from 'react-icons/fa6'
import { Button } from './ui/button'
import ThemeButton from './ThemeButton'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex w-full items-center justify-center border-b border-b-border bg-background">
      <div className="flex w-full max-w-5xl items-center justify-between px-4 py-2 md:px-8 md:py-3">
        <Link href="/" className="shrink-0 font-bold">
          Dayong Blog
        </Link>
        <div className="flex gap-1">
          <Button variant="ghost" asChild size="icon">
            <Link href="https://github.com/dayongkr" target="_blank">
              <FaGithub className="text-lg" />
            </Link>
          </Button>
          <ThemeButton />
        </div>
      </div>
    </header>
  )
}
