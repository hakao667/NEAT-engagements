import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Company History - NEAT Engagements',
  description: 'Explore the rich history and milestones of NEAT Engagements',
}

const timeline = [
  {
    year: 2010,
    title: 'Company Founded',
    description: 'NEAT Engagements was established with a vision to provide exceptional professional services.',
  },
  {
    year: 2012,
    title: 'First Major Milestone',
    description: 'Achieved significant growth and expanded our team to serve more clients effectively.',
  },
  {
    year: 2015,
    title: 'Market Expansion',
    description: 'Extended our services to new markets and established partnerships with industry leaders.',
  },
  {
    year: 2018,
    title: 'Innovation Initiative',
    description: 'Launched innovative service offerings and digital solutions to stay ahead of market trends.',
  },
  {
    year: 2021,
    title: 'Strategic Growth',
    description: 'Expanded our team and capabilities to better serve our growing client base.',
  },
  {
    year: 2024,
    title: 'Digital Transformation',
    description: 'Embraced digital transformation and launched our new online platform for client engagement.',
  },
]

export default function HistoryPage() {
  return (
    <div>
      <div className="hero">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our History</h1>
          <p className="text-xl text-white/90">
            From humble beginnings to industry leaders
          </p>
        </div>
      </div>

      <div className="section-padding container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-secondary-500" />

            {/* Timeline items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={item.year} className={`md:flex gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-1" />
                  <div className="relative flex items-center justify-center">
                    <div className="hidden md:flex w-12 h-12 bg-white border-4 border-primary-500 rounded-full items-center justify-center z-10">
                      <div className="w-4 h-4 bg-primary-500 rounded-full" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="card">
                      <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold mb-2">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-neutral-dark/70">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 p-8 bg-primary-50 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Looking to the Future</h3>
            <p className="text-lg text-neutral-dark/70">
              As we continue to grow, we remain committed to our core values of excellence, innovation, and client satisfaction. 
              We're excited about the opportunities ahead and look forward to serving you and helping your business succeed.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
