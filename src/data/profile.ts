/**
 * Core identity and site-wide content model.
 *
 * Profile copy, links, hero content and SEO metadata live here so
 * components stay presentational. Domain content (industry, teaching,
 * speaking, research, publications) lives in dedicated data modules.
 * Optional link fields are left undefined until a confirmed value
 * exists; components must not render links for empty fields.
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
  googleScholar?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface CtaLink {
  label: string;
  href: string;
}

/**
 * A run of plain text, or the title of a cited work (book, journal,
 * magazine) rendered with <cite>.
 */
export type InlineSegment = string | { cite: string };

export interface Role {
  role: string;
  organisation: string;
  period?: string;
  url?: string;
}

/** Verified production website of the Aethernix consultancy. */
export const AETHERNIX_URL = 'https://aethernix.com';

const currentRoles: Role[] = [
  {
    role: 'Founder & Principal Consultant',
    organisation: 'Aethernix',
    url: AETHERNIX_URL,
  },
  {
    role: 'Lecturer',
    organisation: 'Universität für Weiterbildung Krems',
    period: '2025–present',
  },
  {
    role: 'Non-Resident Senior Fellow',
    organisation: 'USF Global and National Security Institute',
    period: '2026–present',
  },
  {
    role: 'Fellow',
    organisation: 'Royal Historical Society',
    period: '2021–present',
  },
];

export const profile = {
  name: 'Egemen Bezci, PhD',
  shortName: 'Egemen Bezci',
  headline: 'AI and Risk Decision Systems',
  heroIntro:
    'I design and govern AI systems for high-stakes decisions in fraud prevention, risk management and intelligence analysis. My approach integrates machine learning, operational rules and institutional knowledge with human judgement.',
  identityLine:
    'Founder & Principal Consultant, Aethernix · Lecturer, Universität für Weiterbildung Krems · Non-Resident Senior Fellow, USF GNSI',
  heroAction: {
    label: 'Explore my work',
    href: '#profile',
  } satisfies CtaLink,
  seo: {
    title: 'Egemen Bezci, PhD | AI and Risk Decision Systems',
    description:
      'Egemen Bezci designs and governs AI-enabled decision systems for fraud, risk and intelligence, combining applied data science, private AI, research, teaching and advisory work.',
  } satisfies SeoMetadata,
  links: {
    email: 'egemen@aethernix.com',
    linkedin: 'https://www.linkedin.com/in/egemen-bezci-phd',
    github: 'https://github.com/edbezci',
    orcid: 'https://orcid.org/0000-0002-1089-5907',
    googleScholar:
      'https://scholar.google.com/citations?hl=en&user=uzocfvYAAAAJ',
  } satisfies ExternalLinks,

  /** Homepage Profile section. */
  homeProfile: {
    label: 'Profile',
    heading: 'Decisions under uncertainty',
    paragraphs: [
      'I develop AI and analytical systems for decisions made with incomplete evidence. My experience spans fraud and risk, government and defence analytics, scientific evidence analysis and intelligence research.',
      'I combine hands-on model development with explainability, monitoring, operational controls and human oversight—connecting analytical outputs with responsible decisions.',
    ],
    pullQuote: 'A model can help, but it cannot bear responsibility.',
    cta: { label: 'Read full profile', href: '/profile/' } satisfies CtaLink,
  },

  /** Complete Profile page. */
  profilePage: {
    seo: {
      title: 'Profile | Egemen Bezci, PhD',
      description:
        'Profile of Egemen Bezci, PhD — AI and risk decision-systems practitioner, founder of Aethernix, former principal data scientist in regulated financial services, lecturer and intelligence researcher.',
    } satisfies SeoMetadata,
    label: 'Profile',
    heading: 'AI, risk and decisions under uncertainty',
    paragraphs: [
      'I work on analytical and AI-enabled systems used where evidence is incomplete and errors carry financial, operational or public consequences. My current work spans fraud and risk decisioning, private AI and knowledge systems, intelligence analysis and strategic warning.',
      'I began my career as a scholar of intelligence and international security, completing a PhD in Political Science at the University of Nottingham. I subsequently conducted research and taught in Sweden, New Zealand and Taiwan. This work examined intelligence cooperation, covert action, secrecy, alliance politics and the ways institutions make decisions with incomplete or contested information.',
      'I later moved into applied data science in Canada and Germany. My industry work has included scientific-evidence systems, government and defence analytics, natural-language processing, fraud prevention, payment risk, consumer-risk decisioning and portfolio oversight. In regulated financial services, I progressed to Principal Data Scientist and led the development and governance of human-in-the-loop decision systems.',
      'Across these environments, I treat a model as one component of a wider decision system. Data quality, thresholds, rules, internal knowledge, human review, monitoring, documentation and operational responsibility all affect whether an analytical system can be trusted.',
      'Today, I am Founder and Principal Consultant of Aethernix, Lecturer at Universität für Weiterbildung Krems, a Non-Resident Senior Fellow at the University of South Florida’s Global and National Security Institute, and a Fellow of the Royal Historical Society.',
    ],
  },

  /** Current roles, shown on the Profile page. */
  currentRoles,

  /** Homepage Contact section. */
  homeContact: {
    heading: 'Contact',
    copy: 'I welcome inquiries concerning AI and risk advisory work, fractional leadership, university and professional teaching, speaking, and research or institutional collaboration.',
    cta: { label: 'Contact me', href: '/contact/' } satisfies CtaLink,
  },

  /** Complete Contact page. */
  contactPage: {
    seo: {
      title: 'Contact | Egemen Bezci, PhD',
      description:
        'Contact Egemen Bezci for AI and risk advisory work, fractional or interim technical leadership, university and professional teaching, speaking, and research collaboration.',
    } satisfies SeoMetadata,
    label: 'Contact',
    heading: 'Work and collaboration',
    intro: 'I welcome inquiries concerning:',
    areas: [
      'AI and risk advisory work',
      'Fractional or interim technical leadership',
      'Private AI and knowledge systems',
      'University and professional teaching',
      'Conference and institutional speaking',
      'Research and policy collaboration',
    ],
    emailNote: 'The most direct way to reach me is by email.',
  },
};

/** Primary navigation. */
export const navigation: NavItem[] = [
  { label: 'Profile', href: '/profile/' },
  { label: 'Industry', href: '/industry/' },
  { label: 'Teaching & Speaking', href: '/teaching-speaking/' },
  { label: 'Research', href: '/research/' },
  { label: 'Publications', href: '/publications/' },
  { label: 'Contact', href: '/contact/' },
];
