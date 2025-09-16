import Layout from '@/components/Layout'
import ParallaxHero from '@/components/ParallaxHero'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import PricingOverview from '@/components/PricingOverview'
import FeaturesSection from '@/components/FeaturesSection'
import AddonsHighlight from '@/components/AddonsHighlight'
import FinalCTA from '@/components/FinalCTA'

export default function HomePage() {
  return (
    <div>
      <ParallaxHero />
      <div style={{ height: '200vh', background: 'linear-gradient(to bottom, #f8fafc, #e2e8f0)' }}>
        <Layout>
          <TestimonialCarousel />
          <PricingOverview />
          <FeaturesSection />
          <AddonsHighlight />
          <FinalCTA />
        </Layout>
      </div>
    </div>
  )
}
