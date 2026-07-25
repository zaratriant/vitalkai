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

    // Send notification to Taso via Telegram Bot
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = '6830149863';
    
    const telegramText = [
      '🚀 *New VitalK Lead*\n',
      `*Name:* ${name}`,
      `*Email:* ${email}`,
      `*Company:* ${company || 'Not specified'}`,
      '',
      `*Challenge:*`,
      msg,
      '',
      `_${new Date().toISOString()}_`
    ].join('\n');

    if (botToken) {
      try {
        await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text: telegramText,
            parse_mode: 'Markdown',
          }),
        });
      } catch (tgErr) {
        console.error('Telegram send failed:', tgErr);
      }
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