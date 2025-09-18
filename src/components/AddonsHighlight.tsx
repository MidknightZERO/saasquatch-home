'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { addonServices, formatCurrency } from '@/utils/currency'

const featuredAddons = addonServices.slice(0, 6)

export default function AddonsHighlight() {
  return (
    <section className="section bg-gradient-to-br from-pine-50 to-campfire-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark mb-4">
            Boost your footprint
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our most popular add-ons to supercharge your website and grow your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {featuredAddons.map((addon, index) => (
            <motion.div
              key={addon.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group hover:shadow-glow transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-heading font-semibold text-dark group-hover:text-pine-400 transition-colors duration-200">
                  {addon.name}
                </h3>
                <div className="text-right">
                  <div className="text-lg font-bold text-pine-400">
                    {addon.price === 15 ? (
                      <>
                        {formatCurrency(addon.price)}
                        <span className="text-sm font-normal text-gray-600">/mo</span>
                      </>
                    ) : addon.price === 199 ? (
                      <>
                        {formatCurrency(addon.price)}
                        <span className="text-sm font-normal text-gray-600"> setup</span>
                      </>
                    ) : (
                      <>
                        {formatCurrency(addon.price)}
                        <span className="text-sm font-normal text-gray-600"> one-off</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                {addon.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 capitalize">
                  {addon.category}
                </span>
                <Link
                  href="/#contact"
                  className="text-pine-400 hover:text-pine-500 text-sm font-medium transition-colors duration-200"
                >
                  Learn more →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/#contact"
            className="btn-primary"
          >
            View all add-ons
          </Link>
        </div>
      </div>
    </section>
  )
}
