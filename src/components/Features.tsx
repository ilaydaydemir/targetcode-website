'use client'

import { motion } from 'framer-motion'
import {
  MessageSquare,
  Users,
  Workflow,
  Send,
  Database,
  Component,
  Settings,
  Shield,
} from 'lucide-react'

const features = [
  {
    icon: MessageSquare,
    title: 'AI Sales Chat',
    description:
      'A Claude-powered assistant that knows your company, ICP, and sales playbook. It drafts emails, analyzes leads, and guides your outreach.',
  },
  {
    icon: Users,
    title: 'Smart CRM',
    description:
      'Manage contacts with CSV import, bulk operations, status tracking, and search. Every record is enriched and ready for action.',
  },
  {
    icon: Workflow,
    title: 'Automated Workflows',
    description:
      'Build multi-step automations: scrape data, filter leads, transform with AI, and save to your CRM. All running in the background.',
  },
  {
    icon: Send,
    title: 'Campaign Manager',
    description:
      'Launch email, LinkedIn, or multi-channel outreach campaigns. Track performance and iterate on what works.',
  },
  {
    icon: Database,
    title: 'Data Sources',
    description:
      'Connect Apify scrapers, REST APIs, webhooks, and CSV files. Your data pipeline, unified in one place.',
  },
  {
    icon: Component,
    title: 'AI Component Builder',
    description:
      'Describe a dashboard widget in plain English — the AI writes the React code, previews it live, and saves it to your component library.',
  },
  {
    icon: Settings,
    title: 'Deep Customization',
    description:
      'Configure your company profile, product details, ICP targeting, and sales context. The entire platform adapts to your settings.',
  },
  {
    icon: Shield,
    title: 'User-Isolated Security',
    description:
      'Row-level security on every table. Each user only sees their own data. Your information never leaks across accounts.',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function Features() {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-white uppercase tracking-widest mb-3"
          >
            EVERYTHING INCLUDED
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-black"
          >
            A Complete GTM Platform, Out of the Box
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-black/70 max-w-2xl mx-auto font-medium"
          >
            Every feature ships ready to use. Customize everything to match your sales process — no development needed.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-lg hover:shadow-xl hover:bg-white/95 transition-all duration-300 border border-white/50"
            >
              <div className="size-10 rounded-xl bg-black/5 flex items-center justify-center mb-4">
                <feature.icon className="size-5 text-black" />
              </div>
              <h3 className="text-base font-bold mb-2 text-black">{feature.title}</h3>
              <p className="text-sm text-black/60 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
