import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const contactFormSchema = z.object({
  fullName: z.string().min(2),
  company: z.string().optional(),
  email: z.string().email(),
  phone: z.string().min(10),
  subject: z.string().min(5),
  message: z.string().min(10),
})

type ContactFormData = z.infer<typeof contactFormSchema>

async function sendInquiryEmail(data: ContactFormData) {
  const adminEmail = process.env.ADMIN_EMAIL || process.env.NEXT_PUBLIC_CONTACT_EMAIL
  
  // Using Resend API
  if (process.env.RESEND_API_KEY) {
    try {
      // Import Resend dynamically to avoid build errors if not installed
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)

      await resend.emails.send({
        from: 'noreply@neatengagements.com',
        to: adminEmail || 'contact@neatengagements.com',
        subject: `New Inquiry Received - ${data.subject}`,
        html: `
          <h2>New Inquiry from Your Website</h2>
          <p><strong>Name:</strong> ${data.fullName}</p>
          <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Subject:</strong> ${data.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message.replace(/\n/g, '<br>')}</p>
          <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
        `,
      })

      // Send confirmation email to user
      await resend.emails.send({
        from: 'noreply@neatengagements.com',
        to: data.email,
        subject: 'Thank You for Contacting NEAT Engagements',
        html: `
          <h2>Thank You for Your Inquiry</h2>
          <p>Dear ${data.fullName},</p>
          <p>We have received your inquiry and our team will review it shortly.</p>
          <p>A representative will contact you as soon as possible.</p>
          <p>Regards,<br>NEAT Engagements Team</p>
        `,
      })

      return true
    } catch (error) {
      console.error('Email send error:', error)
      return false
    }
  }

  return true // Continue even if email fails
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate input
    const validatedData = contactFormSchema.parse(body)

    // Save to database
    const inquiry = await prisma.inquiry.create({
      data: {
        fullName: validatedData.fullName,
        company: validatedData.company || null,
        email: validatedData.email,
        phone: validatedData.phone,
        subject: validatedData.subject,
        message: validatedData.message,
      },
    })

    // Send emails
    await sendInquiryEmail(validatedData)

    return NextResponse.json(
      { success: true, id: inquiry.id },
      { status: 201 }
    )
  } catch (error) {
    console.error('Contact API error:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input data' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to process inquiry' },
      { status: 500 }
    )
  }
}
