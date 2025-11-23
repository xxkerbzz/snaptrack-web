# SnapTrack Website

A Next.js 14 (App Router) website for SnapTrack - Computer vision inventory scanner for food trucks and small kitchens.

## Project Structure

```
snaptrack/web/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles with Tailwind
├── components/
│   ├── seo/                # SEO components
│   │   ├── SEOHead.tsx
│   │   ├── StructuredData.tsx
│   │   └── Breadcrumbs.tsx
│   ├── Navigation.tsx      # Header navigation
│   ├── Hero.tsx           # Hero section
│   ├── Problem.tsx        # Problem section
│   ├── Features.tsx       # Features grid
│   ├── HowItWorks.tsx     # How it works section
│   ├── Testimonials.tsx   # Customer testimonials
│   ├── ROICalculator.tsx  # Interactive ROI calculator
│   ├── Industries.tsx     # Industries overview
│   ├── FinalCTA.tsx       # Final call-to-action
│   └── Footer.tsx         # Footer with links
├── lib/
│   └── seo-utils.ts       # SEO utilities and constants
├── types/
│   └── seo.ts             # TypeScript types for SEO
├── public/
│   ├── robots.txt         # Robots file for crawlers
│   └── sitemap.xml        # Sitemap for search engines
└── Configuration files

```

## Features

- **Next.js 14 App Router** - Latest Next.js features with App Router
- **TypeScript** - Full type safety throughout
- **Tailwind CSS** - Utility-first styling with custom theme
- **SEO Optimized** - Complete meta tags, structured data, sitemap
- **Mobile Responsive** - Fully responsive design
- **Performance** - Optimized for Core Web Vitals
- **Accessibility** - Semantic HTML and ARIA labels

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Navigate to the project directory:
```bash
cd "/Users/hubert/Documents/Cursor Projects/snaptrack/web"
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## SEO Features

### Metadata
- Complete Open Graph tags
- Twitter Card tags
- Canonical URLs
- Keywords optimization

### Structured Data
- Organization schema
- WebSite schema
- SoftwareApplication schema
- Breadcrumb schema

### Files
- `robots.txt` - Crawler instructions
- `sitemap.xml` - URL structure for search engines

## Customization

### Colors
Edit the primary color in `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    // Your color scale
  }
}
```

### SEO
Update SEO defaults in `lib/seo-utils.ts`:
```typescript
export const DEFAULT_SEO = {
  title: "Your Title",
  description: "Your Description",
  // ...
}
```

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
Build the project:
```bash
npm run build
```

Then deploy the `.next` folder to your hosting provider.

## License

Proprietary - SnapTrack, Inc.
