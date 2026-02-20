'use client'

import { motion } from 'framer-motion'
import { UserPlus, Sliders, Rocket, TrendingUp } from 'lucide-react'

const steps = [
  {
    icon: UserPlus,
    step: '01',
    title: 'Sign Up & Onboard',
    description:
      'Create your account in seconds. The platform sets up your personalized workspace with all features ready to go.',
  },
  {
    icon: Sliders,
    step: '02',
    title: 'Configure Your Profile',
    description:
      'Enter your company details, product info, ideal customer profile, and sales preferences. The AI adapts to everything you tell it.',
  },
  {
    icon: Rocket,
    step: '03',
    title: 'Launch & Automate',
    description:
      'Build workflows, connect data sources, and start campaigns. The AI scrapes, enriches, and manages your pipeline automatically.',
  },
  {
    icon: TrendingUp,
    step: '04',
    title: 'Evolve & Scale',
    description:
      'As you use the platform, it learns. Build custom components, refine your workflows, and let the engine grow with your business.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-white uppercase tracking-widest mb-3"
          >
            HOW IT WORKS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-black"
          >
            From Zero to Revenue in Four Steps
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-black/70 max-w-2xl mx-auto font-medium"
          >
            No complex setup. No coding required. Just configure and go.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50"
            >
              <div className="size-14 rounded-2xl bg-black/5 flex items-center justify-center mb-5">
                <step.icon className="size-7 text-black" />
              </div>
              <span className="text-xs font-bold tracking-widest text-black/40">
                STEP {step.step}
              </span>
              <h3 className="text-lg font-bold mt-1 mb-2 text-black">{step.title}</h3>
              <p className="text-sm text-black/60 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
