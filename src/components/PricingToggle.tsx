'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface PricingToggleProps {
  onToggle: (isAnnual: boolean) => void
  defaultAnnual?: boolean
}

export default function PricingToggle({ onToggle, defaultAnnual = true }: PricingToggleProps) {
  const [isAnnual, setIsAnnual] = useState(defaultAnnual)

  const handleToggle = (newIsAnnual: boolean) => {
    setIsAnnual(newIsAnnual)
    onToggle(newIsAnnual)
  }

  return (
    <div className="flex items-center justify-center mb-12">
      <div className="flex items-center space-x-4 bg-gray-100 rounded-full p-1">
        <button
          onClick={() => handleToggle(false)}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            !isAnnual
              ? 'bg-white text-pine-400 shadow-sm'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          30-day rolling
        </button>
        <button
          onClick={() => handleToggle(true)}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 relative ${
            isAnnual
              ? 'bg-white text-pine-400 shadow-sm'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          <span className="relative z-10">12-month contract</span>
          {isAnnual && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 bg-campfire-400 text-white text-xs px-2 py-0.5 rounded-full"
            >
              Save
            </motion.span>
          )}
        </button>
      </div>
    </div>
  )
}
