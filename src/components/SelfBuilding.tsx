'use client'

import { motion } from 'framer-motion'
import { Bot, Eye, Save, Zap } from 'lucide-react'

export function SelfBuilding() {
  return (
    <section id="self-building" className="relative py-24 overflow-hidden bg-black/20">
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-[#4CAF50]/5 rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-24 h-24 bg-[#F44336]/5 rounded-full blur-2xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-[#F44336] mb-3"
          >
            THE MAGIC
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white"
          >
            An App That Writes Its Own Code
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            TargetCode doesn&apos;t just run automations — it builds new features on demand.
            Describe what you need, and the platform generates working React
            components and custom scrapers in real time.
          </motion.p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
                    vibe-builder.tsx
                  </div>
                  <span className="ml-auto text-xs bg-[#2196F3]/20 text-[#2196F3] rounded-full px-2.5 py-0.5 font-medium">
                    Vibe
                  </span>
                </div>
                <div className="p-4 space-y-4">
                  <div className="space-y-3">
                    <div className="ml-8 rounded-lg bg-[#2196F3]/10 px-4 py-2.5 text-sm text-white">
                      Build me a pipeline dashboard widget that shows conversion
                      rates by stage with a bar chart
                    </div>
                    <div className="mr-8 rounded-lg bg-[#1a1a2e] px-4 py-2.5 text-sm text-gray-300">
                      <div className="flex items-center gap-2 mb-1">
                        <Bot className="size-3.5 text-[#4CAF50]" />
                        <span className="text-xs font-medium text-[#4CAF50]">AI</span>
                      </div>
                      I&apos;ve generated a PipelineDashboard component with
                      interactive bar charts, stage labels, and conversion
                      percentages. Here&apos;s the live preview →
                    </div>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 bg-[#1a1a2e] rounded-lg px-3 py-1.5">
                      <Eye className="size-3" />
                      Live Preview
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-[#4CAF50] bg-[#4CAF50]/10 rounded-lg px-3 py-1.5 font-medium">
                      <Save className="size-3" />
                      Save to Library
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#2196F3]/10 rounded-full blur-md" />
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#FFEB3B]/10 rounded-full blur-md" />
            </div>

            <div className="mt-6 space-y-3">
              <h4 className="text-xl font-bold text-white">How Vibe Works</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex gap-2">
                  <span className="text-[#2196F3] font-bold">1.</span>
                  Describe any widget, page, or workflow step in plain English
                </li>
                <li className="flex gap-2">
                  <span className="text-[#2196F3] font-bold">2.</span>
                  AI generates production-ready React/TSX code instantly
                </li>
                <li className="flex gap-2">
                  <span className="text-[#2196F3] font-bold">3.</span>
                  Preview it live in a sandboxed environment
                </li>
                <li className="flex gap-2">
                  <span className="text-[#2196F3] font-bold">4.</span>
                  Save to your component library with versioning
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
                    workflow-engine.ts
                  </div>
                  <span className="ml-auto text-xs bg-[#4CAF50]/20 text-[#4CAF50] rounded-full px-2.5 py-0.5 font-medium">
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
                      className="flex items-center gap-3 rounded-lg border border-[#2a2a3e] bg-[#111118] px-4 py-3"
                    >
                      <div
                        className={`size-2 rounded-full ${
                          item.status === 'completed'
                            ? 'bg-[#4CAF50]'
                            : item.status === 'running'
                            ? 'bg-[#FFEB3B] animate-pulse'
                            : 'bg-gray-600'
                        }`}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white">{item.step}</p>
                        <p className="text-xs text-gray-500 truncate">{item.desc}</p>
                      </div>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          item.status === 'completed'
                            ? 'bg-[#4CAF50]/10 text-[#4CAF50]'
                            : item.status === 'running'
                            ? 'bg-[#FFEB3B]/10 text-[#FFEB3B]'
                            : 'bg-[#1a1a2e] text-gray-500'
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#F44336]/10 rounded-full blur-md" />
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#4CAF50]/10 rounded-full blur-md" />
            </div>

            <div className="mt-6 space-y-3">
              <h4 className="text-xl font-bold flex items-center gap-2 text-white">
                <Zap className="size-5 text-[#FFEB3B]" />
                What We Built for You
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex gap-2"><span className="text-[#F44336] font-bold">&bull;</span> Multi-step workflow engine with drag-and-drop builder</li>
                <li className="flex gap-2"><span className="text-[#F44336] font-bold">&bull;</span> Apify integration for any web scraping actor</li>
                <li className="flex gap-2"><span className="text-[#F44336] font-bold">&bull;</span> AI-powered data transformation and enrichment</li>
                <li className="flex gap-2"><span className="text-[#F44336] font-bold">&bull;</span> Background job processing with progress tracking</li>
                <li className="flex gap-2"><span className="text-[#F44336] font-bold">&bull;</span> Auto-mapping of scraped data to your contact fields</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
