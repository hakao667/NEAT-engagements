import type { Metadata } from 'next'
import ApplicantForm from '@/components/ApplicantForm'

export const metadata: Metadata = {
  title: 'Careers - NEAT Engagements',
  description: 'Join our team. Apply now to work with NEAT Engagements.',
}

export default function CareersPage() {
  return (
    <div>
      <div className="hero">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl text-white/90">
            We're always looking for talented professionals to join us
          </p>
        </div>
      </div>

      <div className="section-padding container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* About Careers */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-6">Why Join Us?</h2>

            <div className="space-y-4">
              <div className="card">
                <h3 className="font-semibold text-primary-600 mb-2">Growth Opportunities</h3>
                <p className="text-sm text-neutral-dark/70">
                  We invest in our team members' professional development and career advancement.
                </p>
              </div>

              <div className="card">
                <h3 className="font-semibold text-primary-600 mb-2">Collaborative Culture</h3>
                <p className="text-sm text-neutral-dark/70">
                  Work in an environment that values teamwork, innovation, and mutual respect.
                </p>
              </div>

              <div className="card">
                <h3 className="font-semibold text-primary-600 mb-2">Competitive Benefits</h3>
                <p className="text-sm text-neutral-dark/70">
                  We offer competitive salaries, benefits packages, and flexible work arrangements.
                </p>
              </div>

              <div className="card">
                <h3 className="font-semibold text-primary-600 mb-2">Mission-Driven Work</h3>
                <p className="text-sm text-neutral-dark/70">
                  Make an impact by helping our clients succeed and grow their businesses.
                </p>
              </div>
            </div>
          </div>

          {/* Application Form */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-8">Submit Your Application</h2>
            <ApplicantForm />
          </div>
        </div>
      </div>
    </div>
  )
}
