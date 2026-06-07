import Link from 'next/link'

const services = [
  {
    icon: '📊',
    title: 'Strategic Consulting',
    description: 'Expert guidance to develop and execute effective business strategies',
  },
  {
    icon: '⚙️',
    title: 'Operations Management',
    description: 'Streamline operations for maximum efficiency and productivity',
  },
  {
    icon: '🚀',
    title: 'Business Development',
    description: 'Expand your market presence and unlock new opportunities',
  },
]

export default function ServicesPreview() {
  return (
    <section className="section-padding bg-neutral-light">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-neutral-dark/70">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {services.map((service) => (
            <div key={service.title} className="card text-center">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-neutral-dark/70">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
