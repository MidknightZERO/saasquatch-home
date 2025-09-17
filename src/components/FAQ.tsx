'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const faqs = [
  {
    question: 'What\'s included in the monthly hosting fee?',
    answer: 'Your monthly hosting includes SSL certificates, regular backups, security monitoring, 99.9% uptime guarantee, and our UK/EU hosting infrastructure. For custom software, it also includes basic monitoring and SLA-backed support.',
  },
  {
    question: 'Can I switch between plans?',
    answer: 'Absolutely! You can upgrade your plan at any time. Downgrades are available at the end of your current billing period. We\'ll help you migrate your data and ensure everything works perfectly.',
  },
  {
    question: 'What happens if I need to cancel?',
    answer: 'For rolling plans, you can cancel before your next renewal date. For annual contracts, we have an early exit policy with reasonable terms. We\'ll help you export your data and provide 30 days notice.',
  },
  {
    question: 'Do you handle domain registration and email?',
    answer: 'We can help you register domains and set up professional email addresses. Domain registration is £45 one-off per domain, and email hosting starts from £5/month per mailbox.',
  },
  {
    question: 'How quickly can you make content updates?',
    answer: 'We guarantee content updates within 48 hours for Basic and E-commerce plans, and 24 hours for Custom Software plans. Priority support customers get same-day updates.',
  },
  {
    question: 'Are there any transaction fees for e-commerce?',
    answer: 'We don\'t charge transaction fees, but payment processors like Stripe and PayPal have their own fees (typically 1.4% + 20p per transaction). We\'ll help you choose the best option for your business.',
  },
  {
    question: 'What if I need help migrating from another provider?',
    answer: 'Our Gentle Giant Migration service handles everything from simple site transfers to complex data migrations. Basic migrations start from £150, and we\'ll ensure zero downtime during the process.',
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes! All plans include email support. Priority support is available as an add-on, and Custom Software plans include SLA-backed support. We also offer Squatch Care packages for hands-on assistance.',
  },
  {
    question: 'Can you help with SEO and marketing?',
    answer: 'Absolutely! Our Trailblazer SEO Starter (£199 setup + £79/month) and Summit SEO Plus (£499 setup + £249/month) packages include keyword research, on-page optimization, and content creation.',
  },
  {
    question: 'What about accessibility and GDPR compliance?',
    answer: 'We ensure all sites meet WCAG 2.1 AA standards and are GDPR-ready by default. Our Accessibility Pawprint audit (£180) and GDPR Toolkit (£120 setup) provide additional compliance support.',
  },
  {
    question: 'Do you offer staging environments?',
    answer: 'Yes! Custom Software plans include staging environments by default. For other plans, our Staging Burrow add-on (£6/month) provides a safe testing environment.',
  },
  {
    question: 'What if I need custom integrations?',
    answer: 'We specialize in custom integrations! Our App Tracks integration service starts from £120 for simple connections, with complex API integrations at £65/hour. We\'ll scope the work upfront.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section bg-white relative overflow-hidden">
      {/* Left leaf decoration */}
      <div className="absolute left-[-12%] top-1/2 -translate-y-1/2 w-[100vw] md:w-[30vw] h-auto pointer-events-none z-10">
        <motion.div
          animate={{
            rotate: [0, -10, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        >
          <Image
            src="/left-cropped.svg"
            alt="Left Leaf"
            width={1000}
            height={1000}
            className="w-full h-full object-contain transform scale-[1.0]"
          />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark mb-4">
            Frequently asked questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers. If you don't see what you're looking for, just ask!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pine-400 focus:ring-inset"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-dark pr-4">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDownIcon className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    </motion.div>
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="/contact"
            className="btn-primary"
          >
            Contact us
          </a>
        </div>
      </div>
    </section>
  )
}
