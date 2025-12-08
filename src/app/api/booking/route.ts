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
    const {
      firstName,
      lastName,
      phone,
      email,
      pickupLocation,
      destination,
      transportDate,
      transportTime,
      serviceType,
      specialRequirements,
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !phone || !pickupLocation || !destination || !transportDate || !transportTime || !serviceType) {
      return NextResponse.json(
        { error: 'All required fields must be filled' },
        { status: 400 }
      );
    }

    // Check if Gmail credentials exist
    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
    
    if (!gmailUser || !gmailAppPassword) {
      console.error('Gmail credentials are not set');
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact support.' },
        { status: 500 }
      );
    }

    // Create transporter and send email
    const transporter = getTransporter();
    
    console.log('Attempting to send booking email from:', gmailUser, 'to: wisamchreidi@gmail.com');
    
    const mailOptions = {
      from: `"Adjuvant Ambulance Transport" <${gmailUser}>`,
      to: 'wisamchreidi@gmail.com',
      replyTo: email || undefined,
      subject: `New Transport Booking Request from ${firstName} ${lastName}`,
      html: `
        <h2>New Transport Booking Request</h2>
        <h3>Customer Information</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        ${email ? `<p><strong>Email:</strong> ${email}</p>` : ''}
        
        <h3>Transport Details</h3>
        <p><strong>Pickup Location:</strong> ${pickupLocation}</p>
        <p><strong>Destination:</strong> ${destination}</p>
        <p><strong>Preferred Date:</strong> ${transportDate}</p>
        <p><strong>Preferred Time:</strong> ${transportTime}</p>
        <p><strong>Service Type:</strong> ${serviceType}</p>
        ${specialRequirements ? `<p><strong>Special Requirements:</strong> ${String(specialRequirements).replace(/\n/g, '<br>')}</p>` : ''}
      `,
      text: `
        New Transport Booking Request
        
        Customer Information:
        Name: ${firstName} ${lastName}
        Phone: ${phone}
        ${email ? `Email: ${email}` : ''}
        
        Transport Details:
        Pickup Location: ${pickupLocation}
        Destination: ${destination}
        Preferred Date: ${transportDate}
        Preferred Time: ${transportTime}
        Service Type: ${serviceType}
        ${specialRequirements ? `Special Requirements: ${specialRequirements}` : ''}
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    
    console.log('Booking email sent successfully:', info.messageId);
    return NextResponse.json(
      { message: 'Booking request sent successfully', id: info.messageId },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Booking form error:', error);
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
