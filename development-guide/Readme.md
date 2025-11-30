# Readme.md

## Project Overview

This is Dr. Amanda Liczner's personal website - a portfolio site showcasing her research in ecology and bumble bee conservation. The site is built with Astro.js, deployed on Vercel, and features a contact form backed by AWS Lambda and SES.

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

- **Framework**: Astro.js 5.x with SSR (serverless mode)
- **Styling**: Tailwind CSS with custom theming via CSS variables
- **UI Components**: Free Astro Components library
- **Deployment**: Vercel (serverless functions)
- **Email**: AWS Lambda + SES for contact form
- **Anti-spam**: Google reCAPTCHA v3

### Project Structure

```
src/
├── components/      # Reusable UI components (Button, Card, Nav, etc.)
├── layouts/         # Page layouts (Layout.astro, Sidebar.astro, Content.astro)
├── pages/           # Route pages and endpoints
│   ├── index.astro
│   ├── experience/  # Research project pages
│   ├── contact/     # Contact page with form
│   └── ...
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
