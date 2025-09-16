// Currency formatting utilities
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function formatCurrencyWithDecimals(amount: number): string {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
}

// Pricing tiers
export const pricingTiers = {
  basic: {
    name: 'Basic Static Site',
    monthly12: 15,
    monthly30: 25,
    description: 'Perfect for brochure sites, portfolios, and service businesses',
    features: [
      'Up to 5 pages',
      'Mobile-responsive design',
      'SSL certificate',
      'Fast UK/EU hosting',
      '1 contact form',
      'Monthly backups',
      '48-hour content updates',
    ],
    addons: [
      { name: 'Extra pages', price: 50, unit: 'per page' },
      { name: 'Blog setup', price: 150, unit: 'one-off' },
      { name: 'Priority support', price: 10, unit: 'per month' },
    ],
    cta: 'Get started',
  },
  ecommerce: {
    name: 'E-commerce Site',
    monthly12: 20,
    monthly30: 50,
    description: 'Perfect for shops up to 500 products',
    features: [
      'Product catalogue',
      'Stripe/PayPal integration',
      'Shipping rules',
      'Inventory management',
      'Discount codes',
      'SSL certificate',
      'Monthly backups',
      '48-hour updates',
    ],
    addons: [
      { name: 'POS integration', price: 150, unit: 'one-off' },
      { name: 'Subscriptions', price: 200, unit: 'one-off' },
      { name: 'Abandoned cart emails', price: 100, unit: 'setup' },
      { name: 'Priority support', price: 15, unit: 'per month' },
    ],
    cta: 'Start selling',
    popular: true,
  },
  custom: {
    name: 'Custom Software',
    monthly12: 50,
    monthly30: null, // No 30-day option
    initialBuild: 1500,
    description: 'Perfect for booking systems, portals, CRMs, and dashboards',
    features: [
      'Scoping workshop',
      'Architecture & UI design',
      'Staging environment',
      'CI/CD pipeline',
      'Basic monitoring',
      'SLA-backed support',
    ],
    addons: [
      { name: 'Advanced hosting', price: 100, unit: 'per month' },
      { name: 'Integrations', price: 300, unit: 'one-off' },
      { name: 'Analytics setup', price: 200, unit: 'one-off' },
    ],
    cta: 'Book a scoping call',
  },
} as const

// Add-on services
export const addonServices = [
  {
    name: 'Footprint Copy Pack',
    price: 249,
    unit: '5 pages',
    category: 'content',
    description: 'Professional copywriting for your website',
  },
  {
    name: 'Squatch Snaps',
    price: 120,
    unit: 'one-off',
    category: 'content',
    description: 'Hero + 5 professional images',
  },
  {
    name: 'Trailblazer SEO Starter',
    price: 199,
    unit: 'setup',
    category: 'seo',
    description: 'SEO optimization + £79/month',
  },
  {
    name: 'Yeti Speed Pack',
    price: 220,
    unit: 'one-off',
    category: 'performance',
    description: 'Performance optimization',
  },
  {
    name: 'Footprint Firewall',
    price: 15,
    unit: 'per month',
    category: 'security',
    description: 'Advanced security protection',
  },
  {
    name: 'Squatch Care',
    price: 15,
    unit: 'per month',
    category: 'support',
    description: 'Basic support package',
  },
] as const

export type PricingTier = keyof typeof pricingTiers
export type AddonService = typeof addonServices[number]
