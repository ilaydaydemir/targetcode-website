import { NextRequest, NextResponse } from 'next/server'
import { put } from '@vercel/blob'
import { revalidatePath } from 'next/cache'
import { requireAdmin } from '@/lib/auth'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  const session = await requireAdmin()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { html, css, projectData } = await req.json()

    if (!html) {
      return NextResponse.json({ error: 'Missing html' }, { status: 400 })
    }

    // Save published HTML
    await put('pages/published.html', html, {
      access: 'public',
      addRandomSuffix: false,
      allowOverwrite: true,
    })

    // Save published CSS
    if (css) {
      await put('pages/published.css', css, {
        access: 'public',
        addRandomSuffix: false,
      allowOverwrite: true,
      })
    }

    // Also save project data so the editor can reload published state
    if (projectData) {
      await put('pages/draft-project.json', JSON.stringify(projectData), {
        access: 'public',
        addRandomSuffix: false,
      allowOverwrite: true,
      })
    }

    // Revalidate the home page so it picks up the new content
    revalidatePath('/')

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Publish error:', error)
    const message = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json({ error: 'Failed to publish', details: message }, { status: 500 })
  }
}
