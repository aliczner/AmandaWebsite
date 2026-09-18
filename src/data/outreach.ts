/**
 * Media coverage, her own popular writing, and public engagement.
 * URLs are only those recorded on the CV -- entries without one render as
 * plain text rather than a guessed link.
 */

export interface MediaItem {
  author: string
  year: number
  title: string
  outlet: string
  url?: string
  /** true where Amanda is the author rather than the subject. */
  byHer?: boolean
}

export const media: MediaItem[] = [
  {
    author: 'Abi Hayward',
    year: 2024,
    title: 'Bees with backpacks',
    outlet: 'Canadian Geographic',
    url: 'https://canadiangeographic.ca/articles/bees-with-backpacks/',
  },
  {
    author: 'Luke Roman',
    year: 2023,
    title:
      'Tracking the flight of bumblebees, Canadian researchers hope to learn how pesticides can muddle their minds',
    outlet: 'The Globe and Mail',
    url: 'https://www.theglobeandmail.com/canada/article-tracking-the-flight-of-bumblebees-canadian-researchers-hope-to-learn/',
  },
  {
    author: 'Anam Khan',
    year: 2021,
    title: 'Where do bumble bees buzz overwinter?',
    outlet: 'Guelph Today',
    url: 'https://www.guelphtoday.com/grounded/where-do-bumble-bees-buzz-in-the-winter-4470216',
  },
  {
    author: 'Leah Gerber',
    year: 2021,
    title:
      'Tiny radio transmitters tracking effects of pesticides on bumblebees',
    outlet: 'The Waterloo Record',
    url: 'https://www.therecord.com/news/waterloo-region/2021/09/02/tiny-radios-tracking-effect-of-pesticides-on-bumblebees-in-cambridge-study-by-university-of-guelph-researchers.html',
  },
  {
    author: 'Amanda Liczner',
    year: 2021,
    title:
      'Nosing out nests: can detection dogs be used to find bumble bee nests?',
    outlet: 'Wildlife Preservation Canada blog',
    url: 'https://wildlifepreservation.ca/blog/nosing-out-nests-can-detection-dogs-be-used-to-find-bumble-bee-nests/',
    byHer: true,
  },
  {
    author: 'Amanda Liczner',
    year: 2018,
    title: 'Buzzing down the house: an update',
    outlet: 'Nature Conservancy of Canada blog',
    byHer: true,
  },
  {
    author: 'Amanda Liczner',
    year: 2017,
    title:
      'Buzzing down the house: determining the habitat for declining bumble bee species',
    outlet: 'Nature Conservancy of Canada blog',
    byHer: true,
  },
  {
    author: 'Kate Allen',
    year: 2017,
    title: 'Climate change and the great global species shakeup',
    outlet: 'Toronto Star',
    url: 'http://projects.thestar.com/climate-change-global-species-shakeup/',
  },
]

export interface EngagementItem {
  role: string
  organisation: string
  years: string
  detail: string
}

export const engagement: EngagementItem[] = [
  {
    role: 'Expert identifier',
    organisation: 'Bumble Bee Watch',
    years: '2021 – present',
    detail:
      'Volunteer expert identifier for northeastern North American bumble bees, verifying records submitted to a continental community-science dataset.',
  },
  {
    role: 'Contributor and event organiser',
    organisation: 'Pollination Guelph',
    years: '2023 – present',
    detail:
      'Educating the public on pollinator conservation, pollinator-friendly gardening and pollinator identification, organising symposia and leading conservation outreach events.',
  },
  {
    role: 'Pollinator Week Working Group',
    organisation: 'Sustainability Office, University of Guelph',
    years: '2023',
    detail:
      'Organised educational events, including bumble bee identification workshops for students, community members and members of the public.',
  },
  {
    role: 'Public lectures',
    organisation: 'rare Charitable Research Reserve; High Park Nature Centre',
    years: '2019, 2023',
    detail:
      'Invited public talks on identifying conservation needs by tracking bees, and on searching for bumble bee nests, for the Wild Bee Series.',
  },
  {
    role: 'Planning committee chair',
    organisation: 'BioBlitz',
    years: '2017',
    detail:
      'Chaired planning for a public BioBlitz, teaching participants about species identification, biodiversity and conservation.',
  },
  {
    role: 'Bumble bee conservation outreach volunteer',
    organisation: 'City Cider Festival, Toronto',
    years: '2017',
    detail:
      'Spoke with children and adults across an event of 1,200 participants about bumble bee conservation, and encouraged participation in bumble bee monitoring community science.',
  },
  {
    role: 'Bumble bee conservation outreach volunteer',
    organisation: 'General Mercer Junior Public School, Toronto',
    years: '2017',
    detail:
      'Taught 50 children and 30 adults about bumble bee conservation and community-science monitoring.',
  },
]
