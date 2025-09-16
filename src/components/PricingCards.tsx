'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { pricingTiers, formatCurrency } from '@/utils/currency'

interface PricingCardsProps {
  isAnnual: boolean
}

export default function PricingCards({ isAnnual }: PricingCardsProps) {
  const tiers = Object.entries(pricingTiers)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {tiers.map(([key, tier], index) => (
        <motion.div
          key={key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className={`relative card-hover ${
            (tier as any).popular ? 'ring-2 ring-pine-400 shadow-glow-pine scale-105' : ''
          }`}
        >
          {(tier as any).popular && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-pine-400 to-campfire-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
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
            
            <div className="mb-8">
              {(tier as any).initialBuild ? (
                <div>
                  <div className="text-3xl font-bold text-dark mb-2">
                    From {formatCurrency((tier as any).initialBuild)}
                  </div>
                  <div className="text-lg text-gray-600 mb-2">
                    + {formatCurrency(tier.monthly12)}/month hosting
                  </div>
                  <div className="text-sm text-gray-500">
                    Minimum 12-month hosting term
                  </div>
                </div>
              ) : (
                <div>
                  <div className="text-4xl font-bold text-dark mb-2">
                    {isAnnual ? formatCurrency(tier.monthly12) : formatCurrency(tier.monthly30 || tier.monthly12)}
                    <span className="text-lg font-normal text-gray-600">/month</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {isAnnual ? '12-month contract' : '30-day rolling'}
                    {isAnnual && (tier as any).monthly30 && (
                      <span className="text-campfire-400 font-semibold ml-2">
                        Save {formatCurrency(((tier as any).monthly30 || tier.monthly12) - tier.monthly12)}/month
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>

            <ul className="text-left space-y-3 mb-8">
              {tier.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-5 text-pine-400 flex-shrink-0"
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
            </ul>

            <Link
              href={`/contact?plan=${key}`}
              className={`w-full ${
                (tier as any).popular ? 'btn-primary' : 'btn-outline'
              }`}
            >
              {tier.cta}
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
