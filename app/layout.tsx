import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Covid19 no Brasil',
  description:
    'Aplicação para visualizar dados da COVID-19 no Brasil, utilizando a API pública COVID-19 Brazil API.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-BR'>
      <body className={cn('flex min-h-screen flex-col antialiased', geistSans.variable)}>
        <Header />
        <Sidebar />
        {children}
      </body>
    </html>
  )
}
