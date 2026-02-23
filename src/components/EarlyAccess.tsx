'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Loader2, CheckCircle2 } from 'lucide-react'

export function EarlyAccess() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim() || !name.trim()) return

    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          company: company.trim(),
        }),
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
    <section id="inquiry" className="relative py-24 overflow-hidden">
      <div className="relative mx-auto max-w-2xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-white/50 p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-black">
            Get Your Custom GTM System
          </h2>
          <p className="text-lg text-black/70 mb-8 max-w-xl mx-auto font-medium">
            Book a sales call to learn how TargetCode can build a self-evolving
            GTM engine tailored to your business.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 rounded-2xl bg-[#4CAF50]/10 border border-[#4CAF50]/30 px-8 py-4"
            >
              <CheckCircle2 className="size-5 text-[#4CAF50]" />
              <span className="text-black font-medium">
                We&apos;ll reach out to schedule your call!
              </span>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 max-w-md mx-auto"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  className="flex-1 w-full rounded-xl border border-black/20 bg-white px-5 py-3.5 text-sm text-black outline-none focus:border-[#2196F3] focus:ring-2 focus:ring-[#2196F3]/20 transition-all placeholder:text-black/40"
                />
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Company (optional)"
                  className="flex-1 w-full rounded-xl border border-black/20 bg-white px-5 py-3.5 text-sm text-black outline-none focus:border-[#2196F3] focus:ring-2 focus:ring-[#2196F3]/20 transition-all placeholder:text-black/40"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Work email"
                  required
                  className="flex-1 w-full rounded-xl border border-black/20 bg-white px-5 py-3.5 text-sm text-black outline-none focus:border-[#2196F3] focus:ring-2 focus:ring-[#2196F3]/20 transition-all placeholder:text-black/40"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto rounded-xl bg-black px-8 py-3.5 text-sm font-bold text-white hover:bg-black/80 transition-all flex items-center justify-center gap-2 disabled:opacity-60 shadow-lg"
                >
                  {loading ? (
                    <Loader2 className="size-4 animate-spin" />
                  ) : (
                    <>
                      Book a Sales Call
                      <ArrowRight className="size-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
          {error && (
            <p className="mt-3 text-sm text-[#F44336] font-medium">{error}</p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
