import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="hero min-h-[600px] md:min-h-[700px] flex items-center">
      <div className="container">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional Engagement Solutions for Your Business
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Transform your business with our expert services and proven strategies. 
            We're committed to your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary inline-block text-center">
              Get Started
            </Link>
            <Link href="/services" className="btn-secondary inline-block text-center border-white text-white hover:bg-white/10">
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
