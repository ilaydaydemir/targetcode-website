import { redirect } from 'next/navigation'
import { requireAdmin } from '@/lib/auth'
import DashboardClient from './DashboardClient'

export default async function DashboardPage() {
  const session = await requireAdmin()
  if (!session) {
    redirect('/admin/login')
  }

  return <DashboardClient />
}
