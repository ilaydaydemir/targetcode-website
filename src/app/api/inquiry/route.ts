import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, icp, scrapeNeeds } = await req.json()

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }
    if (!name || typeof name !== 'string') {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 })
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set')
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 })
    }

    const { Resend } = await import('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)

    const companyLine = company ? `<p style="margin: 0; color: #6b7280; font-size: 14px;">Company</p><p style="margin: 4px 0 16px 0; color: #111827; font-size: 16px; font-weight: 600;">${company}</p>` : ''
    const icpLine = icp ? `<p style="margin: 0; color: #6b7280; font-size: 14px;">Ideal Customer Profile (ICP)</p><p style="margin: 4px 0 16px 0; color: #111827; font-size: 15px; line-height: 1.5;">${icp}</p>` : ''
    const scrapeLine = scrapeNeeds ? `<p style="margin: 0; color: #6b7280; font-size: 14px;">Scraping / Data Needs</p><p style="margin: 4px 0 0 0; color: #111827; font-size: 15px; line-height: 1.5;">${scrapeNeeds}</p>` : ''

    // 1. Notify TargetCode team
    await resend.emails.send({
      from: 'TargetCode <onboarding@resend.dev>',
      to: ['ilayda@targetcode.io', 'ilaydaydemr@gmail.com'],
      subject: `New GTM System Inquiry: ${name}${company ? ` (${company})` : ''}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 520px; margin: 0 auto; padding: 32px;">
          <h2 style="color: #111827; margin-bottom: 16px;">New Sales Call Request</h2>
          <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px; padding: 20px; margin-bottom: 20px;">
            <p style="margin: 0; color: #6b7280; font-size: 14px;">Name</p>
            <p style="margin: 4px 0 16px 0; color: #111827; font-size: 16px; font-weight: 600;">${name}</p>
            <p style="margin: 0; color: #6b7280; font-size: 14px;">Email</p>
            <p style="margin: 4px 0 ${company || icp || scrapeNeeds ? '16px' : '0'} 0; color: #111827; font-size: 16px; font-weight: 600;">${email}</p>
            ${companyLine}
            ${icpLine}
            ${scrapeLine}
          </div>
          <p style="color: #6b7280; font-size: 13px;">
            Submitted at ${new Date().toLocaleString('en-US', { timeZone: 'Europe/Istanbul' })}
          </p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          <p style="color: #9ca3af; font-size: 12px;">TargetCode — GTM System Inquiry</p>
        </div>
      `,
    })

    // 2. Send confirmation email to the prospect
    await resend.emails.send({
      from: 'TargetCode <onboarding@resend.dev>',
      to: [email],
      subject: 'Your Custom GTM System Inquiry — TargetCode',
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 520px; margin: 0 auto; padding: 32px; background: #0A0A0A; color: #ffffff;">
          <div style="text-align: center; margin-bottom: 32px;">
            <h1 style="font-family: 'Roboto Mono', monospace; font-size: 28px; margin: 0;">
              TargetCode<span style="color: #4CAF50;">.io</span>
            </h1>
          </div>
          <div style="background: linear-gradient(135deg, rgba(33,150,243,0.1), rgba(76,175,80,0.1)); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 32px;">
            <h2 style="color: #ffffff; font-size: 22px; margin: 0 0 12px;">Hi ${name},</h2>
            <p style="color: #d1d5db; font-size: 15px; line-height: 1.6; margin: 0;">
              Thanks for your interest in a custom GTM system. We received your inquiry and our team will reach out shortly to schedule a sales call with you.
            </p>
          </div>
          <div style="margin-top: 28px; padding: 24px; background: rgba(255,255,255,0.03); border-radius: 12px;">
            <h3 style="color: #FFEB3B; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 16px;">What to expect on the call</h3>
            <ul style="list-style: none; padding: 0; margin: 0; color: #d1d5db; font-size: 14px; line-height: 2.2;">
              <li>&#x2713; Discovery of your current sales process &amp; pain points</li>
              <li>&#x2713; Review of your ICP and target market</li>
              <li>&#x2713; Live demo of the TargetCode platform</li>
              <li>&#x2713; Custom GTM system architecture for your business</li>
              <li>&#x2713; Pricing &amp; implementation timeline</li>
            </ul>
          </div>
          <p style="color: #6b7280; font-size: 13px; text-align: center; margin-top: 28px;">
            We typically respond within 24 hours.
          </p>
          <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.08); margin: 24px 0;" />
          <p style="color: #4b5563; font-size: 12px; text-align: center; margin: 0;">
            &copy; ${new Date().getFullYear()} TargetCode.io &mdash; Self-Evolving GTM Engine
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Inquiry error:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}
