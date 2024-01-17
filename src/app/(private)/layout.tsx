import Navbar from '@/components/navbar'
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
    <div>
      {/* Cabeçalho (Menu) para telas menores */}
      <div className="md:hidden">
        <Navbar />
      </div>

      {/* Conteúdo (children) abaixo do cabeçalho em telas menores */}
      <div className="mt-1 p-2 md:hidden bg-gray-300 dark:bg-gray-900">
        {children}
      </div>

      {/* Layout completo para telas maiores */}
      <div className="hidden md:flex ">
        {/* Sidebar */}
        <Sidebar />

        {/* Conteúdo principal */}
        <main className="bg-gray-300 dark:bg-gray-900 p-4 max-h-screen w-screen overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
