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
  headline: 'AI Decision Systems, Risk and Intelligence',
  heroIntro:
    'I build and govern AI-enabled systems for decisions involving risk, incomplete evidence and human judgement. My work spans regulated financial services, fraud prevention and intelligence analysis. I also teach applied data science and publish on intelligence and international security.',
  heroAction: {
    label: 'Explore my work',
    href: '#industry',
  },
  positioningLine: [
    'Regulated AI',
    'Fraud and risk',
    'University teaching',
    'Intelligence research',
  ],
  seo: {
    title: 'Egemen Bezci, PhD | AI Decision Systems, Risk and Intelligence',
    description:
      'Egemen Bezci works across AI-enabled decision systems, regulated risk, fraud prevention, applied data science teaching and intelligence research.',
  },
  links: {
    email: 'egemen@aethernix.com',
    linkedin: 'https://www.linkedin.com/in/egemen-bezci-phd',
    github: 'https://github.com/edbezci',
    // orcid and resume remain undefined until confirmed.
  },
  profile: {
    label: 'Profile',
    heading: 'An international career across research and applied data science',
    paragraphs: [
      'I began my career as a scholar of intelligence and international security, with a PhD from the University of Nottingham. My research has taken me across Europe, North America and Asia. I later moved into applied data science and machine learning in Canada and Germany. My work has covered academic research, scientific evidence synthesis, government and defence projects, and regulated financial services.',
      'These fields may appear separate, but they pose the same basic problem. Evidence is incomplete, interpretations differ and decisions still have to be made. A model can help, but it cannot bear responsibility. People must understand what it shows, where it may fail and when its output should be challenged.',
    ],
    areas: [
      {
        title: 'AI and decision systems',
        description:
          'Building machine-learning systems around the decisions people must make, rather than treating the model as an end in itself.',
      },
      {
        title: 'Risk, fraud and governance',
        description:
          'Connecting fraud and risk models with monitoring, operational controls and human review.',
      },
      {
        title: 'Intelligence and professional education',
        description:
          'Bringing research, quantitative methods and computational analysis into intelligence studies and professional teaching.',
      },
    ],
  },
  industry: {
    label: 'Industry and applied data science',
    heading: 'Applied data science across evidence, security and risk',
    paragraphs: [
      'My industry work began with scientific evidence review, where I built classification and data-processing systems for quality-sensitive workflows. These systems helped researchers organise and assess complex source material while preserving the documentation required for review.',
      'I then developed natural-language processing and advanced analytics for government and defence-oriented clients. The work included classification, clustering, sentiment analysis and entity extraction. I also helped design an analyst-centred AI project for countering cognitive warfare. The project was selected as a finalist in NATO’s Innovation Challenge.',
      'In regulated financial services, I progressed to principal-level responsibility for fraud prevention, financial risk and operational decision support. I built an internal human-in-the-loop fraud capability that replaced reliance on an external provider. I also established monitoring and reporting frameworks and worked across product, operations, legal, compliance and executive functions.',
      'As the responsibility grew, the task was no longer only to build models. It was also to determine how they should be tested, monitored, explained and used. An AI-enabled system works only when its technical components and human processes work together.',
    ],
  },
  teaching: {
    label: 'Teaching portfolio',
    heading: 'Teaching methods and judgement',
    intro:
      'I teach data science, machine learning and quantitative methods to master’s students and working professionals. Learning how to run a method is not enough. Students must also understand what it can show, what it leaves out and how its results should be used.',
    entries: [
      {
        title: 'Data Science and Data Intelligence',
        institution: 'Universität für Weiterbildung Krems',
        location: 'Krems an der Donau, Austria',
        description:
          'A master’s-level course in quantitative and computational methods for intelligence and counter-terrorism. Students work with data while examining uncertainty, interpretation and the role of professional judgement.',
        repositoryUrl: 'https://github.com/edbezci/ct-cve-intel-krems',
        linkLabel: 'Explore course repository',
      },
      {
        title: 'NLP for Political and Social Research',
        institution: 'National Sun Yat-sen University',
        location: 'Kaohsiung, Taiwan',
        description:
          'A practical introduction to natural-language processing for political and social researchers. The workshop covers how to prepare, analyse and interpret textual evidence.',
        repositoryUrl: 'https://github.com/edbezci/workshop_nlp_research',
        linkLabel: 'Explore workshop',
      },
      {
        title: 'Clustering and Climate-Policy Analysis',
        institution: 'National Sun Yat-sen University',
        location: 'Kaohsiung, Taiwan',
        description:
          'An introduction to clustering through the analysis of greenhouse-gas emissions. The workshop examines how methodological choices shape the patterns we find and the conclusions we draw from them.',
        repositoryUrl: 'https://github.com/edbezci/workshop_greenhousegas_emissions_clustering',
        linkLabel: 'Explore workshop',
      },
    ],
  },
  research: {
    label: 'Research and public engagement',
    heading: 'Research on intelligence and international security',
    paragraphs: [
      [
        'My academic work focuses on intelligence studies. I am the author of ',
        {
          cite: 'Turkish Intelligence and the Cold War: The Turkish Secret Service, the US and the UK',
        },
        ', published by Bloomsbury. The book was reviewed in the CIA’s professional journal, ',
        { cite: 'Studies in Intelligence' },
        '.',
      ],
      [
        'My research has appeared in ',
        { cite: 'The Pacific Review' },
        ', ',
        { cite: 'Middle Eastern Studies' },
        ' and the ',
        { cite: 'Journal of Intelligence History' },
        '. My policy writing has appeared in ',
        { cite: 'War on the Rocks' },
        ' and ',
        { cite: 'The National Interest' },
        '. I have also contributed chapters to volumes published by Georgetown University Press, Stanford University Press and Routledge.',
      ],
      [
        'I continue this work alongside my applied data science career. I am a Lecturer at Universität für Weiterbildung Krems and a Non-Resident Senior Fellow at the University of South Florida Global and National Security Institute. I was elected a Fellow of the Royal Historical Society.',
      ],
      [
        'My teaching and public engagement increasingly connect intelligence studies with applied data science. At Germany’s Federal Foreign Office, I presented on the use of large language models in crisis early warning. At EuroSciPy, I presented work on the computational analysis of diplomatic archives.',
      ],
    ],
  },
  contact: {
    heading: 'Conversations on AI, risk and intelligence',
    copy: 'I welcome inquiries about senior AI and risk roles, university teaching, and research or policy collaboration.',
  },
  publications: {
    enabled: false,
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
