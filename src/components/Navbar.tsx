'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Self-Building', href: '#self-building' },
  { label: 'Pricing', href: '#pricing' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-lg border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight">
          <span className={scrolled ? 'text-clay-teal' : 'text-clay-teal'}>Target</span>
          <span className={scrolled ? 'text-gray-900' : 'text-white'}>Code</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                scrolled
                  ? 'text-muted-foreground hover:text-foreground'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#early-access"
            className="rounded-lg bg-clay-teal px-5 py-2.5 text-sm font-medium text-white hover:bg-clay-teal/90 transition-colors"
          >
            Get Early Access
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className={`size-5 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
          ) : (
            <Menu className={`size-5 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#early-access"
            className="block rounded-lg bg-clay-teal px-5 py-2.5 text-sm font-medium text-center text-white"
            onClick={() => setMobileOpen(false)}
          >
            Get Early Access
          </a>
        </div>
      )}
    </nav>
  )
}
