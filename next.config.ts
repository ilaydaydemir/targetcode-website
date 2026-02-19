import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/edit',
        destination: '/admin/editor',
        permanent: false,
      },
      {
        source: '/login',
        destination: '/admin/login',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
