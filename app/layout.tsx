// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { JsonLd } from '@/components/JsonLd'
import { siteConfig } from '@/lib/content'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} - Soluções em Higiene para Serviços de Saúde`,
    template: `%s | ${siteConfig.name}`,
  },
  description: 'Consultoria especializada em limpeza e higienização hospitalar. Diagnóstico, documentação técnica e certificações de qualidade.',
  keywords: ['consultoria limpeza hospitalar', 'higienização serviços de saúde', 'consultoria higiene hospitalar', 'limpeza e conservação hospitalar'],
  authors: [{ name: siteConfig.name }],
  icons: {
    icon: '/images/logo.ico',
    shortcut: '/images/logo.ico',
    apple: '/images/logo.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} - Soluções em Higiene para Serviços de Saúde`,
    description: 'Consultoria especializada em limpeza e higienização hospitalar.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
        <JsonLd />
      </body>
    </html>
  )
}
