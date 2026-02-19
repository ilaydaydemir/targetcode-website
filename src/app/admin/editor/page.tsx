import { redirect } from 'next/navigation'
import { requireAdmin } from '@/lib/auth'
import EditorLoader from './EditorLoader'

export default async function EditorPage() {
  const session = await requireAdmin()
  if (!session) {
    redirect('/admin/login')
  }

  return <EditorLoader />
}
