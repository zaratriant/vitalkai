import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');
  const error = url.searchParams.get('error');

  if (error) {
    return new NextResponse(
      `<html><body style="background:#050507;color:#fff;font-family:monospace;display:flex;align-items:center;justify-content:center;min-height:100vh">
        <div style="text-align:center">
          <h1 style="color:#ef4444">OAuth Error</h1>
          <p style="color:#6b7280">${error}</p>
        </div>
      </body></html>`,
      { headers: { 'Content-Type': 'text/html' } }
    );
  }

  if (!code) {
    return new NextResponse(
      `<html><body style="background:#050507;color:#fff;font-family:monospace;display:flex;align-items:center;justify-content:center;min-height:100vh">
        <div style="text-align:center">
          <h1 style="color:#ef4444">No code received</h1>
        </div>
      </body></html>`,
      { headers: { 'Content-Type': 'text/html' } }
    );
  }

  // Exchange code for tokens
  const clientId = process.env.GOOGLE_CLIENT_ID!;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET!;
  const redirectUri = 'https://vitalkai.com/api/oauth/callback';

  try {
    const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
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

    const tokens = await tokenRes.json();

    if (tokens.error) {
      return new NextResponse(
        `<html><body style="background:#050507;color:#fff;font-family:monospace;display:flex;align-items:center;justify-content:center;min-height:100vh">
          <div style="text-align:center">
            <h1 style="color:#ef4444">Token Exchange Failed</h1>
            <p style="color:#6b7280">${tokens.error}</p>
            <p style="color:#4b5563;font-size:0.8rem">${tokens.error_description || ''}</p>
          </div>
        </body></html>`,
        { headers: { 'Content-Type': 'text/html' } }
      );
    }

    // Store tokens — in production this would go to a database
    // For now, we'll save to Vercel env vars and also display success
    console.log('OAuth tokens received:', {
      has_access_token: !!tokens.access_token,
      has_refresh_token: !!tokens.refresh_token,
      scope: tokens.scope,
      expires_in: tokens.expires_in,
    });

    // Send tokens to a secure storage endpoint
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    if (botToken) {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: '6830149863',
          text: `✅ Google OAuth Connected!\n\nScopes: ${tokens.scope}\n\nVitalK can now:\n• Send emails via Gmail\n• Store files on Google Drive\n• Manage calendar events`,
          parse_mode: 'Markdown',
        }),
      });
    }

    // Save tokens as encrypted Vercel env vars
    const vercelToken = process.env.VERCEL_TOKEN;
    if (vercelToken) {
      // Store refresh token
      await fetch('https://api.vercel.com/v9/projects/vitalkai/env', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${vercelToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          key: 'GOOGLE_REFRESH_TOKEN',
          value: tokens.refresh_token || '',
          type: 'encrypted',
          target: ['production'],
        }),
      });
    }

    return new NextResponse(
      `<html><body style="background:#050507;color:#fff;font-family:monospace;display:flex;align-items:center;justify-content:center;min-height:100vh">
        <div style="text-align:center;max-width:500px">
          <div style="font-size:3rem;margin-bottom:1rem">✅</div>
          <h1 style="color:#ef4444;margin-bottom:1rem">Google Connected!</h1>
          <p style="color:#6b7280;line-height:1.6">
            VitalK now has access to Gmail, Google Drive, and Calendar.<br/><br/>
            <span style="color:#22c55e">Scopes granted:</span><br/>
            ${tokens.scope?.split(' ').map((s: string) => `• ${s.replace('https://www.googleapis.com/auth/', '')}`).join('<br/>') || 'Unknown'}
          </p>
          <p style="color:#4b5563;margin-top:2rem;font-size:0.8rem">
            You can close this window. Check Telegram for confirmation.
          </p>
        </div>
      </body></html>`,
      { headers: { 'Content-Type': 'text/html' } }
    );
  } catch (err) {
    console.error('OAuth callback error:', err);
    return new NextResponse(
      `<html><body style="background:#050507;color:#fff;font-family:monospace;display:flex;align-items:center;justify-content:center;min-height:100vh">
        <div style="text-align:center">
          <h1 style="color:#ef4444">Server Error</h1>
          <p style="color:#6b7280">Check server logs</p>
        </div>
      </body></html>`,
      { headers: { 'Content-Type': 'text/html' } }
    );
  }
}