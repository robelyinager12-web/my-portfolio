import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: 'Message is too short.' },
        { status: 400 }
      );
    }

    // TODO: wire up a real email provider here.
    // Example using Resend (https://resend.com):
    //
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'portfolio@yourdomain.com',
    //   to: process.env.CONTACT_TO_EMAIL,
    //   subject: '[Portfolio] ' + subject + ' from ' + name,
    //   text: 'From: ' + name + ' <' + email + '>\n\n' + message,
    //   replyTo: email
    // });

    console.log('Contact form submission:', { name, email, subject, message });

    return NextResponse.json({ ok: true, message: 'Message received successfully.' });
  } catch {
    return NextResponse.json(
      { error: 'Invalid request. Please try again.' },
      { status: 400 }
    );
  }
}
