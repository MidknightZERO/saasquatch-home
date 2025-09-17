'use client'

import { useEffect } from 'react'

const BRAND_COLORS = [
  '#f8539a',
  '#fb6b6e',
  '#2ea4b0',
  '#58ab8b',
  '#fcb52c',
  '#a7a969',
  '#9879b1',
]

export default function BrandColorProvider() {
  useEffect(() => {
    const color = BRAND_COLORS[Math.floor(Math.random() * BRAND_COLORS.length)]
    document.documentElement.style.setProperty('--brand', color)
  }, [])
  return null
}


