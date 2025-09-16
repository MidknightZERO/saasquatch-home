'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function FinalCTA() {
  return (
    <section className="section bg-dark-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/hero-bg.svg')] bg-cover bg-center bg-no-repeat transform scale-x-[-1]" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Ready to leave a bigger{' '}
              <span className="text-campfire-400">footprint</span>?
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            Join hundreds of businesses that have grown with SaaSquatch. Let's build something amazing together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/contact"
              className="btn-secondary text-lg px-8 py-4 group relative overflow-hidden"
            >
              <span className="relative z-10">Get started today</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-campfire-500 to-pine-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </Link>
            <Link
              href="/pricing"
              className="btn-outline border-white text-white hover:bg-white hover:text-dark text-lg px-8 py-4"
            >
              View pricing
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-gray-400 text-sm"
          >
            <p>No setup fees • Cancel anytime • 30-day money-back guarantee</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
