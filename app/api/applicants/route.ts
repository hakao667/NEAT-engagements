import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { PrismaClient } from '@prisma/client'
import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { existsSync } from 'fs'

const prisma = new PrismaClient()

const applicantFormSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  positionInterest: z.string().min(3),
  message: z.string().optional(),
})

type ApplicantFormData = z.infer<typeof applicantFormSchema>

async function sendApplicantEmail(data: ApplicantFormData, resumeUrl?: string) {
  const adminEmail = process.env.ADMIN_EMAIL || process.env.NEXT_PUBLIC_CONTACT_EMAIL

  if (process.env.RESEND_API_KEY) {
    try {
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)

      // Send admin notification
      await resend.emails.send({
        from: 'noreply@neatengagements.com',
        to: adminEmail || 'contact@neatengagements.com',
        subject: `New Application - ${data.fullName}`,
        html: `
          <h2>New Job Application</h2>
          <p><strong>Name:</strong> ${data.fullName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Position Interested In:</strong> ${data.positionInterest}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message ? data.message.replace(/\n/g, '<br>') : 'No message provided'}</p>
          ${resumeUrl ? `<p><strong>Resume:</strong> <a href="${resumeUrl}">Download</a></p>` : ''}
          <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
        `,
      })

      // Send confirmation email to applicant
      await resend.emails.send({
        from: 'noreply@neatengagements.com',
        to: data.email,
        subject: 'Application Received - NEAT Engagements',
        html: `
          <h2>Thank You for Your Application</h2>
          <p>Dear ${data.fullName},</p>
          <p>We have received your application for the ${data.positionInterest} position and our team will review it shortly.</p>
          <p>If your qualifications match our requirements, we will contact you for an interview.</p>
          <p>Regards,<br>NEAT Engagements Team</p>
        `,
      })

      return true
    } catch (error) {
      console.error('Email send error:', error)
      return false
    }
  }

  return true
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    // Extract fields
    const fullName = formData.get('fullName') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const positionInterest = formData.get('positionInterest') as string
    const message = formData.get('message') as string | undefined
    const resume = formData.get('resume') as File | null

    // Validate input
    const validatedData = applicantFormSchema.parse({
      fullName,
      email,
      phone,
      positionInterest,
      message,
    })

    let resumeUrl: string | undefined

    // Handle resume upload
    if (resume) {
      const bytes = await resume.arrayBuffer()
      const buffer = Buffer.from(bytes)

      // Save to public directory
      const uploadsDir = join(process.cwd(), 'public', 'uploads', 'resumes')

      // Create directory if it doesn't exist
      if (!existsSync(uploadsDir)) {
        await mkdir(uploadsDir, { recursive: true })
      }

      const fileName = `${Date.now()}_${resume.name.replace(/\s+/g, '_')}`
      const filePath = join(uploadsDir, fileName)

      await writeFile(filePath, buffer)

      resumeUrl = `/uploads/resumes/${fileName}`
    }

    // Save to database
    const applicant = await prisma.applicant.create({
      data: {
        fullName: validatedData.fullName,
        email: validatedData.email,
        phone: validatedData.phone,
        positionInterest: validatedData.positionInterest,
        message: validatedData.message || null,
        resumeUrl: resumeUrl || '',
      },
    })

    // Send emails
    await sendApplicantEmail(validatedData, resumeUrl)

    return NextResponse.json(
      { success: true, id: applicant.id },
      { status: 201 }
    )
  } catch (error) {
    console.error('Applicant API error:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input data' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to process application' },
      { status: 500 }
    )
  }
}
