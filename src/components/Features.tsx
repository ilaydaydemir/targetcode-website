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
    color: '#2196F3',
    description:
      'A Claude-powered assistant that knows your company, ICP, and sales playbook. It drafts emails, analyzes leads, and guides your outreach — personalized to your business.',
  },
  {
    icon: Users,
    title: 'Smart CRM',
    color: '#4CAF50',
    description:
      'Manage contacts with CSV import, bulk operations, status tracking, and search. Every record is enriched and ready for action.',
  },
  {
    icon: Workflow,
    title: 'Automated Workflows',
    color: '#FFEB3B',
    description:
      'Build multi-step automations: scrape data, filter leads, transform with AI, and save to your CRM. All running in the background.',
  },
  {
    icon: Send,
    title: 'Campaign Manager',
    color: '#F44336',
    description:
      'Launch email, LinkedIn, or multi-channel outreach campaigns. Track performance and iterate on what works.',
  },
  {
    icon: Database,
    title: 'Data Sources',
    color: '#4CAF50',
    description:
      'Connect Apify scrapers, REST APIs, webhooks, and CSV files. Your data pipeline, unified in one place.',
  },
  {
    icon: Component,
    title: 'AI Component Builder',
    color: '#2196F3',
    description:
      'Describe a dashboard widget in plain English — the AI writes the React code, previews it live, and saves it to your component library.',
  },
  {
    icon: Settings,
    title: 'Deep Customization',
    color: '#FFEB3B',
    description:
      'Configure your company profile, product details, ICP targeting, and sales context. The entire platform adapts to your settings.',
  },
  {
    icon: Shield,
    title: 'User-Isolated Security',
    color: '#F44336',
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
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-[#2196F3]/5 rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-24 h-24 bg-[#F44336]/5 rounded-full blur-2xl" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-[#FFEB3B] mb-3"
          >
            EVERYTHING INCLUDED
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white"
          >
            A Complete GTM Platform, Out of the Box
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Every feature ships ready to use. Customize everything to match your sales process — no development needed.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group rounded-2xl border border-[#2a2a3e] bg-[#111118] p-6 hover:border-opacity-50 transition-all duration-300"
              style={{ ['--hover-color' as string]: feature.color }}
            >
              <div
                className="size-10 rounded-xl flex items-center justify-center mb-4 transition-colors"
                style={{ background: `${feature.color}15` }}
              >
                <feature.icon className="size-5" style={{ color: feature.color }} />
              </div>
              <h3 className="text-base font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
