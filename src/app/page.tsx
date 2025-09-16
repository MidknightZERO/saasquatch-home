import Layout from '@/components/Layout'
import ParallaxHero from '@/components/ParallaxHero'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import PricingOverview from '@/components/PricingOverview'
import FeaturesSection from '@/components/FeaturesSection'
import HeroReveal from '@/components/HeroReveal'
import AddonsHighlight from '@/components/AddonsHighlight'
import FinalCTA from '@/components/FinalCTA'
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
          {/* Choose Your Own Adventure (Pricing Overview) */}
          <div className="section-wave-3">
            <PricingOverview />
          </div>
          {/* Customer Testimonials */}
          <TestimonialCarousel />
          <AddonsHighlight />
          {/* Multicolor divider showcasing brand palette */}
          <div className="color-stripe my-12" />
          {/* FAQ moved from pricing page */}
          <section id="faq">
            <FAQ />
          </section>
          <FinalCTA />
        </Layout>
      </div>
    </div>
  )
}
