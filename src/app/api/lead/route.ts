import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // TODO: Send to CRM/email service
    // For now, log the lead (in production, use a real service)
    console.log('New lead received:', {
      name,
      email,
      company: company || 'Not specified',
      message,
      timestamp: new Date().toISOString(),
    });

    // In production, integrate with:
    // - HubSpot CRM
    // - SendGrid for email notifications
    // - Slack webhook for team notifications
    // - Google Sheets for simple tracking

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thanks! We\'ll be in touch within 24 hours.' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Lead form error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
