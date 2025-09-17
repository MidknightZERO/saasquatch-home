'use client'

import { motion } from 'framer-motion'

export default function LeafDivider() {
  return (
    <div className="relative select-none overflow-hidden py-16 md:py-10">
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

        {/* subtle edge fade to hide any remaining artifacting */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 top-0 bottom-0 w-4 bg-white/60" />
          <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/60" />
        </div>
      </div>
    </div>
  )
}


