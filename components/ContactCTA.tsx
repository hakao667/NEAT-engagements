import Link from 'next/link'

export default function ContactCTA() {
  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-500 text-white">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Contact us today to discuss how NEAT Engagements can help your business succeed.
          </p>
          <Link href="/contact" className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
            Contact Us Now
          </Link>
        </div>
      </div>
    </section>
  )
}
