/**
 * Structured content model for the site.
 *
 * All profile copy lives here so components stay presentational.
 * Optional fields (ORCID, résumé) are intentionally left undefined
 * until a confirmed value exists; components must not render links
 * for empty fields.
 */

export interface SeoMetadata {
  title: string;
  description: string;
}

export interface ExternalLinks {
  email?: string;
  linkedin?: string;
  github?: string;
  orcid?: string;
  resume?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface HeroAction {
  label: string;
  href: string;
}

export interface PositioningArea {
  title: string;
  description: string;
}

export interface TeachingEntry {
  title: string;
  institution?: string;
  location?: string;
  description: string;
  repositoryUrl: string;
  linkLabel: string;
}

export interface ProfileSection {
  label: string;
  heading: string;
  paragraphs: string[];
  areas: PositioningArea[];
}

export interface IndustrySection {
  label: string;
  heading: string;
  paragraphs: string[];
}

export interface TeachingSection {
  label: string;
  heading: string;
  intro: string;
  entries: TeachingEntry[];
}

/**
 * A run of plain text, or the title of a cited work (book, journal,
 * magazine) rendered with <cite>.
 */
export type InlineSegment = string | { cite: string };

export interface ResearchSection {
  label: string;
  heading: string;
  paragraphs: InlineSegment[][];
}

export interface ContactSection {
  heading: string;
  copy: string;
}

/**
 * Reserved configuration for a future /publications/ route.
 * While `enabled` is false, no publications page is built and no
 * navigation link to it is rendered.
 */
export interface PublicationsConfig {
  enabled: boolean;
  route: `/${string}/`;
  source: 'manual' | 'remote';
}

export interface ProfileContent {
  name: string;
  shortName: string;
  headline: string;
  heroIntro: string;
  heroAction: HeroAction;
  positioningLine: string[];
  seo: SeoMetadata;
  links: ExternalLinks;
  profile: ProfileSection;
  industry: IndustrySection;
  teaching: TeachingSection;
  research: ResearchSection;
  contact: ContactSection;
  publications: PublicationsConfig;
}

export const profile: ProfileContent = {
  name: 'Egemen Bezci, PhD',
  shortName: 'Egemen Bezci',
  headline: 'AI and Risk Decision Systems',
  heroIntro:
    'I design and govern AI-enabled systems for decisions with financial, operational or public consequences. My work combines regulated financial services, applied data science, university teaching and research on intelligence and security.',
  heroAction: {
    label: 'View selected work',
    href: '#industry',
  },
  positioningLine: [
    'Regulated AI',
    'Fraud and risk',
    'University teaching',
    'Intelligence research',
  ],
  seo: {
    title: 'Egemen Bezci, PhD | AI and Risk Decision Systems',
    description:
      'Egemen Bezci designs and governs AI-enabled decision systems across regulated financial services, applied data science, university teaching and intelligence research.',
  },
  links: {
    email: 'egemen@aethernix.com',
    linkedin: 'https://www.linkedin.com/in/egemen-bezci-phd',
    github: 'https://github.com/edbezci',
    // orcid and resume remain undefined until confirmed.
  },
  profile: {
    label: 'Profile',
    heading: 'Research and applied data science',
    paragraphs: [
      'I hold a PhD from the University of Nottingham and researched intelligence and international security across Europe, North America and Asia. I later moved into applied data science in Canada and Germany, across scientific evidence, government and defence, and regulated financial services.',
      'Evidence is always incomplete, models are only one part of a decision system, and AI outputs require interpretation, monitoring, governance and human judgement. A model can help, but it cannot bear responsibility.',
    ],
    areas: [
      {
        title: 'AI and decision systems',
        description:
          'Building machine-learning systems around human decisions.',
      },
      {
        title: 'Risk, fraud and governance',
        description:
          'Connecting models with monitoring, controls and review.',
      },
      {
        title: 'Intelligence and professional education',
        description:
          'Bringing quantitative methods into intelligence studies and teaching.',
      },
    ],
  },
  industry: {
    label: 'Industry and applied data science',
    heading: 'From scientific evidence to regulated financial services',
    paragraphs: [
      'I began with scientific evidence and NLP, building classification and data-processing systems for quality-sensitive workflows. I then developed analytics for government and defence, including an analyst-centred AI project for countering cognitive warfare selected as a finalist in NATO\u2019s Innovation Challenge. In regulated financial services I progressed to principal-level responsibility for fraud prevention and risk, building an internal human-in-the-loop fraud capability that replaced reliance on an external provider, and establishing monitoring, reporting and governance arrangements across product, operations, legal, compliance and executive functions.',
    ],
  },
  teaching: {
    label: 'Selected teaching portfolio',
    heading: 'Teaching',
    intro:
      'I teach data science and machine learning to master\u2019s students and working professionals. Students must understand what a method can show, what it leaves out and how its results should be used.',
    entries: [
      {
        title: 'Data Science and Data Intelligence',
        institution: 'Universit\u00e4t f\u00fcr Weiterbildung Krems',
        location: 'Krems an der Donau, Austria',
        description:
          'A master\u2019s course in quantitative methods for intelligence and counter-terrorism, examining uncertainty, interpretation and professional judgement.',
        repositoryUrl: 'https://github.com/edbezci/ct-cve-intel-krems',
        linkLabel: 'Explore course repository',
      },
      {
        title: 'NLP for Political and Social Research',
        institution: 'National Sun Yat-sen University',
        location: 'Kaohsiung, Taiwan',
        description:
          'A practical introduction to natural-language processing for political and social researchers.',
        repositoryUrl: 'https://github.com/edbezci/workshop_nlp_research',
        linkLabel: 'Explore workshop',
      },
      {
        title: 'Clustering and Climate-Policy Analysis',
        institution: 'National Sun Yat-sen University',
        location: 'Kaohsiung, Taiwan',
        description:
          'An introduction to clustering through greenhouse-gas emissions analysis and methodological choice.',
        repositoryUrl: 'https://github.com/edbezci/workshop_greenhousegas_emissions_clustering',
        linkLabel: 'Explore workshop',
      },
    ],
  },
  research: {
    label: 'Research and public engagement',
    heading: 'Intelligence and international security',
    paragraphs: [
      [
        'My academic work focuses on intelligence studies. I am the author of ',
        {
          cite: 'Turkish Intelligence and the Cold War: The Turkish Secret Service, the US and the UK',
        },
        ', published by Bloomsbury and reviewed in the CIA\u2019s ',
        { cite: 'Studies in Intelligence' },
        '. My research has appeared in ',
        { cite: 'The Pacific Review' },
        ', ',
        { cite: 'Middle Eastern Studies' },
        ' and the ',
        { cite: 'Journal of Intelligence History' },
        ', and my policy writing in ',
        { cite: 'War on the Rocks' },
        ' and ',
        { cite: 'The National Interest' },
        '.',
      ],
      [
        'I am a Lecturer at Universit\u00e4t f\u00fcr Weiterbildung Krems, a Non-Resident Senior Fellow at USF\u2019s Global and National Security Institute, and a Fellow of the Royal Historical Society. I have presented on applied data science at Germany\u2019s Federal Foreign Office and EuroSciPy.',
      ],
    ],
  },
  contact: {
    heading: 'Contact',
    copy: 'I welcome inquiries concerning advisory or fractional leadership work, university and professional teaching, speaking, and research and policy collaboration.',
  },
  publications: {
    enabled: true,
    route: '/publications/',
    source: 'manual',
  },
} satisfies ProfileContent;

/** Primary navigation. A Publications entry is added only when that route exists. */
export const navigation: NavItem[] = [
  { label: 'Profile', href: '/#profile' },
  { label: 'Industry', href: '/#industry' },
  { label: 'Teaching', href: '/#teaching' },
  { label: 'Research', href: '/#research' },
  ...(profile.publications.enabled
    ? [{ label: 'Publications', href: profile.publications.route }]
    : []),
  { label: 'Contact', href: '/#contact' },
];
