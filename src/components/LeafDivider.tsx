'use client'

import { motion } from 'framer-motion'

export default function LeafDivider() {
  // Fade the edges without hiding the content by using a CSS mask
  const edgeMask = {
    WebkitMaskImage:
      'linear-gradient(90deg, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 24px, rgba(0,0,0,1) calc(100% - 24px), rgba(0,0,0,0) 100%)',
    maskImage:
      'linear-gradient(90deg, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 24px, rgba(0,0,0,1) calc(100% - 24px), rgba(0,0,0,0) 100%)',
  } as React.CSSProperties

  return (
    <div
      className="relative select-none overflow-x-hidden overflow-y-visible py-16 md:py-10 z-20"
      style={edgeMask}
    >
      {/* stripe */}
      <div className="color-stripe h-1 rounded-full max-w-6xl mx-auto" />

      {/* flipped leaf group */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center rotate-180">
        {/* Left leaves (visually right after rotate) */}
        <motion.div
          initial={{ y: 10, opacity: 0.95, rotate: -6, scale: 1.1 }}
          animate={{ y: [10, 0, 10] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10"
          style={{ willChange: 'transform, opacity' }}
        >
          <img
            src="/left-cropped.svg"
            alt="Decorative leaves"
            width={420}
            height={600}
            className="w-auto h-[380px] md:h-[540px]"
            draggable={false}
          />
        </motion.div>

        {/* Right leaves (visually left after rotate) */}
        <motion.div
          initial={{ y: -8, opacity: 0.95, rotate: 6, scale: 1.1 }}
          animate={{ y: [-8, 4, -8] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10"
          style={{ willChange: 'transform, opacity' }}
        >
          <img
            src="/right-cropped.svg"
            alt="Decorative leaves"
            width={420}
            height={600}
            className="w-auto h-[380px] md:h-[540px]"
            draggable={false}
          />
        </motion.div>

        {/* mask handles edge fade; no extra overlays needed */}
      </div>
    </div>
  )
}


