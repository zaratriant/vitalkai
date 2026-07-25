import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, challenge, message } = body;

    const msg = challenge || message;

    if (!name || !email || !msg) {
      return NextResponse.json(
        { error: 'Name, email, and challenge are required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    const emailBody = `
New VitalK Lead — vitalkai.com

Name:    ${name}
Email:   ${email}
Company: ${company || 'Not specified'}

Challenge / Message:
${msg}

---
Submitted: ${new Date().toISOString()}
    `.trim();

    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      try {
        const res = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'VitalK Leads <leads@vitalkai.com>',
            to: 'zaratriant@gmail.com',
            subject: `New Lead: ${name}${company ? ' — ' + company : ''}`,
            text: emailBody,
          }),
        });

        if (!res.ok) {
          const errText = await res.text();
          console.error('Resend error:', errText);
        }
      } catch (emailErr) {
        console.error('Failed to send email:', emailErr);
      }
    } else {
      console.log('RESEND_API_KEY not set — logging lead only');
    }

    console.log('New VitalK lead:', {
      name, email,
      company: company || 'Not specified',
      challenge: msg,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "Thanks! We'll be in touch within 24 hours." },
      { status: 200 }
    );
  } catch (error) {
    console.error('Lead form error:', error);
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}