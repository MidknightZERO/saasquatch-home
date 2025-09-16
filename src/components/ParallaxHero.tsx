'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Image from 'next/image'

export default function ParallaxHero() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLeafPhase, setIsLeafPhase] = useState(true)
  const { scrollY } = useScroll()
  const rafIdRef = useRef<number | null>(null)
  const targetScrollRef = useRef<number>(0)
  const MAX_PHASE_SCROLL = 750
  
  // Transform values for parallax effects
  const rawLogoScale = useTransform(scrollY, [0, 450], [1, 0.15])
  const rawLogoY = useTransform(scrollY, [0, 450], [0, -220])
  const rawLogoOpacity = useTransform(scrollY, [0, 380], [1, 0])
  const springCfg = { stiffness: 140, damping: 24, mass: 0.25 }
  const logoScale = useSpring(rawLogoScale, springCfg)
  const logoY = useSpring(rawLogoY, springCfg)
  const logoOpacity = useSpring(rawLogoOpacity, springCfg)
  
  // Leaf animations - keep growing until fade
  const rawLeftLeafY = useTransform(scrollY, [0, MAX_PHASE_SCROLL], [0, -420])
  const rawLeftLeafScale = useTransform(scrollY, [0, 240, 560], [1, 1.6, 2.6])
  const rawLeftLeafOpacity = useTransform(scrollY, [0, 500, MAX_PHASE_SCROLL], [1, 1, 0])
  const leftLeafY = useSpring(rawLeftLeafY, springCfg)
  const leftLeafScale = useSpring(rawLeftLeafScale, springCfg)
  const leftLeafOpacity = useSpring(rawLeftLeafOpacity, springCfg)
  
  const rawRightLeafY = useTransform(scrollY, [0, MAX_PHASE_SCROLL], [0, -380])
  const rawRightLeafScale = useTransform(scrollY, [0, 240, 560], [1, 1.5, 2.3])
  const rawRightLeafOpacity = useTransform(scrollY, [0, 500, MAX_PHASE_SCROLL], [1, 1, 0])
  const rightLeafY = useSpring(rawRightLeafY, springCfg)
  const rightLeafScale = useSpring(rawRightLeafScale, springCfg)
  const rightLeafOpacity = useSpring(rawRightLeafOpacity, springCfg)
  
  // Background parallax
  const rawBackgroundY = useTransform(scrollY, [0, MAX_PHASE_SCROLL], [0, -220])
  const backgroundY = useSpring(rawBackgroundY, springCfg)

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setIsScrolled(latest > 100)
      setIsLeafPhase(latest < MAX_PHASE_SCROLL)
    })
    
    return () => unsubscribe()
  }, [scrollY])

  // Control scroll behavior during leaf phase (smoothed with rAF)
  useEffect(() => {
    const animate = () => {
      const current = window.scrollY
      const target = Math.min(targetScrollRef.current, MAX_PHASE_SCROLL)
      const delta = (target - current) * 0.2
      if (Math.abs(delta) > 0.5) {
        window.scrollTo(0, current + delta)
        rafIdRef.current = requestAnimationFrame(animate)
      } else {
        if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current)
        rafIdRef.current = null
      }
    }

    const handleWheel = (e: WheelEvent) => {
      if (isLeafPhase && scrollY.get() < MAX_PHASE_SCROLL) {
        e.preventDefault()
        targetScrollRef.current = Math.max(0, Math.min(MAX_PHASE_SCROLL, window.scrollY + e.deltaY))
        if (!rafIdRef.current) rafIdRef.current = requestAnimationFrame(animate)
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => {
      window.removeEventListener('wheel', handleWheel)
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current)
    }
  }, [isLeafPhase, scrollY])

  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-br from-pine-50 to-campfire-50">
      {/* Background with subtle parallax */}
      <motion.div 
        style={{ y: backgroundY, willChange: 'transform', transform: 'translateZ(0)' }}
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
          willChange: 'transform',
          transform: 'translateZ(0)'
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
          willChange: 'transform',
          transform: 'translateZ(0)'
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
          willChange: 'transform',
          transform: 'translateZ(0)'
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
