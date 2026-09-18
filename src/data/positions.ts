/**
 * Research appointments, from the CV. Shared by /experience and
 * /skills-education so the two never drift apart.
 *
 * NOTE: the Western appointment is not listed on the current CV PDF; dates are
 * inferred from the Guelph fellowship ending in July 2025 and should be
 * confirmed. It runs concurrently with the applied research roles below.
 */

export interface Position {
  title: string
  organisation: string
  unit?: string
  supervisors?: string
  /** What the position was about, in her own framing where possible. */
  focus: string
  dates: string
  /** Newest first ordering is done by hand in the array. */
  current?: boolean
}

export const positions: Position[] = [
  {
    title: 'Postdoctoral Research Associate',
    organisation: 'Western University',
    unit: 'Faculty of Science',
    focus:
      'Modelling the movement of migratory birds and bats, using the continental Motus Wildlife Tracking System to identify priority areas for migration across the Great Lakes region of northeastern North America.',
    dates: '2025 – present',
    current: true,
  },
  {
    title: 'Quantitative Ecologist',
    organisation: 'Apex RMS',
    focus:
      'Landscape connectivity assessments under environmental change, and habitat suitability modelling.',
    dates: 'Jan 2026 – present',
    current: true,
  },
  {
    title: 'Research Analyst',
    organisation: 'Toronto and Region Conservation Authority',
    unit: 'Ecosystem and Climate Science',
    focus:
      'Greenspace access and the identification of high-value conservation areas.',
    dates: 'Jul 2025 – Jan 2026',
  },
  {
    title: 'Postdoctoral Research Fellow',
    organisation: 'University of Guelph',
    supervisors: 'Dr. Nigel Raine',
    focus:
      'Impacts of environmental stressors on bumble bee movement. Supported by an NSERC Postdoctoral Fellowship. This is the work behind the radio-telemetry projects below: tracking free-flying queens with miniaturised tags and a fixed tower array to measure flight behaviour, home range, and habitat selection.',
    dates: 'May 2021 – Jul 2025',
  },
  {
    title: 'Postdoctoral Research Fellow',
    organisation: 'University of British Columbia Okanagan',
    unit: 'BRAES Institute',
    supervisors:
      'Drs. Jason Pither, Adam Ford, Lael Parrott, Josie Hughes and Richard Pither',
    focus:
      'Connectivity conservation challenges in landscape ecology. Worked within a multi-institution group to synthesise the state of ecological connectivity science and its open problems, including how to move beyond static connectivity maps towards representations that reflect the actual movement and behaviour of organisms.',
    dates: 'Sep 2020 – Feb 2022',
  },
]

export interface GraduateResearch {
  degree: string
  organisation: string
  supervisor: string
  focus: string
  dates: string
}

export const graduateResearch: GraduateResearch[] = [
  {
    degree: 'PhD, Biology',
    organisation: 'York University',
    supervisor: 'Dr. Sheila Colla',
    focus:
      'At-risk bumble bee species’ habitat, with the Native Pollinator Research Lab. Used literature reviews, local-scale surveys, landscape-scale models, and detection dogs to map bumble bee conservation priority areas across Canada.',
    dates: '2016 – 2020',
  },
  {
    degree: 'MSc and BSc, Biology',
    organisation: 'York University',
    supervisor: 'Dr. Christopher Lortie',
    focus:
      'Native plant restoration and plant–plant facilitation across ecosystems: shrub facilitation and restoration in Californian deserts and invaded arid shrubland, cyanobacteria abundance in northern Ontario lakes, and seed germination with and without plant interactions in the alpine tundra of northern British Columbia. Seven peer-reviewed papers came out of this work.',
    dates: '2009 – 2016',
  },
]
