import { NextResponse } from 'next/server'
import { list, del } from '@vercel/blob'
import { revalidatePath } from 'next/cache'
import { requireAdmin } from '@/lib/auth'

export const dynamic = 'force-dynamic'

export async function POST() {
  const session = await requireAdmin()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    // Delete all published blobs
    const { blobs } = await list({ prefix: 'pages/published' })
    for (const blob of blobs) {
      await del(blob.url)
    }

    // Also delete draft
    const { blobs: draftBlobs } = await list({ prefix: 'pages/draft' })
    for (const blob of draftBlobs) {
      await del(blob.url)
    }

    revalidatePath('/')
    return NextResponse.json({ ok: true, deleted: blobs.length + draftBlobs.length })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json({ error: 'Reset failed', details: message }, { status: 500 })
  }
}
