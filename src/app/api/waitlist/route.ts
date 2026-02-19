import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set')
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 })
    }

    const { Resend } = await import('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)

    // 1. Notify TargetCode team
    await resend.emails.send({
      from: 'TargetCode <onboarding@resend.dev>',
      to: ['ilayda@targetcode.io', 'ilaydaydemr@gmail.com'],
      subject: `New Waitlist Signup: ${email}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 480px; margin: 0 auto; padding: 32px;">
          <h2 style="color: #111827; margin-bottom: 16px;">New Early Access Request</h2>
          <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px; padding: 20px; margin-bottom: 20px;">
            <p style="margin: 0; color: #6b7280; font-size: 14px;">Email</p>
            <p style="margin: 4px 0 0; color: #111827; font-size: 16px; font-weight: 600;">${email}</p>
          </div>
          <p style="color: #6b7280; font-size: 13px;">
            Submitted at ${new Date().toLocaleString('en-US', { timeZone: 'Europe/Istanbul' })}
          </p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          <p style="color: #9ca3af; font-size: 12px;">TargetCode Waitlist</p>
        </div>
      `,
    })

    // 2. Send confirmation email to user
    await resend.emails.send({
      from: 'TargetCode <onboarding@resend.dev>',
      to: [email],
      subject: 'Welcome to the TargetCode Waitlist!',
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 520px; margin: 0 auto; padding: 32px; background: #0A0A0A; color: #ffffff;">
          <div style="text-align: center; margin-bottom: 32px;">
            <h1 style="font-family: 'Roboto Mono', monospace; font-size: 28px; margin: 0;">
              TargetCode<span style="color: #4CAF50;">.io</span>
            </h1>
          </div>
          <div style="background: linear-gradient(135deg, rgba(33,150,243,0.1), rgba(76,175,80,0.1)); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 32px; text-align: center;">
            <div style="font-size: 40px; margin-bottom: 16px;">&#127881;</div>
            <h2 style="color: #ffffff; font-size: 22px; margin: 0 0 12px;">You're on the list!</h2>
            <p style="color: #9ca3af; font-size: 15px; line-height: 1.6; margin: 0;">
              Thanks for signing up for early access to TargetCode. We're building a self-evolving GTM engine that writes its own code, builds scrapers, and grows with your business.
            </p>
          </div>
          <div style="margin-top: 28px; padding: 24px; background: rgba(255,255,255,0.03); border-radius: 12px;">
            <h3 style="color: #FFEB3B; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 16px;">What's coming</h3>
            <ul style="list-style: none; padding: 0; margin: 0; color: #d1d5db; font-size: 14px; line-height: 2;">
              <li>&#x2713; <span style="color: #4CAF50; margin-right: 4px;"></span> AI Sales Chat with your company context</li>
              <li>&#x2713; <span style="color: #4CAF50; margin-right: 4px;"></span> Smart CRM with automated enrichment</li>
              <li>&#x2713; <span style="color: #4CAF50; margin-right: 4px;"></span> Drag-and-drop workflow builder</li>
              <li>&#x2713; <span style="color: #4CAF50; margin-right: 4px;"></span> AI component builder — describe it, we build it</li>
            </ul>
          </div>
          <p style="color: #6b7280; font-size: 13px; text-align: center; margin-top: 28px;">
            We'll reach out soon with your early access invite.
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
    console.error('Waitlist error:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}
