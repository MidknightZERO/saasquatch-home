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
    const brand = BRAND_COLORS[Math.floor(Math.random() * BRAND_COLORS.length)]
    let footerBrand = BRAND_COLORS[Math.floor(Math.random() * BRAND_COLORS.length)]
    if (footerBrand === brand) {
      footerBrand = BRAND_COLORS[(BRAND_COLORS.indexOf(brand) + 1) % BRAND_COLORS.length]
    }
    document.documentElement.style.setProperty('--brand', brand)
    document.documentElement.style.setProperty('--footerBrand', footerBrand)
  }, [])
  return null
}


