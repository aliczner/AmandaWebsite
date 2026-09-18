/**
 * Academic record, transcribed from the CV: awards, grants, teaching,
 * mentorship, talks, service and peer review.
 */

export interface Award {
  name: string
  organisation: string
  /** Dollar value as written on the CV, or undefined for unfunded honours. */
  value?: string
  /** Competitiveness or status note, e.g. 'One of nine awarded at York'. */
  note?: string
  years: string
  /** Nominated but not held, or held but declined. Never counted as income. */
  status?: 'nominated' | 'declined'
  major?: boolean
}

export const awards: Award[] = [
  {
    name: 'NSERC Postdoctoral Fellowship (NSERC PDF)',
    organisation: 'University of Guelph',
    value: '$90,000',
    years: '2023–2025',
    major: true,
  },
  {
    name: 'Banting Postdoctoral Fellowship',
    organisation: 'University of Guelph',
    note: 'Nominated by the University of Guelph',
    years: '2023',
    status: 'nominated',
  },
  {
    name: 'Webster Postdoctoral Fellowship',
    organisation: 'University of Guelph',
    value: '$10,000',
    years: '2022',
  },
  {
    name: 'Susan Mann Dissertation Scholarship',
    organisation: 'York University',
    value: '$22,500',
    note: 'One of nine scholarships awarded at York University',
    years: '2020',
    major: true,
  },
  {
    name: 'NSERC Postgraduate Scholarship – Doctoral (NSERC PGS-D)',
    organisation: 'York University',
    value: '$42,000',
    note: 'One of ten NSERC scholarships awarded at York University',
    years: '2018–2020',
    major: true,
  },
  {
    name: 'Ontario Graduate Scholarship',
    organisation: 'York University',
    note: 'Declined in order to accept the NSERC PGS-D',
    years: '2018–2019',
    status: 'declined',
  },
  {
    name: 'Vanier Canada Graduate Scholarship',
    organisation: 'York University',
    note: 'Nominated by York University',
    years: '2018',
    status: 'nominated',
  },
  {
    name: 'Ontario Graduate Scholarship',
    organisation: 'York University',
    value: '$15,000',
    note: 'One of five award winners in the Department of Biology',
    years: '2017–2018',
  },
  {
    name: 'The Carswell Scholarship',
    organisation: 'York University',
    value: '$10,000',
    note: 'One of six award winners in the Faculty of Science',
    years: '2016–2017',
  },
  {
    name: 'Ontario Graduate Scholarship',
    organisation: 'York University',
    value: '$15,000',
    note: 'One of nine award winners in the Department of Biology',
    years: '2016–2017',
  },
  {
    name: 'York Graduate Scholarship',
    organisation: 'York University',
    value: '$6,000',
    note: 'Entrance scholarship awarded by the Department of Biology',
    years: '2014–2015',
  },
  {
    name: 'Research / Fieldwork Cost Fund',
    organisation: 'York University',
    value: '$2,380',
    note: 'Internal award, Faculty of Graduate Studies',
    years: '2017–2019',
  },
  {
    name: 'Research Cost Fund',
    organisation: 'York University',
    value: '$960',
    note: 'Internal award, Faculty of Graduate Studies',
    years: '2015–2017',
  },
  {
    name: 'Graduate Development Fund',
    organisation: 'York University',
    value: '$750',
    note: 'Internal award, Faculty of Graduate Studies',
    years: '2016',
  },
  {
    name: 'Graduate Development Fund',
    organisation: 'York University',
    value: '$600',
    note: 'Internal award, Faculty of Graduate Studies',
    years: '2016–2017',
  },
]

export interface Grant {
  name: string
  funder: string
  value: string
  years: string
}

export const grants: Grant[] = [
  {
    name: 'Ontario Species at Risk Stewardship Program',
    funder: 'Ontario Ministry of Environment, Conservation and Parks',
    value: '$25,717',
    years: '2019–2020',
  },
]

export interface GuestLecture {
  course: string
  institution: string
  students: string
  topic: string
  year: string
}

export const guestLectures: GuestLecture[] = [
  {
    course: 'BIOL 306: Ecology of Animals',
    institution: 'University of British Columbia Okanagan',
    students: '40',
    topic: 'Bumble bee ecology and conservation',
    year: '2021',
  },
  {
    course:
      'BIOL 1001: Biology II. Evolution, Ecology, Biodiversity and Conservation Biology',
    institution: 'York University',
    students: '500',
    topic: 'Life history traits and bumble bee ecology',
    year: '2019',
  },
  {
    course: 'DATT 4010: Physical Computing III: Environmental Sensing and Art',
    institution: 'York University',
    students: '50',
    topic: 'Importance of environmental monitoring for restoration science',
    year: '2017',
  },
]

export const teachingAssistantships = {
  summary:
    'Laboratory coordinator, demonstrator and marker for four courses at York University (BIOL 1000, BIOL 1001, BIOL 2010 and BIOL 2050) across 12 appointments in 11 terms between Fall 2014 and Fall 2019, in classes ranging from 20 to 2,400 students.',
  detail: [
    'Laboratory coordinator, BIOL 1000, Biology I: Cells, Molecular Biology and Genetics. York University, Fall 2019 (2,400 students).',
    'Laboratory demonstrator, BIOL 2010, Plant Biology. York University, Winter 2019 (20 students).',
    'Laboratory coordinator, BIOL 1000, Biology I: Cells, Molecular Biology and Genetics. York University, Fall 2018 (2,400 students).',
    'Laboratory coordinator, BIOL 1001, Biology II. York University, Winter 2018 (2,000 students).',
    'Laboratory coordinator, BIOL 2050, Ecology. York University, Fall 2017 (180 students).',
    'Laboratory coordinator, BIOL 1001, Biology II. York University, Winter 2017 (2,100 students).',
    'Laboratory demonstrator, BIOL 2050, Ecology. York University, Fall 2016 (24 students).',
    'Marker, BIOL 2050, Ecology. York University, Fall 2016 (200 students).',
    'Laboratory coordinator, BIOL 1001, Biology II. York University, Summer 2016 (500 students).',
    'Laboratory demonstrator, BIOL 2050, Ecology. York University, Fall 2015 (44 students).',
    'Laboratory demonstrator, BIOL 1001, Biology II. York University, Summer 2015 (40 students).',
    'Laboratory demonstrator, BIOL 2050, Ecology. York University, Fall 2014 (40 students).',
  ],
}

export interface Mentorship {
  role: string
  organisation: string
  years: string
  detail: string
}

export const mentorship: Mentorship[] = [
  {
    role: 'Undergraduate research assistant supervisor (informal)',
    organisation: 'University of Guelph',
    years: '2021–2025',
    detail:
      'Directly supervised four undergraduate field assistants across summer field seasons. Trained assistants in field safety, bumble bee identification, ethical handling of wildlife, radio telemetry, laboratory procedures, insect rearing, and technical field equipment installation.',
  },
  {
    role: 'Research assistant supervisor (informal)',
    organisation: 'York University',
    years: '2017–2019',
    detail:
      'Directly supervised undergraduate and graduate field assistants and community science volunteers during spring and summer field seasons. Trained all assistants in field sampling methods, plant identification, and bumble bee behaviour.',
  },
]

export const invitedTalks: string[] = [
  'Liczner AR, MacPhail V, Woollett D, Richards N, Colla S. Using detection dogs to find bumble bee nests: lessons learned. United States Fish and Wildlife Service (USFWS) rusty-patched bumble bee seminar series. Virtual.',
  'Liczner AR, Franklin E, Rondeau S, Raine N. 2024. Using radio-telemetry to discover habitat selection and movement behaviour of bumble bees. Joint meeting of the Entomological Societies of Canada and Quebec, Quebec City, Canada.',
  'Liczner AR, Franklin E, Raine N. 2023. Understanding bumble bee behaviour through tracking their movements. United States Fish and Wildlife Service (USFWS) rusty-patched bumble bee seminar series. Virtual.',
  'Liczner AR, Franklin E, Rondeau S, Raine N. 2023. Conserving bees by tracking their needs: using radio telemetry to study bumble bee habitat and investigate impacts of stressors. BOMBUSS 3.0, San Cristóbal, Mexico.',
  'Liczner AR. 2023. Identifying conservation needs by tracking bees. rare Charitable Research Reserve.',
  'Liczner AR. 2021. Conservation of bumble bees and landscape connectivity. University of Calgary Department Seminar Series.',
  'Liczner AR, Colla SR. 2019. On a quest for bee nests. High Park Nature Centre Wild Bee Series.',
]

export const conferenceTalks: string[] = [
  'Liczner AR, Franklin E, Rondeau S, Raine N. 2024. Using radio-telemetry to discover habitat selection and movement behaviour of bumble bees. Joint Annual Meeting of the Entomological Societies of Canada and Quebec, Quebec City, Canada.',
  'Liczner AR, Franklin E, Raine N. 2024. Overwintering and nesting behaviour of bumble bees unveiled using radio telemetry. Animal Behaviour Society, London, Canada.',
  'Liczner AR, Franklin E, Raine N. 2023. Flying in the face of danger? Flight behaviour impacts for bumble bee queens exposed to systemic insecticides. International Pollinator Conference, State College, Pennsylvania, USA.',
  'Liczner AR, Franklin E, Raine N. 2022. She moves in mysterious ways: tracking bumble bee queen movement to identify critical habitat gaps. Joint Entomological Society of America and Canadian Entomological Society Annual Meeting, Vancouver, British Columbia, Canada.',
  'Liczner AR, Franklin E, Raine N. 2022. Impacts of systemic insecticide exposure on the movement ecology of bumble bee queens. Joint Canadian Society of Ecology and Evolution (CSEE) and Ecological Society of America (ESA) conference, Montreal, Quebec.',
  'Liczner AR, MacKell S. 2021. Does soil temperature determine bumble bee queen emergence timing? Canadian Society for Ecology and Evolution (CSEE) Annual Conference. Virtual.',
  'Liczner AR, Richardson L, Schuster R, Colla SR. 2021. Conservation priority areas for Canadian bumble bee species under current and future climate scenarios. Canadian Parks Collective for Innovation and Leadership (CPCIL) Research Summit. Virtual.',
  'Liczner AR, Richardson L, Schuster R, Colla SR. 2020. Conservation priority areas for Canadian bumble bee species under current and future climate scenarios. BeeCon 2020. Virtual.',
  'Liczner AR, Richardson L, Schuster R, Colla SR. 2020. Conservation priority areas for Canadian bumble bee species under current and future climate scenarios. North American Congress for Conservation Biology Conference. Virtual.',
  'Liczner AR, MacPhail V, Colla SR. 2019. Using detection dogs to find bumble bee nests: lessons learned. Credit Valley Research Colloquium, Mississauga, Ontario.',
  'Liczner AR, MacPhail V, Colla SR. 2019. Using detection dogs to find bumble bee nests: lessons learned. BOMBUSS 2.0, Toronto, Ontario.',
  'Liczner AR, Colla SR. 2019. Think big: landscape-scale habitat variables are more important than local-scale factors for determining at-risk bumble bee habitat. International Pollinator Conference, University of California Davis, Sacramento, California.',
  'Liczner AR, Colla SR. 2019. Think big: landscape-scale habitat variables are more important than local-scale factors for determining at-risk bumble bee habitat. 45th Annual Association of Graduate Students in the Biological Sciences Symposium, Toronto, Ontario.',
  'Liczner AR, Colla SR. 2018. Using citizen scientists and detection dogs to locate bumble bee nests. BeeCon, Toronto, Ontario.',
  'Liczner AR, Colla SR. 2018. Determining the habitat for at-risk bumble bee species in Southern Ontario. Society for Conservation Biology North American Congress for Conservation Biology Conference, Toronto, Ontario.',
  'Liczner AR, Colla SR. 2018. Determining the habitat for at-risk bumble bee species in Southern Ontario. Canadian Society for Ecology and Evolution Conference, Guelph, Ontario.',
  'Liczner AR, Colla SR. 2017. Assessing at-risk bumble bee habitat in Ontario for the conservation of declining species. Canadian Society for Ecology and Evolution Conference, Victoria, British Columbia.',
  'Liczner AR, Colla SR. 2017. Assessing at-risk bumble bee habitat in Ontario for the conservation of declining species. BeeCon, Toronto, Ontario.',
  'Liczner AR, Colla SR. 2017. Assessing at-risk bumble bee habitat in Ontario for the conservation of declining species. 43rd Annual Association of Graduate Students in Biology Symposium, Toronto, Ontario.',
  'Filazzola A, Liczner AR, Westphal MF, Lortie CJ. 2017. The effect of consumer pressure and abiotic stress on positive plant interactions are mediated by extreme climatic events. 43rd Annual Association for Graduate Students in the Biological Sciences Symposium, Toronto, Ontario.',
  'Liczner AR, Sotomayor DA, Filazzola A, Lortie CJ. 2016. Germination response of desert annuals to shrub facilitation is species specific but not ecotypic. York University Biology Day Conference, Toronto, Ontario.',
  'Filazzola A, Liczner AR, Westphal MF, Lortie CJ. 2016. A test of the stress-gradient hypothesis including both abiotic stress and consumer pressure during an extreme drought year. Ecological Society of America Conference, Fort Lauderdale, Florida.',
  'Liczner AR, Filazzola A, Lortie CJ. 2016. The use of shrubs as a tool for re-establishing native annuals to an invaded arid shrubland. Ecological Society of America Conference, Fort Lauderdale, Florida.',
  'Filazzola A, Liczner AR, Westphal MF, Lortie CJ. 2015. The habitat of the endangered blunt-nosed leopard lizard is determined by an interplay between native shrub cover and invasive grass abundance. Conservation Conference, California Native Plant Society, San Jose, California.',
  'Filazzola A, Westphal MF, Liczner AR, Powers M, Johnson B, Lortie CJ. 2015. The realized niche of the endangered blunt-nosed leopard lizard is determined by an interplay between native shrub cover and invasive grass abundance. Ecological Society of America Conference, Baltimore, Maryland.',
  'Liczner AR. 2014. Cushion plant effects on seed germination in an alpine environment. Northern Studies Training Program Symposium, Toronto, Ontario.',
]

export interface ServiceItem {
  role: string
  organisation: string
  years: string
  detail?: string
}

export const professionalService: ServiceItem[] = [
  {
    role: 'Symposium co-organiser',
    organisation: 'Entomological Societies of Canada and Quebec',
    years: '2024',
    detail:
      'Co-organised a symposium on methods and tools for studying wild pollinators, Quebec City.',
  },
  {
    role: 'Pollinator Week Working Group',
    organisation: 'Sustainability Office, University of Guelph',
    years: '2023',
    detail:
      'Organised pollinator week educational events, including bumble bee identification workshops for students, community members and the public.',
  },
  {
    role: 'Conference volunteer organiser',
    organisation: 'Canadian Society for Ecology and Evolution (CSEE)',
    years: '2021',
    detail:
      'Member of the social media and communications, and programme development committees for the 2021 virtual conference.',
  },
  {
    role: 'Student presentation judge',
    organisation: 'Pacific Ecology and Evolution Conference',
    years: '2021',
    detail:
      'Judged student presentations for a virtual conference spanning universities in western Canada and the United States.',
  },
  {
    role: 'Contributed symposium organiser',
    organisation: 'North American Congress for Conservation Biology',
    years: '2020',
    detail:
      'Organised a contributed symposium on prioritisation in conservation: tools and considerations.',
  },
  {
    role: 'Student representative',
    organisation: 'Canadian Society for Ecology and Evolution (CSEE)',
    years: '2016–2020',
    detail:
      'York University graduate student representative, encouraging student involvement and distributing society information.',
  },
]

export const departmentalService: ServiceItem[] = [
  {
    role: 'Graduate student representative, Committee on Teaching and Learning',
    organisation: 'Faculty of Science, York University',
    years: '2018–2020',
    detail:
      'One of two graduate student representatives giving input on teaching assistant training initiatives and adjudicating teaching awards.',
  },
  {
    role: 'Communications Officer, AGSBS',
    organisation:
      'Association of Graduate Students in the Biological Sciences, York University',
    years: '2019–2020',
    detail: 'Maintained the association’s social media accounts and website.',
  },
  {
    role: 'Department of Biology student representative, AGSBS',
    organisation:
      'Association of Graduate Students in the Biological Sciences, York University',
    years: '2018–2019',
    detail:
      'Represented graduate student interests to the Department of Biology.',
  },
  {
    role: 'Symposium Committee Chair, AGSBS',
    organisation:
      'Association of Graduate Students in the Biological Sciences, York University',
    years: '2017–2018',
    detail:
      'Led planning of the annual biology graduate student symposium, including organising meetings, securing funding and promotion. Attended by 110 participants.',
  },
  {
    role: 'Symposium Committee Member, AGSBS',
    organisation:
      'Association of Graduate Students in the Biological Sciences, York University',
    years: '2016–2017',
    detail:
      'Organised the annual biology graduate student symposium for 100 attendees.',
  },
  {
    role: 'Symposium Committee Organiser',
    organisation: 'Ontario Ecology, Ethology and Evolution Colloquium (OE3C)',
    years: '2014–2015',
    detail:
      'Organised the annual provincial symposium, with approximately 140 attendees.',
  },
]

/** Journals reviewed for, with review counts. Totals 29 reviews, 16 journals. */
export const peerReview: { journal: string; count: number }[] = [
  { journal: 'Insect Conservation and Diversity', count: 5 },
  { journal: 'Plant Ecology', count: 3 },
  { journal: 'Journal of Natural History', count: 3 },
  { journal: 'Ecology and Evolution', count: 3 },
  { journal: 'Oikos', count: 2 },
  { journal: 'Conservation Science and Practice', count: 2 },
  { journal: 'Restoration Ecology', count: 2 },
  { journal: 'Annals of the Entomological Society of America', count: 1 },
  { journal: 'Ecological Entomology', count: 1 },
  { journal: 'Ecology', count: 1 },
  { journal: 'Environmental Entomology', count: 1 },
  { journal: 'Forest Ecology and Management', count: 1 },
  { journal: 'Frontiers in Ecology and Evolution', count: 1 },
  { journal: 'Insectes Sociaux', count: 1 },
  { journal: 'Nature Sustainability', count: 1 },
  { journal: 'Scientific Reports', count: 1 },
]

export interface Degree {
  name: string
  institution: string
  years: string
  thesisLabel: string
  thesis: string
  supervisor: string
}

export const degrees: Degree[] = [
  {
    name: 'Ph.D. Biology',
    institution: 'York University, Canada',
    years: '2016–2020',
    thesisLabel: 'Dissertation',
    thesis:
      'The effects of climate change on bumble bee movement and habitat selection',
    supervisor: 'Dr. Sheila Colla, York University',
  },
  {
    name: 'M.Sc. Biology',
    institution: 'York University, Canada',
    years: '2014–2016',
    thesisLabel: 'Dissertation',
    thesis:
      'Nursing back to health: Shrubs facilitate the restoration of native forbs with reductions in non-native competition in an invaded arid shrubland',
    supervisor: 'Dr. Christopher Lortie, York University',
  },
  {
    name: 'Spec. Hons. B.Sc. Biology',
    institution: 'York University, Canada',
    years: '2009–2013',
    thesisLabel: 'Honours thesis',
    thesis:
      'A desert nurse plant (Larrea tridentata) facilitates the germination and seed characteristics of winter annuals in California',
    supervisor: 'Dr. Christopher Lortie, York University',
  },
]

export const expertise: { title: string; items: string[] }[] = [
  {
    title: 'Animal behaviour & movement',
    items: [
      'Behavioural assays',
      'Radio telemetry deployment and fixed tower arrays',
      'Motus Wildlife Tracking System data',
      'Home range and step-length analysis',
      'Resource and habitat selection analysis',
      'Tracking data management',
    ],
  },
  {
    title: 'Statistical & spatial modelling',
    items: [
      'Hierarchical and mixed-effects models',
      'Generalised linear models',
      'Machine learning',
      'Species distribution and climate modelling',
      'Spatial conservation prioritisation',
      'Landscape connectivity analysis',
      'Large-dataset workflows',
    ],
  },
  {
    title: 'Field ecology & survey design',
    items: [
      'Pollinator and vegetation sampling',
      'Nest and overwintering site searching',
      'Detection dog surveys',
      'Insect rearing',
      'Monitoring protocol development',
      'Experimental design',
    ],
  },
  {
    title: 'Synthesis, tools & reproducibility',
    items: [
      'Systematic review and meta-analysis',
      'R programming',
      'QGIS',
      'Git and GitHub',
      'Open Science Framework',
      'Research web infrastructure (HTML, CSS, Astro)',
    ],
  },
]
