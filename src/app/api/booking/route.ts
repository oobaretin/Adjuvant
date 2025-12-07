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
    
    console.log('Attempting to send booking email from:', fromEmail, 'to: wisamchreidi@gmail.com');
    
    const result = await resend.emails.send({
      from: fromEmail,
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

    console.log('Booking email sent successfully:', result.data?.id);
    return NextResponse.json(
      { message: 'Booking request sent successfully', id: result.data?.id },
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

