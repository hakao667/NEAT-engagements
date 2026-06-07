import HeroSection from '@/components/HeroSection'
import ServicesPreview from '@/components/ServicesPreview'
import WhyChooseNeat from '@/components/WhyChooseNeat'
import ContactCTA from '@/components/ContactCTA'

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="section-padding container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About NEAT Engagements</h2>
          <p className="text-lg text-neutral-dark/70">
            We are a dedicated team of professionals committed to delivering excellence in every engagement. 
            With years of industry experience, we provide comprehensive solutions tailored to your unique business needs.
          </p>
        </div>
      </section>
      <ServicesPreview />
      <WhyChooseNeat />
      <ContactCTA />
    </>
  )
}
