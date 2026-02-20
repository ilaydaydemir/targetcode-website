'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm px-4 py-1.5 text-sm font-semibold text-black mb-8 shadow-sm"
        >
          <Sparkles className="size-4 text-[#F44336]" />
          AI-Powered GTM Engine
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-6xl font-bold tracking-tight text-center font-[var(--font-roboto-mono)]"
        >
          <span className="block text-white text-shadow">Outbound is static.</span>
          <span className="block mt-2 text-black">Your GTM engine is dynamic.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-black/80 mt-6 max-w-3xl mx-auto text-center leading-relaxed font-medium"
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
            href="#inquiry"
            className="group px-8 py-4 bg-black text-white font-bold rounded-2xl hover:bg-black/80 transition-all flex items-center justify-center gap-2 text-lg shadow-xl"
          >
            Book a Sales Call
            <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-4 bg-white/80 backdrop-blur-sm text-black font-bold rounded-2xl hover:bg-white transition-all text-center text-lg shadow-lg"
          >
            See How It Works
          </a>
        </motion.div>

      </div>
    </section>
  )
}
