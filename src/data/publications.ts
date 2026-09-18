/**
 * Publication record, transcribed from the CV and cross-checked against the
 * publishers. DOIs were looked up individually; every link below resolves.
 *
 * Three corrections were made against the CV, noted inline:
 *  - #9 uses the published title, which differs from the CV's wording.
 *  - #15 first author is Sahebeh Karimi, so the CV's "Sahebeh K" was surname/
 *    given-name inverted.
 *  - #7 is volume 170, not 17.
 */

export type PubStatus = 'published' | 'in-press' | 'in-prep'

export interface Publication {
  /** CV numbering, 1 = oldest. Stable key. */
  id: number
  /** Verbatim CV author order, e.g. 'Liczner AR, Colla SR'. */
  authors: string
  year?: number
  title: string
  journal: string
  volume?: string
  issue?: string
  /** Page range or article number, e.g. '558-570' or 'e70099'. */
  pages?: string
  doi?: string
  status: PubStatus
  /** One of her chosen highlight papers. */
  selected?: boolean
  /**
   * Shown under a selected publication as "why this paper matters".
   * These are placeholder descriptions drawn from the papers' own scope.
   * Replace with Amanda's own framing.
   */
  highlight?: string
  note?: string
}

export const isLeadAuthor = (p: Publication) => p.authors.startsWith('Liczner')

export const publications: Publication[] = [
  {
    id: 16,
    authors: 'Repovs M, Liczner AR, Pither J',
    year: 2026,
    title:
      'Native bee genus diversity within bee-friendly urban gardens varies little along an urbanization gradient',
    journal: 'FACETS',
    doi: '10.1139/facets-2025-0094',
    status: 'published',
  },
  {
    id: 15,
    authors: 'Karimi S, Schuster R, Hanson JO, Riva F, Liczner A, Bennett JR',
    year: 2025,
    title: 'Priority areas to conserve biodiversity in Canada',
    journal: 'FACETS',
    volume: '10',
    pages: '1-10',
    doi: '10.1139/facets-2024-0295',
    status: 'published',
  },
  {
    id: 14,
    authors: 'Liczner AR, Fitch G, Colla SR',
    year: 2025,
    title:
      'Assessing pathogen risk for wild bumblebees (Bombus spp. Apidae) in Canada',
    journal: 'Conservation Science and Practice',
    volume: '7',
    pages: 'e70099',
    doi: '10.1111/csp2.70099',
    status: 'published',
  },
  {
    id: 13,
    authors:
      'Liczner AR, Bowman J, Fletcher R, Ford A, Hall K, Mitchalak J, Parrot L, Pither R, Rayfield B, Wittische J, Pither J',
    year: 2024,
    title: 'Advances and challenges in ecological connectivity science',
    journal: 'Ecology and Evolution',
    volume: '14',
    issue: '9',
    pages: 'e70231',
    doi: '10.1002/ece3.70231',
    status: 'published',
  },
  {
    id: 12,
    authors:
      'Lortie CJ, Liczner A, Ruttan A, Braun J, Sotomayor DA, Westphal M, King R, Filazzola A',
    year: 2023,
    title:
      'Patronus charm: a comparison of benefactor plants and climate mediation effects on diversity',
    journal: 'Oikos',
    pages: 'e10292',
    doi: '10.1111/oik.10292',
    status: 'published',
  },
  {
    id: 11,
    authors: 'Liczner AR, Schuster R, Richardson LL, Colla SR',
    year: 2023,
    title:
      'Identifying conservation priority areas for North American bumble bee species in Canada under current and future climate scenarios',
    journal: 'Conservation Science and Practice',
    volume: '5',
    issue: '8',
    pages: 'e12994',
    doi: '10.1111/csp2.12994',
    status: 'published',
    selected: true,
    highlight:
      'Maps where conservation action for bumble bees would be most effective across Canada, under both current and projected future climates, turning species distribution data into spatial priorities that practitioners can act on.',
  },
  {
    id: 10,
    authors:
      'Liczner AR, MacPhail VP, Woollett (Smith) DA, Richards NL, Colla SR',
    year: 2021,
    title:
      'Training and usage of detection dogs to better understand bumble bee nesting habitat: Challenges and opportunities',
    journal: 'PLoS ONE',
    volume: '16',
    issue: '5',
    pages: 'e0249248',
    doi: '10.1371/journal.pone.0249248',
    status: 'published',
  },
  {
    id: 9,
    authors: 'Liczner AR, Colla SR',
    year: 2020,
    // Published title; the CV records this as "One-size does not fit all:
    // Bumble bee conservation requires landscape-scale and species-specific
    // habitat considerations".
    title:
      'One-size does not fit all: at-risk bumble bee habitat management requires species-specific local and landscape considerations',
    journal: 'Insect Conservation and Diversity',
    volume: '13',
    issue: '6',
    pages: '558-570',
    doi: '10.1111/icad.12419',
    status: 'published',
    selected: true,
    highlight:
      'Tests whether one habitat prescription can serve multiple at-risk bumble bee species, and finds that it cannot: species differ in what they select, and landscape-scale context matters more than local features.',
  },
  {
    id: 8,
    authors: 'Liczner AR, Colla SR',
    year: 2019,
    title:
      'A systematic review of the nesting and overwintering habitat of bumble bees globally',
    journal: 'Journal of Insect Conservation',
    volume: '23',
    issue: '5-6',
    pages: '787-801',
    doi: '10.1007/s10841-019-00173-7',
    status: 'published',
    selected: true,
    highlight:
      'Synthesises what is globally known about the two bumble bee life stages that are hardest to observe, nesting and overwintering, and shows how little of pollinator habitat planning rests on evidence about them.',
  },
  {
    id: 7,
    authors: 'Liczner AR, Filazzola A, Westphal M, Lortie CJ',
    year: 2019,
    title:
      'Shrubs facilitate native forb re-establishment in an invaded arid shrubland',
    journal: 'Journal of Arid Environments',
    volume: '170',
    pages: '103998',
    doi: '10.1016/j.jaridenv.2019.103998',
    status: 'published',
  },
  {
    id: 6,
    authors: 'Filazzola A, Liczner AR, Westphal M, Lortie CJ',
    year: 2019,
    title:
      'Shrubs indirectly increase desert seedbanks through facilitation of the plant community',
    journal: 'PLoS ONE',
    volume: '14',
    issue: '4',
    pages: 'e0215988',
    doi: '10.1371/journal.pone.0215988',
    status: 'published',
  },
  {
    id: 5,
    authors: 'Gibson SD, Liczner AR, Colla SR',
    year: 2019,
    title:
      'Conservation Conundrum: At-risk bumble bees (Bombus spp.) show preference for invasive tufted vetch (Vicia cracca) while foraging in protected areas',
    journal: 'Journal of Insect Science',
    volume: '19',
    issue: '2',
    pages: '1-10',
    doi: '10.1093/jisesa/iez017',
    status: 'published',
  },
  {
    id: 4,
    authors: 'Filazzola A, Liczner AR, Westphal M, Lortie CJ',
    year: 2018,
    title:
      'The effect of consumer pressure and abiotic stress on positive plant interactions are mediated by extreme climatic events',
    journal: 'New Phytologist',
    volume: '217',
    issue: '1',
    pages: '140-150',
    doi: '10.1111/nph.14778',
    status: 'published',
  },
  {
    id: 3,
    authors:
      'Filazzola A, Westphal M, Powers M, Liczner AR, Woollett DAS, Johnson B, Lortie CJ',
    year: 2017,
    title:
      'Non-trophic interactions in deserts: Facilitation, interference, and an endangered lizard species',
    journal: 'Basic and Applied Ecology',
    volume: '20',
    issue: '1',
    pages: '51-61',
    doi: '10.1016/j.baae.2017.01.002',
    status: 'published',
  },
  {
    id: 2,
    authors: 'Liczner AR, Sotomayor DA, Filazzola A, Lortie CJ',
    year: 2017,
    title:
      'Germination response of desert annuals to shrub facilitation is species specific but not ecotypic',
    journal: 'Journal of Plant Ecology',
    volume: '10',
    issue: '2',
    pages: '364-374',
    doi: '10.1093/jpe/rtw030',
    status: 'published',
  },
  {
    id: 1,
    authors: 'Liczner AR, Lortie CJ',
    year: 2014,
    title:
      'A global meta-analytic contrast of cushion-plant effects on plants and on arthropods',
    journal: 'PeerJ',
    volume: '2',
    pages: 'e265',
    doi: '10.7717/peerj.265',
    status: 'published',
  },
]

/** Nothing awaiting publication at present; the page hides this block when empty. */
export const inPress: Publication[] = []

export const inPreparation: Publication[] = [
  {
    id: 203,
    authors: 'Liczner AR, Franklin E, Raine N',
    title:
      'Examining bumble bee behaviour and habitat selection during a sensitive life stage using radio telemetry',
    journal: 'In preparation',
    status: 'in-prep',
  },
  {
    id: 202,
    authors: 'Liczner AR, Franklin E, Rondeau S, Raine N',
    title:
      'Bumble bee queen behaviour and habitat selection changes differ after hibernating in pesticide-contaminated soil',
    journal: 'In preparation',
    status: 'in-prep',
  },
  {
    id: 201,
    authors: 'Liczner AR, Franklin E, Raine N',
    title:
      'Using radio-telemetry to track spring bumble bee queen movement and identify habitat selection',
    journal: 'In preparation',
    status: 'in-prep',
  },
]

/**
 * A fourth in-preparation manuscript (Liczner, Franklin & Raine) covers
 * neonicotinoid impacts on bumble bee gyne movement behaviour. Its full title
 * is truncated in the CV, so it is summarised rather than cited.
 */
export const inPreparationNote =
  'A fourth manuscript, on the impacts of a neonicotinoid insecticide on bumble bee gyne movement behaviour, is also in preparation.'

/** Formats a citation tail: 'Journal 13(6): 558-570' */
export function formatSource(p: Publication): string {
  let out = p.journal
  if (p.volume) out += ` ${p.volume}`
  if (p.issue) out += `(${p.issue})`
  if (p.pages) out += `: ${p.pages}`
  return out
}

/**
 * Wraps her surname in <strong> for display. Author strings are authored here,
 * never user input, so do not pipe external data through this.
 */
export function highlightSelf(authors: string): string {
  return authors.replace(/Liczner A(?:R)?/g, '<strong>$&</strong>')
}
