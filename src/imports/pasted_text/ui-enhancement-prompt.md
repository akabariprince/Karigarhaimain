I can see your website! It has good structure and content but needs a major visual upgrade. Here is your complete UI enhancement prompt:

---

# KarigarHai — Complete Website UI Enhancement Prompt
## Glassmorphism + Smooth Animations + All Pages

---

### CURRENT ISSUES TO FIX

Looking at your existing website:

- Hero section feels flat — needs depth and visual drama
- Cards look basic — need glassmorphism treatment
- Typography hierarchy is weak — headings need more weight and contrast
- Sections feel disconnected — need smooth scroll animations
- Color usage is flat — needs gradients and glow effects
- Mobile spacing is tight — needs breathing room
- Stats bar looks plain — needs animated counters
- Overall feels like a template — needs premium custom feel

---

### DESIGN LANGUAGE TO IMPLEMENT

**Visual style**: Dark premium base + glassmorphism cards + warm orange accents + smooth micro-animations

**Core aesthetic**: Think Swiggy meets Razorpay meets Uber India — premium, modern, trustworthy, fast

---

### GLOBAL DESIGN SYSTEM

**Background colors**:
```css
--bg-dark: #0D0D1A
--bg-dark-2: #12121F
--bg-dark-3: #1A1A2E
--bg-light: #F8F7F4
--bg-light-2: #FFFFFF
```

**Brand colors**:
```css
--orange-primary: #E85D26
--orange-light: #FF7A42
--orange-glow: rgba(232, 93, 38, 0.15)
--orange-tint: #FDF0EB
--navy: #1A1A2E
--navy-2: #0D0D1A
--green-success: #16A663
--green-tint: #E6F7F0
--amber: #C47B0C
--red-danger: #DC3545
```

**Glassmorphism card recipe**:
```css
.glass-card {
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.10);
  border-radius: 20px;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

/* Light mode glass */
.glass-card-light {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
}
```

**Gradient definitions**:
```css
--gradient-hero: linear-gradient(135deg, #0D0D1A 0%, #1A1A2E 50%, #1E1228 100%)
--gradient-orange: linear-gradient(135deg, #E85D26 0%, #FF7A42 100%)
--gradient-orange-glow: radial-gradient(ellipse at 20% 50%, rgba(232,93,38,0.2) 0%, transparent 60%)
--gradient-card: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)
--gradient-border: linear-gradient(135deg, rgba(232,93,38,0.5), rgba(255,255,255,0.1))
--gradient-text: linear-gradient(135deg, #FFFFFF 0%, #E0E0E0 100%)
--gradient-orange-text: linear-gradient(135deg, #E85D26 0%, #FF9A6C 100%)
```

**Typography**:
```css
font-family: 'Inter', 'Noto Sans', system-ui
--font-display: clamp(36px, 6vw, 72px) / 700 / -0.03em
--font-h1: clamp(28px, 4vw, 52px) / 700 / -0.02em
--font-h2: clamp(22px, 3vw, 38px) / 600 / -0.01em
--font-h3: clamp(18px, 2vw, 24px) / 600 / 0
--font-body-lg: 18px / 400 / 0.01em
--font-body: 16px / 400 / 0.01em
--font-small: 14px / 400 / 0.02em
--font-caption: 12px / 500 / 0.06em uppercase
```

**Spacing scale**: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128px

**Border radius**: 8 / 12 / 16 / 20 / 24 / 32 / 9999px

**Shadows**:
```css
--shadow-sm: 0 2px 8px rgba(0,0,0,0.08)
--shadow-md: 0 4px 16px rgba(0,0,0,0.12)
--shadow-lg: 0 8px 32px rgba(0,0,0,0.16)
--shadow-xl: 0 16px 64px rgba(0,0,0,0.24)
--shadow-orange: 0 8px 32px rgba(232,93,38,0.25)
--shadow-orange-lg: 0 16px 64px rgba(232,93,38,0.35)
--shadow-glow: 0 0 40px rgba(232,93,38,0.2)
```

---

### GLOBAL ANIMATION LIBRARY

Add these animations globally. Use Framer Motion (React) or GSAP or CSS + Intersection Observer.

```css
/* Fade up on scroll */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Fade in */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Scale in */
@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.92); }
  to { opacity: 1; transform: scale(1); }
}

/* Slide in from left */
@keyframes slideLeft {
  from { opacity: 0; transform: translateX(-40px); }
  to { opacity: 1; transform: translateX(0); }
}

/* Slide in from right */
@keyframes slideRight {
  from { opacity: 0; transform: translateX(40px); }
  to { opacity: 1; transform: translateX(0); }
}

/* Float (for phone mockup) */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
}

/* Pulse glow */
@keyframes pulseGlow {
  0%, 100% { box-shadow: 0 0 20px rgba(232,93,38,0.3); }
  50% { box-shadow: 0 0 40px rgba(232,93,38,0.6); }
}

/* Counter animation */
/* Use CountUp.js or custom JS */
/* Trigger when element enters viewport */

/* Shimmer for skeleton */
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

/* Gradient shift (for hero background) */
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

**Scroll animation rules**:
- Every section fades up (fadeUp) with 0.6s duration, 0.2s delay stagger per child
- Images slide in from their natural side
- Cards scale in on scroll enter
- Stats counter when stats section enters viewport
- Use Intersection Observer — trigger once only
- Stagger delay: 0.1s between each child element

**Hover animations**:
```css
/* Card hover */
.card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-xl);
  border-color: rgba(232, 93, 38, 0.3);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* Button hover */
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-orange-lg);
  transition: all 0.2s ease;
}

/* Button click */
.btn-primary:active {
  transform: translateY(0px) scale(0.98);
}

/* Link hover */
a:hover { color: var(--orange-primary); transition: color 0.2s ease; }

/* Icon hover */
.icon-btn:hover {
  transform: scale(1.1) rotate(5deg);
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

---

### NAVBAR — ENHANCED

```
Design:
- Default: transparent background, white text, blur on scroll
- Scrolled: rgba(13,13,26,0.8) background + backdrop-filter: blur(20px) + border-bottom: 1px solid rgba(255,255,255,0.08)
- Logo: KarigarHai in white, icon in orange, slight glow
- Nav links: white 60% opacity, hover white 100% + orange underline slide-in animation
- CTA buttons: "Download App" — glass outlined white | "Post a Job" — orange gradient + orange glow shadow
- Mobile: hamburger animates to X, full-screen overlay slides down with staggered nav items
- Active page: nav link shows orange dot below + white full opacity
- Height: 72px desktop, 60px mobile
- Smooth transition on all state changes: 0.3s ease
```

---

### PAGE 1 — HOME PAGE (COMPLETE ENHANCED)

---

**HERO SECTION**

Background:
- Dark gradient: `#0D0D1A` to `#1A1A2E`
- Add animated radial orange glow bottom-left: `radial-gradient(ellipse at 15% 85%, rgba(232,93,38,0.25) 0%, transparent 55%)`
- Add subtle animated radial blue glow top-right: `radial-gradient(ellipse at 85% 15%, rgba(99,102,241,0.15) 0%, transparent 50%)`
- Background gradient animates slowly (gradientShift animation, 15s infinite)
- Add very subtle grid/dot pattern overlay at 3% opacity

Left column (55% desktop):
- Entrance animation: fadeUp, 0.8s, starts on page load
- Pre-headline badge:
  - Glass pill: `backdrop-filter: blur(10px)` + orange border 1px
  - 🔥 emoji + "India's #1 Local Worker Platform"
  - Pulse animation on the fire emoji
  - Slides in from left on load
- Main headline H1:
  - White to light grey gradient text using `-webkit-background-clip: text`
  - "Find trusted" — white
  - "Karigar" — orange gradient text + text shadow orange glow
  - "near you — in minutes" — white
  - Animate: each word fades up with 0.1s stagger
- Subheadline:
  - White 65% opacity
  - 18px, 1.6 line height
  - Fades in after headline with 0.2s delay
- CTA buttons row:
  - "Post a Job — Free": orange gradient + `box-shadow: var(--shadow-orange)` + slight scale on hover + ripple click effect
  - "I'm a Karigar": glass outlined, white text, white border 40% opacity, blur backdrop
  - Both buttons slide up with 0.3s delay after headline
  - Add small arrow icon → on primary, rotates 45deg on hover
- Trust bar below buttons:
  - Tiny divider line
  - Row of 3 trust pills (glass style, small):
    - ⭐ 4.8 rating
    - 👷 10,000+ Karigar
    - ✅ 50,000+ jobs done
  - Fades in last, 0.5s delay
- App badges:
  - Google Play + App Store — white versions on dark background
  - Slight hover lift

Right column (45% desktop):
- Phone mockup:
  - Floating animation (float keyframe, 4s infinite ease-in-out)
  - Drop shadow: `0 40px 80px rgba(0,0,0,0.5)` + `0 0 60px rgba(232,93,38,0.2)`
  - Tilted very slightly: `transform: perspective(1000px) rotateY(-8deg) rotateX(2deg)`
  - Slides in from right on load (slideRight, 0.8s)
- Floating notification cards around phone:
  - Each card: glass style, white text, small, rounded-xl
  - Card 1 top-left: green dot + "✓ Ramesh Kumar hired" — floats in from left, then subtle float
  - Card 2 bottom-right: "₹1,200 paid ✓" orange — floats in from right
  - Card 3 top-right: "⭐ 4.9 rating" — floats in from top
  - Each has slight continuous float animation with different timing
- Orange glow behind phone: `radial-gradient(ellipse, rgba(232,93,38,0.2), transparent 60%)`

---

**SOCIAL PROOF BAR SECTION**

Design:
- Background: `rgba(255,255,255,0.03)` — very subtle separator
- Border top + bottom: `1px solid rgba(255,255,255,0.06)`
- `backdrop-filter: blur(10px)`
- 5 stats in a row
- Each stat:
  - Large number: orange gradient text, bold, animated counter (counts up when enters viewport, duration 2s, easeOut)
  - Label: white 60% opacity, small caps
  - Thin vertical divider between stats (rgba white 10%)
- Entire section fadeIn on scroll
- Numbers stagger 0.15s apart when counting

---

**HOW IT WORKS SECTION**

Design:
- White background section (light mode break)
- Section label chip: small, orange tint background, "How it works" text, centered
- H2 heading: dark navy, centered, large
- Tab toggle (Malik / Karigar):
  - Pill toggle design
  - Active: orange fill + white text + orange shadow
  - Inactive: light grey background + dark text
  - Smooth slide transition between tabs (0.3s ease)
  - Tab content: crossfade animation on switch

Steps (horizontal desktop, vertical mobile):
- Each step card:
  - Glass light card style
  - Step number: large, faded orange, position absolute top-right (decorative)
  - Icon: 48px, orange background circle, white icon
  - Title: H3, dark
  - Description: body, grey
  - Card hover: lift + orange border glow
  - Connecting dashed line between cards on desktop (SVG drawn line, animates from left to right on scroll enter)
  - Each card: stagger fadeUp 0.15s apart

Screenshot at end of each tab:
- Angled phone mockup
- Float animation
- Orange glow behind

CTA button: orange, centered, hover glow

---

**FOR MALIK SECTION**

Design:
- Light background (#F8F7F4)
- Two column: left text (60%), right image (40%)
- Image: phone mockup of applicants screen
  - Slight tilt: `perspective(800px) rotateY(12deg)`
  - Orange glow behind
  - Slide in from right on scroll enter
- Left column:
  - Label chip: "For Malik" — orange pill
  - H2: dark, slides in from left
  - Feature list (4 items):
    - Each item: icon (orange circle 36px + white icon) + bold title + grey description
    - Stagger fadeUp 0.1s apart
    - Icon has pulse animation on hover
  - CTA button: orange, slide up last
- Section background: very subtle orange radial glow bottom-right corner

---

**FOR KARIGAR SECTION**

Design:
- Dark background (#0D0D1A) — contrast switch
- Two column: left image (40%), right text (60%) — REVERSED
- Image: phone mockup of job feed
  - Tilt opposite direction
  - Green tint glow behind (success color)
  - Slide in from left on scroll
- Right column:
  - Label chip: "For Karigar" — green pill
  - H2: white gradient
  - Feature list:
    - Icon circles: green
    - Title white, description white 65%
    - Stagger animation
  - CTA: white outlined glass button

---

**TRUST & SAFETY SECTION**

Design:
- Dark navy background
- Large heading centered: white + orange gradient on key words
- Subheading: white 65%
- 3 glass cards in a row:
  - Background: `rgba(255,255,255,0.06)` + blur(20px)
  - Border: `1px solid rgba(255,255,255,0.10)`
  - Top: icon in orange/green/blue circle (54px)
  - Title: white bold
  - Description: white 65%
  - Hover: border becomes orange glow + card lifts 8px + inner glow appears
  - Card 1 animates from bottom with 0s delay
  - Card 2 animates from bottom with 0.15s delay
  - Card 3 animates from bottom with 0.3s delay
- Background: subtle animated gradient particles (use particles.js or CSS only floating orbs)
- Two floating orb blobs behind cards:
  - Orb 1: orange, 400px, blur 150px, opacity 0.12, position left
  - Orb 2: purple, 300px, blur 120px, opacity 0.10, position right
  - Both animate with slow drift (20s infinite alternate)

---

**TESTIMONIALS SECTION**

Design:
- Light background
- Heading + subheading centered, fadeIn on scroll
- Carousel:
  - Desktop: 2 cards visible + partial 3rd
  - Mobile: 1 card + swipe gesture
  - Auto-scroll every 4s, pauses on hover
  - Smooth CSS/JS transition between slides
  - Each card:
    - Glass light style: `rgba(255,255,255,0.8)` + blur + white border
    - Orange shadow on active/featured card
    - Stars: animated fill left-to-right on scroll enter
    - Quote text: dark, 16px
    - Avatar: gradient initials circle
    - Name bold + role grey + job type orange chip
    - Hover: lift + orange border glow
  - Navigation dots: small, orange active dot, grey inactive
  - Left/right arrow buttons: glass style, hover orange fill

---

**APP DOWNLOAD BANNER**

Design:
- Full orange gradient background: `linear-gradient(135deg, #E85D26, #FF7A42)`
- Animated gradient (gradientShift, 6s infinite)
- Subtle mesh/noise texture overlay at 5% opacity
- Left: tilted phone mockup with strong drop shadow, float animation
- Right:
  - Heading: white, large, bold
  - Subheading: white 85%
  - App store badges: white/frosted glass versions
  - QR code: white bordered glass card
  - "50,000+ downloads" social proof in white badge
- Orange glow pulse around badges (pulseGlow animation)
- Section slides in as two halves (left from left, right from right) on scroll

---

**BLOG PREVIEW SECTION**

Design:
- Light background
- Heading + subheading centered
- 3 cards in row (2 on tablet, 1 on mobile):
  - Card glass light style
  - Thumbnail: full width top, height 200px, object-fit cover, border-radius top
  - Category tag: orange pill overlay on image (absolute bottom-left of image)
  - Title: H3, dark, 2 line clamp
  - Excerpt: body grey, 3 line clamp
  - Author row: avatar initials + name + date + read time
  - Read more: orange link with arrow → that slides right on hover
  - Card hover: lift + shadow grow + image scales 1.05 (overflow hidden on image container)
  - Stagger cards 0.15s apart

---

**FAQ SECTION**

Design:
- White background
- Heading centered: large, dark
- Accordion list (max-width 720px, centered):
  - Each item:
    - Closed: border-bottom, question text dark, + icon orange right side
    - Open: orange left border (3px), question bold, answer body grey, - icon
    - Open/close: smooth height transition 0.3s ease + opacity fade for answer
    - Hover closed state: background rgba orange 0.03
  - First item open by default
- Stagger fadeUp on scroll

---

### PAGE 2 — HOW IT WORKS PAGE

Route: `/how-it-works`

**Hero**:
- Dark background (same as home hero but shorter)
- Centered: label chip + H1 + subheading
- Tab toggle below hero

**Detailed step sections** (alternating layout):
Each step is a full-width section with:
- Large step number: massive, faded, position absolute (decorative)
- Left text (or right text, alternating):
  - Step label: "Step 01" in orange small caps
  - H2 title
  - Body description (3-4 lines)
  - Feature bullets (3 items, checkmark icons orange)
- Right image (or left): screenshot in phone frame
  - Hover effect: slight tilt reveal
  - Scroll parallax: image moves at 0.8x scroll speed

Glass divider between steps: horizontal line with glow

**Pricing model explainer**:
- 3 glass cards on dark background
- Each: icon + title + description + example calculation
- Cards animate in stagger

---

### PAGE 3 — FOR KARIGAR PAGE

Route: `/for-karigar`

**Hero**:
- Orange gradient background (full orange, warm)
- Animated gradient
- Headline: white, large
- CTA: white filled button (dark text) + glass outlined button
- Hero image: real photo of Karigar or illustration, slides in from right

**Why section**:
- Dark background
- 6 feature cards in 3x2 grid:
  - Each glass dark card
  - Icon orange circle
  - Title white
  - Description white 65%
  - Hover lift + orange glow border
  - Stagger animation

**Earnings by trade section**:
- Light background
- Heading centered
- Table/card grid for earnings:
  - Each row/card: trade icon + trade name + daily range + monthly range
  - Animated bar chart showing relative earning (CSS width animation on scroll)
  - Hover: row highlights orange tint
  - Sort option: by earnings / alphabetical

**Karigar success stories**:
- Dark background
- 3 testimonial cards — same glass style as home
- Each: photo circle (or initials) + name + trade + city + earnings quote + star rating

**Signup steps**:
- Light background
- 4 large numbered steps horizontal (vertical mobile)
- Step: big number + icon + title + 1 line
- Connected by animated line drawn on scroll

**CTA**:
- Orange banner
- App download badges

---

### PAGE 4 — FOR MALIK PAGE

Route: `/for-malik`

**Hero**:
- Dark background
- Split: left text + right phone mockup

**Pain points section** (before/after):
- 3 red-tinted glass cards for problems
- Arrow SVG pointing down (animates on scroll)
- 3 green-tinted glass cards for solutions below
- Cards animate with stagger, problems come first then solutions

**Features section**:
- Dark background
- 3x2 grid of glass cards
- Same card design as other pages

**Pricing plans section**:
- Light background
- Monthly/yearly toggle
- 3 pricing cards:
  - Free: outlined border, no fill
  - Pro: glass card + orange gradient border + "Most popular" badge floating top (orange, rotated slightly)
  - Business: dark fill card
  - All three animate scaleIn stagger
  - Pro card slightly larger (scale 1.05) with orange glow shadow
  - Toggle switch: smooth slide animation, yearly shows savings in green badge

**Feature comparison table**:
- Clean table, alternating row tint
- Checkmark: animated SVG draw on scroll
- X mark: red fade in

---

### PAGE 5 — ABOUT US PAGE

Route: `/about`

**Hero**:
- Full-width background image or dark gradient with large team photo
- Overlay gradient
- Centered: H1 + subheading + mission statement as pull quote
- Text stagger animate on load

**Story section**:
- Two column: left large text body, right floating image card
- Text paragraphs fade in as you scroll through them (use scroll-linked opacity)

**Impact numbers**:
- Dark background
- 4 massive animated counter stats
- Each with subtle particle burst animation when counter finishes
- Background: two animated color orbs behind stats

**Team section**:
- Light background
- 3x grid (responsive) of team cards:
  - Card: glass light
  - Photo (circle, 80px)
  - Name bold
  - Title grey
  - LinkedIn icon slides in on hover
  - Hover: card lifts, orange border glow

**Values section**:
- Dark background
- 4 glass cards
- Icon + value name + description
- Alternate icon circle colors: orange, green, blue, purple

**Press section**:
- Light background
- Logo row: grey logos, hover turns colored + slight scale
- Marquee/ticker animation (logos scroll continuously left, pause on hover)

---

### PAGE 6 — PRICING PAGE

Route: `/pricing`

**Hero**:
- Dark background, centered
- Heading with orange gradient on "pricing"
- Toggle: monthly/yearly — pill design, smooth slide

**Pricing cards**:
- Same as For Malik page
- Enhanced: particle/confetti burst animation when "Most popular" plan enters view

**Comparison table**:
- Full feature table with hover row highlight
- Sticky header row
- Checkmark SVG draw animation on scroll

**Karigar pricing section**:
- Orange tint background (light)
- Two simple cards: Free + Ustaad
- Ustaad card has orange border glow

**FAQ accordion**:
- Same style as home page FAQ

---

### PAGE 7 — CONTACT PAGE

Route: `/contact`

**Design**:
- Split layout: left form (55%), right contact info + map (45%)

**Form**:
- Glass light card wrapper
- Each input:
  - Background: white
  - Border: 1.5px, grey default
  - On focus: orange border + orange glow shadow `0 0 0 3px rgba(232,93,38,0.15)`
  - Label floats up on focus (floating label animation)
  - Error state: red border + shake animation (0.4s)
  - Success state: green border + checkmark fade in
- Submit button: orange gradient, full width, loading spinner state, success state (green + checkmark)
- Form card has subtle orange gradient corner (top-left)

**Contact info**:
- Icons: orange, 24px
- Each info item: hover orange text
- WhatsApp button: green + WhatsApp icon, pulse animation
- Map embed: rounded corners, slight border orange

---

### PAGE 8 — BLOG INDEX PAGE

Route: `/blog`

**Hero**:
- Compact dark hero
- Title + search bar

**Filter chips**:
- Pill chips, orange active, grey inactive
- Smooth underline slide animation

**Featured post card**:
- Full width
- Large image left (50%) + content right (50%)
- Hover: image scales 1.03, card lifts
- Orange gradient tag overlay

**Blog grid**:
- 3 column grid
- Masonry option (different card heights)
- Each card hover: lift + image zoom + orange border

**Load more button**:
- Outlined orange, center
- Spinner on click, new cards fade in below

---

### PAGE 9 — BLOG ARTICLE PAGE

Route: `/blog/[slug]`

**Layout**:
- Max-width 760px article body, centered
- Reading progress bar at very top of viewport (thin orange line that fills as you scroll)
- Sticky sidebar on desktop (table of contents + share buttons)

**Article typography**:
- Body: 18px, 1.8 line height, dark on light
- H2: 28px, orange left dot accent
- H3: 22px
- Blockquote: large italic + orange 4px left border + light orange background
- Inline code: orange tint background + monospace
- Links: orange underline that animates on hover

**Images**:
- Full width in article body
- Fade in on scroll
- Caption: small, centered, grey italic

**Share bar** (sticky left on desktop, bottom on mobile):
- WhatsApp, Twitter, LinkedIn, Copy link
- Glass style icons, hover orange fill

**Related articles**:
- 3 cards same style as blog grid
- Stagger fade in

---

### IMPLEMENTATION NOTES FOR DEVELOPER

**Libraries to use**:
- Framer Motion (React) — page transitions + scroll animations
- CountUp.js — stat counters
- Swiper.js — testimonials + carousels
- GSAP ScrollTrigger — advanced scroll effects (parallax, line drawing)
- Particles.js or tsParticles — background particles on trust section
- React Hook Form — contact form
- Next.js App Router — for proper SSR + routing (NOT static redirect)

**Performance rules**:
- All animations respect `prefers-reduced-motion` media query — disable all animations if set
- Intersection Observer for scroll animations — never animate on mount for below-fold elements
- Images: Next.js Image component, WebP, lazy loaded
- Fonts: `font-display: swap`
- Code split per page
- Lighthouse target: 90+ all categories

**Router setup** (critical — no static pages, no redirects):
```
/                    → Home page component
/how-it-works        → HowItWorks page component
/for-karigar         → ForKarigar page component
/for-malik           → ForMalik page component
/about               → About page component
/pricing             → Pricing page component
/contact             → Contact page component
/blog                → Blog index component
/blog/[slug]         → Blog article component
```

Every route renders its own full page component with its own layout, animations, and SEO metadata. No page redirects to another. No static HTML files.

**Page transition animation**:
```
Every page: fade out (0.2s) → route change → fade + slide up in (0.4s)
Use Framer Motion AnimatePresence wrapper on router
```

---

### SUMMARY TABLE

| Page | Key visual | Primary animation |
|---|---|---|
| Home | Dark hero + orange glows | Float phone + counter stats + stagger sections |
| How it works | Alternating steps | Scroll parallax + line draw |
| For Karigar | Orange hero | Earnings bar chart animate |
| For Malik | Pain → solution | Before/after card reveal |
| About | Team + story | Scroll-linked text opacity |
| Pricing | 3 plan cards | Confetti burst + comparison draw |
| Contact | Split form | Floating labels + focus glow |
| Blog index | Card grid | Hover zoom + masonry load |
| Blog article | Reading progress | Progress bar + sticky TOC |

---

Hand this entire prompt to your developer. Every page, every animation, every component, every color is defined. The result will be a premium, production-ready website that looks nothing like a template.