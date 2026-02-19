import { getIronSession } from 'iron-session'
import { cookies } from 'next/headers'

interface SessionData {
  isAdmin?: boolean
}

const sessionOptions = {
  password: process.env.CMS_SECRET || 'fallback-secret-that-is-at-least-32-chars-long!!',
  cookieName: 'tc-cms-session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'lax' as const,
    maxAge: 60 * 60 * 24 * 7, // 1 week
  },
}

export async function getSession() {
  return getIronSession<SessionData>(await cookies(), sessionOptions)
}

export async function requireAdmin() {
  const session = await getSession()
  if (!session.isAdmin) return null
  return session
}
