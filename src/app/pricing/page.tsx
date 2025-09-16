'use client'

import { useState } from 'react'
import Layout from '@/components/Layout'
import PricingToggle from '@/components/PricingToggle'
import PricingCards from '@/components/PricingCards'
import ComparisonTable from '@/components/ComparisonTable'
import AddonsSection from '@/components/AddonsSection'
import FAQ from '@/components/FAQ'

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true)

  return (
    <Layout>
      <div className="pt-16">
        {/* Hero Section */}
        <section className="section bg-gradient-to-br from-pine-50 to-campfire-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-dark mb-6">
              Simple, transparent pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Choose the plan that fits your business. All prices exclude VAT and include our 30-day money-back guarantee.
            </p>
            
            <PricingToggle onToggle={setIsAnnual} defaultAnnual={isAnnual} />
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="section bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <PricingCards isAnnual={isAnnual} />
          </div>
        </section>

        {/* Comparison Table */}
        <ComparisonTable />

        {/* Add-ons Section */}
        <AddonsSection />

        {/* FAQ */}
        <FAQ />
      </div>
    </Layout>
  )
}
