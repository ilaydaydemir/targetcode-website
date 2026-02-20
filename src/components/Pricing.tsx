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
    cta: 'Book a Call',
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
    <section id="pricing" className="py-24 bg-black/85">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-[#2196F3] mb-3"
          >
            PRICING
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white text-shadow"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
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
              className={`rounded-2xl border p-8 flex flex-col ${
                plan.highlighted
                  ? 'border-[#4CAF50] bg-[#111118] shadow-[0_0_60px_rgba(76,175,80,0.15)] relative'
                  : 'border-[#2a2a3e] bg-[#111118]'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-medium bg-gradient-to-r from-[#4CAF50] to-[#2196F3] text-white rounded-full px-4 py-1">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-1 text-white">{plan.name}</h3>
                <p className="text-sm text-gray-300 mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period && <span className="text-gray-400">{plan.period}</span>}
                </div>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-gray-300">
                    <Check className="size-4 text-[#4CAF50] shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#inquiry"
                className={`block rounded-xl py-3 text-sm font-medium text-center transition-all ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-[#4CAF50] to-[#2196F3] text-white hover:shadow-[0_0_20px_rgba(76,175,80,0.3)]'
                    : 'border border-[#2a2a3e] text-gray-300 hover:border-[#FFEB3B] hover:text-[#FFEB3B]'
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
