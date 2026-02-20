'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
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
          ? 'bg-white/90 backdrop-blur-md shadow-lg'
          : 'bg-white/70 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <Image src="/logo-icon.svg" alt="TargetCode" width={36} height={36} />
          <span className="text-xl font-bold font-[var(--font-roboto-mono)] tracking-tight text-black">
            targetcode<span className="text-[#4CAF50]">.io</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-black/70 hover:text-black transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#inquiry"
            className="px-6 py-2.5 bg-black text-white font-semibold rounded-xl hover:bg-black/80 transition-all text-sm"
          >
            Book a Call
          </a>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="size-6 text-black" />
          ) : (
            <Menu className="size-6 text-black" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-black/10">
          <div className="pt-2 pb-3 space-y-1 px-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 pl-3 border-l-4 border-transparent text-base font-semibold text-black/70 hover:border-black hover:text-black"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 space-y-2">
              <a
                href="#inquiry"
                className="block w-full px-6 py-3 bg-black text-white font-semibold rounded-xl text-center hover:bg-black/80 transition-all"
                onClick={() => setMobileOpen(false)}
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
