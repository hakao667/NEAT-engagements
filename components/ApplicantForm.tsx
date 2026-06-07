'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState, useRef } from 'react'

const applicantFormSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  positionInterest: z.string().min(3, 'Please enter a position'),
  message: z.string().optional(),
})

type ApplicantFormData = z.infer<typeof applicantFormSchema>

export default function ApplicantForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const [fileName, setFileName] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ApplicantFormData>({
    resolver: zodResolver(applicantFormSchema),
  })

  const onSubmit = async (data: ApplicantFormData) => {
    setIsSubmitting(true)
    setSubmitMessage(null)

    try {
      const formData = new FormData()
      formData.append('fullName', data.fullName)
      formData.append('email', data.email)
      formData.append('phone', data.phone)
      formData.append('positionInterest', data.positionInterest)
      if (data.message) formData.append('message', data.message)

      const file = fileInputRef.current?.files?.[0]
      if (file) {
        formData.append('resume', file)
      }

      const response = await fetch('/api/applicants', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) throw new Error('Failed to submit application')

      setSubmitMessage({
        type: 'success',
        text: 'Thank you for your application! We\'ll review it and be in touch soon.',
      })
      reset()
      setFileName(null)
      if (fileInputRef.current) fileInputRef.current.value = ''
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        text: 'Failed to submit application. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    setFileName(file?.name || null)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {submitMessage && (
        <div
          className={`p-4 rounded-lg ${
            submitMessage.type === 'success'
              ? 'bg-green-50 text-green-800'
              : 'bg-red-50 text-red-800'
          }`}
          role="alert"
        >
          {submitMessage.text}
        </div>
      )}

      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-neutral-dark mb-2">
          Full Name *
        </label>
        <input
          id="fullName"
          type="text"
          placeholder="John Doe"
          {...register('fullName')}
          className="w-full px-4 py-2 border border-neutral-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        {errors.fullName && (
          <p className="text-red-600 text-sm mt-1">{errors.fullName.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-dark mb-2">
          Email Address *
        </label>
        <input
          id="email"
          type="email"
          placeholder="john@example.com"
          {...register('email')}
          className="w-full px-4 py-2 border border-neutral-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        {errors.email && (
          <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-neutral-dark mb-2">
          Phone Number *
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="+1 (234) 567-890"
          {...register('phone')}
          className="w-full px-4 py-2 border border-neutral-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        {errors.phone && (
          <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="positionInterest" className="block text-sm font-medium text-neutral-dark mb-2">
          Position You're Interested In *
        </label>
        <input
          id="positionInterest"
          type="text"
          placeholder="e.g., Business Consultant"
          {...register('positionInterest')}
          className="w-full px-4 py-2 border border-neutral-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        {errors.positionInterest && (
          <p className="text-red-600 text-sm mt-1">{errors.positionInterest.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="resume" className="block text-sm font-medium text-neutral-dark mb-2">
          Resume/CV *
        </label>
        <div className="relative">
          <input
            ref={fileInputRef}
            id="resume"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            required
            className="sr-only"
          />
          <label
            htmlFor="resume"
            className="flex items-center justify-center px-4 py-3 border-2 border-dashed border-primary-300 rounded-lg cursor-pointer hover:border-primary-500 transition-colors"
          >
            <span className="text-center">
              <span className="text-primary-600 font-medium">Click to upload</span>
              <span className="text-neutral-dark/50 text-sm"> or drag and drop</span>
              <p className="text-xs text-neutral-dark/50">PDF, DOC, or DOCX</p>
              {fileName && <p className="text-sm text-primary-600 mt-1 font-medium">{fileName}</p>}
            </span>
          </label>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-dark mb-2">
          Message (Optional)
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Tell us about yourself and why you'd like to join our team..."
          {...register('message')}
          className="w-full px-4 py-2 border border-neutral-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Application'}
      </button>

      <p className="text-xs text-neutral-dark/50 text-center">
        We respect your privacy. Your information will only be used to review your application.
      </p>
    </form>
  )
}
