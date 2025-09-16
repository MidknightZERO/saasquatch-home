'use client'

import { motion, useScroll, useTransform } from 'framer-motion'

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Lightning Fast',
    description: 'Optimized hosting and CDN delivery means your site loads in milliseconds, not seconds.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Rock Solid Security',
    description: 'SSL certificates, regular backups, and security monitoring keep your data safe.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Easy to Manage',
    description: 'Intuitive admin panels and 48-hour content updates make running your site effortless.',
  },
]

export default function FeaturesSection() {
  const { scrollY } = useScroll()
  // Staggered windows with gaps to create a perceptible pause between cards
  const windows = [
    { start: 650, end: 800 },   // Card 1
    { start: 850, end: 1000 },  // Card 2 (begins ~2 wheel notches later)
    { start: 1050, end: 1200 }, // Card 3
  ]
  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark mb-4">
            Why choose SaaSquatch?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We focus on the outcomes that matter: faster sites, better security, and easier management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const win = windows[index]
            const opacity = useTransform(scrollY, [win.start, win.end], [0, 1])
            const y = useTransform(scrollY, [win.start, win.end], [60, 0])
            return (
              <motion.div
                key={feature.title}
                style={{ opacity, y }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-pine-400 to-campfire-400 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold text-dark mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
