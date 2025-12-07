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

    // Send email using Resend
    const resend = getResend();
    const { data, error } = await resend.emails.send({
      from: 'Booking Request <contact@adjuvantambulancetransport.com>',
      to: ['wisamchreidi@gmail.com'],
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
        ${specialRequirements ? `<p><strong>Special Requirements:</strong> ${specialRequirements.replace(/\n/g, '<br>')}</p>` : ''}
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
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Booking request sent successfully', id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Booking form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

