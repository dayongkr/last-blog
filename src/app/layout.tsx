import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Providers from '@/components/Providers'

const noto = Noto_Sans_KR({
  weight: ['400', '700'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Dayong Blog',
  description:
    'This blog is for sharing my thoughts and experiences as a software engineer.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="kr" suppressHydrationWarning>
      <body className={noto.className}>
        <Providers>
          <div className="flex min-h-dvh w-full flex-col items-center bg-background">
            <Header />
            <main className="flex w-full max-w-screen-lg flex-col items-center justify-start gap-8 px-4 py-8 md:gap-16 md:px-8 md:py-16">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
