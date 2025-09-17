import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import BrandColorProvider from '@/components/BrandColorProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SaaSquatch - Websites that grow with your business',
  description: 'From fast static sites to full e-commerce and custom software—built, hosted, and supported by SaaSquatch.',
  icons: {
    icon: '/Logo.svg',
    shortcut: '/Logo.svg',
    apple: '/Logo.svg',
  },
  keywords: ['web development', 'website hosting', 'e-commerce', 'custom software', 'UK web design'],
  authors: [{ name: 'SaaSquatch' }],
  creator: 'SaaSquatch',
  publisher: 'SaaSquatch',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://saasquatch.co.uk'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://saasquatch.co.uk',
    title: 'SaaSquatch - Websites that grow with your business',
    description: 'From fast static sites to full e-commerce and custom software—built, hosted, and supported by SaaSquatch.',
    siteName: 'SaaSquatch',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaaSquatch - Websites that grow with your business',
    description: 'From fast static sites to full e-commerce and custom software—built, hosted, and supported by SaaSquatch.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <BrandColorProvider />
        {children}
      </body>
    </html>
  )
}
