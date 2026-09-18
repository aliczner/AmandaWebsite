/**
 * Research projects, grouped into the three themes shown on /experience.
 *
 * Every `meta` field is sourced from the CV or the project page itself. Fields
 * that cannot be stated with confidence are omitted rather than guessed;
 * ProjectMeta only renders the rows it is given.
 */

export type ThemeId = 'behaviour-movement' | 'habitat-life-cycle' | 'landscape'

export interface ProjectMetaRow {
  label: string
  value: string
}

export interface Project {
  slug: string
  title: string
  /** Short summary used on the research cards. */
  description: string
  image: string
  imageAlt: string
  themes: ThemeId[]
  meta: ProjectMetaRow[]
  /** Why the work matters, in a research voice. */
  significance: string
  /** Publications, talks and coverage arising from the project. */
  outputs: string[]
}

export const themes: {
  id: ThemeId
  title: string
  framing: string
  body: string
}[] = [
  {
    id: 'behaviour-movement',
    title: 'Behaviour and movement under environmental change',
    framing:
      'How do contaminants, weather, and season change where animals go, how far, and how long they stay active?',
    body: 'Movement is the behaviour through which an animal experiences its environment, so it is also the first behaviour to register environmental change, often long before abundance does. I use miniaturised radio telemetry to measure flight distance, home range, habitat use, and activity duration in individually tracked bumble bee queens, and I apply the same framework to migratory birds and bats at landscape scale. The practical payoff is sublethal endpoints that regulators can actually use.',
  },
  {
    id: 'habitat-life-cycle',
    title: 'Habitat selection across the life cycle',
    framing:
      'A population is limited by its scarcest life stage, so I locate and characterise the habitat animals need at every point in the cycle, including the stages nobody has been able to observe.',
    body: 'Bumble bees need three resources (forage, nest sites, and overwintering sites) and conservation has historically planned around only the first, because the other two are underground and nearly impossible to find. I have approached this from several directions: a global systematic review of what is actually known about nesting and overwintering habitat, telemetry to locate those sites directly, detection dogs as a survey method, and tests of the abiotic cues that set the timing of these transitions.',
  },
  {
    id: 'landscape',
    title: 'Landscape-scale movement and conservation planning',
    framing:
      'Turning behaviour and habitat data into maps that say where action should happen.',
    body: 'Pattern descriptions do not commit anyone to anything; maps do. I have identified conservation priority areas for North American bumble bee species in Canada under current and future climate, then asked which of those priority areas overlap regions where pathogen spillover from managed bees is most likely. In parallel I led a multi-institution synthesis of the advances and unresolved challenges in ecological connectivity science, which is the methodological foundation the prioritisation work depends on.',
  },
]

export const projects: Project[] = [
  {
    slug: 'env-stressors',
    title: 'Impacts of environmental stressors on bumble bee queen movement',
    description:
      'Testing whether newer classes of insecticide alter the movement behaviour of bumble bee queens, using miniaturised radio tags and a tower array to track free-flying individuals.',
    image: '/pictures/Project1A.JPG',
    imageAlt:
      'A bumble bee foraging on a flower in an agricultural field, the setting for the pesticide exposure study',
    themes: ['behaviour-movement'],
    meta: [
      { label: 'Role', value: 'Postdoctoral research fellow' },
      { label: 'Institution', value: 'University of Guelph' },
      {
        label: 'Collaborators',
        value: 'Dr. Nigel Raine, E. Franklin, S. Rondeau',
      },
      { label: 'Study system', value: 'Bumble bee queens (Bombus spp.)' },
      {
        label: 'Methods',
        value:
          'Radio telemetry, fixed tower arrays, home range and habitat selection analysis',
      },
      { label: 'Years', value: '2021–2025' },
      { label: 'Status', value: 'Manuscripts in preparation' },
    ],
    significance:
      'Pesticide registration in Canada and internationally does not require sublethal behavioural endpoints, so one class can replace a restricted class without its movement effects ever being characterised. This study provides a directly comparable telemetry endpoint (flight distance, home range, and habitat selection in free-flying queens) for a newer class positioned to do exactly that. Queens are the correct unit of measurement: a single queen’s failure removes a whole prospective colony.',
    outputs: [
      'Liczner AR, Franklin E, Rondeau S, Raine N. Bumble bee queen behaviour and habitat selection changes differ after hibernating in pesticide-contaminated soil. In preparation.',
      'Liczner AR, Franklin E, Raine N. Impacts of a neonicotinoid insecticide on bumble bee gyne movement behaviour. In preparation.',
      'Liczner AR, Franklin E, Raine N. 2023. Flying in the face of danger? Flight behaviour impacts for bumble bee queens exposed to systemic insecticides. International Pollinator Conference, State College, Pennsylvania.',
      'Liczner AR, Franklin E, Raine N. 2022. Impacts of systemic insecticide exposure on the movement ecology of bumble bee queens. Joint CSEE and ESA conference, Montreal.',
    ],
  },
  {
    slug: 'bee-needs',
    title: 'Learning their needs by tracking the bees',
    description:
      'Tagging spring and late-summer bumble bee queens to learn about their movement behaviour, habitat selection, and the location of their nesting and overwintering sites.',
    image: '/pictures/Project2A.jpg',
    imageAlt:
      'A radio-tagged bumble bee queen, used to track movement and locate nesting and overwintering sites',
    themes: ['behaviour-movement', 'habitat-life-cycle'],
    meta: [
      { label: 'Role', value: 'Postdoctoral research fellow' },
      { label: 'Institution', value: 'University of Guelph' },
      { label: 'Collaborators', value: 'Dr. Nigel Raine, E. Franklin' },
      {
        label: 'Study system',
        value: 'Spring and late-summer bumble bee queens (Bombus spp.)',
      },
      {
        label: 'Methods',
        value:
          'Radio telemetry, nest and overwintering site location, habitat selection analysis',
      },
      { label: 'Years', value: '2021–2025' },
      { label: 'Status', value: 'Manuscripts in preparation' },
    ],
    significance:
      'Two of the three resources bumble bees require have never been systematically located in the wild, which means conservation planning has been built on forage alone. By tracking individual queens to their nesting and overwintering sites, this work supplies the habitat descriptions those plans are missing. The finding that late-summer queens can remain active for up to 50 days and may aggregate at overwintering sites changes both the survey window and the spatial unit of protection.',
    outputs: [
      'Liczner AR, Franklin E, Raine N. Using radio-telemetry to track spring bumble bee queen movement and identify habitat selection. In preparation.',
      'Liczner AR, Franklin E, Raine N. Examining bumble bee behaviour and habitat selection during a sensitive life stage using radio telemetry. In preparation.',
      'Liczner AR, Franklin E, Rondeau S, Raine N. 2024. Using radio-telemetry to discover habitat selection and movement behaviour of bumble bees. Invited talk, Joint meeting of the Entomological Societies of Canada and Quebec, Quebec City.',
      'Liczner AR, Franklin E, Raine N. 2024. Overwintering and nesting behaviour of bumble bees unveiled using radio telemetry. Animal Behaviour Society, London, Canada.',
      'Media: Bees with backpacks, Canadian Geographic (2024); Globe and Mail (2023).',
    ],
  },
  {
    slug: 'pathogen',
    title: 'Pathogen risk to bumble bees across Canada',
    description:
      'Identifying regions in Canada where pathogen spillover from managed bees poses the highest risk to wild bumble bees, and where that risk overlaps existing conservation priority areas.',
    image: '/pictures/pathogen.jpg',
    imageAlt:
      'A wild bumble bee dusted with pollen foraging on a dandelion, the kind of shared flower that can transmit pathogens between managed and wild bees',
    themes: ['landscape'],
    meta: [
      { label: 'Institution', value: 'York University' },
      { label: 'Collaborators', value: 'Dr. Sheila Colla, Dr. Gordon Fitch' },
      {
        label: 'Study system',
        value: 'Wild bumble bees (Bombus spp.) and managed bees',
      },
      {
        label: 'Methods',
        value:
          'Spatial risk mapping, overlay with conservation prioritisation outputs',
      },
      { label: 'Extent', value: 'Canada' },
      { label: 'Status', value: 'Published (2025)' },
    ],
    significance:
      'Pathogen spillover from managed to wild bees has been recognised for two decades but rarely mapped, so it has not entered spatial conservation planning. Overlaying spillover risk on bumble bee conservation priority areas identifies where the two coincide, and therefore where screening, colony-health, and monitoring requirements would have the greatest effect. The result, that risk is not confined to agricultural or urban land, argues against the assumption that protected areas are insulated.',
    outputs: [
      'Liczner AR, Fitch G, Colla SR. 2025. Assessing pathogen risk for wild bumblebees (Bombus spp. Apidae) in Canada. Conservation Science and Practice 7: e70099.',
    ],
  },
  {
    slug: 'urban-gardens',
    title: 'Urban bees response to backyard gardens',
    description:
      'Measuring native bee diversity in bee-friendly urban gardens in Kelowna, British Columbia, and testing whether garden characteristics or surrounding urbanisation explain it.',
    image: '/pictures/urbangardens.jpg',
    imageAlt:
      'A bumble bee with pollen-laden legs flying to a lavender spike in a garden',
    themes: ['habitat-life-cycle'],
    meta: [
      { label: 'Institution', value: 'University of British Columbia Okanagan' },
      { label: 'Collaborators', value: 'M. Repovs, Dr. Jason Pither' },
      { label: 'Study system', value: 'Native bee genera in urban gardens' },
      {
        label: 'Methods',
        value: 'Garden bee surveys along an urbanisation gradient',
      },
      { label: 'Location', value: 'Kelowna, British Columbia' },
      { label: 'Status', value: 'In press' },
    ],
    significance:
      'Pollinator-garden programmes are among the most widely adopted urban biodiversity interventions and among the least evaluated. Finding no clear relationship between bee richness or abundance and garden size, floral diversity, or surrounding urbanisation is an informative negative result: it shifts attention from garden composition towards nesting resources and landscape context. It is also the first characterisation of urban bee diversity in the Okanagan.',
    outputs: [
      'Repovs M, Liczner AR, Pither J. 2025. Native bee genus diversity within bee-friendly urban gardens varies little along an urbanization gradient. EcoEvoRxiv. In press.',
    ],
  },
  {
    slug: 'soil-temperature',
    title:
      'Does soil temperature predict bumble bee queen emergence in spring?',
    description:
      'Surveying for bumble bee queens while measuring soil temperature at different depths, to test whether emergence timing tracks the soil an overwintering queen is buried in.',
    image: '/pictures/Project3A.jpg',
    imageAlt:
      'Spring survey site where bumble bee queen emergence was recorded alongside soil temperature at depth',
    themes: ['habitat-life-cycle'],
    meta: [
      { label: 'Collaborators', value: 'S. MacKell' },
      {
        label: 'Study system',
        value: 'Overwintering bumble bee queens (Bombus spp.)',
      },
      {
        label: 'Methods',
        value:
          'Queen emergence surveys with depth-stratified soil temperature logging',
      },
      { label: 'Status', value: 'Preliminary analyses' },
    ],
    significance:
      'Emergence phenology determines whether a queen encounters forage when she needs it, and it is the mechanism through which warming is most likely to decouple bees from their resources. Testing depth-stratified soil temperature against species-specific emergence timing tests a specific mechanism rather than simply correlating emergence with air temperature. The preliminary divergence, with early-emerging species tracking soil temperature and later species tracking air temperature, would predict species-specific rather than community-wide phenological shifts.',
    outputs: [
      'Liczner AR, MacKell S. 2021. Does soil temperature determine bumble bee queen emergence timing? Canadian Society for Ecology and Evolution Annual Conference.',
    ],
  },
]

export const projectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug)

export const projectsInTheme = (theme: ThemeId): Project[] =>
  projects.filter((p) => p.themes.includes(theme))
