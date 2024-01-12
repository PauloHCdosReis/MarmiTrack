import Sidebar from '@/components/sidebar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Peça sua marmita',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-4 bg-gray-300 dark:bg-gray-900">
        {children}
      </main>
    </div>
  )
}
