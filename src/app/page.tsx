import { list } from '@vercel/blob'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { HowItWorks } from '@/components/HowItWorks'
import { SelfBuilding } from '@/components/SelfBuilding'
import { Pricing } from '@/components/Pricing'
import { EarlyAccess } from '@/components/EarlyAccess'
import { Footer } from '@/components/Footer'

export const revalidate = 60 // ISR: revalidate every 60s (also on-demand via publish)

async function getPublishedContent() {
  try {
    const { blobs: htmlBlobs } = await list({ prefix: 'pages/published.html' })
    if (htmlBlobs.length === 0) return null

    const htmlRes = await fetch(htmlBlobs[0].url, { next: { revalidate: 60 } })
    const html = await htmlRes.text()

    let css = ''
    const { blobs: cssBlobs } = await list({ prefix: 'pages/published.css' })
    if (cssBlobs.length > 0) {
      const cssRes = await fetch(cssBlobs[0].url, { next: { revalidate: 60 } })
      css = await cssRes.text()
    }

    return { html, css }
  } catch {
    return null
  }
}

export default async function Home() {
  const published = await getPublishedContent()

  // If published content exists in Blob, render it
  if (published) {
    return (
      <>
        {published.css && (
          <style dangerouslySetInnerHTML={{ __html: published.css }} />
        )}
        <div dangerouslySetInnerHTML={{ __html: published.html }} />
      </>
    )
  }

  // Fallback: render React components (default landing page)
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <SelfBuilding />
      <Pricing />
      <EarlyAccess />
      <Footer />
    </>
  )
}
