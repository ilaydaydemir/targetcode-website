'use client'

import dynamic from 'next/dynamic'

const GrapesEditor = dynamic(() => import('./GrapesEditor'), { ssr: false })

export default function EditorLoader() {
  return <GrapesEditor />
}
