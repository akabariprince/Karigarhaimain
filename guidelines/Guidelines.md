# KarigarHai Design System

## Aesthetic Stance: Swiss Modern with Indian Trust

A clean, professional design system built on Swiss precision with warm accessibility for the Indian market. Strong typography hierarchy, generous whitespace, and confident use of color establish trust while maintaining approachability for both skilled workers and employers.

## Typography

**All Text**: Google Sans Flex (400-700 weight) — Clean, modern, highly readable across English, Hindi, and Gujarati
- Headers: 600-700 weight
- Body: 400-500 weight

### Hierarchy
- Hero headlines: 48-56px desktop, 32-40px mobile
- Section headlines: 36-42px desktop, 28-32px mobile  
- Card/feature titles: 20-24px
- Body text: 16-18px
- Captions/labels: 14px

## Color System

**Primary Brand**: Orange (#FF6B35) — Trust, energy, approachability
**Foundation Dark**: Navy (#1A1A2E) — Credibility, professionalism
**Foundation Light**: Warm White (#FAFAF9) — Welcoming, clean

**Accent Colors**:
- Success Green: #10B981 (for Karigar-side features)
- Warning Orange: #F59E0B (for attention)
- Neutral Grays: #F3F4F6 (bg), #6B7280 (text-muted), #1F2937 (text-dark)

## Layout Principles

1. **Generous whitespace**: Section padding 80-120px desktop, 60-80px mobile
2. **Asymmetric hero**: 60/40 split favoring content over imagery
3. **Grid**: 12-column with 24px gutters
4. **Max content width**: 1280px
5. **Card shadows**: Subtle, elevated (0 4px 6px rgba(0,0,0,0.07))

## Component Patterns

### Buttons
- Primary: Orange fill, white text, 48px height, 16px horizontal padding, 8px radius
- Secondary: Orange outline, orange text, same dimensions
- Large CTAs: 56px height, 24px horizontal padding

### Cards
- White background with subtle shadow
- 12px radius
- 24px internal padding
- Hover: slight lift (translate -2px, stronger shadow)

### Trust Elements
- Star ratings in gold (#FBBF24)
- Verification badges with shield icons
- Profile avatars with colored initials (from palette)
- Testimonial cards with photos

## Imagery

- Real photos of Indian workers and homes (Unsplash: construction, electrician, plumber keywords)
- Phone mockups showing app screens
- Illustrations for abstract concepts (trust, payments) — simple, 2-color max
- Icon style: Lucide React, 24px, stroke-width 2

## Responsive Breakpoints

- Mobile: 320-640px
- Tablet: 641-1024px
- Desktop: 1025-1440px
- Large: 1441px+

## Accessibility

- Minimum contrast: 4.5:1 for body text, 3:1 for large text
- Focus states: 2px orange ring with 2px offset
- Touch targets: minimum 44x44px
- Alt text on all images
- Semantic HTML structure

## Craft Details

- Transitions: 200ms ease-in-out for interactions
- Hover states on all clickable elements
- Loading states with skeleton screens
- Smooth scroll behavior
- Sticky header with shadow on scroll
