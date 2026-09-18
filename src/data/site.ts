/**
 * Single source of truth for navigation and the facts that appear on more than
 * one page. Nothing about the nav should be hardcoded in Header/Sidebar/Footer.
 */

export const SITE_URL = 'https://amandaliczner.ca'
export const NAME = 'Dr. Amanda Liczner'
export const JOB_TITLE = 'Postdoctoral Research Associate'
export const INSTITUTION = 'Western University'
export const INSTITUTION_URL = 'https://www.uwo.ca/'
export const LOCATION = 'London, Ontario, Canada'
export const CV_PATH = '/AmandaLicznerCV.pdf'

/**
 * The CV PDF currently in public/ omits the Western appointment and carries a
 * personal email rather than an institutional one. Flip to true once an updated
 * PDF is in place; until then the CV is presented as an HTML record only.
 */
export const CV_PDF_IS_CURRENT = false

/** Off-site academic identities. These feed Person.sameAs in PersonSchema. */
export const ORCID_URL = 'https://orcid.org/0000-0002-4265-0269'
export const SCHOLAR_URL =
  'https://scholar.google.ca/citations?user=jwadmkwAAAAJ&hl=en'
export const BLUESKY_URL = 'https://bsky.app/profile/bumblebeehaviour.bsky.social'
export const INSTAGRAM_URL = 'https://www.instagram.com/bumblebeehaviour/'

/** Figures quoted on /publications and in the Intro cards. From the CV. */
export const METRICS = {
  publications: 16,
  leadAuthor: 9,
  invitedTalks: 7,
  conferenceTalks: 26,
  /** Held awards itemise to $210,500, excluding the OGS declined for NSERC. */
  fellowshipTotal: '>$200,000',
  reviews: 29,
  journalsReviewedFor: 16,
} as const

export type NavItem = {
  href: string
  label: string
  header?: boolean
  sidebar?: boolean
  footer?: 'academic' | 'also'
}

/** Flip either to true to restore that section in the main navigation. */
export const SHOW_CONSULTING_IN_NAV = false
export const SHOW_BOOKS_IN_NAV = false

/**
 * Shows the "on the faculty job market" callout in the About section.
 * Off until Amanda is happy to state this publicly.
 */
export const SHOW_JOB_MARKET_NOTICE = false

/**
 * Shows the teaching-approach paragraph on /skills-education. The text is
 * adapted from Amanda's cover letter, so it is off until she has reviewed it.
 */
export const SHOW_TEACHING_STATEMENT = false

export const nav: NavItem[] = [
  { href: '/', label: 'Home', header: true, sidebar: true },
  {
    href: '/experience',
    label: 'Research',
    header: true,
    sidebar: true,
    footer: 'academic',
  },
  {
    href: '/publications',
    label: 'Publications',
    header: true,
    sidebar: true,
    footer: 'academic',
  },
  {
    href: '/skills-education',
    label: 'CV & Expertise',
    header: true,
    sidebar: true,
    footer: 'academic',
  },
  {
    href: '/outreach',
    label: 'Outreach',
    header: true,
    sidebar: true,
    footer: 'academic',
  },
  {
    href: '/contact',
    label: 'Contact',
    header: true,
    sidebar: true,
    footer: 'academic',
  },
  {
    href: '/books',
    label: 'Colouring Books',
    header: SHOW_BOOKS_IN_NAV,
    sidebar: SHOW_BOOKS_IN_NAV,
    footer: 'also',
  },
  {
    href: '/services',
    label: 'Consulting',
    header: SHOW_CONSULTING_IN_NAV,
    sidebar: SHOW_CONSULTING_IN_NAV,
    footer: 'also',
  },
]

export const headerNav = nav.filter((item) => item.header)
export const sidebarNav = nav.filter((item) => item.sidebar)
export const footerAcademic = nav.filter((item) => item.footer === 'academic')
export const footerAlso = nav.filter((item) => item.footer === 'also')
