'use client'

import { PropsWithChildren } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function HeroReveal({ children }: PropsWithChildren) {
  const { scrollY } = useScroll()
  // Sync with hero fade window (approx 500-750px in ParallaxHero)
  const opacity = useTransform(scrollY, [500, 750], [0, 1])
  const translateY = useTransform(scrollY, [500, 750], [60, 0])

  return (
    <motion.div style={{ opacity, y: translateY }}>
      {children}
    </motion.div>
  )
}


