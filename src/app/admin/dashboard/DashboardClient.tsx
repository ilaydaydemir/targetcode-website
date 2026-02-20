'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function DashboardClient() {
  const router = useRouter()
  const [loggingOut, setLoggingOut] = useState(false)

  const handleLogout = async () => {
    setLoggingOut(true)
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: '#f9fafb' }}>
      {/* Top bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 24px',
        background: '#ffffff',
        borderBottom: '1px solid #e5e7eb',
        flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <h1 style={{ fontSize: '18px', fontWeight: 700, color: '#111' }}>
            TargetCode<span style={{ color: '#4CAF50' }}>.io</span>
            <span style={{ fontSize: '13px', fontWeight: 400, color: '#6b7280', marginLeft: '8px' }}>Admin</span>
          </h1>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '8px 16px',
              fontSize: '13px',
              fontWeight: 500,
              color: '#374151',
              background: '#f3f4f6',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            Open Live Site
          </a>
          <button
            onClick={() => router.push('/admin/editor')}
            style={{
              padding: '8px 20px',
              fontSize: '13px',
              fontWeight: 600,
              color: '#fff',
              background: '#111',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            Edit Page
          </button>
          <button
            onClick={handleLogout}
            disabled={loggingOut}
            style={{
              padding: '8px 16px',
              fontSize: '13px',
              fontWeight: 500,
              color: '#ef4444',
              background: 'transparent',
              border: '1px solid #fecaca',
              borderRadius: '8px',
              cursor: 'pointer',
              opacity: loggingOut ? 0.5 : 1,
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Site preview */}
      <div style={{ flex: 1, padding: '24px', overflow: 'hidden' }}>
        <div style={{
          width: '100%',
          height: '100%',
          borderRadius: '12px',
          border: '1px solid #e5e7eb',
          overflow: 'hidden',
          background: '#fff',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        }}>
          <iframe
            src="/"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
            }}
            title="Live Site Preview"
          />
        </div>
      </div>
    </div>
  )
}
