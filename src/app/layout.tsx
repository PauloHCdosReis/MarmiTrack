import type { Metadata } from 'next'

import './globals.css'
import { Providers } from './providers'
import { SessionProvider } from 'next-auth/react'

export const metadata: Metadata = {
  title: 'MarmiTrack',
  description: 'Peça sua marmita',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ptBr" className="dark">
      <body className={`bg-gray-200 dark:bg-slate-900`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
