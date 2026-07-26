import { NextResponse } from 'next/server';

// Exchange authorization code for tokens
async function exchangeCode(code: string, redirectUri: string) {
  const clientId = process.env.GOOGLE_CLIENT_ID!;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET!;

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code',
    }),
  });

  return res.json();
}

async function saveTokenToVercel(tokens: any) {
  const vercelToken = process.env.VERCEL_TOKEN;
  if (!vercelToken) return;

  // Save refresh token
  if (tokens.refresh_token) {
    // Delete existing first
    try {
      const existing = await fetch(`https://api.vercel.com/v9/projects/vitalkai/env`, {
        headers: { 'Authorization': `Bearer ${vercelToken}` },
      });
      const envVars = await existing.json();
      for (const e of envVars.envs || []) {
        if (e.key === 'GOOGLE_REFRESH_TOKEN') {
          await fetch(`https://api.vercel.com/v9/projects/vitalkai/env/${e.id}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${vercelToken}` },
          });
        }
      }
    } catch {}

    await fetch('https://api.vercel.com/v9/projects/vitalkai/env', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${vercelToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key: 'GOOGLE_REFRESH_TOKEN',
        value: tokens.refresh_token,
        type: 'encrypted',
        target: ['production'],
      }),
    });
  }
}

async function sendTelegramNotification(text: string) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  if (!botToken) return;
  
  try {
    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: '6830149863',
        text,
        parse_mode: 'Markdown',
      }),
    });
  } catch {}
}

// GET — handles redirect from Google OAuth (web flow)
export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const error = url.searchParams.get('error');

  if (error) {
    return new NextResponse(
      `<html><body style="background:#050507;color:#fff;font-family:monospace;display:flex;align-items:center;justify-content:center;min-height:100vh"><div style="text-align:center"><h1 style="color:#ef4444">OAuth Error</h1><p style="color:#6b7280">${error}</p></div></body></html>`,
      { headers: { 'Content-Type': 'text/html' } }
    );
  }

  if (!code) {
    return new NextResponse(
      `<html><body style="background:#050507;color:#fff;font-family:monospace;display:flex;align-items:center;justify-content:center;min-height:100vh"><div style="text-align:center"><h1 style="color:#ef4444">No code received</h1></div></body></html>`,
      { headers: { 'Content-Type': 'text/html' } }
    );
  }

  const redirectUri = 'https://vitalkai.com/api/oauth/callback';
  const tokens = await exchangeCode(code, redirectUri);

  if (tokens.error) {
    return new NextResponse(
      `<html><body style="background:#050507;color:#fff;font-family:monospace;display:flex;align-items:center;justify-content:center;min-height:100vh"><div style="text-align:center"><h1 style="color:#ef4444">Token Exchange Failed</h1><p style="color:#6b7280">${tokens.error}</p><p style="color:#4b5563;font-size:0.8rem">${tokens.error_description || ''}</p></div></body></html>`,
      { headers: { 'Content-Type': 'text/html' } }
    );
  }

  console.log('OAuth tokens received:', { has_access_token: !!tokens.access_token, has_refresh_token: !!tokens.refresh_token, scope: tokens.scope });

  await saveTokenToVercel(tokens);

  const scopeList = tokens.scope?.split(' ').map((s: string) => `• ${s.replace('https://www.googleapis.com/auth/', '')}`).join('\n') || 'Unknown';
  await sendTelegramNotification(`✅ *Google OAuth Connected!*\n\n*Scopes granted:*\n${scopeList}\n\nVitalK can now:\n• Send emails via Gmail\n• Store files on Google Drive\n• Manage calendar events`);

  return new NextResponse(
    `<html><body style="background:#050507;color:#fff;font-family:monospace;display:flex;align-items:center;justify-content:center;min-height:100vh"><div style="text-align:center;max-width:500px"><div style="font-size:3rem;margin-bottom:1rem">✅</div><h1 style="color:#ef4444;margin-bottom:1rem">Google Connected!</h1><p style="color:#6b7280;line-height:1.6">VitalK now has access to Gmail, Google Drive, and Calendar.<br/><br/><span style="color:#22c55e">Scopes granted:</span><br/>${scopeList}</p><p style="color:#4b5563;margin-top:2rem;font-size:0.8rem">You can close this window. Check Telegram for confirmation.</p></div></body></html>`,
    { headers: { 'Content-Type': 'text/html' } }
  );
}

// POST — handles manual code entry (installed app / OOB flow)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { code } = body;

    if (!code) {
      return NextResponse.json({ error: 'No code provided' }, { status: 400 });
    }

    // For OOB flow, redirect_uri is urn:ietf:wg:oauth:2.0:oob
    const tokens = await exchangeCode(code, 'urn:ietf:wg:oauth:2.0:oob');

    if (tokens.error) {
      return NextResponse.json({ error: tokens.error, detail: tokens.error_description }, { status: 400 });
    }

    console.log('OAuth tokens received (POST):', { has_access_token: !!tokens.access_token, has_refresh_token: !!tokens.refresh_token, scope: tokens.scope });

    await saveTokenToVercel(tokens);

    const scopeList = tokens.scope?.split(' ').map((s: string) => `• ${s.replace('https://www.googleapis.com/auth/', '')}`).join('\n') || 'Unknown';
    await sendTelegramNotification(`✅ *Google OAuth Connected!*\n\n*Scopes granted:*\n${scopeList}\n\nVitalK can now:\n• Send emails via Gmail\n• Store files on Google Drive\n• Manage calendar events`);

    return NextResponse.json({ 
      success: true, 
      message: 'Google OAuth connected successfully!',
      scope: tokens.scope,
    });
  } catch (err) {
    console.error('OAuth POST error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}