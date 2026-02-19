'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col items-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-clay-teal/30 bg-clay-teal/10 px-4 py-1.5 text-sm text-clay-teal mb-8"
        >
          <Sparkles className="size-4" />
          AI-Powered GTM Engine
        </motion.div>

        {/* Headline — Roboto Mono like old site */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-center font-[var(--font-roboto-mono)]"
        >
          <span className="block">Outbound is static.</span>
          <span className="block mt-2 text-clay-teal">Your GTM engine is dynamic.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto text-center leading-relaxed"
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
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="#early-access"
            className="group px-6 py-3 bg-clay-teal text-white font-medium rounded-md hover:opacity-90 transition-all flex items-center justify-center gap-2"
          >
            Get Early Access
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#how-it-works"
            className="px-6 py-3 bg-transparent text-white border border-white font-medium rounded-md hover:bg-white/10 transition-all text-center"
          >
            See How It Works
          </a>
        </motion.div>

        {/* Code terminal mockup — same as old site */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 w-full max-w-4xl"
        >
          <div className="relative">
            <div className="bg-gray-950 rounded-lg shadow-xl overflow-hidden border border-gray-700">
              {/* Terminal header */}
              <div className="flex items-center p-3 bg-gray-900 border-b border-gray-800">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <div className="ml-4 text-xs text-gray-400 font-[var(--font-roboto-mono)]">
                  app.targetcode.io/engine
                </div>
              </div>
              {/* Code content */}
              <div className="p-4 font-[var(--font-roboto-mono)] text-sm text-green-400 overflow-x-auto">
                <pre className="whitespace-pre-wrap">
                  <code>{`// Self-Evolving GTM Engine
const targetCode = {
  buyer: {
    company: "Acme Corp",
    signals: ["raised $5M Series A", "hiring VP Marketing", "launched new product"],
    persona: "Marketing Leader"
  },

  async buildWorkflow() {
    const leads = await this.scraper.findByICP(this.buyer);
    const enriched = await this.ai.enrich(leads);
    return this.deploy(enriched);  // Auto-generated pipeline
  },

  vibeComponent(prompt) {
    return this.ai.generateReact(prompt);  // Builds its own UI
  }
}`}</code>
                </pre>
              </div>
            </div>

            {/* Floating blur blobs — teal & orange like old site */}
            <div className="absolute -right-12 -top-12 w-24 h-24 bg-clay-teal/20 rounded-full blur-xl" />
            <div className="absolute -left-8 -bottom-8 w-16 h-16 bg-clay-orange/20 rounded-full blur-xl" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
