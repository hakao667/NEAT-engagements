import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us - NEAT Engagements',
  description: 'Get in touch with NEAT Engagements. We\'d love to hear from you.',
}

export default function ContactPage() {
  return (
    <div>
      <div className="hero">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-white/90">
            We're here to help. Reach out to us today.
          </p>
        </div>
      </div>

      <div className="section-padding container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-neutral-dark mb-2">Email</h3>
                <p className="text-neutral-dark/70">
                  <a href="mailto:contact@neatengagements.com" className="text-primary-600 hover:underline">
                    contact@neatengagements.com
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-neutral-dark mb-2">Phone</h3>
                <p className="text-neutral-dark/70">
                  <a href="tel:+1234567890" className="text-primary-600 hover:underline">
                    +1 (234) 567-890
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-neutral-dark mb-2">Office Address</h3>
                <p className="text-neutral-dark/70">
                  123 Business Street<br />
                  New York, NY 10001<br />
                  United States
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-neutral-dark mb-2">Business Hours</h3>
                <p className="text-neutral-dark/70">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-8">Send us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
