import Layout from '@/components/Layout'
import ParallaxHero from '@/components/ParallaxHero'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import PricingOverview from '@/components/PricingOverview'
import FeaturesSection from '@/components/FeaturesSection'
import HeroReveal from '@/components/HeroReveal'
import AddonsHighlight from '@/components/AddonsHighlight'
import LeafDivider from '@/components/LeafDivider'
import ContactForm from '@/components/ContactForm'
import FAQ from '@/components/FAQ'

export default function HomePage() {
  return (
    <div>
      <ParallaxHero />
      <div className="section-wave-1">
        <Layout>
          {/* Why Choose SaaSquatch (Features) with hero-synced reveal */}
          <HeroReveal>
            <div className="section-wave-2">
              <FeaturesSection />
            </div>
          </HeroReveal>
          {/* Divider before Choose Your Own Adventure */}
          <div className="color-stripe my-8" />
          {/* Choose Your Own Adventure (Pricing Overview) */}
          <div className="section-wave-3">
            <PricingOverview />
          </div>
          {/* Customer Testimonials */}
          <TestimonialCarousel />
          <AddonsHighlight />
          {/* Leaf divider between sections */}
          <LeafDivider />
          {/* FAQ moved from pricing page */}
          <section id="faq">
            <FAQ />
          </section>
          <ContactForm />
        </Layout>
      </div>
    </div>
  )
}
