import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { AllProviders } from "@/providers/all-providers"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Covid19 no Brasil",
  description:
    "Aplicação para visualizar dados da COVID-19 no Brasil, utilizando a API pública COVID-19 Brazil API."
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={geistSans.variable}>
        <AllProviders>
          <Header />
          <div className="flex flex-1 grid-cols-[256px_1fr] flex-col overflow-hidden md:grid">
            <Sidebar />
            <main className="animate-fade-in flex w-full flex-1 flex-col overflow-y-auto p-6 md:col-start-2">
              {children}
            </main>
          </div>
        </AllProviders>
      </body>
    </html>
  )
}
