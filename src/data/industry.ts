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

import { AETHERNIX_URL, type CtaLink, type SeoMetadata } from './profile';

export interface IndustryHomeCase {
  title: string;
  paragraphs: string[];
  link?: { label: string; href: string };
}

export interface IndustrySubsection {
  heading: string;
  paragraphs: string[];
  listIntro?: string;
  list?: string[];
  link?: { label: string; href: string };
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
    title: 'Aethernix',
    paragraphs: [
      'Aethernix is a boutique AI consultancy developing private, traceable decision systems for organisations working with sensitive information. Its approach combines tailored analytical models, internal knowledge systems, orchestration, governance and human oversight.',
    ],
    link: { label: 'Aethernix', href: AETHERNIX_URL },
  },
];

const pageSections: IndustryPageSection[] = [
  {
    id: 'financial-services',
    heading: 'Regulated financial services',
    subsections: [
      {
        heading: 'Fraud-risk models and human oversight',
        paragraphs: [
          'In a regulated white-label BNPL environment, I led data-science work across fraud prevention, payment risk, consumer-risk decisioning, transaction monitoring and portfolio oversight for more than €200 million in annual transaction volume.',
          'I developed fraud-risk models combining transactional and behavioural patterns with privacy-sensitive signals such as device intelligence, identity characteristics, location and geospatial intelligence, credit information and relevant external data.',
          'The objective was not simply to produce a risk score. Model outputs had to support explainable operational decisions: whether to approve, review, monitor or intervene, and how those decisions should be reassessed as further evidence became available.',
          'I built an internal human-in-the-loop fraud capability that replaced reliance on an external provider. It connected model outputs with analyst review, case management, intervention rules, feedback loops and ongoing monitoring.',
        ],
      },
      {
        heading: 'Lilith: orchestration and decision intelligence',
        paragraphs: [
          'Lilith was developed as an internal orchestration and decision-intelligence layer for risk operations. It brought together machine-learning models, rule engines, generative-AI services and retrieval-augmented internal knowledge within a shared operational interface.',
          'One workflow combined tabular merchant-risk classification with website-content analysis using a compact language model. This supported the assessment of new merchants and helped identify inconsistencies between assigned merchant-category codes and actual business activity.',
          'Retrieval-augmented generation gave users grounded access to internal policy and operational knowledge. Other services exposed model outputs, rule-based checks and risk alerts through the same operational layer.',
          'The strategic value did not lie in RAG alone. It lay in orchestrating different analytical components around repeatable workflows, traceable evidence, escalation paths and human review. This turned otherwise separate models, rules and knowledge sources into usable decision infrastructure.',
        ],
      },
      {
        heading: 'Monitoring and governance',
        paragraphs: [
          'I developed analytical and executive-reporting frameworks covering fraud exposure, bad debt, portfolio performance, model behaviour, operational effectiveness and emerging risk patterns.',
          'This work connected data science with product, engineering, risk, operations, compliance, legal and executive stakeholders. Governance included explainability, reproducibility, model documentation, performance monitoring and human oversight, supporting organisational readiness for SOC 2, ISAE 3402, the EU AI Act and Consumer Credit Directive II requirements.',
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
  {
    id: 'aethernix',
    heading: 'Aethernix',
    subsections: [
      {
        heading: 'A boutique consultancy for accountable AI',
        paragraphs: [
          'Aethernix is a boutique AI consultancy for organisations that need analytical systems to operate within clear evidential, security and governance boundaries.',
          'Its work focuses on private, traceable AI and decision systems for risk-intensive environments. The approach combines tailored models, rule-based logic, internal knowledge systems, orchestration and human review rather than treating generative AI as a standalone solution.',
          'Potential application areas include fraud and financial risk, financial analysis, supply-chain intelligence and geopolitical or strategic analysis.',
        ],
        listIntro: 'The design priorities are:',
        list: [
          'Client control over sensitive information',
          'Outputs grounded in identifiable sources',
          'Clear boundaries between models, rules and human decisions',
          'Traceable analytical workflows',
          'Proportionate infrastructure',
          'Monitoring and governance appropriate to the consequences of the decision',
        ],
        link: { label: 'Aethernix', href: AETHERNIX_URL },
      },
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
    heading: 'Applied AI in high-stakes environments',
    intro:
      'My industry work focuses on the systems surrounding consequential decisions: models, rules, data, internal knowledge, human review, monitoring and operational control.',
    cta: {
      label: 'Explore industry experience',
      href: '/industry/',
    } satisfies CtaLink,
    featured: {
      title: 'Fraud risk and decision intelligence',
      paragraphs: [
        'In a regulated BNPL environment handling more than €200 million in annual transaction volume, I developed fraud-risk models using transaction behaviour and privacy-sensitive device, identity and location intelligence. I built a human-in-the-loop capability that connected model outputs with case review, monitoring, operational controls and executive reporting.',
        'I also developed Lilith, an internal orchestration and decision-intelligence layer integrating machine-learning models, rule engines, generative AI and retrieval-augmented internal knowledge. Its value was not RAG alone, but its ability to bring different forms of intelligence into traceable, human-reviewed operational workflows.',
      ],
    } satisfies IndustryHomeCase,
    supporting: homeSupportingCases,
  },

  /** Complete Industry page. */
  page: {
    label: 'Industry and applied AI',
    heading: 'Decision systems for consequential environments',
    intro:
      'My industry work concerns analytical systems whose errors carry financial, operational or public consequences. I combine model development with the surrounding decision architecture: data quality, signal selection, rules, thresholds, internal knowledge, human review, monitoring, operational controls and executive reporting.',
    sections: pageSections,
    closing:
      'Across these domains, the model is only one part of the system. Reliable decisions also depend on the quality of the underlying information, the design of operational controls, access to relevant institutional knowledge and clear responsibility for the outcome.',
    cta: {
      label: 'Discuss industry or advisory work',
      href: '/contact/',
    } satisfies CtaLink,
  },
};
