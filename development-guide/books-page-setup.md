# Books Page Setup Guide

## Overview
This guide documents the new Books showcase page created for Dr. Amanda Liczner's website. The page features three pollinator-themed colouring books with modern design, responsive layout, and direct Amazon integration.

---

## Page Location
**URL:** `/books`
**File:** `src/pages/books/index.astro`

---

## Design Features

### Modern Design Patterns Applied
Following the homepage modernization guide, the books page includes:

1. **Drop Shadows & Elevation**
   - Book cards: `shadow-lg` → `hover:shadow-2xl`
   - Gradient glow effect on hover (blurred background)
   - Layered shadow system for depth

2. **Gradient Backgrounds**
   - Hero section: Subtle primary/secondary gradient
   - Card hover: Blurred gradient glow effect
   - CTA section: Layered gradients (same as homepage)
   - Amazon buttons: Orange gradient (`#FF9900` → `#FFB84D`)

3. **Smooth Animations**
   - Card hover: `scale + translate-y` (lift effect)
   - Amazon button: Shimmer effect on hover
   - All transitions: 300ms ease-out

4. **Responsive Typography**
   - Hero title: `text-4xl sm:text-5xl lg:text-6xl`
   - Progressive scaling across breakpoints
   - Gradient text effect on heading

5. **Mobile-First Layout**
   - Grid: `1 col → 2 cols (md) → 3 cols (lg)`
   - Responsive padding: `px-4 sm:px-6`
   - Proper spacing: `gap-8 lg:gap-12`

---

## Books Data Structure

Located in frontmatter of `src/pages/books/index.astro:9-33`:

```typescript
const books = [
  {
    title: string,              // Book title
    type: string,               // "Children's Colouring Book" or "Adult Colouring Book"
    description: string,        // Brief description (2-3 sentences)
    amazonUrl: string,          // Amazon product URL
    coverImage: string,         // Path to book cover image
    targetAudience: string,     // "Children" or "Adults" (shown as badge)
  }
]
```

### Current Books

1. **Pollinator ABC Colouring Book**
   - Type: Children's Colouring Book
   - Audience: Children
   - Theme: Alphabet learning with pollinators

2. **A Visit From Santa Bee**
   - Type: Children's Colouring Book
   - Audience: Children
   - Theme: Holiday-themed bee story

3. **Pollinator Colouring Book for Adults**
   - Type: Adult Colouring Book
   - Audience: Adults
   - Theme: Detailed pollinator illustrations

---

## TODO: Adding Book Cover Images

### Step 1: Prepare Images

**Required Images:**
1. `book-pollinator-abc.jpg` - Pollinator ABC Colouring Book cover
2. `book-santa-bee.jpg` - A Visit From Santa Bee cover
3. `book-pollinator-adult.jpg` - Adult Colouring Book cover

**Image Specifications:**
- **Format:** JPG or PNG
- **Aspect Ratio:** 3:4 (portrait, book cover standard)
- **Recommended Size:** 600x800px minimum
- **File Size:** < 500KB (optimize for web)
- **Quality:** High resolution, clear text

### Step 2: Add to Project

```bash
# Place images in public/pictures/ directory
cp book-pollinator-abc.jpg public/pictures/
cp book-santa-bee.jpg public/pictures/
cp book-pollinator-adult.jpg public/pictures/
```

### Step 3: Verify Paths

Images are already configured in `src/pages/books/index.astro`:
```typescript
coverImage: '/pictures/book-pollinator-abc.jpg',
coverImage: '/pictures/book-santa-bee.jpg',
coverImage: '/pictures/book-pollinator-adult.jpg',
```

**Current Behavior:**
- Placeholder gradient displays if image not found
- Book icon shown in placeholder
- Images load lazily with fade-in effect
- Error handling: `onerror="this.style.opacity='0'"`

### Step 4: Test Images

```bash
npm run dev
# Visit http://localhost:4321/books
# Verify all three book covers display correctly
```

---

## TODO: Adding Amazon URLs

### Step 1: Get Amazon Product URLs

For each book, get the Amazon product page URL:
1. Go to Amazon.com
2. Search for your book
3. Copy the product URL (format: `https://www.amazon.com/dp/ASIN`)

**Recommended URL Format:**
- Use short ASIN format: `https://www.amazon.com/dp/B0XXXXXX`
- Or full product URL: `https://www.amazon.com/Book-Title-Author/dp/B0XXXXXX`

### Step 2: Update Book Data

Edit `src/pages/books/index.astro` lines 14, 21, 28:

```typescript
// Before
amazonUrl: '#',

// After (example)
amazonUrl: 'https://www.amazon.com/dp/B0XXXXXX',
```

**Example:**
```typescript
const books = [
  {
    title: 'Pollinator ABC Colouring Book',
    type: 'Children\'s Colouring Book',
    description: '...',
    amazonUrl: 'https://www.amazon.com/dp/B0ABC123',  // ← Update this
    coverImage: '/pictures/book-pollinator-abc.jpg',
    targetAudience: 'Children',
  },
  // ... repeat for other books
]
```

### Step 3: Add Amazon Affiliate Tag (Optional)

If you have an Amazon Associates account:

```typescript
amazonUrl: 'https://www.amazon.com/dp/B0XXXXXX?tag=youraffiliateID-20',
```

### Step 4: Test Links

```bash
npm run dev
# Click "View on Amazon" buttons
# Verify links open correct products in new tabs
```

---

## Navigation Updates

### Desktop Navigation (Header)
**File:** `src/components/Header.astro:25-29`

Added "Books" link before "Skills & Education":
```html
<li class="hidden lg:block">
  <a
    class="text-md hover:text-primary transition duration-300 ease-in-out"
    href="/books">Books</a>
</li>
```

### Mobile Navigation (Sidebar)
**File:** `src/layouts/Sidebar.astro:20`

Added to mobile menu:
```html
<NavLink href="/books" label="Books" />
```

### Homepage Cards
**File:** `src/sections/Intro.astro:14-56`

**Changes:**
- Grid layout: `lg:grid-cols-4` → `lg:grid-cols-3 xl:grid-cols-5`
- Added Books card as first item
- Now 5 cards total (Books, Skills, Recent Work, Experience, Contact)

**Responsive Behavior:**
- Mobile: 1 column (stacked)
- Tablet (sm): 2 columns
- Desktop (lg): 3 columns
- Large Desktop (xl): 5 columns (all in one row)

---

## Page Components

### Hero Section
**Features:**
- Gradient background (`from-primary/5 via-secondary/5 to-primary/10`)
- Centered content with max-width constraint
- Gradient text effect on title
- Responsive typography

**SEO:**
- Page title: "Books - Dr. Amanda Liczner"
- Meta description includes key terms
- OpenGraph image set to first book cover
- Twitter card for social sharing

### Book Cards

**Card Structure:**
```html
<article class="book-card group">
  <!-- Gradient Glow (visible on hover) -->
  <div class="absolute ... blur-sm opacity-0 group-hover:opacity-100"></div>

  <!-- Main Card -->
  <div class="relative ... shadow-lg hover:shadow-2xl">

    <!-- Book Cover with 3:4 aspect ratio -->
    <div class="aspect-[3/4]">
      <img ... />
    </div>

    <!-- Audience Badge (top-right corner) -->
    <span class="absolute top-4 right-4">Children|Adults</span>

    <!-- Book Details -->
    <div class="p-6 lg:p-8">
      <p class="type">Children's Colouring Book</p>
      <h2 class="title">Book Title</h2>
      <p class="description">Description...</p>

      <!-- Amazon Button -->
      <a href="..." class="amazon-button">
        <svg>Amazon logo</svg>
        View on Amazon
      </a>
    </div>
  </div>
</article>
```

**Card Features:**
1. **Hover Effects:**
   - Blurred gradient glow appears
   - Shadow intensifies (lg → 2xl)
   - Book cover gets shimmer effect

2. **Audience Badge:**
   - White background with primary border
   - Positioned top-right on book cover
   - Shows "Children" or "Adults"

3. **Amazon Button:**
   - Official Amazon orange gradient
   - Shimmer animation on hover
   - Amazon logo SVG included
   - Opens in new tab (`target="_blank"`)
   - Security: `rel="noopener noreferrer"`

### CTA Section

Reuses the modern CTA component from homepage:
- Gradient background with blur effect
- Two-button layout (responsive: stacked → side-by-side)
- Links to Experience and Contact pages
- Same styling as homepage for consistency

---

## Custom Styles

Located in `<style>` block at bottom of file:

### Book Cover Shimmer Effect
```css
.book-cover-container::after {
  content: '';
  background: linear-gradient(135deg, transparent, white 0.1, transparent);
  opacity: 0;
  transition: opacity 0.3s;
}

.book-card:hover .book-cover-container::after {
  opacity: 1;
}
```

### Amazon Button Shine Effect
```css
.amazon-button::before {
  content: '';
  background: linear-gradient(45deg, transparent, white 0.3, transparent);
  transform: translateX(-100%);
}

.amazon-button:hover::before {
  transform: translateX(100%);
  transition: transform 0.6s;
}
```

### Typography Protection
```css
h2 {
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
}
```
Prevents long titles from breaking layout on small screens.

---

## Responsive Breakpoints

### Grid Layout
```css
/* Mobile (< 640px) */
grid-cols-1         /* 1 column, stacked */

/* Tablet (≥ 768px) */
md:grid-cols-2      /* 2 columns */

/* Desktop (≥ 1024px) */
lg:grid-cols-3      /* 3 columns */
```

### Typography
```css
/* Hero Title */
text-4xl            /* Mobile: 36px */
sm:text-5xl         /* Tablet: 48px */
lg:text-6xl         /* Desktop: 60px */

/* Card Title */
text-2xl lg:text-3xl

/* Description */
text-base sm:text-lg lg:text-xl
```

### Spacing
```css
/* Section Padding */
py-20 lg:py-32      /* Hero */
py-12 lg:py-20      /* Books Grid */
pb-16 lg:pb-24      /* CTA */

/* Container Padding */
px-4 sm:px-6        /* Consistent across sections */

/* Grid Gaps */
gap-8 lg:gap-12     /* Books grid */
```

---

## SEO Optimization

### Meta Tags
```astro
<SEO
  title="Books - Dr. Amanda Liczner"
  description="Explore Dr. Amanda Liczner's collection of pollinator-themed colouring books for children and adults. Educational and beautifully illustrated books available on Amazon."
  canonical={`${siteUrl}/books`}
/>
```

### OpenGraph
- Title: "Books by Dr. Amanda Liczner"
- Image: First book cover (when added)
- Type: website
- URL: Full canonical URL

### Twitter Cards
- Card type: `summary_large_image`
- Will show book cover in tweet previews

### Structured Data Recommendations

Consider adding Schema.org Book markup (future enhancement):

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Book",
  "name": "Pollinator ABC Colouring Book",
  "author": {
    "@type": "Person",
    "name": "Dr. Amanda Liczner"
  },
  "bookFormat": "https://schema.org/Paperback",
  "genre": "Children's Educational",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "url": "https://www.amazon.com/dp/..."
  }
}
</script>
```

---

## Adding More Books (Future)

### Step 1: Add Book Data

Edit `src/pages/books/index.astro`, add to `books` array:

```typescript
const books = [
  // ... existing books
  {
    title: 'New Book Title',
    type: 'Children\'s Colouring Book', // or 'Adult Colouring Book'
    description: 'Description of the new book...',
    amazonUrl: 'https://www.amazon.com/dp/B0XXXXXX',
    coverImage: '/pictures/book-new.jpg',
    targetAudience: 'Children', // or 'Adults'
  },
]
```

### Step 2: Add Book Cover Image

```bash
cp book-new.jpg public/pictures/
```

### Step 3: Grid Layout Adjustment

**Current:** 3 books display nicely in 3-column grid

**4 Books:** Consider layout options:
- Option A: `lg:grid-cols-4` (4 columns on desktop)
- Option B: `lg:grid-cols-2 xl:grid-cols-4` (2 cols → 4 cols)
- Option C: Keep `lg:grid-cols-3`, books wrap to second row

**Recommendation for 4+ books:**
```astro
<ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-12">
```

---

## Performance Optimizations

### Implemented
1. **Lazy Loading:** `loading="lazy"` on all book cover images
2. **Fade-In Effect:** Images fade in smoothly when loaded
3. **Error Handling:** Graceful fallback to placeholder if image fails
4. **Optimized Gradients:** Uses CSS, not images
5. **Minimal JavaScript:** No JS required for page functionality

### Recommended (Future)
1. **Image Optimization:**
   ```bash
   # Use next-gen formats
   - book-pollinator-abc.webp (smaller file size)
   - book-pollinator-abc.jpg (fallback)
   ```

2. **Responsive Images:**
   ```html
   <picture>
     <source srcset="/pictures/book-abc-600w.webp" type="image/webp">
     <source srcset="/pictures/book-abc-600w.jpg" type="image/jpeg">
     <img src="/pictures/book-abc-600w.jpg" alt="...">
   </picture>
   ```

3. **Preload Critical Images:**
   ```html
   <link rel="preload" as="image" href="/pictures/book-pollinator-abc.jpg">
   ```

---

## Accessibility

### Implemented
1. **Semantic HTML:** `<article>`, `<section>`, proper heading hierarchy
2. **Alt Text:** Descriptive alt attributes on all images
3. **Focus States:** Keyboard navigation supported (inherits from Layout.astro)
4. **Link Purpose:** Clear button text "View on Amazon"
5. **External Link Security:** `rel="noopener noreferrer"` on Amazon links
6. **Color Contrast:** Text meets WCAG AA standards

### Test Checklist
- [ ] Keyboard navigation (Tab through all elements)
- [ ] Screen reader test (NVDA/JAWS)
- [ ] Focus indicators visible
- [ ] All images have alt text
- [ ] Color contrast passes (use browser devtools)
- [ ] Buttons ≥ 44x44px touch targets on mobile

---

## Testing Checklist

### Visual Testing
- [ ] Visit `/books` page in development
- [ ] Check all 3 book cards display correctly
- [ ] Verify placeholder shows if images missing
- [ ] Test hover effects on desktop (cards, buttons)
- [ ] Check responsive layout at all breakpoints:
  - [ ] Mobile (375px) - 1 column
  - [ ] Tablet (768px) - 2 columns
  - [ ] Desktop (1024px) - 3 columns
  - [ ] Large (1280px+) - 3 columns

### Functional Testing
- [ ] Click "View on Amazon" buttons
- [ ] Verify links open in new tabs
- [ ] Check navigation links work (header + sidebar)
- [ ] Test mobile menu includes Books link
- [ ] Verify Books card on homepage works

### Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (macOS & iOS)
- [ ] Edge (latest)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

### Performance Testing
```bash
# Build and check bundle size
npm run build

# Run Lighthouse audit
# Target scores: Performance 90+, Accessibility 95+, SEO 100
```

---

## Files Modified/Created

### New Files (1)
1. `src/pages/books/index.astro` - Books showcase page

### Modified Files (3)
1. `src/components/Header.astro` - Added Books to desktop nav
2. `src/layouts/Sidebar.astro` - Added Books to mobile nav
3. `src/sections/Intro.astro` - Added Books card, updated grid layout

### Files to Create (3)
User needs to add these book cover images:
1. `public/pictures/book-pollinator-abc.jpg`
2. `public/pictures/book-santa-bee.jpg`
3. `public/pictures/book-pollinator-adult.jpg`

---

## Quick Start Checklist

To complete the books page setup:

1. **Add Book Cover Images**
   ```bash
   # Copy your book cover images to:
   cp /path/to/covers/*.jpg public/pictures/

   # Ensure filenames match:
   # - book-pollinator-abc.jpg
   # - book-santa-bee.jpg
   # - book-pollinator-adult.jpg
   ```

2. **Add Amazon URLs**
   ```typescript
   // Edit src/pages/books/index.astro
   // Replace '#' with actual Amazon URLs on lines 14, 21, 28
   amazonUrl: 'https://www.amazon.com/dp/YOUR_ASIN',
   ```

3. **Test Locally**
   ```bash
   npm run dev
   # Visit http://localhost:4321/books
   ```

4. **Build & Deploy**
   ```bash
   npm run build
   npm run preview  # Test production build
   # Then deploy to Vercel
   ```

---

## Maintenance Notes

### Updating Book Information

**To change book title/description:**
- Edit `src/pages/books/index.astro` lines 9-33
- Update the `books` array data
- No other files need modification

**To change book order:**
- Reorder objects in `books` array
- Left-to-right display order

**To temporarily hide a book:**
- Comment out the book object in array
- Or add a `hidden: true` property and filter:
  ```typescript
  {books.filter(book => !book.hidden).map((book) => (
    // ... card markup
  ))}
  ```

### Design Consistency

When making changes, maintain consistency with:
- Homepage modernization patterns (see `homepage-modernization-2025.md`)
- Shadow hierarchy: md → lg → xl → 2xl
- Hover pattern: `scale-105 -translate-y-1/2`
- Spacing: `gap-6 lg:gap-8`, `py-12 lg:py-20`
- Responsive padding: `px-4 sm:px-6`

---

## Support & Troubleshooting

### Images Not Displaying
1. Check file paths match exactly (case-sensitive)
2. Verify images are in `public/pictures/` directory
3. Check browser console for 404 errors
4. Ensure image files are committed to git

### Amazon Links Not Working
1. Verify URL format is correct
2. Check for typos in ASIN
3. Test URLs directly in browser
4. Ensure `target="_blank"` is present

### Layout Issues on Mobile
1. Test at 375px width (iPhone SE)
2. Check padding: `px-4` should prevent edge-touching
3. Verify grid: `grid-cols-1` on mobile
4. Use browser devtools responsive mode

### Hover Effects Not Working
1. Desktop only - normal on touch devices
2. Check CSS transitions are enabled
3. Clear browser cache
4. Test in different browser

---

**Document Version:** 1.0
**Date:** December 2025
**Author:** Claude Code
**Related Docs:** `homepage-modernization-2025.md`
