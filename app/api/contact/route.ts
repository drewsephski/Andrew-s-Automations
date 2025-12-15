import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // Here you would typically send an email or save to a database
    // For now, we'll just log it and return success
    console.log('Contact form submission:', validatedData);

    // In a real implementation, you might use a service like Resend, SendGrid, etc.
    // await sendEmail({
    //   to: 'drewsepeczi@gmail.com',
    //   subject: `New contact from ${validatedData.name}`,
    //   text: `From: ${validatedData.email}\n\n${validatedData.message}`,
    // });

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          message: 'Validation failed',
          errors: error.errors 
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: 'Failed to send message' },
      { status: 500 }
    );
  }
}
