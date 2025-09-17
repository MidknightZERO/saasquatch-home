'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Image from 'next/image'

export default function ParallaxHero() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  const MAX_PHASE_SCROLL = 750
  const [mobileScaleFactor, setMobileScaleFactor] = useState(1)
  
  // Transform values for parallax effects
  const rawLogoScale = useTransform(scrollY, [0, 450], [0.9, 0.13])
  const rawLogoY = useTransform(scrollY, [0, 450], [0, -220])
  const rawLogoOpacity = useTransform(scrollY, [0, 380], [1, 0])
  const springCfg = { stiffness: 140, damping: 24, mass: 0.25 }
  const logoScale = useSpring(rawLogoScale, springCfg)
  const logoY = useSpring(rawLogoY, springCfg)
  const logoOpacity = useSpring(rawLogoOpacity, springCfg)
  
  // Leaf animations - keep growing until fade, with offset speeds and rotation
  const rawLeftLeafY = useTransform(scrollY, [0, MAX_PHASE_SCROLL], [8, -420])
  const rawLeftLeafScale = useTransform(scrollY, [0, 260, 600], [2.0, 2.5, 3.0])
  const rawLeftLeafOpacity = useTransform(scrollY, [0, 520, MAX_PHASE_SCROLL], [1, 1, 0])
  const rawLeftLeafRotate = useTransform(scrollY, [0, MAX_PHASE_SCROLL], [-45, 0])
  // Mirror the right-leaf sweep: drift rightwards then return
  const rawLeftLeafX = useTransform(scrollY, [0, 350, MAX_PHASE_SCROLL], [-10, 120, 0])
  const leftLeafY = useSpring(rawLeftLeafY, springCfg)
  const leftLeafScale = useSpring(rawLeftLeafScale, springCfg)
  const leftLeafScaleAdj = useTransform(leftLeafScale, (v) => v * mobileScaleFactor)
  const leftLeafOpacity = useSpring(rawLeftLeafOpacity, springCfg)
  const leftLeafRotate = useSpring(rawLeftLeafRotate, springCfg)
  const leftLeafX = useSpring(rawLeftLeafX, springCfg)
  
  const rawRightLeafY = useTransform(scrollY, [0, MAX_PHASE_SCROLL], [8, -380])
  const rawRightLeafScale = useTransform(scrollY, [0, 200, 540], [2.2, 2.8, 3.4])
  const rawRightLeafOpacity = useTransform(scrollY, [0, 500, MAX_PHASE_SCROLL], [1, 1, 0])
  const rawRightLeafRotate = useTransform(scrollY, [0, MAX_PHASE_SCROLL], [45, 0])
  // Nudge right leaf further left mid-scroll, then return as fade begins
  const rawRightLeafX = useTransform(scrollY, [0, 350, MAX_PHASE_SCROLL], [10, -120, 0])
  const rightLeafY = useSpring(rawRightLeafY, springCfg)
  const rightLeafScale = useSpring(rawRightLeafScale, springCfg)
  const rightLeafScaleAdj = useTransform(rightLeafScale, (v) => v * mobileScaleFactor)
  const rightLeafOpacity = useSpring(rawRightLeafOpacity, springCfg)
  const rightLeafRotate = useSpring(rawRightLeafRotate, springCfg)
  const rightLeafX = useSpring(rawRightLeafX, springCfg)
  
  // Background parallax
  const rawBackgroundY = useTransform(scrollY, [0, MAX_PHASE_SCROLL], [0, -220])
  const backgroundY = useSpring(rawBackgroundY, springCfg)

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setIsScrolled(latest > 100)
    })
    
    return () => unsubscribe()
  }, [scrollY])

  useEffect(() => {
    const handle = () => {
      setMobileScaleFactor(window.innerWidth < 640 ? 0.75 : 1)
    }
    handle()
    window.addEventListener('resize', handle)
    return () => window.removeEventListener('resize', handle)
  }, [])

  // Allow native scrolling (no interception)

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
          x: leftLeafX,
          y: leftLeafY,
          opacity: leftLeafOpacity,
          scale: leftLeafScaleAdj,
          rotate: leftLeafRotate,
          willChange: 'transform, opacity',
          transform: 'translateZ(0)'
        }}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 z-20"
      >
        <img
          src="/left-cropped.svg"
          alt="Decorative leaves"
          width={500}
          height={700}
          className="w-auto h-[700px] select-none"
          draggable={false}
        />
      </motion.div>

      {/* Right Leaf */}
      <motion.div
        style={{
          x: rightLeafX,
          y: rightLeafY,
          opacity: rightLeafOpacity,
          scale: rightLeafScaleAdj,
          rotate: rightLeafRotate,
          willChange: 'transform, opacity',
          transform: 'translateZ(0)'
        }}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 z-20"
      >
        <img
          src="/right-cropped.svg"
          alt="Decorative leaves"
          width={500}
          height={700}
          className="w-auto h-[700px] select-none"
          draggable={false}
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
            className="w-auto h-[320px] sm:h-[360px] md:h-[400px] object-contain drop-shadow-2xl"
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
        className="absolute bottom-8 inset-x-0 mx-auto w-max z-30 flex flex-col items-center text-white px-4"
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
