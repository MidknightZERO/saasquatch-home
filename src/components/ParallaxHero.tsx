'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

export default function ParallaxHero() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLeafPhase, setIsLeafPhase] = useState(true)
  const { scrollY } = useScroll()
  
  // Transform values for parallax effects
  const logoScale = useTransform(scrollY, [0, 400], [1, 0.15])
  const logoY = useTransform(scrollY, [0, 400], [0, -200])
  const logoOpacity = useTransform(scrollY, [0, 300], [1, 0])
  
  // Leaf animations - keep growing until fade
  const leftLeafY = useTransform(scrollY, [0, 600], [0, -400])
  const leftLeafScale = useTransform(scrollY, [0, 200, 500], [1, 1.5, 2.5])
  const leftLeafOpacity = useTransform(scrollY, [0, 400, 600], [1, 1, 0])
  
  const rightLeafY = useTransform(scrollY, [0, 600], [0, -350])
  const rightLeafScale = useTransform(scrollY, [0, 200, 500], [1, 1.4, 2.2])
  const rightLeafOpacity = useTransform(scrollY, [0, 400, 600], [1, 1, 0])
  
  // Background parallax
  const backgroundY = useTransform(scrollY, [0, 600], [0, -200])

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setIsScrolled(latest > 100)
      setIsLeafPhase(latest < 600)
    })
    
    return () => unsubscribe()
  }, [scrollY])

  // Control scroll behavior during leaf phase
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isLeafPhase && scrollY.get() < 600) {
        e.preventDefault()
        // Allow controlled scrolling only
        const currentScroll = scrollY.get()
        const newScroll = Math.min(currentScroll + e.deltaY * 0.5, 600)
        window.scrollTo(0, newScroll)
      }
    }
    
    window.addEventListener('wheel', handleWheel, { passive: false })
    
    return () => {
      window.removeEventListener('wheel', handleWheel)
    }
  }, [isLeafPhase, scrollY])

  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-br from-pine-50 to-campfire-50">
      {/* Background with subtle parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-20"
      >
        <div className="absolute inset-0 bg-[url('/hero-bg.svg')] bg-cover bg-center bg-no-repeat" />
      </motion.div>

      {/* Left Leaf */}
      <motion.div
        style={{
          y: leftLeafY,
          opacity: leftLeafOpacity,
          scale: leftLeafScale,
        }}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 z-20"
      >
        <Image
          src="/1.svg"
          alt="Decorative leaves"
          width={500}
          height={700}
          className="w-auto h-[700px] object-contain"
          priority
        />
      </motion.div>

      {/* Right Leaf */}
      <motion.div
        style={{
          y: rightLeafY,
          opacity: rightLeafOpacity,
          scale: rightLeafScale,
        }}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 z-20"
      >
        <Image
          src="/2.svg"
          alt="Decorative leaves"
          width={500}
          height={700}
          className="w-auto h-[700px] object-contain"
          priority
        />
      </motion.div>

      {/* Company Logo */}
      <motion.div
        style={{
          scale: logoScale,
          y: logoY,
          opacity: logoOpacity,
        }}
        className="absolute inset-0 flex items-center justify-center z-10"
      >
        <div className="relative">
          <Image
            src="/Logo.svg"
            alt="SaaSquatch Logo"
            width={600}
            height={400}
            className="w-auto h-[400px] object-contain drop-shadow-2xl"
            priority
          />
          
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-pine-400/20 to-campfire-400/20 rounded-full blur-3xl scale-150" />
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: isScrolled ? 0 : 1, y: isScrolled ? 20 : 0 }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center text-white"
      >
        <span className="text-sm mb-2">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </motion.div>
      </motion.div>
    </div>
  )
}
