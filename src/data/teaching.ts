/**
 * Teaching content: current and previous university teaching and
 * professional education.
 *
 * Repository links are only set where the URL has been verified.
 * Courses at Universität für Weiterbildung Krems are recurring
 * appointments beginning in 2025, not one-off engagements.
 */

import type { CtaLink, SeoMetadata } from './profile';

export interface Course {
  title: string;
  /** e.g. 'Graduate Research Seminar', 'Undergraduate Module'. */
  kind?: string;
  /** Teaching period for previous appointments, e.g. '2018–2020'. */
  period?: string;
  /** Recurrence and delivery note for current teaching. */
  note?: string;
  /** Shorter note variant used on the homepage. */
  homeNote?: string;
  repositoryUrl?: string;
}

export interface TeachingInstitution {
  institution: string;
  role?: string;
  period?: string;
  description?: string;
  courses: Course[];
}

const current: TeachingInstitution[] = [
  {
    institution: 'Universität für Weiterbildung Krems',
    role: 'Lecturer',
    period: '2025–present',
    courses: [
      {
        title: 'Quantitative Methods for Intelligence and Counter-Terrorism',
        note: 'Recurring graduate and professional course. Most recently delivered 29–31 May 2026.',
        homeNote:
          'Recurring graduate and professional course. Most recently delivered 29–31 May 2026.',
        repositoryUrl: 'https://github.com/edbezci/ct-cve-intel-krems',
      },
      {
        title: 'Data Science and Data Intelligence I & II',
        note: 'Recurring graduate teaching. Next scheduled delivery: 15–17 January 2027.',
        homeNote:
          'Recurring graduate teaching. Next scheduled delivery: 15–17 January 2027.',
      },
    ],
  },
];

const previous: TeachingInstitution[] = [
  {
    institution: 'National Sun Yat-sen University, Taiwan',
    courses: [
      {
        title: 'Politics and Economy of Climate Change',
        kind: 'Graduate Research Seminar',
        period: '2018–2020',
      },
      {
        title: 'Python Journalism: Using Machine Learning for Social Sciences',
        kind: 'Graduate Research Seminar',
        period: '2018–2020',
      },
    ],
  },
  {
    institution: 'Massey University, New Zealand',
    courses: [
      {
        title: 'Pacific Security Dynamics',
        kind: 'Professional Development Course for Military Officers',
        period: '2017–2018',
      },
    ],
  },
  {
    institution: 'Stockholm University, Sweden',
    courses: [
      {
        title: 'Human Rights in the Middle East, Turkey and East Asia',
        kind: 'Graduate Module',
        period: '2016–2017',
      },
      {
        title: 'Middle Eastern and North African Politics and Economy',
        kind: 'Undergraduate Module',
        period: '2016–2017',
      },
      {
        title: 'Area Studies: Theory and Method',
        kind: 'Graduate Module',
        period: '2016–2017',
      },
    ],
  },
  {
    institution: 'University of Nottingham, United Kingdom',
    courses: [
      {
        title: 'Roads to Modernity: An Introduction to Modern History, 1789–1945',
        kind: 'Undergraduate Module',
        period: '2014–2016',
      },
      {
        title: 'Understanding Global Politics',
        kind: 'Undergraduate Module',
        period: '2014–2016',
      },
    ],
  },
];

const professional: TeachingInstitution[] = [
  {
    institution: 'OSCE Academy in Bishkek',
    courses: [
      {
        title: 'Politics and Security',
        kind: 'Professional Development Course for officers',
        period: '2017–2018',
      },
    ],
  },
];

export const teaching = {
  seo: {
    title: 'Teaching and speaking | Egemen Bezci, PhD',
    description:
      'University and professional teaching by Egemen Bezci in data science, machine learning and quantitative methods, plus conference presentations, invited talks and upcoming events.',
  } satisfies SeoMetadata,

  /** Homepage Teaching & Speaking section. */
  home: {
    label: 'Teaching & Speaking',
    heading: 'Teaching across disciplines and professional practice',
    intro:
      'My university teaching began at the University of Nottingham in 2014 and has since taken me to Sweden, New Zealand, Taiwan and Austria. I have taught undergraduates, master\'s students and military professionals across politics, intelligence and quantitative methods.\n\nSince 2025, I have taught recurring graduate and professional courses on Intelligence and Data Science at Universität für Weiterbildung Krems. My teaching connects analytical methods with the interpretation of evidence, methodological limits and professional judgement.',
    attendNote:
      'If you are attending the conference too, get in touch.',
    cta: {
      label: 'View teaching and speaking',
      href: '/teaching-speaking/',
    } satisfies CtaLink,
  },

  /** Complete Teaching & Speaking page. */
  page: {
    label: 'Teaching and speaking',
    heading: 'Teaching across disciplines and professional practice',
    intro:
      'My university teaching began at the University of Nottingham in 2014 and has since taken me to Sweden, New Zealand, Taiwan and Austria. I have taught undergraduates, master\'s students and military professionals across politics, intelligence and quantitative methods.\n\nSince 2025, I have taught recurring graduate and professional courses on Intelligence and Data Science at Universität für Weiterbildung Krems. My teaching connects analytical methods with the interpretation of evidence, methodological limits and professional judgement.',
  },

  current,

  previous,

  professional,
};
