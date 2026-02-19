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
    const files = formData.getAll('files[]') as File[]

    if (files.length === 0) {
      return NextResponse.json({ error: 'No files' }, { status: 400 })
    }

    const uploaded = []

    for (const file of files) {
      const ext = file.name.split('.').pop() || 'bin'
      const name = `assets/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`

      const blob = await put(name, file, {
        access: 'public',
        addRandomSuffix: false,
      })

      uploaded.push({
        src: blob.url,
        name: file.name,
        type: file.type,
        width: undefined,
        height: undefined,
      })
    }

    // GrapeJS expects { data: [...] } format
    return NextResponse.json({ data: uploaded })
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 })
  }
}
