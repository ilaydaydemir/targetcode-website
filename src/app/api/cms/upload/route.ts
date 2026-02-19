import { NextRequest, NextResponse } from 'next/server'
import { put } from '@vercel/blob'
import { requireAdmin } from '@/lib/auth'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  const session = await requireAdmin()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const formData = await req.formData()

    // GrapeJS sends files as 'files[]'
    let files = formData.getAll('files[]') as File[]
    if (files.length === 0) {
      files = formData.getAll('files') as File[]
    }

    // Also check for any file input
    if (files.length === 0) {
      for (const [, value] of formData.entries()) {
        if (value instanceof File) {
          files.push(value)
        }
      }
    }

    if (files.length === 0) {
      return NextResponse.json({ error: 'No files', details: 'No files found in form data' }, { status: 400 })
    }

    const urls: string[] = []

    for (const file of files) {
      const ext = file.name.split('.').pop() || 'bin'
      const name = `assets/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`

      const blob = await put(name, file, {
        access: 'public',
        addRandomSuffix: false,
        allowOverwrite: true,
      })

      urls.push(blob.url)
    }

    // GrapeJS expects { data: ['url1', 'url2'] }
    return NextResponse.json({ data: urls })
  } catch (error) {
    console.error('Upload error:', error)
    const message = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json({ error: 'Upload failed', details: message }, { status: 500 })
  }
}
