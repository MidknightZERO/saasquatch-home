# SaaSquatch Marketing Website

A production-ready, static marketing website for SaaSquatch - a company that creates and hosts websites. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Static Export**: Optimized for static hosting with no server required
- **Responsive Design**: Mobile-first design that works on all devices
- **Accessibility**: WCAG 2.1 AA compliant with proper semantic HTML
- **Animations**: Smooth micro-interactions with Framer Motion
- **Form Integration**: Contact form with Formspree (easily swappable)
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **Dark Mode Support**: Automatic dark mode detection
- **Testing**: Unit tests with Vitest and Testing Library

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx          # Home page
│   ├── pricing/          # Pricing page
│   ├── contact/          # Contact page
│   └── legal/            # Legal pages (privacy, terms)
├── components/            # Reusable React components
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Site footer
│   ├── Layout.tsx        # Main layout wrapper
│   ├── HeroSection.tsx   # Homepage hero
│   ├── TestimonialCarousel.tsx
│   ├── PricingOverview.tsx
│   ├── FeaturesSection.tsx
│   ├── AddonsHighlight.tsx
│   ├── FinalCTA.tsx
│   ├── PricingToggle.tsx
│   ├── PricingCards.tsx
│   ├── ComparisonTable.tsx
│   ├── AddonsSection.tsx
│   ├── FAQ.tsx
│   └── ContactForm.tsx
├── lib/                   # Utility libraries
│   └── tokens.ts         # Design tokens and utilities
├── utils/                 # Helper functions
│   └── currency.ts       # Currency formatting and pricing data
└── test/                 # Test files
    ├── setup.ts          # Test setup
    ├── PricingToggle.test.tsx
    └── FAQ.test.tsx
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd saasquatch-home
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Build the static site
npm run build

# Preview the built site
npm run preview
```

The built files will be in the `out/` directory, ready for deployment to any static hosting service.

## 🎨 Customization

### Colors and Branding

Edit the design tokens in `src/lib/tokens.ts`:

```typescript
export const tokens = {
  colors: {
    primary: {
      400: '#5E8B7E', // Pine - your primary color
    },
    secondary: {
      400: '#F2A65A', // Campfire - your secondary color
    },
    // ... other colors
  }
}
```

### Typography

Update fonts in `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  heading: ['Poppins', 'system-ui', 'sans-serif'],
}
```

### Pricing

Modify pricing data in `src/utils/currency.ts`:

```typescript
export const pricingTiers = {
  basic: {
    name: 'Basic Static Site',
    monthly12: 15,
    monthly30: 25,
    // ... other properties
  }
}
```

## 📧 Form Configuration

### Formspree (Default)

1. Sign up at [Formspree.io](https://formspree.io)
2. Create a new form
3. Replace `yourFormID` in `src/components/ContactForm.tsx`:

```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  // ... rest of the code
})
```

### Alternative: Netlify Forms

Replace the form in `src/components/ContactForm.tsx`:

```tsx
<form
  name="contact"
  method="POST"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
>
  <input type="hidden" name="form-name" value="contact" />
  <div style={{ display: 'none' }}>
    <input name="bot-field" />
  </div>
  {/* ... rest of form fields */}
</form>
```

### Alternative: Getform

Replace the fetch URL in `src/components/ContactForm.tsx`:

```typescript
const response = await fetch('https://getform.io/f/YOUR_FORM_ID', {
  // ... rest of the code
})
```

## 🧪 Testing

Run the test suite:

```bash
# Run tests
npm test

# Run tests with UI
npm run test:ui

# Type checking
npm run type-check
```

## 🚀 Deployment

### Static Hosting (Recommended)

The site is configured for static export. Deploy the `out/` directory to:

- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `out/` folder or connect your repo
- **GitHub Pages**: Use GitHub Actions to build and deploy
- **AWS S3**: Upload the `out/` directory to an S3 bucket
- **Cloudflare Pages**: Connect your repo for automatic deployments

### Environment Variables

No environment variables are required for static deployment. The contact form uses Formspree's public endpoint.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ Accessibility

The site is built with accessibility in mind:

- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance (WCAG 2.1 AA)
- Reduced motion support

## 🔧 Development

### Code Style

The project uses:
- **ESLint**: Code linting with Next.js rules
- **Prettier**: Code formatting with Tailwind plugin
- **TypeScript**: Type safety and better developer experience

### Performance

- Optimized images with Next.js Image component
- Lazy loading for non-critical content
- Static generation for fast loading
- Minimal JavaScript bundle
- CSS purging with Tailwind

## 📄 License

This project is proprietary to SaaSquatch. All rights reserved.

## 🤝 Support

For questions or support:

- **Email**: hello@saasquatch.co.uk
- **Website**: [saasquatch.co.uk](https://saasquatch.co.uk)

---

Built with ❤️ by SaaSquatch
