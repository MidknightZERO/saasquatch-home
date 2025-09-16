import Layout from '@/components/Layout'
import ParallaxHero from '@/components/ParallaxHero'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import PricingOverview from '@/components/PricingOverview'
import FeaturesSection from '@/components/FeaturesSection'
import HeroReveal from '@/components/HeroReveal'
import AddonsHighlight from '@/components/AddonsHighlight'
import FinalCTA from '@/components/FinalCTA'

export default function HomePage() {
  return (
    <div>
      <ParallaxHero />
      <div style={{ background: 'linear-gradient(to bottom, #f8fafc, #e2e8f0)' }}>
        <Layout>
          {/* Why Choose SaaSquatch (Features) with hero-synced reveal */}
          <HeroReveal>
            <FeaturesSection />
          </HeroReveal>
          {/* Choose Your Own Adventure (Pricing Overview) */}
          <PricingOverview />
          {/* Customer Testimonials */}
          <TestimonialCarousel />
          <AddonsHighlight />
          <FinalCTA />
        </Layout>
      </div>
    </div>
  )
}
