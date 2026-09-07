/**
 * Industry and applied-AI content.
 *
 * Former employers are never named; experience is described through
 * sectors and operating environments. Aethernix is the only company
 * named, as Egemen Bezci’s current boutique consultancy.
 *
 * Homepage case summaries and the complete Industry page copy are
 * co-located here so each factual case is defined once.
 */

import type { CtaLink, SeoMetadata } from './profile';

export interface IndustryHomeCase {
  title: string;
  contextLine?: string;
  paragraphs: string[];
  link?: { label: string; href: string };
}

export interface IndustrySubsection {
  heading: string;
  paragraphs: string[];
  listIntro?: string;
  list?: string[];
  link?: { label: string; href: string };
  secondaryLink?: { label: string; href: string };
}

export interface IndustryPageSection {
  id: string;
  heading: string;
  paragraphs?: string[];
  subsections?: IndustrySubsection[];
  list?: string[];
  link?: { label: string; href: string };
}

const homeSupportingCases: IndustryHomeCase[] = [
  {
    title: 'Government and defence technology',
    paragraphs: [
      'Co-designed an analyst-centred NLP platform for countering cognitive warfare, selected among the top 10 of more than 130 submissions to NATO’s 2021 Innovation Challenge.',
    ],
  },
  {
    title: 'Scientific evidence and research technology',
    paragraphs: [
      'Developed classification and data-processing pipelines for compliance- and quality-sensitive research workflows, transforming complex scientific source material into structured analytical evidence.',
    ],
  },
];

const pageSections: IndustryPageSection[] = [
  {
    id: 'fraud-risk',
    heading: 'Regulated financial services',
    subsections: [
      {
        heading: 'Fraud risk and decision intelligence',
        paragraphs: [
          'In a regulated BNPL environment operating in Germany and Austria, I led data-science work across fraud prevention, payment risk, consumer-risk decisioning, transaction monitoring and portfolio oversight for more than €200 million in annual transaction volume.',
          'I developed fraud and risk models combining transaction behaviour with privacy-sensitive device, identity and location intelligence, alongside credit information and relevant external data. These models supported decisions about approval, review, monitoring and intervention.',
          'I built an in-house fraud capability that replaced reliance on an external provider. It connected model outputs with analyst review, case management, intervention rules, feedback loops and ongoing monitoring.',
        ],
      },
      {
        heading: 'Orchestration and decision intelligence',
        paragraphs: [
          'I developed an internal orchestration and decision-intelligence layer integrating machine-learning models, rule engines, generative AI and retrieval-augmented internal knowledge. It brought model outputs, automated checks, risk alerts and relevant internal guidance into shared workflows for human review.',
          'One merchant-assessment workflow combined tabular risk classification with website-content analysis using a compact language model. It helped identify inconsistencies between assigned merchant-category codes and actual business activity.',
          'Retrieval-augmented generation provided access to internal policy and operational knowledge. Source traceability, escalation paths and analyst review connected that information to operational decisions.',
        ],
      },
      {
        heading: 'Monitoring and operational oversight',
        paragraphs: [
          'I developed monitoring and executive-reporting frameworks covering fraud exposure, bad debt, portfolio performance, model behaviour, operational effectiveness and emerging risk patterns.',
          'The work connected data science with product, engineering, risk, operations, compliance, legal and executive stakeholders. Model documentation, reproducibility, explainability and human oversight supported operational governance and audit readiness.',
        ],
      },
    ],
  },
  {
    id: 'government-defence',
    heading: 'Government and defence technology',
    paragraphs: [
      'In government and defence technology, I developed analyst-centred NLP and machine-learning systems for information-intensive environments.',
      'I co-designed an analytics platform for countering cognitive warfare that was selected among the top 10 of more than 130 submissions to NATO’s 2021 Innovation Challenge. The system was intended to help analysts structure, explore and interpret large volumes of information rather than automate high-consequence judgements without oversight.',
      'The work included classification, clustering, entity extraction, sentiment analysis, information retrieval and intelligence-oriented decision support.',
    ],
  },
  {
    id: 'scientific-evidence',
    heading: 'Scientific evidence and research technology',
    paragraphs: [
      'In scientific evidence technology, I developed classification and data-processing pipelines for compliance- and quality-sensitive research workflows.',
      'The systems transformed complex scientific source material into structured analytical evidence, supporting more scalable, consistent and reviewable systematic-review processes.',
    ],
  },
];

export const industry = {
  seo: {
    title: 'Industry and applied AI | Egemen Bezci, PhD',
    description:
      'Applied AI and data-science work by Egemen Bezci across regulated financial services, government and defence technology and scientific evidence, and Aethernix, his boutique consultancy for accountable AI.',
  } satisfies SeoMetadata,

  /** Homepage Industry section: one featured case, two supporting cases. */
  home: {
    label: 'Industry',
    heading: 'From models to operational decisions',
    cta: {
      label: 'Explore industry experience',
      href: '/industry/',
    } satisfies CtaLink,
    featured: {
      title: 'Fraud risk and decision intelligence',
      contextLine:
        'Regulated BNPL · Germany and Austria · €200m+ annual transaction volume',
      paragraphs: [
        'I developed fraud and risk models using transaction behaviour alongside privacy-sensitive device, identity and location intelligence. I built an in-house fraud capability that replaced reliance on an external provider, connecting model outputs with analyst review, monitoring, operational controls and executive reporting.',
        'I also developed an orchestration and decision-intelligence layer integrating machine-learning models, rule engines, generative AI and retrieval from internal knowledge systems. It brought risk signals, automated checks and supporting information into shared operational workflows for human review.',
      ],
      link: { label: 'Explore the industry case', href: '/industry/#fraud-risk' },
    } satisfies IndustryHomeCase,
    supporting: homeSupportingCases,
  },

  /** Complete Industry page. */
  page: {
    label: 'Industry and applied AI',
    heading: 'Decision systems for consequential environments',
    intro:
      'I develop AI and analytical systems for fraud, risk and intelligence. My work connects model development with operational workflows, human review and the controls needed to monitor performance in use.',
    sections: pageSections,
    cta: {
      label: 'Discuss an engagement',
      href: '/contact/',
    } satisfies CtaLink,
  },
};
