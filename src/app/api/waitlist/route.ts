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

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Waitlist error:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}
