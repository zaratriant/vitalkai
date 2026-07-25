import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, challenge, message } = body;

    // Support both "challenge" (new form) and "message" (legacy)
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

    // Log the lead
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