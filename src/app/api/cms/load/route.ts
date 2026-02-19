import { NextRequest, NextResponse } from 'next/server'
import { list, head } from '@vercel/blob'
import { requireAdmin } from '@/lib/auth'

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  const session = await requireAdmin()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const type = req.nextUrl.searchParams.get('type') || 'draft'

  try {
    if (type === 'draft') {
      // Load GrapeJS project data (JSON)
      const { blobs } = await list({ prefix: 'pages/draft-project.json' })
      if (blobs.length === 0) {
        return NextResponse.json({ exists: false })
      }
      const blob = blobs[0]
      const res = await fetch(blob.url)
      const projectData = await res.json()
      return NextResponse.json({ exists: true, projectData })
    }

    if (type === 'published') {
      const { blobs: htmlBlobs } = await list({ prefix: 'pages/published.html' })
      const { blobs: cssBlobs } = await list({ prefix: 'pages/published.css' })

      if (htmlBlobs.length === 0) {
        return NextResponse.json({ exists: false })
      }

      const htmlRes = await fetch(htmlBlobs[0].url)
      const html = await htmlRes.text()

      let css = ''
      if (cssBlobs.length > 0) {
        const cssRes = await fetch(cssBlobs[0].url)
        css = await cssRes.text()
      }

      return NextResponse.json({ exists: true, html, css })
    }

    return NextResponse.json({ error: 'Invalid type' }, { status: 400 })
  } catch (error) {
    console.error('Load error:', error)
    return NextResponse.json({ error: 'Failed to load' }, { status: 500 })
  }
}
