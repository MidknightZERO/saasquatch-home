'use client'

import { motion } from 'framer-motion'

const comparisonFeatures = [
  { name: 'Pages included', basic: 'Up to 5', ecommerce: 'Up to 10', custom: 'Unlimited' },
  { name: 'Mobile responsive', basic: '✓', ecommerce: '✓', custom: '✓' },
  { name: 'SSL certificate', basic: '✓', ecommerce: '✓', custom: '✓' },
  { name: 'UK/EU hosting', basic: '✓', ecommerce: '✓', custom: '✓' },
  { name: 'Contact forms', basic: '1', ecommerce: 'Unlimited', custom: 'Unlimited' },
  { name: 'Monthly backups', basic: '✓', ecommerce: '✓', custom: '✓' },
  { name: 'Content updates', basic: '48-hour', ecommerce: '48-hour', custom: '24-hour' },
  { name: 'Product catalogue', basic: '✗', ecommerce: 'Up to 500', custom: 'Unlimited' },
  { name: 'Payment processing', basic: '✗', ecommerce: 'Stripe/PayPal', custom: 'Custom' },
  { name: 'Inventory management', basic: '✗', ecommerce: '✓', custom: 'Advanced' },
  { name: 'Custom integrations', basic: '✗', ecommerce: 'Limited', custom: 'Unlimited' },
  { name: 'API access', basic: '✗', ecommerce: '✗', custom: '✓' },
  { name: 'SLA support', basic: '✗', ecommerce: '✗', custom: '✓' },
]

export default function ComparisonTable() {
  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark mb-4">
            Detailed comparison
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See exactly what&apos;s included in each plan to find the perfect fit for your business.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full max-w-5xl mx-auto">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-4 font-semibold text-gray-900">Feature</th>
                <th className="text-center py-4 px-4 font-semibold text-gray-900">Basic Static Site</th>
                <th className="text-center py-4 px-4 font-semibold text-gray-900">E-commerce Site</th>
                <th className="text-center py-4 px-4 font-semibold text-gray-900">Custom Software</th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((feature, index) => (
                <motion.tr
                  key={feature.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="py-4 px-4 font-medium text-gray-900">{feature.name}</td>
                  <td className="py-4 px-4 text-center text-gray-700">{feature.basic}</td>
                  <td className="py-4 px-4 text-center text-gray-700">{feature.ecommerce}</td>
                  <td className="py-4 px-4 text-center text-gray-700">{feature.custom}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
