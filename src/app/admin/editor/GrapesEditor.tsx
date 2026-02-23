'use client'

import { useState, useCallback, useRef } from 'react'
import grapesjs, { type Editor } from 'grapesjs'
import GjsEditor, { Canvas } from '@grapesjs/react'
import gjsPresetWebpage from 'grapesjs-preset-webpage'
import gjsBlocksBasic from 'grapesjs-blocks-basic'
import gjsPluginForms from 'grapesjs-plugin-forms'
import gjsStyleBg from 'grapesjs-style-bg'
import 'grapesjs/dist/css/grapes.min.css'

const defaultTemplate = `
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto+Mono:wght@400;500;600&display=swap');

  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: 'Inter', system-ui, sans-serif;
    color: #000;
    background: linear-gradient(135deg, #2196F3, #4CAF50, #FFEB3B, #F44336);
    background-size: 400% 400%;
    animation: gradientShift 15s ease infinite;
    min-height: 100vh;
  }

  /* NAVBAR */
  .nav { position: fixed; top: 0; left: 0; right: 0; z-index: 50; background: rgba(255,255,255,0.9); backdrop-filter: blur(12px); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
  .nav-inner { max-width: 1280px; margin: 0 auto; padding: 0 24px; height: 64px; display: flex; align-items: center; justify-content: space-between; }
  .nav-logo { font-family: 'Roboto Mono', monospace; font-size: 20px; font-weight: 700; color: #000; text-decoration: none; display: flex; align-items: center; gap: 10px; }
  .nav-logo .accent { color: #4CAF50; }
  .nav-links { display: flex; align-items: center; gap: 32px; }
  .nav-links a { color: rgba(0,0,0,0.7); font-size: 14px; font-weight: 600; text-decoration: none; transition: color 0.2s; }
  .nav-links a:hover { color: #000; }
  .nav-cta { padding: 10px 24px; background: #000; color: #fff; font-weight: 600; border-radius: 12px; text-decoration: none; font-size: 14px; transition: all 0.2s; }
  .nav-cta:hover { background: rgba(0,0,0,0.8); }

  /* HERO */
  .hero { overflow: hidden; padding: 120px 0 80px; }
  .hero-inner { max-width: 1280px; margin: 0 auto; padding: 0 24px; text-align: center; }
  .hero-badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.8); backdrop-filter: blur(4px); padding: 6px 16px; border-radius: 999px; font-size: 14px; font-weight: 600; color: #000; margin-bottom: 32px; box-shadow: 0 1px 2px rgba(0,0,0,0.05); }
  .hero-badge .spark { color: #F44336; }
  .hero h1 { font-family: 'Roboto Mono', monospace; font-size: 48px; font-weight: 700; line-height: 1.2; }
  .hero h1 .white-text { color: #fff; text-shadow: 0 2px 8px rgba(0,0,0,0.6), 0 1px 3px rgba(0,0,0,0.4); }
  .hero h1 .black-text { color: #000; }
  .hero p { font-size: 20px; color: rgba(0,0,0,0.8); margin-top: 24px; max-width: 768px; margin-left: auto; margin-right: auto; line-height: 1.6; font-weight: 500; }
  .hero-buttons { margin-top: 40px; display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; }
  .hero-buttons .btn-primary { padding: 16px 32px; background: #000; color: #fff; font-weight: 700; border-radius: 16px; text-decoration: none; font-size: 18px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); display: flex; align-items: center; gap: 8px; }
  .hero-buttons .btn-primary:hover { background: rgba(0,0,0,0.8); }
  .hero-buttons .btn-secondary { padding: 16px 32px; background: rgba(255,255,255,0.8); backdrop-filter: blur(4px); color: #000; font-weight: 700; border-radius: 16px; text-decoration: none; font-size: 18px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
  .hero-buttons .btn-secondary:hover { background: #fff; }

  /* SECTIONS */
  .section { padding: 96px 0; }
  .section-inner { max-width: 1152px; margin: 0 auto; padding: 0 24px; }
  .section-header { text-align: center; margin-bottom: 64px; }
  .section-label { font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.1em; }
  .section-title { font-size: 36px; font-weight: 700; letter-spacing: -0.02em; margin-bottom: 16px; color: #000; }
  .section-desc { font-size: 18px; color: rgba(0,0,0,0.7); max-width: 672px; margin: 0 auto; font-weight: 500; }

  /* FEATURES */
  .features-grid { display: grid; gap: 20px; grid-template-columns: repeat(4, 1fr); }
  @media (max-width: 1024px) { .features-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 640px) { .features-grid { grid-template-columns: 1fr; } }
  .feature-card { background: rgba(255,255,255,0.8); backdrop-filter: blur(4px); border: 1px solid rgba(255,255,255,0.5); border-radius: 16px; padding: 24px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); transition: all 0.3s; }
  .feature-card:hover { background: rgba(255,255,255,0.95); box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); }
  .feature-icon { width: 40px; height: 40px; border-radius: 12px; background: rgba(0,0,0,0.05); display: flex; align-items: center; justify-content: center; margin-bottom: 16px; font-size: 20px; }
  .feature-card h3 { font-size: 16px; font-weight: 700; margin-bottom: 8px; color: #000; }
  .feature-card p { font-size: 14px; color: rgba(0,0,0,0.6); line-height: 1.6; }

  /* STEPS */
  .steps-grid { display: grid; gap: 24px; grid-template-columns: repeat(4, 1fr); }
  @media (max-width: 1024px) { .steps-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 640px) { .steps-grid { grid-template-columns: 1fr; } }
  .step { background: rgba(255,255,255,0.8); backdrop-filter: blur(4px); border: 1px solid rgba(255,255,255,0.5); border-radius: 16px; padding: 24px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
  .step-icon { width: 56px; height: 56px; border-radius: 16px; background: rgba(0,0,0,0.05); display: flex; align-items: center; justify-content: center; margin-bottom: 20px; font-size: 28px; }
  .step-label { font-size: 12px; font-weight: 700; color: rgba(0,0,0,0.4); letter-spacing: 0.1em; }
  .step h3 { font-size: 18px; font-weight: 700; margin: 4px 0 8px; color: #000; }
  .step p { font-size: 14px; color: rgba(0,0,0,0.6); line-height: 1.6; }

  /* SELF-BUILDING */
  .two-col { display: grid; gap: 32px; grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 1024px) { .two-col { grid-template-columns: 1fr; } }
  .terminal { background: rgba(255,255,255,0.9); backdrop-filter: blur(12px); border-radius: 16px; overflow: hidden; border: 1px solid rgba(255,255,255,0.5); box-shadow: 0 25px 50px -12px rgba(0,0,0,0.15); }
  .terminal-header { display: flex; align-items: center; padding: 12px; background: rgba(255,255,255,0.6); border-bottom: 1px solid rgba(0,0,0,0.05); }
  .terminal-dots { display: flex; gap: 8px; }
  .terminal-dots span { width: 12px; height: 12px; border-radius: 50%; }
  .terminal-dots .red { background: #F44336; }
  .terminal-dots .yellow { background: #FFEB3B; }
  .terminal-dots .green { background: #4CAF50; }
  .terminal-title { margin-left: 16px; font-size: 12px; color: rgba(0,0,0,0.4); font-family: 'Roboto Mono', monospace; }
  .terminal-badge { margin-left: auto; font-size: 12px; border-radius: 999px; padding: 2px 10px; font-weight: 700; }
  .badge-blue { background: rgba(33,150,243,0.1); color: #2196F3; }
  .badge-green { background: rgba(76,175,80,0.1); color: #4CAF50; }
  .info-card { margin-top: 24px; background: rgba(255,255,255,0.8); backdrop-filter: blur(4px); border-radius: 16px; padding: 24px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); border: 1px solid rgba(255,255,255,0.5); }
  .info-card h4 { font-size: 20px; font-weight: 700; margin-bottom: 12px; color: #000; }
  .info-card li { font-size: 14px; color: rgba(0,0,0,0.7); line-height: 2; list-style: none; }

  .chat-user { margin-left: 32px; background: rgba(33,150,243,0.1); border-radius: 12px; padding: 10px 16px; color: rgba(0,0,0,0.8); font-size: 14px; margin-bottom: 12px; }
  .chat-ai { margin-right: 32px; background: rgba(0,0,0,0.05); border-radius: 12px; padding: 10px 16px; color: rgba(0,0,0,0.7); font-size: 14px; }
  .chat-ai-label { display: flex; align-items: center; gap: 8px; margin-bottom: 4px; }
  .chat-ai-label span { color: #4CAF50; font-size: 12px; font-weight: 700; }

  .workflow-step { display: flex; align-items: center; gap: 12px; background: rgba(0,0,0,0.05); border-radius: 12px; padding: 12px 16px; }
  .workflow-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
  .workflow-step p { margin: 0; }
  .workflow-step .name { font-size: 14px; font-weight: 600; color: #000; }
  .workflow-step .desc { font-size: 12px; color: rgba(0,0,0,0.5); }
  .workflow-status { font-size: 12px; border-radius: 999px; padding: 2px 8px; font-weight: 600; margin-left: auto; white-space: nowrap; }

  .action-tags { display: flex; gap: 8px; padding-top: 8px; }
  .action-tag { display: flex; align-items: center; gap: 6px; font-size: 12px; border-radius: 8px; padding: 6px 12px; font-weight: 500; }
  .tag-gray { background: rgba(0,0,0,0.05); color: rgba(0,0,0,0.5); }
  .tag-green { background: rgba(76,175,80,0.1); color: #4CAF50; font-weight: 700; }

  /* PRICING */
  .pricing-grid { display: grid; gap: 32px; grid-template-columns: repeat(3, 1fr); }
  @media (max-width: 1024px) { .pricing-grid { grid-template-columns: 1fr; } }
  .price-card { background: rgba(255,255,255,0.8); backdrop-filter: blur(4px); border: 1px solid rgba(255,255,255,0.5); border-radius: 16px; padding: 32px; display: flex; flex-direction: column; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
  .price-card.highlighted { background: rgba(255,255,255,0.95); border-color: #4CAF50; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); position: relative; }
  .price-badge { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: linear-gradient(to right, #4CAF50, #2196F3); color: white; font-size: 12px; font-weight: 700; padding: 4px 16px; border-radius: 999px; }
  .price-card h3 { font-size: 18px; font-weight: 700; margin-bottom: 4px; color: #000; }
  .price-card .desc { font-size: 14px; color: rgba(0,0,0,0.6); margin-bottom: 16px; }
  .price-amount { font-size: 40px; font-weight: 700; color: #000; }
  .price-period { font-size: 16px; color: rgba(0,0,0,0.5); }
  .price-features { list-style: none; padding: 0; margin: 24px 0; flex: 1; }
  .price-features li { display: flex; align-items: flex-start; gap: 8px; font-size: 14px; margin-bottom: 12px; color: rgba(0,0,0,0.7); }
  .price-features li::before { content: "\\2713"; color: #4CAF50; font-weight: 700; flex-shrink: 0; }
  .price-cta { display: block; text-align: center; padding: 12px; border-radius: 12px; font-size: 14px; font-weight: 700; text-decoration: none; transition: all 0.2s; }
  .price-cta.primary { background: #000; color: #fff; }
  .price-cta.primary:hover { background: rgba(0,0,0,0.8); }
  .price-cta.secondary { border: 1px solid rgba(0,0,0,0.2); color: #000; }
  .price-cta.secondary:hover { background: rgba(0,0,0,0.05); }

  /* CTA / INQUIRY */
  .cta-section { padding: 96px 0; }
  .cta-inner { max-width: 768px; margin: 0 auto; padding: 0 24px; text-align: center; }
  .cta-inner h2 { font-size: 36px; font-weight: 700; margin-bottom: 16px; color: #000; }
  .cta-inner p { font-size: 18px; color: rgba(0,0,0,0.7); margin-bottom: 40px; font-weight: 500; }
  .cta-form { display: flex; flex-direction: column; gap: 12px; max-width: 448px; margin: 0 auto; }
  .cta-form-row { display: flex; gap: 12px; }
  @media (max-width: 640px) { .cta-form-row { flex-direction: column; } }
  .cta-form input { flex: 1; min-width: 0; padding: 14px 20px; border: 1px solid rgba(255,255,255,0.5); background: rgba(255,255,255,0.8); backdrop-filter: blur(4px); color: #000; border-radius: 12px; font-size: 14px; outline: none; box-shadow: 0 1px 2px rgba(0,0,0,0.05); }
  .cta-form input::placeholder { color: rgba(0,0,0,0.4); }
  .cta-form input:focus { border-color: #2196F3; box-shadow: 0 0 0 3px rgba(33,150,243,0.2); }
  .cta-form button { padding: 14px 32px; background: #000; color: #fff; border: none; border-radius: 12px; font-size: 14px; font-weight: 700; cursor: pointer; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
  .cta-form button:hover { background: rgba(0,0,0,0.8); }

  /* FOOTER */
  .footer { background: rgba(255,255,255,0.8); backdrop-filter: blur(4px); border-top: 1px solid rgba(255,255,255,0.5); padding: 48px 0; }
  .footer-inner { max-width: 1280px; margin: 0 auto; padding: 0 24px; }
  .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 32px; }
  @media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr; } }
  .footer-logo { font-family: 'Roboto Mono', monospace; font-size: 24px; font-weight: 700; color: #000; }
  .footer-logo .accent { color: #4CAF50; }
  .footer-desc { color: rgba(0,0,0,0.6); margin-top: 16px; max-width: 384px; font-size: 14px; }
  .footer-social { display: flex; gap: 24px; margin-top: 24px; }
  .footer-social a { color: rgba(0,0,0,0.4); transition: color 0.2s; }
  .footer-social a:hover { color: #000; }
  .footer h4 { font-size: 14px; font-weight: 700; color: #000; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 16px; }
  .footer ul { list-style: none; padding: 0; }
  .footer ul li { margin-bottom: 12px; }
  .footer ul a { color: rgba(0,0,0,0.6); text-decoration: none; font-size: 14px; transition: color 0.2s; }
  .footer ul a:hover { color: #000; }
  .footer-bottom { margin-top: 48px; padding-top: 32px; border-top: 1px solid rgba(0,0,0,0.1); color: rgba(0,0,0,0.4); font-size: 14px; }
</style>

<!-- NAVBAR -->
<nav class="nav">
  <div class="nav-inner">
    <a href="#" class="nav-logo">targetcode<span class="accent">.io</span></a>
    <div class="nav-links">
      <a href="#features">Features</a>
      <a href="#how-it-works">How It Works</a>
      <a href="#self-building">Self-Building</a>
      <a href="#pricing">Pricing</a>
      <a href="#inquiry" class="nav-cta">Book a Discovery Call</a>
    </div>
  </div>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="hero-inner">
    <div class="hero-badge"><span class="spark">&#10024;</span> AI-Powered GTM Engine</div>
    <h1><span class="white-text">Outbound is static.</span><br><span class="black-text">Your GTM engine is dynamic.</span></h1>
    <p>TargetCode ships with a fully customizable sales app out of the box. Tell it what you need — it writes the code, builds the scrapers, and evolves with every interaction.</p>
    <div class="hero-buttons">
      <a href="#inquiry" class="btn-primary">Book a Discovery Call &rarr;</a>
      <a href="#how-it-works" class="btn-secondary">See How It Works</a>
    </div>
  </div>
</section>

<!-- FEATURES -->
<section id="features" class="section">
  <div class="section-inner">
    <div class="section-header">
      <p class="section-label">EVERYTHING INCLUDED</p>
      <h2 class="section-title">A Complete GTM Platform, Out of the Box</h2>
      <p class="section-desc">Every feature ships ready to use. Customize everything to match your sales process — no development needed.</p>
    </div>
    <div class="features-grid">
      <div class="feature-card">
        <div class="feature-icon">&#128172;</div>
        <h3>AI Sales Chat</h3>
        <p>A Claude-powered assistant that knows your company, ICP, and sales playbook. It drafts emails, analyzes leads, and guides your outreach.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">&#128101;</div>
        <h3>Smart CRM</h3>
        <p>Manage contacts with CSV import, bulk operations, status tracking, and search. Every record is enriched and ready for action.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">&#9881;</div>
        <h3>Automated Workflows</h3>
        <p>Build multi-step automations: scrape data, filter leads, transform with AI, and save to your CRM. All running in the background.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">&#9993;</div>
        <h3>Campaign Manager</h3>
        <p>Launch email, LinkedIn, or multi-channel outreach campaigns. Track performance and iterate on what works.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">&#128451;</div>
        <h3>Data Sources</h3>
        <p>Connect Apify scrapers, REST APIs, webhooks, and CSV files. Your data pipeline, unified in one place.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">&#129513;</div>
        <h3>AI Component Builder</h3>
        <p>Describe a dashboard widget in plain English — the AI writes the React code, previews it live, and saves it to your component library.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">&#128295;</div>
        <h3>Deep Customization</h3>
        <p>Configure your company profile, product details, ICP targeting, and sales context. The entire platform adapts to your settings.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">&#128737;</div>
        <h3>User-Isolated Security</h3>
        <p>Row-level security on every table. Each user only sees their own data. Your information never leaks across accounts.</p>
      </div>
    </div>
  </div>
</section>

<!-- HOW IT WORKS -->
<section id="how-it-works" class="section">
  <div class="section-inner">
    <div class="section-header">
      <p class="section-label">HOW IT WORKS</p>
      <h2 class="section-title">From Zero to Revenue in Four Steps</h2>
      <p class="section-desc">No complex setup. No coding required. Just configure and go.</p>
    </div>
    <div class="steps-grid">
      <div class="step">
        <div class="step-icon">&#128100;</div>
        <span class="step-label">STEP 01</span>
        <h3>Sign Up &amp; Onboard</h3>
        <p>Create your account in seconds. The platform sets up your personalized workspace with all features ready to go.</p>
      </div>
      <div class="step">
        <div class="step-icon">&#127899;</div>
        <span class="step-label">STEP 02</span>
        <h3>Configure Your Profile</h3>
        <p>Enter your company details, product info, ideal customer profile, and sales preferences. The AI adapts to everything you tell it.</p>
      </div>
      <div class="step">
        <div class="step-icon">&#128640;</div>
        <span class="step-label">STEP 03</span>
        <h3>Launch &amp; Automate</h3>
        <p>Build workflows, connect data sources, and start campaigns. The AI scrapes, enriches, and manages your pipeline automatically.</p>
      </div>
      <div class="step">
        <div class="step-icon">&#128200;</div>
        <span class="step-label">STEP 04</span>
        <h3>Evolve &amp; Scale</h3>
        <p>As you use the platform, it learns. Build custom components, refine your workflows, and let the engine grow with your business.</p>
      </div>
    </div>
  </div>
</section>

<!-- SELF-BUILDING -->
<section id="self-building" class="section">
  <div class="section-inner">
    <div class="section-header">
      <p class="section-label">THE MAGIC</p>
      <h2 class="section-title">An App That Writes Its Own Code</h2>
      <p class="section-desc">TargetCode doesn't just run automations — it builds new features on demand. Describe what you need, and the platform generates working React components and custom scrapers in real time.</p>
    </div>
    <div class="two-col">
      <div>
        <div class="terminal">
          <div class="terminal-header">
            <div class="terminal-dots"><span class="red"></span><span class="yellow"></span><span class="green"></span></div>
            <div class="terminal-title">vibe-builder.tsx</div>
            <span class="terminal-badge badge-blue">Vibe</span>
          </div>
          <div style="padding:16px;">
            <div class="chat-user">Build me a pipeline dashboard widget that shows conversion rates by stage with a bar chart</div>
            <div class="chat-ai">
              <div class="chat-ai-label"><span>AI</span></div>
              I've generated a PipelineDashboard component with interactive bar charts, stage labels, and conversion percentages.
            </div>
            <div class="action-tags">
              <div class="action-tag tag-gray">&#128065; Live Preview</div>
              <div class="action-tag tag-green">&#128190; Save to Library</div>
            </div>
          </div>
        </div>
        <div class="info-card">
          <h4>How Vibe Works</h4>
          <ol style="list-style:none;padding:0;">
            <li style="font-size:14px;color:rgba(0,0,0,0.7);line-height:2;"><span style="color:#000;font-weight:700;">1.</span> Describe any widget, page, or workflow step in plain English</li>
            <li style="font-size:14px;color:rgba(0,0,0,0.7);line-height:2;"><span style="color:#000;font-weight:700;">2.</span> AI generates production-ready React/TSX code instantly</li>
            <li style="font-size:14px;color:rgba(0,0,0,0.7);line-height:2;"><span style="color:#000;font-weight:700;">3.</span> Preview it live in a sandboxed environment</li>
            <li style="font-size:14px;color:rgba(0,0,0,0.7);line-height:2;"><span style="color:#000;font-weight:700;">4.</span> Save to your component library with versioning</li>
          </ol>
        </div>
      </div>
      <div>
        <div class="terminal">
          <div class="terminal-header">
            <div class="terminal-dots"><span class="red"></span><span class="yellow"></span><span class="green"></span></div>
            <div class="terminal-title">workflow-engine.ts</div>
            <span class="terminal-badge badge-green">Running</span>
          </div>
          <div style="padding:16px;display:flex;flex-direction:column;gap:12px;">
            <div class="workflow-step">
              <div class="workflow-dot" style="background:#4CAF50;"></div>
              <div style="flex:1;"><p class="name">Apify Scraper</p><p class="desc">Scrape LinkedIn Sales Navigator</p></div>
              <span class="workflow-status" style="background:rgba(76,175,80,0.1);color:#4CAF50;">completed</span>
            </div>
            <div class="workflow-step">
              <div class="workflow-dot" style="background:#4CAF50;"></div>
              <div style="flex:1;"><p class="name">AI Transform</p><p class="desc">Enrich &amp; normalize contact data</p></div>
              <span class="workflow-status" style="background:rgba(76,175,80,0.1);color:#4CAF50;">completed</span>
            </div>
            <div class="workflow-step">
              <div class="workflow-dot" style="background:#FFEB3B;"></div>
              <div style="flex:1;"><p class="name">Filter</p><p class="desc">Match ICP criteria (SaaS, 50-200 employees)</p></div>
              <span class="workflow-status" style="background:rgba(255,235,59,0.2);color:#F44336;">running</span>
            </div>
            <div class="workflow-step">
              <div class="workflow-dot" style="background:rgba(0,0,0,0.2);"></div>
              <div style="flex:1;"><p class="name">Save Contacts</p><p class="desc">Import qualified leads to CRM</p></div>
              <span class="workflow-status" style="background:rgba(0,0,0,0.05);color:rgba(0,0,0,0.4);">pending</span>
            </div>
          </div>
        </div>
        <div class="info-card">
          <h4 style="display:flex;align-items:center;gap:8px;">&#9889; What We Built for You</h4>
          <ul style="list-style:none;padding:0;margin-top:12px;">
            <li style="font-size:14px;color:rgba(0,0,0,0.7);line-height:2;"><span style="color:#000;font-weight:700;">&#8226;</span> Multi-step workflow engine with drag-and-drop builder</li>
            <li style="font-size:14px;color:rgba(0,0,0,0.7);line-height:2;"><span style="color:#000;font-weight:700;">&#8226;</span> Apify integration for any web scraping actor</li>
            <li style="font-size:14px;color:rgba(0,0,0,0.7);line-height:2;"><span style="color:#000;font-weight:700;">&#8226;</span> AI-powered data transformation and enrichment</li>
            <li style="font-size:14px;color:rgba(0,0,0,0.7);line-height:2;"><span style="color:#000;font-weight:700;">&#8226;</span> Background job processing with progress tracking</li>
            <li style="font-size:14px;color:rgba(0,0,0,0.7);line-height:2;"><span style="color:#000;font-weight:700;">&#8226;</span> Auto-mapping of scraped data to your contact fields</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- PRICING -->
<section id="pricing" class="section">
  <div class="section-inner">
    <div class="section-header">
      <p class="section-label">PRICING</p>
      <h2 class="section-title">Simple, Transparent Pricing</h2>
      <p class="section-desc">Start free, upgrade when you're ready. No hidden fees.</p>
    </div>
    <div class="pricing-grid">
      <div class="price-card">
        <h3>Starter</h3>
        <p class="desc">For individuals exploring AI-driven sales</p>
        <div><span class="price-amount">Free</span></div>
        <ul class="price-features">
          <li>AI Sales Chat (limited)</li>
          <li>Up to 100 contacts</li>
          <li>3 workflows</li>
          <li>Basic scraper access</li>
          <li>Component builder (5 saves)</li>
        </ul>
        <a href="#inquiry" class="price-cta secondary">Start Free</a>
      </div>
      <div class="price-card highlighted">
        <div class="price-badge">Most Popular</div>
        <h3>Pro</h3>
        <p class="desc">For growing sales teams that need power</p>
        <div><span class="price-amount">$49</span><span class="price-period">/month</span></div>
        <ul class="price-features">
          <li>Unlimited AI Chat</li>
          <li>Unlimited contacts</li>
          <li>Unlimited workflows</li>
          <li>All scraper integrations</li>
          <li>Unlimited component builder</li>
          <li>Campaign manager</li>
          <li>Webhook &amp; API sources</li>
          <li>Priority support</li>
        </ul>
        <a href="#inquiry" class="price-cta primary">Book a Discovery Call</a>
      </div>
      <div class="price-card">
        <h3>Enterprise</h3>
        <p class="desc">For organizations with advanced needs</p>
        <div><span class="price-amount">Custom</span></div>
        <ul class="price-features">
          <li>Everything in Pro</li>
          <li>Custom integrations</li>
          <li>Dedicated infrastructure</li>
          <li>SSO &amp; advanced security</li>
          <li>Custom AI training</li>
          <li>SLA &amp; dedicated support</li>
        </ul>
        <a href="#inquiry" class="price-cta secondary">Contact Sales</a>
      </div>
    </div>
  </div>
</section>

<!-- INQUIRY / CTA -->
<section id="inquiry" class="cta-section">
  <div class="cta-inner">
    <h2>Get Your Custom GTM System</h2>
    <p>Book a discovery call to learn how TargetCode can build a self-evolving GTM engine tailored to your business.</p>
    <form class="cta-form" data-gjs-type="form" action="/api/inquiry" method="POST">
      <div class="cta-form-row">
        <input type="text" name="name" placeholder="Your name" required />
        <input type="text" name="company" placeholder="Company (optional)" />
      </div>
      <div class="cta-form-row">
        <input type="email" name="email" placeholder="Work email" required />
        <button type="submit">Book a Discovery Call &rarr;</button>
      </div>
    </form>
  </div>
</section>

<!-- FOOTER -->
<footer class="footer">
  <div class="footer-inner">
    <div class="footer-grid">
      <div>
        <div class="footer-logo">targetcode<span class="accent">.io</span></div>
        <p class="footer-desc">Self-evolving GTM engine for modern sales teams. We don't just outbound — we build.</p>
        <div class="footer-social">
          <a href="#">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
          </a>
          <a href="#">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
        </div>
      </div>
      <div>
        <h4>Company</h4>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Privacy</a></li>
        </ul>
      </div>
      <div>
        <h4>Resources</h4>
        <ul>
          <li><a href="#">Documentation</a></li>
          <li><a href="#">API Reference</a></li>
          <li><a href="mailto:hello@targetcode.io">Contact Us</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      &copy; 2026 TargetCode.io. All rights reserved.
    </div>
  </div>
</footer>
`

export default function GrapesEditor() {
  const [saving, setSaving] = useState(false)
  const [publishing, setPublishing] = useState(false)
  const [status, setStatus] = useState('')
  const editorRef = useRef<Editor | null>(null)

  const onEditor = useCallback(async (editor: Editor) => {
    editorRef.current = editor

    // Try to load existing draft
    try {
      const res = await fetch('/api/cms/load?type=draft')
      const data = await res.json()
      if (data.exists && data.projectData) {
        editor.loadProjectData(data.projectData)
        setStatus('Draft loaded')
      } else {
        // Load default template
        editor.setComponents(defaultTemplate)
        setStatus('Default template loaded')
      }
    } catch {
      // Use default template on error
      editor.setComponents(defaultTemplate)
      setStatus('Default template loaded')
    }

    // Clear status after 3 seconds
    setTimeout(() => setStatus(''), 3000)
  }, [])

  const handleSave = async () => {
    if (!editorRef.current) return
    setSaving(true)
    setStatus('Saving...')

    try {
      const projectData = editorRef.current.getProjectData()
      const res = await fetch('/api/cms/save', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectData }),
      })

      if (!res.ok) throw new Error('Save failed')
      setStatus('Draft saved!')
    } catch {
      setStatus('Save failed!')
    } finally {
      setSaving(false)
      setTimeout(() => setStatus(''), 3000)
    }
  }

  const handlePublish = async () => {
    if (!editorRef.current) return
    setPublishing(true)
    setStatus('Publishing...')

    try {
      const html = editorRef.current.getHtml()
      const css = editorRef.current.getCss()
      const projectData = editorRef.current.getProjectData()

      const res = await fetch('/api/cms/publish', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ html, css, projectData }),
      })

      if (!res.ok) throw new Error('Publish failed')
      setStatus('Published! Site is live.')
    } catch {
      setStatus('Publish failed!')
    } finally {
      setPublishing(false)
      setTimeout(() => setStatus(''), 5000)
    }
  }

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Toolbar */}
      <div
        style={{
          height: 48,
          background: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 16px',
          flexShrink: 0,
          zIndex: 100,
          borderBottom: '1px solid #e5e7eb',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a
            href="/admin/dashboard"
            style={{ color: '#6b7280', fontSize: 13, textDecoration: 'none' }}
          >
            &larr; Dashboard
          </a>
          <span
            style={{
              fontFamily: "'Roboto Mono', monospace",
              color: '#111',
              fontWeight: 700,
              fontSize: 16,
            }}
          >
            TargetCode<span style={{ color: '#4CAF50' }}>.io</span>
          </span>
          <span style={{ color: '#6b7280', fontSize: 13 }}>Editor</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {status && (
            <span style={{ color: '#6b7280', fontSize: 13 }}>{status}</span>
          )}
          <button
            onClick={handleSave}
            disabled={saving}
            style={{
              padding: '6px 16px',
              background: '#f3f4f6',
              color: '#374151',
              border: '1px solid #e5e7eb',
              borderRadius: 8,
              fontSize: 13,
              fontWeight: 500,
              cursor: saving ? 'not-allowed' : 'pointer',
              opacity: saving ? 0.6 : 1,
            }}
          >
            {saving ? 'Saving...' : 'Save Draft'}
          </button>
          <button
            onClick={handlePublish}
            disabled={publishing}
            style={{
              padding: '6px 16px',
              background: '#111',
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              fontSize: 13,
              fontWeight: 600,
              cursor: publishing ? 'not-allowed' : 'pointer',
              opacity: publishing ? 0.6 : 1,
            }}
          >
            {publishing ? 'Publishing...' : 'Publish'}
          </button>
        </div>
      </div>

      {/* GrapeJS Editor */}
      <div style={{ flex: 1, overflow: 'hidden' }}>
        <GjsEditor
          grapesjs={grapesjs}
          options={{
            height: '100%',
            storageManager: false,
            undoManager: { trackSelection: false },
            selectorManager: { componentFirst: true },
            assetManager: {
              upload: '/api/cms/upload',
              uploadName: 'files[]',
              multiUpload: true,
              autoAdd: true,
              credentials: 'include',
            },
            plugins: [
              gjsPresetWebpage,
              gjsBlocksBasic,
              gjsPluginForms,
              gjsStyleBg,
            ],
            pluginsOpts: {
              [gjsPresetWebpage as unknown as string]: {
                blocksBasicOpts: { flexGrid: true },
                navbarOpts: false,
                countdownOpts: false,
              },
              [gjsBlocksBasic as unknown as string]: {
                flexGrid: true,
              },
            },
            canvas: {
              styles: [
                'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto+Mono:wght@400;500;600&display=swap',
              ],
            },
          }}
          onEditor={onEditor}
        >
          <Canvas />
        </GjsEditor>
      </div>
    </div>
  )
}
