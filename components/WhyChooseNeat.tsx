const reasons = [
  {
    title: 'Professional Service',
    description: 'We conduct ourselves with the highest standards of integrity and professionalism',
  },
  {
    title: 'Industry Experience',
    description: 'Years of proven experience across diverse industries and business sectors',
  },
  {
    title: 'Reliable Support',
    description: 'Dedicated support team ready to assist you every step of the way',
  },
  {
    title: 'Client Satisfaction',
    description: 'Our success is measured by the success and satisfaction of our clients',
  },
]

export default function WhyChooseNeat() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose NEAT Engagements</h2>
          <p className="text-lg text-neutral-dark/70">
            Discover what sets us apart from the competition
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary-100 text-primary-600 font-bold">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
                <p className="text-neutral-dark/70">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
