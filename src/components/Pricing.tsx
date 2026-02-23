'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    period: '',
    description: 'For individuals exploring AI-driven sales',
    features: [
      'AI Sales Chat (limited)',
      'Up to 100 contacts',
      '3 workflows',
      'Basic scraper access',
      'Component builder (5 saves)',
    ],
    cta: 'Start Free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$49',
    period: '/month',
    description: 'For growing sales teams that need power',
    features: [
      'Unlimited AI Chat',
      'Unlimited contacts',
      'Unlimited workflows',
      'All scraper integrations',
      'Unlimited component builder',
      'Campaign manager',
      'Webhook & API sources',
      'Priority support',
    ],
    cta: 'Book a Discovery Call',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For organizations with advanced needs',
    features: [
      'Everything in Pro',
      'Custom integrations',
      'Dedicated infrastructure',
      'SSO & advanced security',
      'Custom AI training',
      'SLA & dedicated support',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-white uppercase tracking-widest mb-3"
          >
            PRICING
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-black"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-black/70 max-w-2xl mx-auto font-medium"
          >
            Start free, upgrade when you&apos;re ready. No hidden fees.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-2xl p-8 flex flex-col backdrop-blur-sm shadow-lg border ${
                plan.highlighted
                  ? 'bg-white/95 border-[#4CAF50] shadow-xl relative'
                  : 'bg-white/80 border-white/50'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold bg-gradient-to-r from-[#4CAF50] to-[#2196F3] text-white rounded-full px-4 py-1">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-1 text-black">{plan.name}</h3>
                <p className="text-sm text-black/60 mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-black">{plan.price}</span>
                  {plan.period && <span className="text-black/50">{plan.period}</span>}
                </div>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-black/70">
                    <Check className="size-4 text-[#4CAF50] shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#inquiry"
                className={`block rounded-xl py-3 text-sm font-bold text-center transition-all ${
                  plan.highlighted
                    ? 'bg-black text-white hover:bg-black/80'
                    : 'border border-black/20 text-black hover:bg-black/5'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
