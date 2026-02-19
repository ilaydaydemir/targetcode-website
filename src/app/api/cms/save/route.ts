import { NextRequest, NextResponse } from 'next/server'
import { put } from '@vercel/blob'
import { requireAdmin } from '@/lib/auth'

export const dynamic = 'force-dynamic'

export async function PUT(req: NextRequest) {
  const session = await requireAdmin()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { projectData } = await req.json()

    if (!projectData) {
      return NextResponse.json({ error: 'Missing projectData' }, { status: 400 })
    }

    // Save GrapeJS project data as JSON to Blob
    await put('pages/draft-project.json', JSON.stringify(projectData), {
      access: 'public',
      addRandomSuffix: false,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Save error:', error)
    return NextResponse.json({ error: 'Failed to save' }, { status: 500 })
  }
}
