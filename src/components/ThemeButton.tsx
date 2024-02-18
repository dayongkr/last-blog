'use client'
import { useTheme } from 'next-themes'
import { Button } from './ui/button'
import { MdNightlight, MdSunny } from 'react-icons/md'

export default function ThemeButton() {
  const { setTheme, resolvedTheme, theme } = useTheme()
  return (
    <Button
      variant="ghost"
      className="text-lg"
      size="icon"
      onClick={() => {
        if (theme === 'dark' || resolvedTheme === 'dark') setTheme('light')
        else setTheme('dark')
      }}
    >
      <MdSunny className="absolute scale-100 dark:scale-0" />
      <MdNightlight className="absolute scale-0 dark:scale-100" />
    </Button>
  )
}
