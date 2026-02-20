'use client'

import { motion } from 'framer-motion'
import { Bot, Eye, Save, Zap } from 'lucide-react'

export function SelfBuilding() {
  return (
    <section id="self-building" className="relative py-24 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-white uppercase tracking-widest mb-3"
          >
            THE MAGIC
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-black"
          >
            An App That Writes Its Own Code
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-black/70 font-medium"
          >
            TargetCode doesn&apos;t just run automations — it builds new features on demand.
            Describe what you need, and the platform generates working React
            components and custom scrapers in real time.
          </motion.p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/50">
              <div className="flex items-center p-3 bg-white/60 border-b border-black/5">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-[#F44336] rounded-full" />
                  <div className="w-3 h-3 bg-[#FFEB3B] rounded-full" />
                  <div className="w-3 h-3 bg-[#4CAF50] rounded-full" />
                </div>
                <div className="ml-4 text-xs text-black/40 font-[var(--font-roboto-mono)]">
                  vibe-builder.tsx
                </div>
                <span className="ml-auto text-xs bg-[#2196F3]/10 text-[#2196F3] rounded-full px-2.5 py-0.5 font-bold">
                  Vibe
                </span>
              </div>
              <div className="p-4 space-y-4">
                <div className="space-y-3">
                  <div className="ml-8 rounded-xl bg-[#2196F3]/10 px-4 py-2.5 text-sm text-black/80">
                    Build me a pipeline dashboard widget that shows conversion
                    rates by stage with a bar chart
                  </div>
                  <div className="mr-8 rounded-xl bg-black/5 px-4 py-2.5 text-sm text-black/70">
                    <div className="flex items-center gap-2 mb-1">
                      <Bot className="size-3.5 text-[#4CAF50]" />
                      <span className="text-xs font-bold text-[#4CAF50]">AI</span>
                    </div>
                    I&apos;ve generated a PipelineDashboard component with
                    interactive bar charts, stage labels, and conversion
                    percentages.
                  </div>
                </div>
                <div className="flex gap-2 pt-2">
                  <div className="flex items-center gap-1.5 text-xs text-black/50 bg-black/5 rounded-lg px-3 py-1.5 font-medium">
                    <Eye className="size-3" />
                    Live Preview
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#4CAF50] bg-[#4CAF50]/10 rounded-lg px-3 py-1.5 font-bold">
                    <Save className="size-3" />
                    Save to Library
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
              <h4 className="text-xl font-bold text-black mb-3">How Vibe Works</h4>
              <ul className="space-y-2 text-sm text-black/70">
                <li className="flex gap-2"><span className="text-black font-bold">1.</span> Describe any widget, page, or workflow step in plain English</li>
                <li className="flex gap-2"><span className="text-black font-bold">2.</span> AI generates production-ready React/TSX code instantly</li>
                <li className="flex gap-2"><span className="text-black font-bold">3.</span> Preview it live in a sandboxed environment</li>
                <li className="flex gap-2"><span className="text-black font-bold">4.</span> Save to your component library with versioning</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/50">
              <div className="flex items-center p-3 bg-white/60 border-b border-black/5">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-[#F44336] rounded-full" />
                  <div className="w-3 h-3 bg-[#FFEB3B] rounded-full" />
                  <div className="w-3 h-3 bg-[#4CAF50] rounded-full" />
                </div>
                <div className="ml-4 text-xs text-black/40 font-[var(--font-roboto-mono)]">
                  workflow-engine.ts
                </div>
                <span className="ml-auto text-xs bg-[#4CAF50]/10 text-[#4CAF50] rounded-full px-2.5 py-0.5 font-bold">
                  Running
                </span>
              </div>
              <div className="p-4 space-y-3">
                {[
                  { step: 'Apify Scraper', desc: 'Scrape LinkedIn Sales Navigator', status: 'completed' },
                  { step: 'AI Transform', desc: 'Enrich & normalize contact data', status: 'completed' },
                  { step: 'Filter', desc: 'Match ICP criteria (SaaS, 50-200 employees)', status: 'running' },
                  { step: 'Save Contacts', desc: 'Import qualified leads to CRM', status: 'pending' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-xl bg-black/5 px-4 py-3"
                  >
                    <div
                      className={`size-2 rounded-full ${
                        item.status === 'completed'
                          ? 'bg-[#4CAF50]'
                          : item.status === 'running'
                          ? 'bg-[#FFEB3B] animate-pulse'
                          : 'bg-black/20'
                      }`}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-black">{item.step}</p>
                      <p className="text-xs text-black/50 truncate">{item.desc}</p>
                    </div>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                        item.status === 'completed'
                          ? 'bg-[#4CAF50]/10 text-[#4CAF50]'
                          : item.status === 'running'
                          ? 'bg-[#FFEB3B]/20 text-[#F44336]'
                          : 'bg-black/5 text-black/40'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
              <h4 className="text-xl font-bold flex items-center gap-2 text-black">
                <Zap className="size-5 text-[#F44336]" />
                What We Built for You
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-black/70">
                <li className="flex gap-2"><span className="text-black font-bold">&bull;</span> Multi-step workflow engine with drag-and-drop builder</li>
                <li className="flex gap-2"><span className="text-black font-bold">&bull;</span> Apify integration for any web scraping actor</li>
                <li className="flex gap-2"><span className="text-black font-bold">&bull;</span> AI-powered data transformation and enrichment</li>
                <li className="flex gap-2"><span className="text-black font-bold">&bull;</span> Background job processing with progress tracking</li>
                <li className="flex gap-2"><span className="text-black font-bold">&bull;</span> Auto-mapping of scraped data to your contact fields</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
