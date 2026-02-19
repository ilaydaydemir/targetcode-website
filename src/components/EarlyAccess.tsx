'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Loader2, CheckCircle2 } from 'lucide-react'

export function EarlyAccess() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setLoading(true)
    // Simulate submission — replace with actual API call later
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <section id="early-access" className="py-24 bg-section-alt">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ready to Transform Your Sales Pipeline?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Join the waitlist for early access. Be the first to experience a GTM
            engine that evolves with your business.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 rounded-2xl border border-green-200 bg-green-50 px-8 py-4"
            >
              <CheckCircle2 className="size-5 text-green-600" />
              <span className="text-green-800 font-medium">
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
                className="flex-1 w-full rounded-xl border border-border bg-card px-5 py-3.5 text-sm outline-none focus:border-clay-teal focus:ring-2 focus:ring-clay-teal/20 transition-all"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto rounded-xl bg-clay-teal px-8 py-3.5 text-sm font-medium text-white hover:bg-clay-teal/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
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
        </motion.div>
      </div>
    </section>
  )
}
