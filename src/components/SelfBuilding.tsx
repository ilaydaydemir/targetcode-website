'use client'

import { motion } from 'framer-motion'
import { Bot, Code2, Eye, Save, Wrench, Zap } from 'lucide-react'

export function SelfBuilding() {
  return (
    <section id="self-building" className="py-24 bg-section-alt">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-primary mb-3"
          >
            THE MAGIC
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
            An App That Writes Its Own Code
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            TargetCode doesn&apos;t just run automations — it builds new features on demand.
            Describe what you need, and the platform generates working React
            components and custom scrapers in real time.
          </motion.p>
        </div>

        {/* Two columns */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* AI Component Builder (Vibe) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="px-6 py-4 border-b border-border bg-muted/50">
                <div className="flex items-center gap-2">
                  <Code2 className="size-5 text-primary" />
                  <h3 className="font-semibold">AI Component Builder</h3>
                  <span className="ml-auto text-xs bg-primary/10 text-primary rounded-full px-2.5 py-0.5 font-medium">
                    Vibe
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                {/* Chat simulation */}
                <div className="space-y-3">
                  <div className="ml-8 rounded-lg bg-primary/10 px-4 py-2.5 text-sm">
                    Build me a pipeline dashboard widget that shows conversion
                    rates by stage with a bar chart
                  </div>
                  <div className="mr-8 rounded-lg bg-muted px-4 py-2.5 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2 mb-1">
                      <Bot className="size-3.5" />
                      <span className="text-xs font-medium">AI</span>
                    </div>
                    I&apos;ve generated a PipelineDashboard component with
                    interactive bar charts, stage labels, and conversion
                    percentages. Here&apos;s the live preview →
                  </div>
                </div>
                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-muted rounded-lg px-3 py-1.5">
                    <Eye className="size-3" />
                    Live Preview
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-primary bg-primary/10 rounded-lg px-3 py-1.5 font-medium">
                    <Save className="size-3" />
                    Save to Library
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <Component className="size-4 text-primary" />
                How Vibe Works
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">1.</span>
                  Describe any widget, page, or workflow step in plain English
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">2.</span>
                  AI generates production-ready React/TSX code instantly
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">3.</span>
                  Preview it live in a sandboxed environment
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">4.</span>
                  Save to your component library with versioning
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Self-Building Scrapers */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="px-6 py-4 border-b border-border bg-muted/50">
                <div className="flex items-center gap-2">
                  <Wrench className="size-5 text-primary" />
                  <h3 className="font-semibold">Self-Building Scrapers</h3>
                  <span className="ml-auto text-xs bg-green-500/10 text-green-600 rounded-full px-2.5 py-0.5 font-medium">
                    Automated
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                {/* Workflow steps visualization */}
                <div className="space-y-3">
                  {[
                    {
                      step: 'Apify Scraper',
                      desc: 'Scrape LinkedIn Sales Navigator',
                      status: 'completed',
                    },
                    {
                      step: 'AI Transform',
                      desc: 'Enrich & normalize contact data',
                      status: 'completed',
                    },
                    {
                      step: 'Filter',
                      desc: 'Match ICP criteria (SaaS, 50-200 employees)',
                      status: 'running',
                    },
                    {
                      step: 'Save Contacts',
                      desc: 'Import qualified leads to CRM',
                      status: 'pending',
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 rounded-lg border border-border px-4 py-3"
                    >
                      <div
                        className={`size-2 rounded-full ${
                          item.status === 'completed'
                            ? 'bg-green-500'
                            : item.status === 'running'
                            ? 'bg-yellow-500 animate-pulse'
                            : 'bg-gray-300'
                        }`}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium">{item.step}</p>
                        <p className="text-xs text-muted-foreground truncate">
                          {item.desc}
                        </p>
                      </div>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          item.status === 'completed'
                            ? 'bg-green-500/10 text-green-600'
                            : item.status === 'running'
                            ? 'bg-yellow-500/10 text-yellow-600'
                            : 'bg-gray-100 text-gray-500'
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <Zap className="size-4 text-primary" />
                What We Built for You
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">&bull;</span>
                  Multi-step workflow engine with drag-and-drop builder
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">&bull;</span>
                  Apify integration for any web scraping actor
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">&bull;</span>
                  AI-powered data transformation and enrichment
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">&bull;</span>
                  Background job processing with progress tracking
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">&bull;</span>
                  Auto-mapping of scraped data to your contact fields
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Component({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
      <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
      <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
      <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
    </svg>
  )
}
