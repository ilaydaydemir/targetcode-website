import type { Metadata } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const robotoMono = Roboto_Mono({ subsets: ['latin'], variable: '--font-roboto-mono' })

export const metadata: Metadata = {
  title: 'TargetCode.io — Self-Evolving GTM Engine',
  description: 'AI-powered Go-To-Market engine that builds itself around your sales process. Smart scraping, personalized outreach, and a platform that evolves with every interaction.',
  keywords: ['GTM', 'sales automation', 'AI', 'lead generation', 'scraper', 'outreach'],
  openGraph: {
    title: 'TargetCode.io — Self-Evolving GTM Engine',
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
      <body className={`${inter.variable} ${robotoMono.variable} ${inter.className}`}>
        {children}
      </body>
    </html>
  )
}
