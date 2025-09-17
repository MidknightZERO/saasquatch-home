'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const updateMessage = () => {
    const { service } = formData
    let messageText = ''
    
    if (service === 'Basic Website') {
      messageText = `Hi SaaSquatch team, I'm looking for a ${service}. `
    } else if (service === 'e-Commerce Store') {
      messageText = `Hi SaaSquatch team, I'm looking for an ${service}. `
    } else if (service === 'Custom Software') {
      messageText = `Hi SaaSquatch team, I'm looking for a Custom Software solution. `
    }
    
    if (messageText) {
      setFormData(prev => ({ ...prev, message: messageText }))
    }
  }

  return (
    <section className="section bg-dark text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/hero-bg.svg')] bg-cover bg-center bg-no-repeat transform scale-x-[-1]" />
      </div>
      
      {/* Floating shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 right-10 w-20 h-20 rounded-full bg-gradient-to-br from-pine-400/20 to-campfire-400/20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-5 w-16 h-16 rounded-full bg-gradient-to-br from-campfire-400/20 to-twilight-400/20"
          animate={{
            y: [0, -15, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-[#0F172A] inline-block bg-white px-4 py-2 rounded-xl">
              <span className="text-[#0F172A]">Let's Build Something </span>
              <span className="gradient-text">Amazing</span>
              <span className="text-[#0F172A]"> Together</span>
            </h2>
            <p className="text-xl text-gray-300 mb-2">
              Get a free consultation and quote for your project
            </p>
            <p className="text-gray-400">
              No setup fees • Cancel anytime • 30-day money-back guarantee
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            {/* Top gradient stripe */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pine-400 via-campfire-400 to-twilight-400 rounded-t-2xl" />
            
            <form action="https://formspree.io/f/mblavdng" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-semibold text-[#0F172A]">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-dark placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pine-400 focus:border-transparent transition-all duration-200"
                    style={{ color: '#0F172A' }}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-[#0F172A]">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-dark placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pine-400 focus:border-transparent transition-all duration-200"
                    style={{ color: '#0F172A' }}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="block text-sm font-semibold text-[#0F172A]">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Your Company Ltd."
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-dark placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pine-400 focus:border-transparent transition-all duration-200"
                  style={{ color: '#0F172A' }}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="block text-sm font-semibold text-[#0F172A]">
                  Service Type <span className="text-red-500">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={(e) => {
                    handleInputChange(e)
                    updateMessage()
                  }}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-dark focus:outline-none focus:ring-2 focus:ring-pine-400 focus:border-transparent transition-all duration-200 appearance-none cursor-pointer"
                  style={{ color: '#0F172A' }}
                >
                  <option value="" className="bg-white text-dark" style={{ color: '#0F172A' }}>Select a service...</option>
                  <option value="Basic Website" className="bg-white text-dark" style={{ color: '#0F172A' }}>Basic Website</option>
                  <option value="e-Commerce Store" className="bg-white text-dark" style={{ color: '#0F172A' }}>e-Commerce Store</option>
                  <option value="Custom Software" className="bg-white text-dark" style={{ color: '#0F172A' }}>Custom Software</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-semibold text-[#0F172A]">
                  Project Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Hi SaaSquatch team, I'm looking for a..."
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-dark placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pine-400 focus:border-transparent transition-all duration-200 resize-vertical"
                  style={{ color: '#0F172A' }}
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-pine-400 to-campfire-400 text-white font-semibold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-pine-400/25 transition-all duration-200 transform hover:-translate-y-1 active:translate-y-0"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get My Free Quote
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}