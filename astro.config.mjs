import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import astroExpressiveCode from 'astro-expressive-code'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://amandaliczner.ca',
  // Retired routes. Astro emits meta-refresh pages for these in static mode;
  // vercel.json carries the real 301s in production.
  redirects: {
    '/current-work': '/experience',
  },
  integrations: [
    tailwind(),
    astroExpressiveCode({
      themes: ['poimandres', 'light-plus'],
      styleOverrides: {
        borderRadius: '0.5rem',
        borderWidth: '0px',
      },
    }),
    sitemap(),
  ],
})
