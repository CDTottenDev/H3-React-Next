import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const data = await request.json();
  
  try {
    console.log('Attempting to send email with data:', data);
    
    const { data: emailResponse, error } = await resend.emails.send({
      from: 'H3 Construction <contact@h3construction.com>',
      to: ['h3excavationandconst@gmail.com'],
      subject: 'New Contact Form Submission',
      html: `        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Message:</strong> ${data.message}</p>
        <hr>
        <p>This message was sent from your website contact form.</p>
      `
    });

    console.log('Email API response:', { emailResponse, error });

    if (error) {
      console.error('Resend API error:', error);
      throw new Error(error.message);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

