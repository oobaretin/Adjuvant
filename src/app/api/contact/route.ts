import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const getTransporter = () => {
  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailAppPassword) {
    throw new Error('Gmail credentials are not configured');
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });
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

    // Check if Gmail credentials exist
    const gmailUser = process.env.GMAIL_USER; // Your Gmail account (for authentication)
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD; // Your App Password
    const recipientEmail = process.env.RECIPIENT_EMAIL || 'wisamchreidi@gmail.com'; // Client's email (who receives)
    
    if (!gmailUser || !gmailAppPassword) {
      console.error('Gmail credentials are not set');
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact support.' },
        { status: 500 }
      );
    }

    // Create transporter and send email
    const transporter = getTransporter();
    
    console.log('Sending email using:', gmailUser, 'to recipient:', recipientEmail);
    
    const mailOptions = {
      from: `"Adjuvant Ambulance Transport" <${gmailUser}>`,
      to: recipientEmail,
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
    };

    const info = await transporter.sendMail(mailOptions);
    
    console.log('Email sent successfully:', info.messageId);
    return NextResponse.json(
      { message: 'Email sent successfully', id: info.messageId },
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
