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
          ? 'bg-black/30 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold font-[var(--font-roboto-mono)] tracking-tight">
          <span className="text-white">TargetCode</span>
          <span className="text-[#4CAF50]">.io</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-[#FFEB3B] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#early-access"
            className="px-6 py-2.5 bg-gradient-to-r from-[#F44336] to-[#FFEB3B] text-[#0A0A0A] font-semibold rounded-xl hover:shadow-[0_0_20px_rgba(244,67,54,0.3)] transition-all text-sm"
          >
            Get Early Access
          </a>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="size-6 text-white" />
          ) : (
            <Menu className="size-6 text-white" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-black/30 backdrop-blur-md border-t border-[#2a2a3e]">
          <div className="pt-2 pb-3 space-y-1 px-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 pl-3 border-l-4 border-transparent text-base font-medium text-gray-400 hover:border-[#FFEB3B] hover:text-[#FFEB3B]"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 space-y-2">
              <a
                href="#early-access"
                className="block w-full px-6 py-3 bg-gradient-to-r from-[#F44336] to-[#FFEB3B] text-[#0A0A0A] font-semibold rounded-xl text-center hover:shadow-[0_0_20px_rgba(244,67,54,0.3)] transition-all"
                onClick={() => setMobileOpen(false)}
              >
                Get Early Access
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
