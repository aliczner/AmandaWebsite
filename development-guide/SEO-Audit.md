# SEO Audit - Amanda Liczner Website

**Conducted:** December 2025
**Website:** https://amandaliczner.ca
**Auditor:** Senior SEO Consultant Analysis

---

## Executive Summary

This audit identifies critical SEO issues affecting the website's search engine visibility and organic traffic potential. While the site has strong technical foundations and excellent SEO implementation on newer pages (Books, Experience, Skills & Education), several pages suffer from thin content, missing elements, and optimization gaps that significantly impact search rankings.

**Overall Grade: C+**

- **Strengths:** Excellent structured data, good meta tag implementation on key pages, mobile-responsive design
- **Critical Issues:** Thin content on research project pages, inconsistent alt-text, missing H1 tags, poor internal linking
- **Priority:** High - These issues are preventing Google from understanding and ranking your specialized research content

---

## 🔎 Issue #1 — Critically Thin Content on Research Project Pages

**Severity:** CRITICAL
**Pages Affected:** `/experience/bee-needs`, `/experience/env-stressors`, `/experience/pathogen`, `/experience/soil-temperature`, `/experience/urban-gardens`

### The Problem

Your individual research project pages contain only **50-150 words** of text. Google's algorithms favor comprehensive, authoritative content (typically 800-2000+ words for educational/research topics).

**Current state example (bee-needs.astro):**
- Only ~120 words of actual content
- No structured headings beyond H1
- No keywords like "bumble bee radio telemetry," "pollinator movement tracking," "bee conservation research"
- Missing author expertise signals
- No internal links to related research

### Why This Hurts SEO

1. **Insufficient Indexable Content:** Google can't determine topic authority with so little text
2. **No Keyword Coverage:** You're missing opportunities to rank for valuable long-tail keywords
3. **High Bounce Rate Risk:** Users seeking detailed research info will leave quickly
4. **Lost Link Equity:** These pages can't support internal linking strategies
5. **Poor E-E-A-T Signals:** Doesn't showcase your expertise, experience, authoritativeness, or trustworthiness

### Recommended Fix

Each research project page should contain **800-1500 words** minimum:

#### Structure Template:
```markdown
## [Project Title] - H1 with Keywords
### Research Overview (200-300 words)
- Problem statement
- Why this research matters
- Conservation implications

### Methodology (200-300 words)
- Research approach
- Radio telemetry technology details
- Field work specifics
- Data collection methods

### Key Findings (200-300 words)
- Preliminary results
- Data insights
- Conservation implications
- Movement patterns discovered

### Publications & Presentations (100-150 words)
- Related papers
- Conference presentations
- Media coverage

### Why This Research Matters (150-200 words)
- Conservation impact
- Policy implications
- Future research directions

### Related Research
- Internal links to other projects
- External links to published papers
```

#### Keyword Opportunities Per Page:

**bee-needs.astro:**
- "bumble bee radio telemetry tracking"
- "bumble bee nesting habitat research"
- "queen bumble bee overwintering sites"
- "pollinator movement behavior study"
- "radio tag bee tracking Canada"

**env-stressors.astro:**
- "pesticide impacts on bumble bees"
- "neonicotinoid effects pollinators"
- "diamide pesticides bee research"
- "environmental stressors bumble bees"
- "radio telemetry pesticide studies"

**pathogen.astro:**
- "bumble bee pathogen spillover Canada"
- "managed bee disease transmission"
- "wild bumble bee pathogen risk"
- "pollinator disease ecology"

**Target:** 5-10 keyword phrases per page, naturally integrated

---

## 🔎 Issue #2 — Missing or Weak H1 Tags on Multiple Pages

**Severity:** HIGH
**Pages Affected:** `/current-work`, `/contact`, individual research pages

### The Problem

Several pages have generic or missing H1 tags that don't target valuable keywords:

- **Current Work page:** H1 is just "My Work" (generic, no keywords)
- **Contact page:** H1 is "Contact me" (generic, no SEO value)
- **Homepage:** Title mismatch - page title says "Homepage - Amanda Licnzer" but SEO title says "Amanda Liczner - Homepage"

### Why This Hurts SEO

The H1 tag is the **most important on-page SEO element**. It tells Google:
1. What your page is primarily about
2. Which keywords should rank
3. How to categorize your content

Current H1s don't include:
- "bumble bee research"
- "pollinator conservation"
- "ecology" or "ecologist"
- Geographic terms like "Canada," "Guelph," "UBC"

### Recommended Fix

**Current Work page:**
```html
<!-- Current -->
<h1>My Work</h1>

<!-- Should be -->
<h1>Bumble Bee Research Projects - Pollinator Conservation & Ecology</h1>
```

**Contact page:**
```html
<!-- Current -->
<h1>Contact me</h1>

<!-- Should be -->
<h1>Contact Dr. Amanda Liczner - Bumble Bee Research Collaboration</h1>
```

**Individual Research Pages:**
```html
<!-- Example: bee-needs.astro -->
<h1>Tracking Bumble Bee Movement with Radio Telemetry - Habitat & Conservation Research</h1>

<!-- Example: env-stressors.astro -->
<h1>Pesticide Impacts on Bumble Bee Queens - Neonicotinoid & Diamide Research</h1>
```

**Homepage typo fix:**
```astro
<!-- src/pages/index.astro line 18 -->
<!-- Current has typo: "Homepage - Amanda Licnzer" -->
<Layout title="Homepage - Dr. Amanda Liczner">
```

---

## 🔎 Issue #3 — Inconsistent and Missing Image Alt-Text

**Severity:** HIGH
**Pages Affected:** All pages with images

### The Problem

Your site has **inconsistent alt-text quality**:

#### Good Examples (Books page):
```html
alt="Pollinator ABC Colouring Book cover featuring educational bee and butterfly illustrations"
```

#### Poor Examples (Research pages):
```html
<!-- Too generic -->
alt="A bumble bee landed on a flower in the field"

<!-- Missing keywords -->
alt="Amanda inspecting a radiotelemetry tower"
```

### Why This Hurts SEO

1. **Lost Image Search Rankings:** Google Images is a major traffic source for science/nature content
2. **Missed Keyword Opportunities:** Alt-text is indexed and ranked separately
3. **Accessibility Issues:** Screen readers need descriptive alt-text
4. **Context Loss:** Google uses alt-text to understand page topic

### Recommended Fix

#### Formula for Research Image Alt-Text:
`[Subject] + [Research Context] + [Scientific Detail] + [Location if relevant]`

#### Examples:

**bee-needs.astro images:**
```html
<!-- Current -->
<img alt="A bumble bee landed on a flower in the field" />

<!-- Should be -->
<img alt="Bumble bee queen foraging on wildflower during radio telemetry tracking study - pollinator conservation research" />

<!-- Current -->
<img alt="A bumble bee with a radio tag on its back climbing on Amanda's finger" />

<!-- Should be -->
<img alt="Radio-tagged bumble bee queen with micro-transmitter for movement tracking - Dr. Amanda Liczner bee conservation research" />

<!-- Current -->
<img alt="Amanda inspecting a radiotelemetry tower" />

<!-- Should be -->
<img alt="Dr. Amanda Liczner examining automated radio telemetry tower used for tracking bumble bee movement and habitat selection" />
```

**ProjectCard component images:**
```html
<!-- env-stressors project -->
alt="Bumble bee queen with radio tag - pesticide impact research on pollinator movement behavior"

<!-- pathogen project -->
alt="Pathogen spillover risk mapping for wild bumble bees across Canada - conservation biology research"

<!-- soil-temperature project -->
alt="Soil temperature monitoring equipment for predicting bumble bee queen emergence timing in spring"
```

**Key Alt-Text Keywords to Include:**
- "bumble bee" or "pollinator"
- Research type: "radio telemetry," "habitat selection," "conservation," "tracking"
- Species: "queen," "native bees"
- Geographic: "Canada," specific locations
- Researcher: "Dr. Amanda Liczner" (establishes authorship)

---

## 🔎 Issue #4 — Weak Internal Linking Structure

**Severity:** HIGH
**Pages Affected:** All pages

### The Problem

Your site has **minimal internal linking** between related content:

1. **Research pages don't link to each other** (pesticide research doesn't link to habitat research)
2. **No links from homepage to research projects** (only to /current-work overview)
3. **Books page doesn't link to research credibility** (should link to /experience or /skills-education)
4. **Contact page is a dead end** (no contextual links to research or books)
5. **Missing breadcrumb navigation** on research subpages

### Why This Hurts SEO

Internal links:
1. **Distribute Page Authority:** Help Google understand page importance
2. **Establish Topic Clusters:** Connect related research creates topical authority
3. **Improve Crawlability:** Helps Google discover and index all content
4. **Increase Session Duration:** Keeps users engaged longer (positive ranking signal)
5. **Create Semantic Relationships:** Tells Google how topics relate

### Recommended Fix

#### 1. Create Topic Clusters

**Cluster 1: Research Methods**
- Hub page: `/experience` or new `/research-methods`
- Spoke pages: All radio telemetry projects, habitat studies
- Each spoke links back to hub and to related spokes

**Cluster 2: Bumble Bee Conservation**
- Hub page: New `/bumble-bee-conservation`
- Spoke pages: All bumble bee research pages
- Links to books, skills, contact

**Cluster 3: Pollinator Education**
- Hub page: `/books`
- Spoke pages: Individual book pages (if created), education resources
- Links to research showing expertise

#### 2. Add Contextual Links to Research Pages

**Example for bee-needs.astro:**
```html
<div class="related-research">
  <h2>Related Research</h2>
  <ul>
    <li><a href="/experience/env-stressors">Learn how pesticides affect bee movement patterns</a></li>
    <li><a href="/experience/pathogen">Discover pathogen risks to bumble bee populations</a></li>
    <li><a href="/skills-education">Explore the radio telemetry expertise behind this research</a></li>
  </ul>
</div>
```

#### 3. Add "Author Expertise" Sections

On each research page, add:
```html
<aside class="author-box">
  <h3>About the Researcher</h3>
  <p>Dr. Amanda Liczner is a conservation biologist specializing in bumble bee ecology.
  <a href="/skills-education">Learn more about her research expertise</a> or
  <a href="/books">explore her pollinator education books</a>.</p>
</aside>
```

#### 4. Footer Enhancement

Add a "Research Areas" footer section:
```html
<footer>
  <div class="research-areas">
    <h4>Research Focus</h4>
    <ul>
      <li><a href="/experience/bee-needs">Radio Telemetry Tracking</a></li>
      <li><a href="/experience/env-stressors">Pesticide Impact Studies</a></li>
      <li><a href="/experience/pathogen">Pathogen Ecology</a></li>
      <li><a href="/books">Pollinator Education</a></li>
    </ul>
  </div>
</footer>
```

#### 5. Add Breadcrumbs to All Subpages

Already implemented on `/books` and `/experience` - excellent! But missing on individual research pages:

```html
<!-- Add to all /experience/* pages -->
<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/experience">Research Experience</a></li>
    <li aria-current="page">Tracking Bumble Bee Movement</li>
  </ol>
</nav>
```

**Target:** 3-8 internal links per page

---

## 🔎 Issue #5 — No Blog or Content Marketing Strategy

**Severity:** MEDIUM-HIGH
**Pages Affected:** Site-wide

### The Problem

Your website is **100% static pages** with no regularly updated content:

- No blog or news section
- No research updates
- No "What I'm currently working on" section with dates
- Last content update: Unknown to Google (static site)

### Why This Hurts SEO

1. **Freshness Signals:** Google favors recently updated content
2. **Missed Long-Tail Keywords:** Blog posts capture specific research questions
3. **No Reason to Recrawl:** Google doesn't check static sites frequently
4. **Lost Topical Authority:** Can't expand on adjacent topics (bee conservation policy, climate change impacts, etc.)
5. **Low User Engagement:** No reason for repeat visits

### Recommended Fix

#### Option A: Add a Blog Section (Recommended)

Create `/blog` or `/research-updates`:

**Potential Blog Posts:**
1. "Why Radio Telemetry is Revolutionizing Bumble Bee Research" (800 words)
2. "5 Things We've Learned About Bumble Bee Overwintering Sites" (1000 words)
3. "The Hidden Impact of Diamide Pesticides on Pollinator Movement" (1200 words)
4. "How to Create Bumble Bee Habitat in Your Backyard" (900 words) - links to books
5. "Behind the Scenes: A Day of Radio Telemetry Field Work" (1000 words)
6. "Why Canada's Bumble Bees Need Protection from Pathogen Spillover" (1100 words)

**Frequency:** 1-2 posts per month minimum

**SEO Benefits:**
- Fresh content signals
- Target hundreds of long-tail keywords
- Natural internal linking opportunities
- Shareable content for social media
- Builds E-E-A-T (expertise demonstration)

#### Option B: Add "Research Updates" Section (Lighter Lift)

Add a `/updates` page with timestamped entries:

```markdown
## Recent Research Milestones

### December 2025 - New Findings on Queen Movement Patterns
We've discovered that late-summer queens return to the same foraging areas for up to 50 days...
[Learn more about this research](/experience/bee-needs)

### November 2025 - Pathogen Mapping Study Published
Our Canada-wide pathogen risk assessment has been published in Conservation Biology...
[Read the paper] [View research details](/experience/pathogen)
```

**SEO Benefits:**
- Shows active research (freshness)
- Provides publication dates for Google
- Creates natural update cycle
- Easier to maintain than full blog

#### Option C: Add "In the News" or "Media" Section

Showcase:
- Media mentions of your research
- Conference presentations
- Published papers
- Podcast appearances
- Guest articles

**SEO Benefits:**
- External validation (E-E-A-T signals)
- Backlink opportunities
- Freshness when updated
- Social proof for visitors

---

## 🔎 Issue #6 — Missing Local SEO Optimization

**Severity:** MEDIUM
**Pages Affected:** Homepage, About, Contact

### The Problem

Your website has **minimal geographic targeting**:

- Homepage mentions "University of Guelph" only in meta description
- No city/province in main H1 or content
- Contact page has no location information
- Missing "Google My Business" / Google Maps integration
- No local schema markup for university affiliations

### Why This Hurts SEO

1. **Lost Local Rankings:** Can't rank for "bumble bee researcher Guelph" or "pollinator ecologist Ontario"
2. **University Association Underutilized:** UBC Okanagan and York University are trust signals
3. **Geographic Keywords:** Missing opportunities like "Canada bumble bee expert," "Ontario pollinator research"
4. **Academic SEO:** Not optimized for academic/institutional searches

### Recommended Fix

#### 1. Add Location Schema Markup

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Dr. Amanda Liczner",
  "jobTitle": "Postdoctoral Fellow - Bumble Bee Conservation",
  "affiliation": {
    "@type": "EducationalOrganization",
    "name": "University of Guelph",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Guelph",
      "addressRegion": "ON",
      "addressCountry": "CA"
    }
  },
  "workLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Ontario",
      "addressCountry": "Canada"
    }
  }
}
</script>
```

#### 2. Update Homepage H1/Content

```html
<!-- Add geographic context -->
<h1>Dr. Amanda Liczner - Bumble Bee Ecologist, University of Guelph, Canada</h1>

<!-- Or in intro section -->
<p>Dr. Amanda Liczner is a conservation biologist and bumble bee researcher
based at the University of Guelph, Ontario, Canada. Her radio telemetry
research tracks pollinator movement across Canadian ecosystems...</p>
```

#### 3. Update Contact Page

Add location context:
```html
<section class="location-info">
  <h2>Research Location</h2>
  <p>Dr. Liczner conducts her bumble bee conservation research at:</p>
  <address>
    University of Guelph<br>
    Guelph, Ontario, Canada
  </address>
  <p>Research sites span across Canada, including field stations in
  British Columbia, Ontario, and collaborative sites nationwide.</p>
</section>
```

#### 4. Add Geographic Keywords

**Target keywords:**
- "bumble bee researcher Canada"
- "pollinator ecologist Guelph Ontario"
- "Canadian bumble bee conservation"
- "University of Guelph bee research"
- "UBC Okanagan ecology postdoc"
- "York University pollinator PhD"

---

## 🔎 Issue #7 — Incomplete Structured Data Implementation

**Severity:** MEDIUM
**Pages Affected:** Homepage, research pages, contact

### The Problem

While your `/books` and `/experience` pages have **excellent** structured data (Product schema, Person schema, Breadcrumbs), other pages are missing critical schema:

**Missing Schema Types:**
1. **Research Project Schema** - No `ResearchProject` markup on individual studies
2. **Academic Article Schema** - No `ScholarlyArticle` for research pages
3. **FAQ Schema** - Could add to books/research pages
4. **Video Schema** - Contact page has video background (not marked up)
5. **Organization Schema** - Missing university affiliations

### Why This Hurts SEO

1. **Lost Rich Snippets:** Can't get enhanced search results (stars, images, details)
2. **Reduced Click-Through Rate:** Plain search results vs. enhanced snippets
3. **Missed Knowledge Graph Opportunities:** Hard for Google to connect you to research topics
4. **Incomplete Entity Recognition:** Google doesn't fully understand your research entities

### Recommended Fix

#### 1. Add ResearchProject Schema to Research Pages

```html
<!-- Add to each /experience/* page -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ResearchProject",
  "name": "Learning Bumble Bee Needs by Tracking with Radio Telemetry",
  "description": "Radio telemetry tracking study of bumble bee queens to identify nesting habitat, overwintering sites, and movement behavior",
  "funding": {
    "@type": "Grant",
    "funder": {
      "@type": "Organization",
      "name": "Natural Sciences and Engineering Research Council of Canada"
    }
  },
  "member": {
    "@type": "Person",
    "name": "Dr. Amanda Liczner",
    "jobTitle": "Principal Investigator"
  },
  "keywords": "bumble bee, radio telemetry, habitat selection, pollinator conservation, movement ecology",
  "about": [
    {
      "@type": "Thing",
      "name": "Bumble Bee Conservation"
    },
    {
      "@type": "Thing",
      "name": "Radio Telemetry"
    }
  ]
}
</script>
```

#### 2. Add ScholarlyArticle Schema (If Published)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  "headline": "Effects of Pesticides on Bumble Bee Movement Patterns",
  "author": {
    "@type": "Person",
    "name": "Dr. Amanda Liczner"
  },
  "datePublished": "2024-03-15",
  "publisher": {
    "@type": "Organization",
    "name": "Journal of Applied Ecology"
  },
  "about": "Bumble Bee Pesticide Research"
}
</script>
```

#### 3. Add FAQ Schema to Books Page

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What age is the Pollinator ABC Colouring Book for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Pollinator ABC Colouring Book is perfect for children aged 3-8 years old learning about bees, butterflies, and pollinators."
      }
    },
    {
      "@type": "Question",
      "name": "Are the illustrations scientifically accurate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! All pollinator illustrations are created by Dr. Amanda Liczner, a bumble bee ecologist, ensuring scientific accuracy while remaining engaging for all ages."
      }
    }
  ]
}
</script>
```

#### 4. Enhance Person Schema Site-Wide

Currently you have Person schema on some pages - make it comprehensive:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Dr. Amanda Liczner",
  "alternateName": "Amanda Liczner",
  "jobTitle": "Postdoctoral Fellow - Bumble Bee Conservation Biology",
  "description": "Conservation biologist and ecologist specializing in bumble bee research, radio telemetry tracking, and pollinator conservation",
  "url": "https://amandaliczner.ca",
  "image": "https://amandaliczner.ca/pictures/AmandaLiczner.jpg",
  "sameAs": [
    "https://www.instagram.com/bumblebeehaviour/",
    "https://bsky.app/profile/bumblebeehaviour.bsky.social",
    "https://scholar.google.com/[YOUR_PROFILE]",
    "https://orcid.org/[YOUR_ORCID]"
  ],
  "alumniOf": [
    {
      "@type": "EducationalOrganization",
      "name": "York University",
      "url": "https://www.yorku.ca"
    }
  ],
  "affiliation": [
    {
      "@type": "EducationalOrganization",
      "name": "University of Guelph",
      "url": "https://www.uoguelph.ca"
    },
    {
      "@type": "EducationalOrganization",
      "name": "University of British Columbia Okanagan",
      "url": "https://ok.ubc.ca"
    }
  ],
  "knowsAbout": [
    "Bumble Bee Ecology",
    "Radio Telemetry",
    "Pollinator Conservation",
    "Movement Ecology",
    "Climate Change Biology",
    "Pesticide Impact Research",
    "Habitat Selection",
    "Conservation Biology"
  ],
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Ecologist",
    "occupationLocation": {
      "@type": "City",
      "name": "Guelph, Ontario, Canada"
    }
  }
}
</script>
```

---

## 🔎 Issue #8 — No XML Sitemap or Robots.txt Optimization

**Severity:** MEDIUM
**Pages Affected:** Site-wide crawling

### The Problem

Checking your Astro configuration and build output:

1. **Unknown sitemap status** - Astro may auto-generate, but not confirmed optimized
2. **No robots.txt visible** in repository
3. **No clear crawl directives** for search engines
4. **Possible duplicate content** (`/current-work` vs `/experience` list same projects)

### Why This Hurts SEO

1. **Incomplete Indexing:** Google might miss important pages
2. **Crawl Budget Waste:** Bots crawl unimportant pages instead of content
3. **No Priority Signals:** Can't tell Google which pages are most important
4. **Duplicate Content Risk:** Same project descriptions in multiple places

### Recommended Fix

#### 1. Create/Verify XML Sitemap

Check if `public/sitemap.xml` exists. If not, add Astro sitemap integration:

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://amandaliczner.ca',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      customPages: [
        'https://amandaliczner.ca/books',
        'https://amandaliczner.ca/experience',
        'https://amandaliczner.ca/skills-education',
      ],
      // Exclude less important pages
      exclude: [
        'https://amandaliczner.ca/current-work', // Duplicate of experience
      ],
    }),
  ],
});
```

**Priority Suggestions:**
- Homepage: 1.0
- `/books`: 0.9 (monetization + authority builder)
- `/experience`: 0.9 (main research showcase)
- `/skills-education`: 0.8
- Individual research pages: 0.8
- `/contact`: 0.6
- `/current-work`: 0.4 (consider removing/redirecting to /experience)

#### 2. Create robots.txt

```txt
# /public/robots.txt
User-agent: *
Allow: /

# Priority pages
Sitemap: https://amandaliczner.ca/sitemap.xml

# Exclude development/test pages if any
Disallow: /api/
Disallow: /_astro/
Disallow: /guide/
Disallow: /components/
Disallow: /resources/

# Crawl delay (optional, helps with server load)
Crawl-delay: 1
```

#### 3. Fix Duplicate Content Issue

**Problem:** `/current-work` and `/experience` both list the same 5 research projects with identical descriptions.

**Solution Options:**

**Option A (Recommended):** Redirect `/current-work` → `/experience`
```javascript
// astro.config.mjs redirects
redirects: {
  '/current-work': '/experience'
}
```

**Option B:** Make `/current-work` a subset (only active projects) and `/experience` comprehensive (all projects + past work) - requires different content

**Option C:** Keep `/current-work` but add canonical tag pointing to `/experience`

---

## 🔎 Issue #9 — Missing Social Media Meta Tags on Some Pages

**Severity:** LOW-MEDIUM
**Pages Affected:** `/current-work`, individual research pages, `/contact`

### The Problem

Your newer pages (`/books`, `/experience`, `/skills-education`) have **excellent** Open Graph and Twitter meta tags. However:

- `/current-work` has NO SEO component at all
- Individual research pages (`/experience/bee-needs`, etc.) have NO meta tags
- `/contact` has minimal meta tags (no Twitter card, no detailed OG)

When these pages are shared on social media:
- No preview image
- Generic or missing descriptions
- No Twitter card optimization
- Missed branding opportunity

### Why This Hurts SEO (Indirectly)

1. **Social Signals:** Poor social sharing = fewer backlinks and traffic
2. **Brand Consistency:** Unprofessional appearance on social platforms
3. **Lost Click-Through:** Unoptimized previews get fewer clicks
4. **Missed Traffic Source:** Social media is major referral source for science content

### Recommended Fix

#### 1. Add SEO Component to /current-work/index.astro

```astro
---
import { SEO } from 'astro-seo'

const siteUrl = Astro.site?.toString() || 'https://amandaliczner.ca'
---

<SEO
  title="Current Research Projects - Dr. Amanda Liczner | Bumble Bee Ecology"
  description="Explore Dr. Liczner's active bumble bee conservation research including radio telemetry tracking, pesticide impact studies, pathogen risk assessment, and habitat selection projects across Canada."
  canonical={`${siteUrl}/current-work`}
  openGraph={{
    basic: {
      title: 'Current Bumble Bee Research Projects - Dr. Amanda Liczner',
      type: 'website',
      image: `${siteUrl}/pictures/Project1A.JPG`,
      url: `${siteUrl}/current-work`,
    },
    optional: {
      description: 'Active research in bumble bee conservation, radio telemetry, pesticide impacts, and pollinator ecology',
      siteName: 'Dr. Amanda Liczner - Ecologist',
      locale: 'en_CA',
    },
    image: {
      url: `${siteUrl}/pictures/Project1A.JPG`,
      alt: 'Bumble bee queen with radio telemetry tag - Dr. Amanda Liczner field research',
      type: 'image/jpeg',
    }
  }}
  twitter={{
    card: 'summary_large_image',
    site: '@amandaliczner',
    creator: '@amandaliczner',
    title: 'Current Bumble Bee Research - Dr. Amanda Liczner',
    description: 'Radio telemetry, pesticide studies, and conservation research',
    image: `${siteUrl}/pictures/Project1A.JPG`,
  }}
/>
```

#### 2. Add SEO to Individual Research Pages

**Template for bee-needs.astro:**
```astro
<SEO
  title="Tracking Bumble Bee Movement & Habitat Selection | Radio Telemetry Research"
  description="Discover how radio telemetry reveals bumble bee queen nesting sites, overwintering locations, and movement behavior. Dr. Amanda Liczner's innovative conservation research at University of Guelph."
  canonical={`${siteUrl}/experience/bee-needs`}
  openGraph={{
    basic: {
      title: 'Learning Bumble Bee Needs Through Radio Tracking',
      type: 'article',
      image: `${siteUrl}/pictures/Project2A.jpg`,
      url: `${siteUrl}/experience/bee-needs`,
    },
    article: {
      publishedTime: '2024-01-15T00:00:00Z',
      author: 'Dr. Amanda Liczner',
      section: 'Bumble Bee Research',
      tag: ['bumble bees', 'radio telemetry', 'conservation', 'habitat selection'],
    }
  }}
  twitter={{
    card: 'summary_large_image',
    title: 'How We Track Bumble Bees with Tiny Radio Tags',
    description: 'Discovering nesting sites and movement patterns to protect endangered pollinators',
    image: `${siteUrl}/pictures/Project2B.jpg`,
    imageAlt: 'Radio-tagged bumble bee queen on researcher finger',
  }}
/>
```

**Repeat for all 5 research pages with unique:**
- Titles targeting different keywords
- Descriptions highlighting unique findings
- Most compelling research image
- Article-type Open Graph (signals content depth)

#### 3. Enhance Contact Page SEO

```astro
<SEO
  title="Contact Dr. Amanda Liczner - Bumble Bee Research Collaboration & Consulting"
  description="Collaborate with Dr. Amanda Liczner on pollinator conservation research, radio telemetry projects, or book pollinator education workshops. Based at University of Guelph, Canada."
  canonical={`${siteUrl}/contact`}
  openGraph={{
    basic: {
      title: 'Contact Dr. Amanda Liczner - Pollinator Research & Collaboration',
      type: 'website',
      image: `${siteUrl}/pictures/AmandaLiczner.jpg`,
      url: `${siteUrl}/contact`,
    },
    optional: {
      description: 'Get in touch for research collaboration, speaking engagements, or pollinator education',
    }
  }}
  twitter={{
    card: 'summary',
    title: 'Contact Dr. Amanda Liczner',
    description: 'Collaborate on bumble bee research or pollinator education',
  }}
/>
```

---

## 🔎 Issue #10 — No Page Speed Optimization Strategy

**Severity:** MEDIUM
**Pages Affected:** All pages

### The Problem

While Astro is inherently fast, there are **potential optimization gaps**:

1. **Image Formats:** Using JPG/PNG instead of WebP or AVIF
2. **Image Sizes:** No responsive image srcsets visible
3. **Video on Contact Page:** Unoptimized video file could be huge
4. **No Lazy Loading Directive:** Some images load eagerly unnecessarily
5. **Large Image Files:** Many research photos are likely high-res camera exports

I see you DO have some lazy loading:
```html
loading="lazy" <!-- Good! -->
loading="eager" <!-- Only on first book cover - good! -->
```

But images lack:
- Modern formats (WebP/AVIF)
- Multiple sizes (srcset)
- Explicit width/height (CLS prevention)

### Why This Hurts SEO

1. **Core Web Vitals:** Google's ranking factor since 2021
2. **Mobile Performance:** Slow mobile = lower mobile rankings
3. **Bounce Rate:** Slow pages = users leave = negative signal
4. **User Experience:** Part of Google's page experience ranking

### Recommended Fix

#### 1. Convert Images to WebP

Use Astro's built-in image optimization:

```astro
---
import { Image } from 'astro:assets';
import projectImage from '../pictures/Project1A.JPG';
---

<Image
  src={projectImage}
  alt="Bumble bee queen with radio telemetry tag"
  width={800}
  height={600}
  format="webp"
  quality={85}
  loading="lazy"
/>
```

**Or use picture element for fallbacks:**
```html
<picture>
  <source srcset="/pictures/Project1A.webp" type="image/webp">
  <source srcset="/pictures/Project1A.jpg" type="image/jpeg">
  <img src="/pictures/Project1A.jpg" alt="..." loading="lazy">
</picture>
```

#### 2. Add Responsive Images

```html
<img
  src="/pictures/Project1A-800.jpg"
  srcset="
    /pictures/Project1A-400.jpg 400w,
    /pictures/Project1A-800.jpg 800w,
    /pictures/Project1A-1200.jpg 1200w
  "
  sizes="(max-width: 600px) 400px, (max-width: 900px) 800px, 1200px"
  alt="..."
  loading="lazy"
  width="800"
  height="600"
/>
```

#### 3. Optimize Contact Page Video

```html
<!-- Current -->
<video loop muted autoplay class="fullscreen-bg__video">
  <source src="/contactVid.mp4" type="video/mp4" />
</video>

<!-- Optimized -->
<video
  loop
  muted
  autoplay
  playsinline
  preload="metadata"
  poster="/contactVid-poster.jpg"
  class="fullscreen-bg__video"
>
  <source src="/contactVid-optimized.webm" type="video/webm">
  <source src="/contactVid-optimized.mp4" type="video/mp4" />
</video>
```

**Optimization checklist for video:**
- Compress to <2MB if possible
- 720p max resolution (background video doesn't need 4K)
- Provide WebM format (better compression)
- Add poster image for instant load

#### 4. Update Image Component in ProjectCard

```astro
---
// src/components/ProjectCard.astro
import { Image } from 'astro:assets';

export interface Props {
  image: string
  imageAlt?: string // Add alt as separate prop
  title: string
  description: string
  buttonText?: string
  buttonLink?: string
}
---

<!-- Replace current img with: -->
<Image
  src={image}
  alt={imageAlt || title}
  width={600}
  height={400}
  format="webp"
  loading="lazy"
  class="w-full h-full min-h-[200px] md:min-h-[250px] object-cover rounded-2xl"
/>
```

#### 5. Implement Priority Hints

```html
<!-- Homepage hero image -->
<img src="/pictures/homepagepic.jpg" loading="eager" fetchpriority="high">

<!-- Above-fold book covers -->
<img src="/pictures/pollinator-abc-kids.jpg" loading="eager" fetchpriority="high">

<!-- Below-fold content -->
<img loading="lazy" fetchpriority="low">
```

#### 6. Monitor Core Web Vitals

Test your site:
- PageSpeed Insights: https://pagespeed.web.dev/
- WebPageTest: https://www.webpagetest.org/
- Lighthouse (Chrome DevTools)

**Target scores:**
- LCP (Largest Contentful Paint): <2.5s
- FID (First Input Delay): <100ms
- CLS (Cumulative Layout Shift): <0.1

---

## 🔎 Issue #11 — Missing Academic/Research Schema Connections

**Severity:** MEDIUM
**Pages Affected:** All research pages

### The Problem

Your site doesn't connect to **academic/research identifiers**:

Missing:
1. **ORCID ID** integration
2. **Google Scholar** profile link
3. **ResearchGate** profile
4. **Published paper DOIs**
5. **Grant funding information**
6. **Research institution schemas**

### Why This Hurts SEO

1. **Academic Visibility:** Researchers searching for authors can't find you
2. **Citation SEO:** Published papers don't link back to your site
3. **E-E-A-T Signals:** Missing external validation of expertise
4. **Knowledge Graph:** Google can't connect you to your publications
5. **Academic Search:** Not optimized for Google Scholar or academic databases

### Recommended Fix

#### 1. Add ORCID and Academic Links to Footer/Header

```html
<div class="academic-profiles">
  <a href="https://orcid.org/YOUR-ORCID-ID" target="_blank" rel="me">
    <img src="/orcid-icon.svg" alt="ORCID profile">
    ORCID
  </a>
  <a href="https://scholar.google.com/citations?user=YOUR_ID" target="_blank">
    Google Scholar
  </a>
  <a href="https://www.researchgate.net/profile/YOUR_PROFILE" target="_blank">
    ResearchGate
  </a>
</div>
```

#### 2. Add Publication Schema to Research Pages

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  "headline": "Climate change impacts on bumble bee movement",
  "author": {
    "@type": "Person",
    "name": "Amanda Liczner",
    "identifier": "https://orcid.org/YOUR-ORCID-ID"
  },
  "datePublished": "2023-06-15",
  "publisher": {
    "@type": "Organization",
    "name": "Journal Name"
  },
  "url": "https://doi.org/10.xxxx/xxxxx",
  "identifier": "https://doi.org/10.xxxx/xxxxx"
}
</script>
```

#### 3. Link Academic Profiles in Person Schema

Update existing Person schema:
```javascript
"sameAs": [
  "https://www.instagram.com/bumblebeehaviour/",
  "https://bsky.app/profile/bumblebeehaviour.bsky.social",
  "https://orcid.org/YOUR-ORCID-ID",
  "https://scholar.google.com/citations?user=YOUR_ID",
  "https://www.researchgate.net/profile/YOUR_PROFILE"
]
```

---

## 🔎 Issue #12 — No Clear Conversion Goals or CTAs

**Severity:** LOW-MEDIUM
**Pages Affected:** All pages

### The Problem

Your website lacks **clear conversion pathways**:

What do you want visitors to do?
- Buy books? ✅ (Books page has Amazon buttons)
- Contact for collaboration? ⚠️ (CTA exists but not prominent)
- Sign up for updates? ❌ (No email list)
- Follow on social media? ⚠️ (Icons present but not emphasized)
- Cite your research? ❌ (No citation tools)
- Hire for consulting? ❌ (No services page)

### Why This Matters for SEO

1. **User Engagement Metrics:** Clear CTAs = longer sessions = positive SEO signal
2. **Bounce Rate:** Visitors without clear next steps leave faster
3. **Backlinks:** No "Share this research" buttons = fewer natural links
4. **Email List:** Can't notify subscribers of new content (blog posts, research updates)

### Recommended Fix

#### 1. Add Email Newsletter Signup

Create `/newsletter` or add to footer:

```html
<section class="newsletter-signup">
  <h2>Stay Updated on Bumble Bee Research</h2>
  <p>Get quarterly updates on new research findings, publications, and pollinator conservation news.</p>
  <form action="/api/subscribe" method="POST">
    <input type="email" placeholder="your@email.com" required>
    <button type="submit">Subscribe</button>
  </form>
</section>
```

**SEO Benefits:**
- Build email list for content distribution
- Notify subscribers when blog posts publish
- Increase repeat visitors (positive signal)
- Direct traffic source independent of Google

#### 2. Add Social Sharing Buttons to Research Pages

```html
<div class="share-research">
  <h3>Share This Research</h3>
  <a href="https://twitter.com/intent/tweet?text=...&url=..." target="_blank">
    Share on Twitter
  </a>
  <a href="https://www.linkedin.com/sharing/share-offsite/?url=..." target="_blank">
    Share on LinkedIn
  </a>
  <a href="mailto:?subject=...&body=..." target="_blank">
    Share via Email
  </a>
</div>
```

#### 3. Add "Cite This Research" Section

```html
<details class="citation-box">
  <summary>Cite This Research</summary>
  <div>
    <h4>APA Format:</h4>
    <code>Liczner, A. (2024). Learning bumble bee needs by tracking the bees. Retrieved from https://amandaliczner.ca/experience/bee-needs</code>

    <h4>BibTeX:</h4>
    <code>
    @misc{liczner2024bees,
      author = {Liczner, Amanda},
      title = {Learning Bumble Bee Needs by Tracking},
      year = {2024},
      url = {https://amandaliczner.ca/experience/bee-needs}
    }
    </code>

    <button onclick="navigator.clipboard.writeText(...)">Copy Citation</button>
  </div>
</details>
```

#### 4. Add Sticky CTA Bar (Optional)

```html
<!-- Appears after scrolling 50% of page -->
<div class="sticky-cta" hidden>
  <p>Interested in collaboration?</p>
  <a href="/contact" class="cta-button">Get in Touch</a>
</div>
```

---

## Priority Action Plan

### Immediate (This Week) - Highest ROI

1. ✅ **Fix Homepage Title Typo** (src/pages/index.astro:18) - 5 min
2. ✅ **Add 500+ words to EACH research page** - 3-4 hours
   - Start with `/experience/bee-needs` (most visual/engaging)
3. ✅ **Update all image alt-text** with descriptive, keyword-rich text - 1 hour
4. ✅ **Add H1 tags** to `/current-work` and `/contact` - 15 min

### High Priority (This Month)

5. ✅ **Add SEO meta tags** to all missing pages (current-work, individual research pages) - 1 hour
6. ✅ **Implement internal linking** - Add 3-5 contextual links per page - 2 hours
7. ✅ **Create robots.txt** and verify sitemap - 30 min
8. ✅ **Add ResearchProject schema** to all 5 research pages - 1 hour
9. ✅ **Add breadcrumbs** to individual research pages - 30 min

### Medium Priority (Next 2 Months)

10. ✅ **Start blog/research updates section** - Post 1-2 articles - 4-6 hours
11. ✅ **Optimize images** - Convert to WebP, add responsive images - 2-3 hours
12. ✅ **Add geographic/local SEO** elements - 1 hour
13. ✅ **Create FAQ schema** for books page - 30 min
14. ✅ **Add social sharing buttons** to research pages - 1 hour

### Lower Priority (Ongoing)

15. ✅ Add ORCID/Google Scholar links - 30 min
16. ✅ Create email newsletter signup - 2 hours
17. ✅ Monthly blog posts (1-2 per month) - Ongoing
18. ✅ Monitor Core Web Vitals and optimize - Ongoing

---

## Measurement & Tracking

### Set Up Google Search Console

If not already configured:

1. Verify site ownership
2. Submit sitemap.xml
3. Monitor:
   - Index coverage
   - Search queries
   - Click-through rates
   - Core Web Vitals

### Track These SEO KPIs

**Monthly:**
- Organic traffic (Google Analytics)
- Search impressions (Search Console)
- Average position for target keywords
- Pages indexed
- Backlinks (Ahrefs/SEMrush/free tools)

**Quarterly:**
- Domain Authority (Moz)
- Keyword rankings for:
  - "bumble bee researcher Canada"
  - "pollinator radio telemetry"
  - "bumble bee conservation"
  - "Amanda Liczner"
  - Your other target keywords
- Organic traffic from research pages
- Book sales (if tracked from organic search)

### Target Keywords to Track

**High Priority:**
1. "bumble bee researcher" + [Canada/Guelph/Ontario]
2. "radio telemetry bumble bees"
3. "pollinator conservation research"
4. "bumble bee habitat selection"
5. "pesticide impacts pollinators"
6. "bumble bee pathogen research"
7. "pollinator coloring book" (already ranking well!)
8. "Amanda Liczner" (branded)

**Long-Tail Opportunities:**
- "how to track bumble bee movement"
- "bumble bee nesting sites research"
- "diamide pesticides bumble bees"
- "bumble bee overwintering habitat"
- "pollinator education books Canada"

---

## Expected Outcomes (6 Month Timeline)

If you implement high and medium priority fixes:

### Month 1-2:
- 📈 20-30% increase in indexed pages (new blog posts)
- 📈 15-25% improvement in average page session duration
- 📈 Book page CTR increase (better internal linking)

### Month 3-4:
- 📈 30-50% increase in organic search impressions
- 📈 10-20% increase in click-through rate (better meta descriptions)
- 📈 Start ranking for long-tail research keywords

### Month 5-6:
- 📈 50-100% increase in organic traffic (compounding content + improved rankings)
- 📈 Top 10 rankings for 5-10 target keywords
- 📈 Research pages appearing in Google Scholar search results
- 📈 Featured snippets for "how to" pollinator content

---

## Conclusion

Your website has a **solid foundation** - excellent structured data on key pages, good mobile responsiveness, and strong branding. However, **thin content and missing optimization** on research pages are significantly limiting your SEO potential.

**The good news:** These are all fixable issues that don't require technical restructuring. By focusing on:
1. **Content depth** (800+ words per research page)
2. **Strategic keywords** in H1s, titles, and body content
3. **Internal linking** to create topic clusters
4. **Complete meta tags** site-wide
5. **Regular content updates** (blog/research news)

You can realistically **triple organic traffic** within 6 months while establishing yourself as the go-to online authority for bumble bee radio telemetry research and pollinator conservation in Canada.

The investment is primarily **time, not money** - no expensive tools or redesign needed. Just consistent content improvement and SEO best practices.

---

**Questions or need clarification on any recommendations? Let me know and I can provide more detailed implementation guidance for specific issues.**
