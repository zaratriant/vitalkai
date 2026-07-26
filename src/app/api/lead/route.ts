import { NextResponse } from 'next/server';

async function getGoogleAccessToken() {
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;
  const clientId = process.env.GOOGLE_CLIENT_ID!;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET!;

  if (!refreshToken) return null;

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: 'refresh_token',
    }),
  });

  const data = await res.json();
  return data.access_token || null;
}

async function sendGmail(accessToken: string, to: string, subject: string, body: string) {
  const rawEmail = [
    `From: hello@vitalkai.com`,
    `To: ${to}`,
    `Subject: ${subject}`,
    `Content-Type: text/plain; charset=utf-8`,
    ``,
    body,
  ].join('\n');

  const encoded = Buffer.from(rawEmail).toString('base64url');

  const res = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ raw: encoded }),
  });

  return res.ok;
}

async function saveToDrive(accessToken: string, leadData: Record<string, string>) {
  const fileName = `leads/vitalkai-lead-${Date.now()}.json`;
  const fileContent = JSON.stringify(leadData, null, 2);

  // Upload to Google Drive
  const boundary = 'vitalkai-' + Date.now();
  const metadata = {
    name: fileName,
    mimeType: 'application/json',
  };

  const multipartBody = [
    `--${boundary}`,
    `Content-Type: application/json; charset=UTF-8`,
    ``,
    JSON.stringify(metadata),
    `--${boundary}`,
    `Content-Type: application/json`,
    ``,
    fileContent,
    `--${boundary}--`,
  ].join('\r\n');

  try {
    await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': `multipart/related; boundary=${boundary}`,
      },
      body: multipartBody,
    });
  } catch (e) {
    console.error('Drive save error:', e);
  }
}

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

    const leadData = {
      name, email,
      company: company || 'Not specified',
      challenge: msg,
      timestamp: new Date().toISOString(),
      source: 'vitalkai.com',
    };

    // 1. Send Telegram notification
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    if (botToken) {
      const telegramText = [
        '🚀 *New VitalK Lead*\n',
        `*Name:* ${name}`,
        `*Email:* ${email}`,
        `*Company:* ${company || 'Not specified'}`,
        '',
        `*Challenge:*`,
        msg,
        '',
        `_${new Date().toISOString()}_`,
      ].join('\n');

      try {
        await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: '6830149863',
            text: telegramText,
            parse_mode: 'Markdown',
          }),
        });
      } catch (e) {
        console.error('Telegram error:', e);
      }
    }

    // 2. Get Google access token and use Gmail + Drive
    const accessToken = await getGoogleAccessToken();
    if (accessToken) {
      // Send email to zaratriant@gmail.com from hello@vitalkai.com
      const emailBody = [
        'New VitalK Lead — vitalkai.com',
        '',
        `Name:    ${name}`,
        `Email:   ${email}`,
        `Company: ${company || 'Not specified'}`,
        '',
        'Challenge / Message:',
        msg,
        '',
        '---',
        `Submitted: ${new Date().toISOString()}`,
      ].join('\n');

      await sendGmail(accessToken, 'zaratriant@gmail.com', `New Lead: ${name}${company ? ' — ' + company : ''}`, emailBody);

      // Save lead to Google Drive
      await saveToDrive(accessToken, leadData);

      // Send auto-reply to the lead from hello@vitalkai.com
      const autoReply = [
        `Hi ${name},`,
        '',
        'Thanks for reaching out to VitalK! We received your submission and will be in touch within 24 hours.',
        '',
        'Here\'s what you shared with us:',
        `"${msg}"`,
        '',
        'In the meantime, feel free to reply to this email if you have any questions.',
        '',
        'Best,',
        'The VitalK Team',
        'hello@vitalkai.com',
        'https://vitalkai.com',
      ].join('\n');

      await sendGmail(accessToken, email, 'Thanks for contacting VitalK! 🚀', autoReply);
    }

    console.log('New VitalK lead:', leadData);

    return NextResponse.json(
      { success: true, message: "Thanks! We'll be in touch within 24 hours." },
      { status: 200 }
    );
  } catch (error) {
    console.error('Lead form error:', error);
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}