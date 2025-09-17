'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { pricingTiers, formatCurrency } from '@/utils/currency'

export default function PricingOverview() {
  const tiers = Object.entries(pricingTiers)

  return (
    <section id="adventure" className="section section-wave-3">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark mb-4">
            Choose your adventure
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From simple brochure sites to complex custom software—we've got the perfect solution for your business.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {tiers.map(([key, tier]) => {
            return (
              <div
                key={key}
              className={`relative card-hover ${
                (tier as any).popular ? 'ring-2 ring-pine-400 shadow-glow-pine' : ''
              }`}
              >
              {(tier as any).popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="text-white px-4 py-1 rounded-full text-sm font-semibold" style={{ background: 'var(--brand, #58ab8b)' }}>
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center">
                <h3 className="text-2xl font-heading font-bold text-dark mb-2">
                  {tier.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {tier.description}
                </p>
                
                <div className="mb-6">
                  <div className="text-4xl font-bold text-dark mb-2">
                    {(tier as any).initialBuild ? (
                      <>
                        From {formatCurrency((tier as any).initialBuild)}
                        <span className="text-lg font-normal text-gray-600"> + {formatCurrency(tier.monthly12)}/mo</span>
                      </>
                    ) : (
                      <>
                        {formatCurrency(tier.monthly12)}
                        <span className="text-lg font-normal text-gray-600">/month</span>
                      </>
                    )}
                  </div>
                  <div className="text-sm text-gray-500">
                    12-month contract • {formatCurrency(tier.monthly30 || tier.monthly12)} rolling
                  </div>
                </div>

                <ul className="text-left space-y-3 mb-8">
                  {tier.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <svg
                        className="w-5 h-5 flex-shrink-0"
                        style={{ color: 'var(--brand, #58ab8b)' }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                  {tier.features.length > 4 && (
                    <li className="text-gray-500 text-sm">
                      +{tier.features.length - 4} more features
                    </li>
                  )}
                </ul>

                <Link
                  href={`/#contact`}
                  className={`w-full ${
                    (tier as any).popular ? 'btn-primary' : 'btn-outline'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
              </div>
            )
          })}
        </motion.div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            All prices exclude VAT • Clear contracts • No hidden fees
          </p>
          <Link
            href="/pricing"
            className="text-pine-400 hover:text-pine-500 font-semibold transition-colors duration-200"
          >
            View detailed pricing →
          </Link>
        </div>
      </div>
    </section>
  )
}
