# Readme.md

## Project Overview

This is Dr. Amanda Liczner's personal academic website, positioned for faculty applications. It presents her research programme in behavioural conservation - how animal behaviour, habitat selection and movement determine where populations persist, using bumble bees as a model organism alongside landscape-scale tracking of migratory birds and bats. Built with Astro.js, deployed on Vercel, with a contact form backed by AWS Lambda and SES.

## Development Commands

```bash
# Start development server with network access (accessible from other devices)
npm run dev

# Start development server locally
npm start

# Build the site (includes type checking)
npm run build

# Preview production build
npm run preview

# Run Astro type checking
astro check
```

## Architecture

### Tech Stack

- **Framework**: Astro.js 5.x, static output (no adapter is registered in `astro.config.mjs`, so `astro build` produces a static site)
- **Styling**: Tailwind CSS with custom theming via CSS variables
- **UI Components**: Free Astro Components library
- **Deployment**: Vercel (static, plus `vercel.json` for redirects)
- **Email**: AWS Lambda + SES for contact form
- **Anti-spam**: Google reCAPTCHA v3

### Project Structure

```
src/
├── components/      # Reusable UI components (Button, Card, Nav, etc.)
├── layouts/         # Page layouts (Layout.astro, Sidebar.astro, Content.astro)
├── pages/           # Route pages
│   ├── index.astro          # Hero + Intro cards + AboutMe + CTA
│   ├── experience/          # Research programme (index) + 5 project pages
│   ├── publications/        # Publication record, driven by data/publications.ts
│   ├── skills-education/    # CV & expertise: the full academic record
│   ├── outreach/            # Science communication, media, community science
│   ├── books/               # Colouring books (demoted from main nav)
│   ├── services/            # Consulting (demoted from main nav)
│   └── contact/             # Contact page with form
├── sections/        # Page section components (Hero, CTA, AboutMe, Intro)
├── data/            # TypeScript data files for component configurations
├── styles/          # Global SCSS and CSS files
├── icons/           # SVG icon components
└── ts/              # TypeScript utilities
```

### Styling System

The site uses a custom CSS variable-based theming system defined in `src/styles/main.scss`:

- Colors are defined as RGB values without `rgb()` wrapper: `--ac-primary`, `--ac-secondary`, etc.
- Tailwind config references these via `rgb(var(--ac-primary), <alpha-value>)`
- Custom animations for gradient backgrounds: `move-circle`, `move-circle-reverse`
- Font: Poppins (Google Fonts) as primary, Quicksand as fallback

### Content Data Files

Page content that repeats or needs to stay consistent lives in `src/data/`, not
in the templates:

- `site.ts` — **single source of truth for navigation** plus shared facts
  (name, job title, institution, CV path) and the metric figures used on
  `/publications`. `Header.astro`, `Sidebar.astro` and `Footer.astro` all map
  over this array, so adding a nav item is a one-line change.
- `publications.ts` — the publication record (15 peer-reviewed, 1 in press,
  3 in preparation). `doi` fields are empty; fill one in and the entry renders
  a DOI link automatically.
- `positions.ts` — research appointments and graduate research.
- `academic.ts` — awards, grants, teaching, mentorship, talks, service, peer
  review, degrees, and the research-expertise groupings.
- `projects.ts` — the three research themes and the five project pages'
  metadata, research significance, and outputs.
- `outreach.ts` — media coverage, her own popular writing, public engagement.

### Feature Flags

`src/data/site.ts` holds four booleans that control visibility:

| Flag | Effect when `true` |
|---|---|
| `SHOW_CONSULTING_IN_NAV` | Puts `/services` back in the header and sidebar, and shows the consulting note on `/outreach` |
| `SHOW_BOOKS_IN_NAV` | Puts `/books` back in the header and sidebar |
| `SHOW_JOB_MARKET_NOTICE` | Shows the "on the faculty job market" callout in the About section |
| `SHOW_TEACHING_STATEMENT` | Shows the teaching-approach paragraph on `/skills-education` |
| `CV_PDF_IS_CURRENT` | Exposes the CV PDF download links (off while `public/AmandaLicznerCV.pdf` is out of date) |

Consulting and colouring books are still live pages and keep all their links and
structured data — they are reachable from the footer and, for the books, from
`/outreach`. They are only out of the main navigation.

### Job Application Materials

Cover letters, research statements and similar documents must **never** be put
in `public/` — Astro copies that directory verbatim to the site root, which
would publish them. Keep them in `application-materials/`, which is gitignored
along with `*.docx`.

### Contact Form Architecture

The contact form uses a multi-layered security approach:

**Frontend** (`src/components/ContactForm.astro`):

- Client-side validation (rate limiting, spam keywords, excessive links)
- Honeypot field (`address2`)
- Google reCAPTCHA v3 token generation
- Direct fetch to AWS Lambda Function URL

**Backend** (`lambda/index.mjs`):

- AWS Lambda function with Function URL
- reCAPTCHA v3 verification (0.6 score threshold)
- Honeypot validation
- Sends email via AWS SES SMTP
- CORS headers for dev/production domains

**Environment Variables** (stored in `.env` and Lambda environment):

- `SES_USERNAME`, `SES_PASSWORD`: AWS SES SMTP credentials
- `EMAIL_TO`, `EMAIL_FROM`: Email routing
- `CAPTCHA_SITE_KEY`, `CAPTCHA_SECRET_KEY`: reCAPTCHA keys

### Page Types

1. **Static Pages**: Homepage (`index.astro`), skills/education
2. **Content Pages**: Research experience pages in `/experience/*`
3. **Interactive Pages**: Contact page with form submission

### Key Components

- **Header/Nav**: Responsive navigation with hamburger menu
- **Hero/CTA**: Section components for landing areas with gradient backgrounds
- **ContactForm**: Full-featured form with spam protection
- **ProjectCard**: Displays research projects with images
- **Footer**: Site-wide footer with social links

## Important Notes

### Lambda Function Deployment

The contact form Lambda function is deployed to AWS with a Function URL:

- Region: `ca-central-1`
- URL: `https://vn4eo2dz4loerb452wl4lwne7e0ppsev.lambda-url.ca-central-1.on.aws/`
- Layer: Includes `nodemailer` dependency in `lambda/nodemailer-layer/`

When modifying the Lambda:

1. Test locally if possible
2. Update the function code in AWS Lambda console or via CLI
3. Verify environment variables are set in Lambda configuration
4. Test CORS headers work for both dev and production domains

### Git Workflow

- Main branch: `main`
- Current feature branch: `af-adding-book-page`
- Recent commits focus on Lambda function fixes and CORS handling

### Security Considerations

- The `.env` file contains real credentials and should NEVER be committed
- reCAPTCHA keys are visible in frontend code (this is normal for v3)
- Contact form has multiple spam prevention layers
- Rate limiting uses localStorage (5-minute cooldown)

### Content Management

Research project pages in `/experience/` follow a consistent pattern:

- Each project has its own `.astro` file
- Use the `Content.astro` layout
- Include project metadata in frontmatter
- Images stored in `public/pictures/`

### Vercel Deployment

- Build command: `astro check && astro build`
- Output directory: `dist/`
- Adapter: `@astrojs/vercel` (serverless)
- Environment variables must be set in Vercel dashboard

## Common Tasks

### Adding a New Research Project Page

1. Create file in `src/pages/experience/project-name.astro`
2. Use `Content.astro` layout
3. Add project data/images to appropriate directories
4. Update navigation if needed

### Modifying Contact Form

- Frontend logic: `src/components/ContactForm.astro` (script section)
- Backend logic: `lambda/index.mjs`
- Spam filters: Check `hasSpamKeywords()` and `hasExcessiveLinks()` methods
- reCAPTCHA config: Site key in component, secret key in Lambda env vars

### Updating Styles

- Global styles: `src/styles/main.scss`
- Theme colors: CSS variables in `main.scss`
- Tailwind config: `tailwind.config.mjs` (maps to CSS vars)
- Component-scoped styles: Use `<style>` tags in `.astro` files

### Debugging Lambda Issues

1. Check AWS CloudWatch logs for the Lambda function
2. Verify environment variables are set
3. Test reCAPTCHA verification separately
4. Check CORS headers match current domain
5. Verify SES SMTP credentials and email addresses are verified in SES
