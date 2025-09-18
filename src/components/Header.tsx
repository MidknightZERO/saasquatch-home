'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import DarkModeToggle from './DarkModeToggle'

  const navigation = [
  { name: 'About', href: '#why', id: 'why' },
  { name: 'Pricing', href: '#adventure', id: 'adventure' },
  { name: 'FAQ', href: '#faq', id: 'faq' },
  { name: 'Contact', href: '#contact', id: 'contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showLogo, setShowLogo] = useState(false)
  const { scrollY } = useScroll()
  
  // Delay header appearance until hero leaves are gone
  // Show only after we're well past the hero; hide only when far above
  const APPEAR_SHOW = 820
  const APPEAR_END = 900
  const HIDE_THRESHOLD = 520
  let rafId: number | null = null
  const logoScale = useTransform(scrollY, [APPEAR_SHOW, APPEAR_END], [0, 1])
  const logoOpacity = useTransform(scrollY, [APPEAR_SHOW, APPEAR_END], [0, 1])

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      if (rafId) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        setShowLogo((prev) => {
          if (prev) {
            return latest > HIDE_THRESHOLD
          }
          return latest > APPEAR_SHOW
        })
      })
    })
    
    return () => unsubscribe()
  }, [scrollY])

  return (
    <motion.header 
      initial={{ opacity: 0, y: -100 }}
      animate={{ 
        opacity: showLogo ? 1 : 0,
        y: showLogo ? 0 : -100
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md relative mb-2 md:mb-3"
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              {/* Animated logo that grows from hero */}
              <motion.div
                style={{
                  scale: logoScale,
                  opacity: logoOpacity,
                }}
                className="flex items-center space-x-2"
              >
                <Image
                  src="/Logo.svg"
                  alt="SaaSquatch Logo"
                  width={28}
                  height={28}
                  className="w-7 h-7 md:w-8 md:h-8 object-contain"
                />
                <span className="text-xl font-heading font-bold text-dark dark:text-white">
                  SaaSquatch
                </span>
              </motion.div>
              
              {/* Fallback logo for when hero logo isn't visible */}
              <AnimatePresence>
                {!showLogo && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center space-x-2"
                  >
                    <Image
                      src="/Logo.svg"
                      alt="SaaSquatch Logo"
                      width={28}
                      height={28}
                      className="w-7 h-7 md:w-8 md:h-8 object-contain"
                    />
                    <span className="text-xl font-heading font-bold text-dark dark:text-white">
                      SaaSquatch
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.id)}
                className="text-gray-600 dark:text-gray-300 hover:text-pine-400 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
            <DarkModeToggle />
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, 'contact')}
              className="btn-primary"
            >
              Get a quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-pine-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-gray-100 dark:border-gray-700"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      handleSmoothScroll(e, item.id)
                      setMobileMenuOpen(false)
                    }}
                    className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-pine-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-2 flex items-center justify-between">
                  <DarkModeToggle />
                  <a
                    href="#contact"
                    onClick={(e) => {
                      handleSmoothScroll(e, 'contact')
                      setMobileMenuOpen(false)
                    }}
                    className="btn-primary flex-1 ml-2 justify-center"
                  >
                    Get a quote
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      {/* Multicolor divider stuck to header bottom */}
      <div className="color-stripe absolute left-0 right-0 bottom-0" />
    </motion.header>
  )
}
