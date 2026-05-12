# VitalK AI - Analytics Setup Guide

## Quick Start (30 minutes)

### 1. Google Analytics 4 (GA4)

**Step 1: Create GA4 Property**
1. Go to https://analytics.google.com
2. Sign in with Google account
3. Click "Admin" (gear icon, bottom left)
4. Under "Account", click "Create Account"
5. Account name: `VitalK AI`
6. Property name: `VitalK AI Website`
7. Select your industry, business size, country
8. Click "Create"

**Step 2: Get Measurement ID**
1. After creation, you'll see "Data Streams"
2. Click "Add Stream" → "Web"
3. Website URL: `https://vitalkai.com`
4. Stream name: `VitalK AI Main`
5. Click "Create Stream"
6. Copy the **Measurement ID** (starts with `G-XXXXXXXXXX`)

**Step 3: Add to Website**
Update `/home/tasoazure/vitalkai/src/app/layout.tsx`:

```tsx
import { GoogleAnalytics } from '@next/third-parties/google'

// In your layout component, add after <body> tag:
<GoogleAnalytics gaId="G-XXXXXXXXXX" />
```

Or install the package:
```bash
npm install @next/third-parties
```

**Step 4: Set Up Conversion Goals**
1. In GA4, go to "Admin" → "Conversions"
2. Click "New Conversion Event"
3. Add these events:
   - `generate_lead` (form submissions)
   - `click_email` (click-to-email)
   - `schedule_meeting` (Calendly bookings)

---

### 2. Vercel Analytics (Built-in)

**Enable in Vercel Dashboard:**
1. Go to https://vercel.com/zaratriants-projects/vitalkai
2. Click "Analytics" in left sidebar
3. Click "Enable"
4. No code changes needed — automatic!

**What you get:**
- Page views
- Unique visitors
- Bounce rate
- Device breakdown
- Geographic data
- Referrer sources

---

### 3. Microsoft Clarity (Heatmaps & Recordings) - FREE

**Step 1: Create Account**
1. Go to https://clarity.microsoft.com
2. Sign up with Microsoft/Google account
3. Click "Add New Project"
4. Project name: `VitalK AI`
5. Website: `https://vitalkai.com`

**Step 2: Get Tracking Code**
1. After setup, click "Setup" → "Installation"
2. Copy the tracking code

**Step 3: Add to Website**
Add to `/home/tasoazure/vitalkai/src/app/layout.tsx`:

```tsx
// In <head> section:
<script
  dangerouslySetInnerHTML={{
    __html: `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "YOUR_CLARITY_ID");
    `,
  }}
/>
```

**What you get:**
- Heatmaps (where people click/scroll)
- Session recordings (watch how people use your site)
- Dead clicks (broken links, frustrated users)
- Rage clicks (people getting frustrated)

---

### 4. Form Conversion Tracking

**Option A: HubSpot (Recommended)**

1. Create free account at https://hubspot.com
2. Go to Settings → Integrations → API Key
3. Update `/api/lead/route.ts` to send to HubSpot:

```typescript
// After successful form processing:
await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${process.env.HUBSPOT_API_KEY}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    properties: {
      email: email,
      firstname: name.split(' ')[0],
      lastname: name.split(' ')[1] || '',
      company: company,
      message: message,
    },
  }),
});
```

**Option B: Simple Email Notification**

Add to `/api/lead/route.ts`:

```typescript
// Send email notification
await fetch('https://api.sendgrid.com/v3/mail/send', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    personalizations: [{ to: [{ email: 'hello@vitalkai.com' }] }],
    from: { email: 'noreply@vitalkai.com' },
    subject: `New Lead: ${name} (${company})`,
    content: [{ type: 'text/plain', value: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nMessage: ${message}` }],
  }),
});
```

**Option C: Slack Notification**

```typescript
// Post to Slack channel
await fetch(process.env.SLACK_WEBHOOK_URL!, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    text: `🎯 New Lead!\n*Name:* ${name}\n*Email:* ${email}\n*Company:* ${company}\n*Message:* ${message}`,
  }),
});
```

---

### 5. Calendly Integration (For Booking Calls)

**Step 1: Create Account**
1. Go to https://calendly.com
2. Sign up for free account
3. Set up your availability
4. Create event type: "30-Min Automation Audit"

**Step 2: Embed on Website**
1. In Calendly, click event type → "Share" → "Add to Website"
2. Choose "Inline Embed"
3. Copy the code

**Step 3: Add to Contact Page**
Create `/home/tasoazure/vitalkai/src/app/book/page.tsx`:

```tsx
export default function BookPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Book Your Free <span className="gradient-text">Automation Audit</span>
        </h1>
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/YOUR_CALENDLY_URL"
          style={{ minWidth: '320px', height: '700px' }}
        />
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        />
      </div>
    </div>
  );
}
```

**Step 4: Update Contact Section**
Change the CTA button to link to `/book` instead of the form.

---

### 6. Environment Variables

Create `.env.local` in project root:

```env
# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_CLARITY_ID=XXXXXXXXXX

# CRM
HUBSPOT_API_KEY=pat-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx

# Email
SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxxxxxxxx

# Notifications
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/XXX/XXX/XXX

# Calendly
CALENDLY_ACCOUNT_URL=https://calendly.com/yourname
```

**IMPORTANT:** Add `.env.local` to `.gitignore` — never commit secrets!

---

## Tracking Dashboard Setup

### Google Sheets (Simple Option)

Create a sheet with these tabs:

**Tab 1: Daily Metrics**
| Date | Visitors | Form Subs | Calls Booked | Proposals | Deals Closed | Revenue |
|------|----------|-----------|--------------|-----------|--------------|---------|

**Tab 2: Channel Performance**
| Channel | Visitors | Leads | Conversion | CAC | Revenue |
|---------|----------|-------|------------|-----|---------|
| LinkedIn Organic | | | | $0 | |
| Cold Email | | | | $200 | |
| LinkedIn Ads | | | | TBD | |
| Google Ads | | | | TBD | |
| Partnerships | | | | $0 | |
| Content/SEO | | | | $0 | |

**Tab 3: Pipeline**
| Company | Contact | Stage | Value | Probability | Expected Close |
|---------|---------|-------|-------|-------------|----------------|
| Acme Inc | John | Proposal | $15K | 50% | 2026-06-01 |

---

### Metrics to Check Daily

**Morning Routine (10 min):**
1. GA4: Yesterday's visitors, top pages
2. Form submissions: Any new leads?
3. Calendly: Any calls booked?
4. Email/Slack: Any inbound inquiries?

**Weekly Review (Monday, 30 min):**
1. Week-over-week traffic growth
2. Lead conversion rate (visitors → leads)
3. Call show-up rate
4. Proposal close rate
5. CAC by channel
6. Pipeline health

---

## Troubleshooting

**GA4 Not Tracking:**
- Check if Measurement ID is correct
- Verify script is loading (check browser DevTools → Network)
- Install Google Tag Assistant Chrome extension

**Form Not Submitting:**
- Check API route logs in Vercel dashboard
- Verify CORS settings
- Test with curl: `curl -X POST https://vitalkai.com/api/lead -H "Content-Type: application/json" -d '{"name":"Test","email":"test@test.com","message":"Test"}'`

**Calendly Not Loading:**
- Check if script is loading
- Verify Calendly URL is correct
- Try different embed method (popup vs. inline)

---

## Next Steps After Setup

1. ✅ Test all tracking (submit test form, book test call)
2. ✅ Verify data appears in GA4 within 24 hours
3. ✅ Set up automated weekly report email to yourself
4. ✅ Create dashboard for board reporting
5. ✅ Start driving traffic and collecting data!

---

*Questions? Email hello@vitalkai.com or check the docs.*
