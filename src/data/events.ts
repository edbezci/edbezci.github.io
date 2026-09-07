/**
 * Speaking and events.
 *
 * Each event distinguishes status (upcoming/past) from role so that
 * attendance or round-table participation is never presented as a
 * presentation. `contributionTitle` remains undefined until a title
 * has been supplied; components must not invent one.
 *
 * Year-only appearances display only the year. Date precision is
 * explicit so sorting and rendering do not manufacture 1 January.
 */

export type EventStatus = 'upcoming' | 'past';
export type ContributionType = 'paper' | 'panel' | 'lecture' | 'roundtable';
export type DatePrecision = 'year' | 'day';

export interface SpeakingEvent {
  status: EventStatus;
  eventName: string;
  contributionTitle?: string;
  contributionType?: ContributionType;
  role: string;
  displayDate: string;
  year: number;
  eventDates?: string;
  appearanceDate?: string;
  datePrecision: DatePrecision;
  city?: string;
  country?: string;
  hostInstitution?: string;
  venue?: string;
  organisers?: string[];
  collaborators?: string[];
  theme?: string;
  programmeUrl?: string;
  eventUrl?: string;
  /** Shown on the homepage upcoming-event preview. */
  homepagePreview?: boolean;
  /** Shown on the teaching-speaking page speaking preview. */
  teachingPreview?: boolean;
  /** Rendered with full detail on the speaking page. */
  featured?: boolean;
  /** Private source notes; excluded from rendered content. */
  sourceNotes?: string;
}

const events: SpeakingEvent[] = [
  // ================================================================
  // Upcoming
  // ================================================================
  {
    status: 'upcoming',
    eventName: 'ECPR 5th Conference on Organised Crime',
    role: 'Conference presenter',
    displayDate: '10–11 December 2026',
    year: 2026,
    eventDates: '10–11 December 2026',
    datePrecision: 'day',
    city: 'Naples',
    country: 'Italy',
    hostInstitution:
      'Department of Social Sciences, University of Naples Federico II',
    organisers: ['ECPR Standing Group on Organised Crime'],
    theme:
      'Mafia, Cartels and Crime Networks: Challenges to State and Society',
    eventUrl: 'https://ecpr.eu/Events/361',
    homepagePreview: true,
    teachingPreview: true,
    featured: true,
    sourceNotes:
      'Owner confirmed presentation. Paper title, session and precise time not yet supplied.',
  },

  // ================================================================
  // Featured past
  // ================================================================
  {
    status: 'past',
    eventName: 'Symposium on Crisis Early Warning',
    contributionTitle:
      'Leveraging Large Language Models in Crisis Early Warning',
    contributionType: 'panel',
    role: 'Invited panellist',
    displayDate: '17 September 2025',
    year: 2025,
    eventDates: '17–18 September 2025',
    appearanceDate: '17 September 2025',
    datePrecision: 'day',
    city: 'Berlin',
    country: 'Germany',
    venue: 'German Federal Foreign Office',
    organisers: [
      'German Federal Foreign Office',
      'Center for Crisis Early Warning',
    ],
    programmeUrl:
      'https://www.unibw.de/ciss-en/ccew/events/symposium-2025/details',
    teachingPreview: true,
    featured: true,
    sourceNotes: 'Panel on 17 September; symposium ran 17–18 September.',
  },
  {
    status: 'past',
    eventName: 'Intelligence Studies Round Table Conference',
    role: 'Invited roundtable participant',
    displayDate: '2025',
    year: 2025,
    datePrecision: 'year',
    city: 'Cambridge',
    country: 'United Kingdom',
    teachingPreview: true,
    featured: true,
    sourceNotes:
      'Exact dates, venue building and organisers not yet confirmed by owner.',
  },
  {
    status: 'past',
    eventName: 'EuroSciPy 2024',
    contributionTitle: 'Gatherer: Insight Revelation from Diplomatic Archives',
    contributionType: 'paper',
    role: 'Conference presenter',
    displayDate: '2024',
    year: 2024,
    datePrecision: 'year',
    city: 'Szczecin',
    country: 'Poland',
    teachingPreview: true,
    featured: true,
  },

  // ================================================================
  // Archive (earlier appearances)
  // ================================================================
  {
    status: 'past',
    eventName: 'Emory University',
    contributionTitle: 'Turkish-Israeli Intelligence Cooperation',
    role: 'Invited lecturer',
    displayDate: '2023',
    year: 2023,
    datePrecision: 'year',
    featured: false,
  },
  {
    status: 'past',
    eventName:
      'International Intelligence History Association Annual Conference · Tutzing, Germany',
    contributionTitle:
      'Countering Cognitive Warfare: Challenges and Opportunities Ahead',
    role: 'Conference presenter',
    displayDate: '2022',
    year: 2022,
    datePrecision: 'year',
    featured: false,
  },
  {
    status: 'past',
    eventName: 'National Sun Yat-sen University · Kaohsiung, Taiwan',
    contributionTitle:
      'Hands-on Practice of Data Journalism: A Python Workshop to Analyze News',
    role: 'Invited lecturer',
    displayDate: '2019',
    year: 2019,
    datePrecision: 'year',
    featured: false,
  },
  {
    status: 'past',
    eventName: 'Chung-Ang University · Seoul, South Korea',
    contributionTitle:
      'Taming the Anthropocene: Artificial Intelligence-Powered Sustainability; co-authored with Nicholas Borroz',
    role: 'Presentation',
    displayDate: '2019',
    year: 2019,
    datePrecision: 'year',
    featured: false,
  },
  {
    status: 'past',
    eventName:
      'International Studies Association Regional Conference: Asia-Pacific and World Order: Security, Economics, Identity and Beyond · Nanyang Technological University, Singapore',
    contributionTitle:
      'New Threats and Small States: Climate Change as a Security Threat in Taiwan and New Zealand',
    role: 'Conference presenter',
    displayDate: '2019',
    year: 2019,
    datePrecision: 'year',
    featured: false,
  },
  {
    status: 'past',
    eventName: 'Massey University · Wellington, New Zealand',
    contributionTitle:
      'Pacific Security and Diplomacy with GRULAC Ambassadors',
    role: 'Invited roundtable participant',
    displayDate: '2018',
    year: 2018,
    datePrecision: 'year',
    featured: false,
  },
  {
    status: 'past',
    eventName: 'Bilkent University · Ankara, Turkey',
    contributionTitle:
      'Missing Dimension in Turkish Foreign Policy: Secrecy and the Study of Intelligence',
    role: 'Presentation',
    displayDate: '2017',
    year: 2017,
    datePrecision: 'year',
    featured: false,
  },
  {
    status: 'past',
    eventName:
      'International Studies Association 58th Annual Convention · Baltimore, Maryland, United States',
    contributionTitle: 'Turkish Covert Action: Now and Then',
    role: 'Conference presenter',
    displayDate: '2017',
    year: 2017,
    datePrecision: 'year',
    featured: false,
  },
  {
    status: 'past',
    eventName:
      'Need to Know VI: Intelligence and Migration · Karlskrona, Sweden',
    contributionTitle:
      'Using Immigrants: Turkish Intelligence and Covert Operations',
    role: 'Conference presenter',
    displayDate: '2016',
    year: 2016,
    datePrecision: 'year',
    featured: false,
  },
  {
    status: 'past',
    eventName:
      'International Intelligence History Association Annual Conference · Zagreb, Croatia',
    contributionTitle:
      'Anglo-Turkish Reconnaissance Activities during World War II',
    role: 'Conference presenter',
    displayDate: '2015',
    year: 2015,
    datePrecision: 'year',
    featured: false,
  },
  {
    status: 'past',
    eventName: 'Yerevan, Armenia',
    contributionTitle:
      'Civil-Military Relations in Turkey: A Survey of the Last Decade',
    role: 'Presentation',
    displayDate: '2013',
    year: 2013,
    datePrecision: 'year',
    featured: false,
  },
  {
    status: 'past',
    eventName:
      'International Intelligence History Association Annual Conference · Athens, Greece',
    contributionTitle:
      'The Depiction of the Soviets in Turkish Intelligence Reports in the 1950s',
    role: 'Conference presenter',
    displayDate: '2013',
    year: 2013,
    datePrecision: 'year',
    featured: false,
  },
];

export const upcomingEvents = events.filter((e) => e.status === 'upcoming');
export const featuredPastEvents = events.filter(
  (e) => e.status === 'past' && e.featured,
);
export const archiveEvents = events.filter(
  (e) => e.status === 'past' && !e.featured,
);
