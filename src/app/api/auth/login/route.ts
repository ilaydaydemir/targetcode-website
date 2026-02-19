import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json()

    if (!process.env.CMS_PASSWORD) {
      return NextResponse.json({ error: 'CMS not configured' }, { status: 500 })
    }

    if (password !== process.env.CMS_PASSWORD) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
    }

    const session = await getSession()
    session.isAdmin = true
    await session.save()

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Login failed' }, { status: 500 })
  }
}
