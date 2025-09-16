'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { pricingTiers, formatCurrency } from '@/utils/currency'

export default function PricingOverview() {
  const tiers = Object.entries(pricingTiers)
  const { scrollY } = useScroll()
  const windows = [
    { start: 1300, end: 1450 },
    { start: 1480, end: 1630 },
    { start: 1660, end: 1810 },
  ]

  // Prepare transforms outside of map
  const p0Opacity = useTransform(scrollY, [windows[0].start, windows[0].end], [0, 1])
  const p0Y = useTransform(scrollY, [windows[0].start, windows[0].end], [60, 0])
  const p1Opacity = useTransform(scrollY, [windows[1].start, windows[1].end], [0, 1])
  const p1Y = useTransform(scrollY, [windows[1].start, windows[1].end], [60, 0])
  const p2Opacity = useTransform(scrollY, [windows[2].start, windows[2].end], [0, 1])
  const p2Y = useTransform(scrollY, [windows[2].start, windows[2].end], [60, 0])
  const lockedRef = useRef(false)
  useEffect(() => {
    const unsub = scrollY.on('change', (v) => {
      // Lock briefly when each card begins
      windows.forEach((w) => {
        if (!lockedRef.current && v >= w.start && v <= w.start + 40) {
          lockedRef.current = true
          const prev = document.body.style.overflow
          document.body.style.overflow = 'hidden'
          setTimeout(() => {
            document.body.style.overflow = prev
            setTimeout(() => (lockedRef.current = false), 400)
          }, 500)
        }
      })
    })
    return () => unsub()
  }, [scrollY, windows])

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map(([key, tier], index) => {
            const opacity = [p0Opacity, p1Opacity, p2Opacity][index]
            const y = [p0Y, p1Y, p2Y][index]
            return (
              <motion.div
                key={key}
                style={{ opacity, y }}
              className={`relative card-hover ${
                (tier as any).popular ? 'ring-2 ring-pine-400 shadow-glow-pine' : ''
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
                  {tier.features.length > 4 && (
                    <li className="text-gray-500 text-sm">
                      +{tier.features.length - 4} more features
                    </li>
                  )}
                </ul>

                <Link
                  href={`/pricing#${key}`}
                  className={`w-full ${
                    (tier as any).popular ? 'btn-primary' : 'btn-outline'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
              </motion.div>
            )
          })}
        </div>

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
