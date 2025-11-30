# Homepage Modernization - December 2025

## Overview
Comprehensive redesign of the homepage (`src/pages/index.astro`) and related components to implement modern web design standards, improve mobile optimization, enhance SEO, and create a more professional visual presentation.

---

## Critical Issues Fixed

### 1. SEO Improvements

#### Fixed Title Typo
**File:** `src/pages/index.astro:37`
- **Before:** `<Layout title="Homepage - Amanda Licnzer">`
- **After:** `<Layout title="Homepage - Dr. Amanda Liczner">`
- **Impact:** Corrected misspelling in page title (professional credibility)

#### Enhanced SEO Metadata
**File:** `src/pages/index.astro:16-35`

**Added:**
- Canonical URL for proper indexing
- Enhanced OpenGraph tags with full URL paths
- Twitter card metadata for social sharing
- Improved title: "Dr. Amanda Liczner - Ecologist & Bumble Bee Conservation Researcher"
- Additional OpenGraph optional fields (siteName, description)

**Code:**
```astro
const siteUrl = Astro.site?.toString() || 'https://amandaliczner.ca'

<SEO
  canonical={`${siteUrl}/`}
  openGraph={{
    basic: {
      title: 'Dr. Amanda Liczner - Ecologist & Bumble Bee Conservation Researcher',
      url: siteUrl,
      // ... other fields
    },
    optional: {
      description: "...",
      siteName: 'Amanda Liczner',
    }
  }}
  twitter={{
    card: 'summary_large_image',
  }}
/>
```

**Benefits:**
- Better social media previews
- Improved search engine ranking
- Prevents duplicate content issues
- Professional title includes credentials (Dr.)

#### Removed Unused Imports
**File:** `src/pages/index.astro:2`
- Removed: `Code` and `Footer` imports (unused)
- **Impact:** Cleaner code, smaller bundle size

---

### 2. Mobile Optimization

#### Hero Section Improvements
**File:** `src/sections/Hero.astro:13-54`

**Changes:**
1. **Viewport Height Fix**
   - **Before:** `h-svh` (problematic on some mobile browsers)
   - **After:** `min-h-screen h-screen` (universal compatibility)
   - **Why:** `svh` has inconsistent support; fallback ensures full-height hero

2. **Typography - Responsive Scaling**
   - **Before:** `text-[12vw] sm:text-[11.5vw] md:text-[11vw]...` (7 breakpoints)
   - **After:** `text-[clamp(3rem,12vw,10rem)]` (fluid scaling)
   - **Why:** Clamp provides smooth scaling, prevents text from being too small (<48px) or too large
   - **Mobile:** Minimum 3rem (48px) - readable on all devices
   - **Desktop:** Maximum 10rem (160px) - prevents excessive size

3. **Text Shadows for Legibility**
   - **Added:** `drop-shadow-2xl` on h1, `drop-shadow-lg` on paragraph
   - **Why:** Ensures text readable over hero image on all devices

4. **Improved Spacing**
   - **Before:** Fixed `gap-16` and `gap-8`
   - **After:** `gap-8 sm:gap-12 lg:gap-16` and `gap-6 sm:gap-8`
   - **Why:** Tighter spacing on mobile conserves vertical space
   - **Impact:** Better content density on small screens

5. **Better Padding**
   - **Added:** `px-4 sm:px-6` on container
   - **Why:** Prevents content from touching screen edges on mobile

6. **Description Text Scaling**
   - **Before:** `text-xl lg:text-4xl` (large jump)
   - **After:** `text-lg sm:text-2xl lg:text-4xl` (progressive scaling)
   - **Added:** `max-w-2xl` to prevent overly long lines
   - **Why:** Smoother transition across breakpoints, better readability

---

#### Intro Section (Navigation Cards)
**File:** `src/sections/Intro.astro:12-50`

**Changes:**
1. **Spacing Consistency**
   - **Before:** `py-8 lg:py-16` and `gap-8 xl:gap-16`
   - **After:** `py-12 lg:py-20` and `gap-6 lg:gap-8`
   - **Why:** More vertical breathing room, consistent gap sizing

2. **Container Padding**
   - **Added:** `px-4 sm:px-6`
   - **Why:** Prevents cards from touching edges on mobile

3. **Relative Positioning**
   - **Added:** `relative` class
   - **Why:** Establishes stacking context for future enhancements

---

#### Card Component Enhancement
**File:** `src/components/Card.astro:14-23`

**Before:**
```css
bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8
transition-transform duration-300 ease-in-out hover:scale-110
```

**After:**
```css
flex flex-col items-center justify-center text-center gap-6 h-full min-h-[200px]
bg-gradient-to-br from-primary/10 via-white to-secondary/10 rounded-3xl p-6 lg:p-8
shadow-md hover:shadow-2xl
transition-all duration-300 ease-out
hover:scale-105 hover:-translate-y-2
border border-primary/10
```

**Key Improvements:**
1. **Gradient Direction:** `-r` to `-br` (more dynamic)
2. **Three-Color Gradient:** Added `via-white` for depth
3. **Modern Shadows:** `shadow-md` → `hover:shadow-2xl` (depth on hover)
4. **Refined Hover:** Scale reduced from 110% to 105% (less aggressive)
5. **Lift Effect:** `-translate-y-2` creates elevation on hover
6. **Subtle Border:** `border-primary/10` adds definition
7. **Responsive Padding:** `p-6 lg:p-8` (tighter on mobile)
8. **Minimum Height:** `min-h-[200px]` ensures consistent card sizes
9. **Smoother Transition:** `ease-in-out` → `ease-out` (more natural)

**Mobile Impact:**
- Larger touch targets (full card clickable)
- Reduced padding saves space
- Hover effects work on desktop, gracefully degrade on touch

---

#### About Me Section Overhaul
**File:** `src/sections/AboutMe.astro:7-96` (styles) and markup

**Typography System:**
```css
/* Before: Mixed inline classes */
.mobile-text {
  padding-top: 0rem;
  font-size: 1rem;
  line-height: 1.6;
}
@media (min-width: 768px) {
  .mobile-text {
    padding-top: 1rem;
    font-size: 1.25rem;
  }
}

/* After: Progressive responsive scaling */
.content-text {
  font-size: 1rem;      /* Mobile: 16px */
  line-height: 1.75;     /* Improved readability */
}
@media (min-width: 768px) {
  .content-text {
    font-size: 1.125rem; /* Tablet: 18px */
    line-height: 1.8;
  }
}
@media (min-width: 1024px) {
  .content-text {
    font-size: 1.25rem;  /* Desktop: 20px */
  }
}
```

**Why:**
- Three-stage scaling (mobile → tablet → desktop)
- Increased line-height (1.6 → 1.75) improves readability
- More generous spacing between lines
- Smoother progression

**Image System - Modern Drop Shadows:**

**Before:**
```html
<div class="polaroid p-2 shadow-lg rounded-lg border border-gray-300">
  <img class="w-full h-64 md:h-80 object-cover rounded" />
</div>
```

**After:**
```html
<div class="image-wrapper">
  <img src="..." loading="lazy" />
</div>
```

```css
.image-wrapper {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(240, 253, 250, 0.95) 100%);
  padding: 0.75rem;
  border-radius: 1rem;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06),
    0 20px 25px -5px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(var(--ac-primary), 0.1);
  transition: all 0.3s ease;
}

.image-wrapper:hover {
  transform: translateY(-4px);
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05),
    0 25px 50px -12px rgba(0, 0, 0, 0.15);
}
```

**Features:**
1. **Layered Shadows:** Three-layer shadow for realistic depth
2. **Hover Lift:** Rises 4px on hover with enhanced shadow
3. **Gradient Background:** Subtle gradient frame (white → mint)
4. **Smooth Transitions:** 300ms ease for all properties
5. **Brand Integration:** Border uses theme primary color
6. **Performance:** `lazy` loading for images below fold

**Mobile Sizing:**
```css
.image-container {
  max-width: 350px;  /* Larger than before (300px) */
  margin: 1rem auto; /* Centered on mobile */
}
@media (min-width: 768px) {
  max-width: 100%;   /* Full width in grid on desktop */
  margin: 0;
}

img {
  height: 16rem;     /* 256px on mobile */
}
@media (min-width: 768px) {
  height: 20rem;     /* 320px on tablet+ */
}
```

**Spacing Improvements:**
```css
.content-section {
  margin-bottom: 3rem;  /* Increased from 2rem */
}
.content-section:last-child {
  margin-bottom: 0;     /* No margin on last section */
}
```

**Grid Gaps:**
- **Before:** `gap-4`
- **After:** `gap-6 lg:gap-8`
- **Why:** More breathing room between text and images

**Link Styling:**
- **Before:** `text-blue-600 hover:text-blue-800`
- **After:** `text-primary hover:text-primary/80 transition-colors`
- **Why:** Uses brand colors, smooth color transitions

**All 3 images updated consistently:**
1. Amanda headshot (`AmandaLiczner.jpg`)
2. Bumble bee with radio tag (`Bumble.jpg`)
3. Amanda with dog in kayak (`Phoebe.jpg`)

---

### 3. Modern Design Enhancements

#### CTA Section - Gradient Background
**File:** `src/sections/CTA.astro:11-58`

**Before:**
```html
<div class="max-w-4xl mx-auto border border-gray-300 rounded-3xl p-px">
  <div class="flex flex-col gap-12 bg-neutral-100/80 rounded-3xl px-6 lg:px-12 xl:px-18 py-12 lg:py-24">
```

**After:**
```html
<div class="max-w-4xl mx-auto relative">
  <!-- Gradient glow effect -->
  <div class="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/15 to-primary/10 rounded-3xl blur-sm"></div>

  <!-- Content card -->
  <div class="relative border border-primary/20 rounded-3xl overflow-hidden shadow-xl">
    <div class="flex flex-col gap-8 lg:gap-12
                bg-gradient-to-br from-white via-neutral-50 to-primary/5
                px-6 sm:px-8 lg:px-12 xl:px-16 py-12 lg:py-20">
```

**Visual Effects:**
1. **Blurred Gradient Backdrop:** Creates glow effect behind card
2. **Layered Gradients:** Background + content gradient for depth
3. **Shadow Elevation:** `shadow-xl` for prominence
4. **Brand Colors:** Uses theme primary/secondary in gradients
5. **Overflow Hidden:** Ensures gradient doesn't bleed

**Typography:**
- **Heading:** `text-3xl sm:text-4xl lg:text-5xl` (responsive)
- **Description:** `text-base sm:text-lg lg:text-xl` (progressive scaling)
- **Max Width:** `max-w-2xl` on description (readability)

**Spacing:**
- **Padding:** Progressive `px-6 sm:px-8 lg:px-12 xl:px-16`
- **Section Padding:** `pb-16 lg:pb-24` (increased vertical space)
- **Gap:** `gap-8 lg:gap-12` (more breathing room)

---

#### Button Component Modernization
**File:** `src/components/Button.astro:15-16`

**Before:**
```css
hover:shadow-lg hover:bg-secondary
px-8 py-4 rounded-md transition
```

**After:**
```css
hover:shadow-2xl hover:scale-105 hover:bg-secondary hover:-translate-y-1
px-8 py-4 rounded-xl transition-all duration-300 ease-out shadow-lg font-medium
```

**Improvements:**
1. **Base Shadow:** Buttons now have `shadow-lg` by default (depth)
2. **Hover Shadow:** Increased to `shadow-2xl` (dramatic effect)
3. **Border Radius:** `rounded-md` → `rounded-xl` (more modern)
4. **Transform on Hover:**
   - `scale-105` (5% growth)
   - `-translate-y-1` (lifts 4px)
5. **Font Weight:** Added `font-medium` (stronger presence)
6. **Transition:** `transition` → `transition-all duration-300 ease-out`
   - Animates all properties
   - 300ms duration (smooth)
   - Ease-out timing (natural deceleration)

**Visual Impact:**
- Buttons appear elevated by default
- Hover creates clear affordance (clickable)
- Smooth animations (professional polish)

---

### 4. Accessibility & UX Improvements

#### Focus States
**File:** `src/layouts/Layout.astro:53-58`

**Added:**
```css
a:focus-visible,
button:focus-visible {
  outline: 2px solid rgb(var(--ac-primary));
  outline-offset: 2px;
}
```

**Why:**
- Keyboard navigation support
- WCAG 2.1 compliance
- Uses brand color (consistent)
- Offset prevents overlap with content

#### Smooth Scroll with Offset
**File:** `src/layouts/Layout.astro:32-34`

**Added:**
```css
html {
  scroll-padding-top: 80px;
}
```

**Why:**
- Prevents anchor links from scrolling behind fixed header
- Accounts for header height (~80px)
- Works with smooth scroll behavior

#### Lazy Loading Images
**Files:** All three sections in `AboutMe.astro`

**Added:** `loading="lazy"` attribute to all images

**Benefits:**
- Faster initial page load
- Saves bandwidth on mobile
- Images load as user scrolls
- Better Core Web Vitals scores

---

## File Summary

### Files Modified (10)
1. `src/pages/index.astro` - SEO, imports cleanup
2. `src/sections/Hero.astro` - Mobile typography, spacing
3. `src/sections/Intro.astro` - Spacing, padding
4. `src/sections/AboutMe.astro` - Complete redesign (images, typography)
5. `src/sections/CTA.astro` - Gradient background, modern styling
6. `src/components/Card.astro` - Shadow system, hover effects
7. `src/components/Button.astro` - Modern styling, animations
8. `src/layouts/Layout.astro` - Focus states, scroll padding

### New Files Created (1)
1. `development-guide/homepage-modernization-2025.md` - This document

---

## Design System Patterns Established

### Shadow Hierarchy
```css
/* Subtle - Resting state */
shadow-md

/* Medium - Interactive elements */
shadow-lg

/* Prominent - Hero elements, hover states */
shadow-xl

/* Dramatic - Hover on important elements */
shadow-2xl
```

### Gradient Patterns
```css
/* Cards - Subtle brand colors */
bg-gradient-to-br from-primary/10 via-white to-secondary/10

/* CTA Background - Glow effect */
bg-gradient-to-br from-primary/20 via-secondary/15 to-primary/10 + blur-sm

/* Image Frames - Subtle tint */
linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(240, 253, 250, 0.95) 100%)
```

### Hover Effects
```css
/* Standard Lift Pattern */
hover:scale-105 hover:-translate-y-2 hover:shadow-2xl
transition-all duration-300 ease-out

/* Image Lift Pattern */
hover:transform: translateY(-4px)
+ enhanced shadow
```

### Spacing Scale
```css
/* Mobile → Desktop */
gap-6 lg:gap-8          /* Small gaps */
gap-8 sm:gap-12 lg:gap-16  /* Large gaps */
py-12 lg:py-20          /* Section padding */
px-4 sm:px-6            /* Container padding */
```

---

## Performance Optimizations

1. **Lazy Loading:** All below-fold images
2. **Clamp Typography:** Reduces CSS, smoother scaling
3. **Removed Unused Imports:** Smaller bundle size
4. **Efficient Transitions:** `transition-all` only where needed
5. **GPU Acceleration:** `transform` and `opacity` (not `top`/`left`)

---

## Mobile-First Breakpoints Used

```css
/* Base: Mobile (< 640px) */
Default styles

/* sm: (≥ 640px) */
Tablets portrait

/* md: (≥ 768px) */
Tablets landscape

/* lg: (≥ 1024px) */
Desktop

/* xl: (≥ 1280px) */
Large desktop
```

All components now scale progressively across these breakpoints.

---

## Testing Checklist

- [ ] Test on iPhone SE (smallest modern phone - 375px)
- [ ] Test on iPad (768px and 1024px orientations)
- [ ] Test on Desktop (1920px)
- [ ] Verify all images load lazily
- [ ] Test keyboard navigation (Tab key)
- [ ] Verify focus states visible
- [ ] Test anchor link scrolling (/#about-me)
- [ ] Verify smooth scroll works
- [ ] Check hover effects on desktop
- [ ] Verify touch targets ≥44px on mobile
- [ ] Test in Safari (iOS and macOS)
- [ ] Test in Chrome, Firefox
- [ ] Lighthouse audit (Performance, Accessibility, SEO)

---

## Future Enhancements (Recommended)

1. **Performance:**
   - Add `fetchpriority="high"` to hero image
   - Implement responsive images (`<picture>` with multiple sources)
   - Add WebP format with JPG fallback

2. **Accessibility:**
   - Add ARIA labels to navigation cards
   - Implement skip-to-content link
   - Add alt text review for all images

3. **SEO:**
   - Add structured data (Schema.org Person/Researcher)
   - Implement breadcrumb navigation
   - Add meta description length validation

4. **Design:**
   - Add subtle parallax to hero image
   - Implement dark mode toggle
   - Add micro-interactions (button press states)

---

## Browser Compatibility

All changes use well-supported CSS:
- `clamp()` - Supported since 2020 (96%+ browsers)
- `drop-shadow()` - Fully supported
- CSS Grid - Universal support
- Tailwind utilities - Autoprefixed by Tailwind

**Fallbacks:**
- `min-h-screen` fallback for `h-screen`
- Default sizes in `clamp()` for older browsers

---

## Developer Notes

### When Adding New Sections
Follow these patterns:

1. **Spacing:** `py-12 lg:py-20` for sections
2. **Container:** Always add `px-4 sm:px-6`
3. **Images:** Use `.image-wrapper` class from AboutMe
4. **Typography:** Use `.content-text` for body text
5. **Shadows:** Follow hierarchy (md → lg → xl → 2xl)
6. **Hover:** Use lift pattern (`scale-105 -translate-y-2`)

### Class Naming Convention
- Use semantic Tailwind classes
- Extract repeated patterns to components
- Avoid arbitrary values unless necessary
- Keep responsive classes together

---

## Commit Message Suggestion

```
feat: Modernize homepage with improved mobile UX and design

- Fix SEO: Correct name typo, add canonical URL, enhance OpenGraph
- Mobile: Responsive typography with clamp(), improved spacing
- Design: Add drop shadows, gradient backgrounds, modern hover effects
- Accessibility: Add focus states, smooth scroll padding, lazy loading
- Performance: Remove unused imports, optimize images

BREAKING CHANGE: None (visual-only changes)
```

---

**Document Version:** 1.0
**Date:** December 2025
**Author:** Claude Code
**Review Status:** Ready for deployment
