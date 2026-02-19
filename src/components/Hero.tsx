'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-50" />

      {/* Gradient orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-float-delay" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center pt-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary mb-8"
        >
          <Sparkles className="size-4" />
          AI-Powered GTM Engine
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6"
        >
          Your GTM Engine That{' '}
          <span className="gradient-text">Builds Itself</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          TargetCode ships with a fully customizable sales app out of the box.
          Tell it what you need — it writes the code, builds the scrapers, and
          evolves with every interaction.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#early-access"
            className="group rounded-xl bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground hover:bg-primary/90 transition-all flex items-center gap-2 glow"
          >
            Get Early Access
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#how-it-works"
            className="rounded-xl border border-border px-8 py-3.5 text-base font-medium text-foreground hover:bg-muted transition-colors"
          >
            See How It Works
          </a>
        </motion.div>

        {/* App preview mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 relative"
        >
          <div className="rounded-2xl border border-border bg-card shadow-2xl overflow-hidden glow">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-muted border-b border-border">
              <div className="flex gap-1.5">
                <div className="size-3 rounded-full bg-red-400" />
                <div className="size-3 rounded-full bg-yellow-400" />
                <div className="size-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="rounded-md bg-white border border-border px-4 py-1 text-xs text-muted-foreground">
                  app.targetcode.io
                </div>
              </div>
            </div>
            {/* Dashboard mockup */}
            <div className="p-6 bg-section-alt min-h-[340px]">
              <div className="flex gap-4">
                {/* Sidebar */}
                <div className="hidden md:block w-48 space-y-2">
                  {['Dashboard', 'AI Chat', 'Contacts', 'Workflows', 'Campaigns', 'My Components'].map((item, i) => (
                    <div
                      key={item}
                      className={`rounded-lg px-3 py-2 text-sm ${
                        i === 0
                          ? 'bg-primary text-primary-foreground font-medium'
                          : 'text-muted-foreground hover:bg-muted'
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { label: 'Total Contacts', value: '2,847' },
                      { label: 'Active Workflows', value: '12' },
                      { label: 'Conversations', value: '156' },
                      { label: 'Components', value: '8' },
                    ].map((stat) => (
                      <div key={stat.label} className="rounded-xl bg-card border border-border p-4">
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                        <p className="text-2xl font-bold mt-1">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-xl bg-card border border-border p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="size-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-sm font-medium">AI Assistant</span>
                    </div>
                    <div className="space-y-2">
                      <div className="rounded-lg bg-muted px-3 py-2 text-sm text-muted-foreground max-w-md">
                        I found 47 new leads matching your ICP in the SaaS industry. Want me to enrich them and start the outreach sequence?
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
