import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services - NEAT Engagements',
  description: 'Explore our comprehensive professional services and solutions',
}

const services = [
  {
    title: 'Strategic Consulting',
    description: 'Expert guidance to help your business develop and execute effective strategies.',
    benefits: ['Market analysis', 'Business planning', 'Risk assessment', 'Growth strategies'],
  },
  {
    title: 'Operations Management',
    description: 'Streamline your operations for maximum efficiency and productivity.',
    benefits: ['Process optimization', 'Workflow improvement', 'Cost reduction', 'Quality assurance'],
  },
  {
    title: 'Business Development',
    description: 'Expand your market presence and unlock new opportunities.',
    benefits: ['Partnership development', 'Market expansion', 'Lead generation', 'Client acquisition'],
  },
  {
    title: 'Professional Support',
    description: 'Dedicated support services to ensure your success.',
    benefits: ['Expert consultation', 'Implementation support', 'Training programs', 'Ongoing guidance'],
  },
  {
    title: 'Digital Solutions',
    description: 'Modern technology solutions for the digital age.',
    benefits: ['Digital transformation', 'Technology integration', 'Automation', 'Digital marketing'],
  },
  {
    title: 'Talent Management',
    description: 'Building and developing high-performing teams.',
    benefits: ['Recruitment support', 'Team development', 'Training', 'Talent retention'],
  },
]

export default function ServicesPage() {
  return (
    <div>
      <div className="hero">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-white/90">
            Comprehensive solutions designed to drive your business forward
          </p>
        </div>
      </div>

      <div className="section-padding container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="card group">
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600">{service.title}</h3>
              <p className="text-neutral-dark/70 mb-4">{service.description}</p>
              <div className="mb-6">
                <h4 className="font-semibold text-sm text-primary-600 mb-2">Key Benefits:</h4>
                <ul className="space-y-2">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="text-sm text-neutral-dark/70 flex items-start">
                      <span className="text-primary-500 mr-2">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="btn-primary w-full">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
