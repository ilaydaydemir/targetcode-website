'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Loader2, CheckCircle2 } from 'lucide-react'

export function EarlyAccess() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      })

      if (!res.ok) throw new Error('Failed to submit')
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="early-access" className="relative py-24 overflow-hidden bg-black/70">

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
            Ready to Transform Your Sales Pipeline?
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto">
            Join the waitlist for early access. Be the first to experience a GTM
            engine that evolves with your business.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 rounded-2xl border border-[#4CAF50]/30 bg-[#4CAF50]/10 px-8 py-4"
            >
              <CheckCircle2 className="size-5 text-[#4CAF50]" />
              <span className="text-[#4CAF50] font-medium">
                You&apos;re on the list! We&apos;ll be in touch soon.
              </span>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 w-full rounded-xl border border-[#2a2a3e] bg-[#111118] px-5 py-3.5 text-sm text-white outline-none focus:border-[#2196F3] focus:ring-2 focus:ring-[#2196F3]/20 transition-all placeholder:text-gray-500"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-[#F44336] to-[#FFEB3B] px-8 py-3.5 text-sm font-semibold text-[#0A0A0A] hover:shadow-[0_0_20px_rgba(244,67,54,0.3)] transition-all flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {loading ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : (
                  <>
                    Join Waitlist
                    <ArrowRight className="size-4" />
                  </>
                )}
              </button>
            </form>
          )}
          {error && (
            <p className="mt-3 text-sm text-[#F44336]">{error}</p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
