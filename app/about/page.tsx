import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - NEAT Engagements',
  description: 'Learn about NEAT Engagements, our mission, vision, and core values',
}

export default function AboutPage() {
  return (
    <div className="section-padding container">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">About NEAT Engagements</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Company Overview</h2>
          <p className="text-lg text-neutral-dark/70 mb-4">
            NEAT Engagements is a forward-thinking company dedicated to providing exceptional professional services 
            and engagement solutions to businesses across various industries. We combine industry expertise, 
            innovative thinking, and a commitment to excellence to deliver outstanding results.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-neutral-dark/70 mb-4">
            To empower businesses by delivering professional, reliable, and innovative solutions that drive growth, 
            foster collaboration, and create lasting value for our clients.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg text-neutral-dark/70 mb-4">
            To be the trusted partner of choice for businesses seeking professional engagement solutions, 
            known for our integrity, expertise, and commitment to client success.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Professionalism', description: 'We conduct ourselves with integrity and excellence in all endeavors.' },
              { title: 'Reliability', description: 'Our clients can depend on us to deliver consistent, quality results.' },
              { title: 'Innovation', description: 'We embrace new ideas and approaches to solve challenges effectively.' },
              { title: 'Collaboration', description: 'We believe in the power of teamwork and partnership.' },
              { title: 'Transparency', description: 'We maintain open, honest communication with all stakeholders.' },
              { title: 'Excellence', description: 'We are committed to exceeding expectations in everything we do.' },
            ].map((value) => (
              <div key={value.title} className="card">
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-neutral-dark/70">{value.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
