import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TargetCode — Self-Evolving GTM Engine',
  description: 'AI-powered Go-To-Market engine that builds itself around your sales process. Smart scraping, personalized outreach, and a platform that evolves with every interaction.',
  keywords: ['GTM', 'sales automation', 'AI', 'lead generation', 'scraper', 'outreach'],
  openGraph: {
    title: 'TargetCode — Self-Evolving GTM Engine',
    description: 'AI-powered Go-To-Market engine that builds itself around your sales process.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
