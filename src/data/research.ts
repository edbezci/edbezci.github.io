/**
 * Research content: profile, affiliations, book, selected chapter and
 * research support.
 *
 * The Royal Historical Society fellowship is an elected fellowship,
 * not a research grant, and appears under affiliations only. The book
 * was reviewed in the CIA’s Studies in Intelligence; never describe
 * it as “cited by the CIA”.
 */

import type { CtaLink, InlineSegment, Role, SeoMetadata } from './profile';

export interface Grant {
  /** Full award label as conferred, e.g. 'Eisenhower Foundation Research Grant'. */
  label: string;
  period: string;
}

export const research = {
  seo: {
    title: 'Research | Egemen Bezci, PhD',
    description:
      'Research by Egemen Bezci on intelligence, secrecy and decision-making under uncertainty — affiliations, fellowships, grants and the book Turkish Intelligence and the Cold War.',
  } satisfies SeoMetadata,

  /** Homepage Research & Publications section. */
  home: {
    label: 'Research & Publications',
    heading: 'Intelligence, secrecy and strategic decision-making',
    paragraphs: [
      [
        'I began my career as a scholar of intelligence and international security. I am the author of ',
        { cite: 'Turkish Intelligence and the Cold War' },
        ', published by Bloomsbury and reviewed in the CIA’s ',
        { cite: 'Studies in Intelligence' },
        '.',
      ],
      [
        'With Nihat Ali Özcan, I contributed the chapter ',
        { cite: 'Turkish Covert Operations: A Useful Tool for Politicians?' },
        ' to ',
        { cite: 'Covert Action: National Approaches to Unacknowledged Intervention' },
        ', published by Georgetown University Press in 2025.',
      ],
      [
        'My research has appeared in ',
        { cite: 'The Pacific Review' },
        ', ',
        { cite: 'Middle Eastern Studies' },
        ' and the ',
        { cite: 'Journal of Intelligence History' },
        ', with policy writing in ',
        { cite: 'War on the Rocks' },
        ' and ',
        { cite: 'The National Interest' },
        '. My research has received support from fellowships and grants in Taiwan, Sweden, the United States and the United Kingdom.',
      ],
    ] satisfies InlineSegment[][],
    ctas: [
      { label: 'Research and grants', href: '/research/' },
      { label: 'View all publications', href: '/publications/' },
    ] satisfies CtaLink[],
  },

  /** Complete Research page. */
  page: {
    label: 'Research',
    heading: 'Intelligence, secrecy and decision-making',
    profileParagraphs: [
      'My research examines how states and institutions collect, conceal, interpret and act on information under uncertainty. It began with intelligence history, covert action and international security and now also informs my work on strategic warning and AI-enabled analysis.',
      'My research has considered intelligence cooperation between states, covert operations, secrecy in foreign policy, alliance politics and the strategic choices of states operating under dependency or uncertainty. I have conducted research across Europe, North America and Asia.',
    ],
  },

  affiliations: [
    {
      role: 'Non-Resident Senior Fellow',
      organisation:
        'Global and National Security Institute, University of South Florida',
      period: '2026–present',
    },
    {
      role: 'Lecturer',
      organisation: 'Universität für Weiterbildung Krems',
      period: '2025–present',
    },
    {
      role: 'Fellow',
      organisation: 'Royal Historical Society',
      period: '2021–present',
    },
  ] satisfies Role[],

  book: {
    paragraphs: [
      [
        'My book, ',
        {
          cite: 'Turkish Intelligence and the Cold War: The Turkish Secret Service, the US and the UK',
        },
        ', was published by Bloomsbury in 2020. It examines the development of Turkish intelligence and its relationships with the United States and United Kingdom during the early Cold War.',
      ],
      [
        'The book was reviewed in the CIA’s ',
        { cite: 'Studies in Intelligence' },
        ' and other scholarly publications.',
      ],
    ] satisfies InlineSegment[][],
    cta: {
      label: 'View the full publication record',
      href: '/publications/',
    } satisfies CtaLink,
  },

  chapter2025: {
    paragraphs: [
      [
        'With Nihat Ali Özcan, I contributed the chapter ',
        { cite: 'Turkish Covert Operations: A Useful Tool for Politicians?' },
        ' to ',
        { cite: 'Covert Action: National Approaches to Unacknowledged Intervention' },
        ', published by Georgetown University Press in 2025.',
      ],
    ] satisfies InlineSegment[][],
    cta: {
      label: 'View publication',
      href: 'https://press.georgetown.edu/Book/Covert-Action',
    } satisfies CtaLink,
  },

  grants: [
    {
      label: 'Taiwan Fellowship, Ministry of Foreign Affairs, Taiwan',
      period: '2019',
    },
    {
      label: 'Royal Swedish Academy of Sciences, Humanities Research Grant',
      period: '2017',
    },
    {
      label:
        'Swedish Institute Doctoral Scholarship and Network for Future Global Leaders',
      period: '2016–2017',
    },
    { label: 'Eisenhower Foundation Research Grant', period: '2016' },
    {
      label: 'Harry S. Truman Library Institute Research Grant',
      period: '2015',
    },
    {
      label:
        'University of Nottingham Vice-Chancellor’s Scholarship for Research Excellence',
      period: '2014–2017',
    },
  ] satisfies Grant[],
};
