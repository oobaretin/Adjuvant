import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured');
  }
  return new Resend(apiKey);
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Check if API key exists
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact support.' },
        { status: 500 }
      );
    }

    // Send email using Resend
    const resend = getResend();
    
    // Use Resend's default domain - simpler format
    const fromEmail = 'onboarding@resend.dev';
    
    console.log('Attempting to send email from:', fromEmail, 'to: wisamchreidi@gmail.com');
    
    const result = await resend.emails.send({
      from: fromEmail,
      to: ['wisamchreidi@gmail.com'],
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${String(message).replace(/\n/g, '<br>')}</p>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        ${phone ? `Phone: ${phone}` : ''}
        
        Message:
        ${message}
      `,
    });

    if (result.error) {
      console.error('Resend error:', JSON.stringify(result.error, null, 2));
      const errorMessage = result.error.message || 'Unknown error occurred';
      return NextResponse.json(
        { 
          error: 'Failed to send email',
          details: errorMessage
        },
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', result.data?.id);
    return NextResponse.json(
      { message: 'Email sent successfully', id: result.data?.id },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Contact form error:', error);
    const errorMessage = error?.message || 'Internal server error';
    return NextResponse.json(
      { 
        error: 'Failed to process request',
        details: errorMessage
      },
      { status: 500 }
    );
  }
}

