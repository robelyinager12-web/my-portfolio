import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request. Please try again.' }, { status: 400 });
  }

  const name = String(body.name ?? '').trim();
  const email = String(body.email ?? '').trim();
  const message = String(body.message ?? '').trim();
  const subject = String(body.subject ?? '').trim() || `New message from ${name}`;

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Name, email and message are required.' }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
  }
  if (message.length < 10) {
    return NextResponse.json({ error: 'Message is too short.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || 'robelyinager12@gmail.com';
  const from = process.env.CONTACT_FROM_EMAIL || 'Portfolio <onboarding@resend.dev>';

  if (!apiKey) {
    console.error('RESEND_API_KEY is missing. Add it to .env.local (local) or your hosting env vars (production).');
    return NextResponse.json(
      { error: 'Email service is not configured on the server. You can also email robelyinager12@gmail.com directly.' },
      { status: 500 }
    );
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `[Portfolio] ${subject}`,
        text: `From: ${name} <${email}>\n\n${message}`,
        html: `<p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p><p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>`,
      }),
    });

    if (!res.ok) {
      console.error('Resend error:', res.status, await res.text());
      return NextResponse.json(
        { error: 'Could not send your message right now. Please email robelyinager12@gmail.com directly.' },
        { status: 502 }
      );
    }
    return NextResponse.json({ ok: true, message: 'Message sent successfully.' });
  } catch (err) {
    console.error('Contact route failure:', err);
    return NextResponse.json(
      { error: 'Could not send your message right now. Please email robelyinager12@gmail.com directly.' },
      { status: 502 }
    );
  }
}