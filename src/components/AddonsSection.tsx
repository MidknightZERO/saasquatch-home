'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { addonServices, formatCurrency } from '@/utils/currency'

const categories = ['All', 'SEO', 'Performance', 'Support', 'Content', 'Security']

export default function AddonsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredAddons = selectedCategory === 'All' 
    ? addonServices 
    : addonServices.filter(addon => addon.category === selectedCategory.toLowerCase())

  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark mb-4">
            Add-on services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Supercharge your website with our professional add-on services.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-pine-400 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredAddons.map((addon, index) => (
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
                  href="/contact"
                  className="text-pine-400 hover:text-pine-500 text-sm font-medium transition-colors duration-200"
                >
                  Get quote →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need something custom? We're always happy to discuss bespoke solutions.
          </p>
          <Link
            href="/contact"
            className="btn-primary"
          >
            Contact us about add-ons
          </Link>
        </div>
      </div>
    </section>
  )
}
