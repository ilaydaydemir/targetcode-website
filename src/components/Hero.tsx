'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-bg opacity-20" />
      <div className="absolute inset-0 bg-[#0A0A0A]/80" />

      {/* Floating color blobs */}
      <div className="absolute -right-20 -top-20 w-60 h-60 bg-[#2196F3]/15 rounded-full blur-3xl animate-float" />
      <div className="absolute -left-16 top-1/3 w-40 h-40 bg-[#F44336]/15 rounded-full blur-3xl animate-float-delay" />
      <div className="absolute right-1/4 bottom-10 w-32 h-32 bg-[#4CAF50]/15 rounded-full blur-3xl animate-float-delay-2" />
      <div className="absolute left-1/3 -top-10 w-24 h-24 bg-[#FFEB3B]/10 rounded-full blur-2xl animate-float" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-[#4CAF50]/30 bg-[#4CAF50]/10 px-4 py-1.5 text-sm text-[#4CAF50] mb-8"
        >
          <Sparkles className="size-4" />
          AI-Powered GTM Engine
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-center font-[var(--font-roboto-mono)]"
        >
          <span className="block text-white">Outbound is static.</span>
          <span className="block mt-2 gradient-text">Your GTM engine is dynamic.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-400 mt-6 max-w-3xl mx-auto text-center leading-relaxed"
        >
          TargetCode ships with a fully customizable sales app out of the box.
          Tell it what you need — it writes the code, builds the scrapers, and
          evolves with every interaction.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="#early-access"
            className="group px-6 py-3 bg-gradient-to-r from-[#F44336] to-[#FFEB3B] text-[#0A0A0A] font-semibold rounded-xl hover:shadow-[0_0_20px_rgba(244,67,54,0.4)] transition-all flex items-center justify-center gap-2"
          >
            Get Early Access
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#how-it-works"
            className="px-6 py-3 bg-transparent text-white border border-[#2a2a3e] font-medium rounded-xl hover:border-[#2196F3] hover:shadow-[0_0_15px_rgba(33,150,243,0.2)] transition-all text-center"
          >
            See How It Works
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 w-full max-w-4xl"
        >
          <div className="relative">
            <div className="bg-[#0d0d14] rounded-lg shadow-xl overflow-hidden border border-[#2a2a3e]">
              <div className="flex items-center p-3 bg-[#111118] border-b border-[#2a2a3e]">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-[#F44336] rounded-full" />
                  <div className="w-3 h-3 bg-[#FFEB3B] rounded-full" />
                  <div className="w-3 h-3 bg-[#4CAF50] rounded-full" />
                </div>
                <div className="ml-4 text-xs text-gray-500 font-[var(--font-roboto-mono)]">
                  app.targetcode.io/engine
                </div>
              </div>
              <div className="p-4 font-[var(--font-roboto-mono)] text-sm text-[#4CAF50] overflow-x-auto">
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

            <div className="absolute -right-12 -top-12 w-24 h-24 bg-[#2196F3]/20 rounded-full blur-xl" />
            <div className="absolute -left-8 -bottom-8 w-16 h-16 bg-[#F44336]/20 rounded-full blur-xl" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
