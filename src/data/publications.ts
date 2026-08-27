/**
 * Manually curated publication records — the authoritative source
 * for the Publications page.
 *
 * DOIs are stored without the URL prefix; links are generated as
 * https://doi.org/{doi}. No DOIs, dates, page ranges or URLs are
 * invented: fields are only set when verified. Records with
 * linkStatus 'legacy' had unstable original URLs at the time of
 * curation; they are rendered as citations without a link if the
 * URL no longer resolves.
 */

export type PublicationCategory =
  | 'book'
  | 'book-chapter'
  | 'journal-article'
  | 'editorial'
  | 'review-essay'
  | 'policy-writing'
  | 'thesis';

export interface Publication {
  id: string;
  category: PublicationCategory;
  year: number;
  title: string;
  subtitle?: string;
  authors: string[];
  venue?: string;
  containerTitle?: string;
  publisher?: string;
  volume?: string;
  issue?: string;
  pages?: string;
  /** ISO 8601 date; used where the full date is verified. */
  publicationDate?: string;
  doi?: string;
  url?: string;
  openAccessUrl?: string;
  language?: 'English' | 'Turkish';
  /** Genre or context note, e.g. 'Book review', 'PhD thesis'. */
  note?: string;
  institution?: string;
  isbn?: string;
  description?: string;
  featured?: boolean;
  linkStatus?: 'current' | 'legacy';
}

export interface BookEdition {
  title: string;
  year: number;
  publisher: string;
  language: 'English' | 'Turkish';
  isbn?: string;
  url?: string;
}

export interface BookReview {
  reviewer: string;
  title?: string;
  year: number;
  outlet: string;
  volume?: string;
  issue?: string;
  pages?: string;
  /** ISO 8601 date; may be year-month where the day is unknown. */
  date?: string;
  doi?: string;
  url: string;
  note?: string;
  classification: 'scholarly' | 'professional' | 'public';
}

export interface PublicReview {
  reviewer: string;
  title: string;
  outlet: string;
  /** ISO 8601 date. */
  date: string;
  url: string;
}

export interface AuthorInterview {
  title: string;
  outlet: string;
  url: string;
}

export interface ResearchProfile {
  label: string;
  url: string;
}

export const publications = [
  // ---------------------------------------------------------------
  // Book
  // ---------------------------------------------------------------
  {
    id: 'bezci-2020-turkish-intelligence-cold-war',
    category: 'book',
    year: 2020,
    title: 'Turkish Intelligence and the Cold War',
    subtitle: 'The Turkish Secret Service, the US and the UK',
    authors: ['Egemen Bezci'],
    publisher: 'I.B. Tauris / Bloomsbury Publishing',
    isbn: '978-1-78831-325-4',
    doi: '10.5040/9781788317306',
    url: 'https://www.bloomsbury.com/us/turkish-intelligence-and-the-cold-war-9780755636495/',
    description:
      'An archival study of intelligence cooperation among Turkey, the United States and the United Kingdom during the early Cold War. The book examines how a weaker ally used intelligence liaison, technical cooperation and covert action to pursue interests that did not always coincide with those of its Western partners.',
    featured: true,
  },
  // ---------------------------------------------------------------
  // Book chapters
  // ---------------------------------------------------------------
  {
    id: 'ozcan-bezci-2025-turkish-covert-operations',
    category: 'book-chapter',
    year: 2025,
    title: 'Turkish Covert Operations: A Useful Tool for Politicians?',
    authors: ['Nihat Ali Özcan', 'Egemen Bezci'],
    containerTitle:
      'Covert Action: National Approaches to Unacknowledged Intervention',
    publisher: 'Georgetown University Press',
    url: 'https://press.georgetown.edu/Book/Covert-Action',
  },
  {
    id: 'bezci-2022-blocked-modernisation',
    category: 'book-chapter',
    year: 2022,
    title:
      'Turkish Intelligence, Surveillance and the Secrets of the Cold War: Blocked Modernisation?',
    authors: ['Egemen Bezci'],
    containerTitle: 'Intelligence Agencies, Technology and Knowledge Production',
    publisher: 'Routledge',
    pages: '164–183',
    doi: '10.4324/9781003147329-9',
    url: 'https://doi.org/10.4324/9781003147329-9',
  },
  {
    id: 'bezci-2020-ankara-rabbit-warren',
    category: 'book-chapter',
    year: 2020,
    title: 'Ankara: Rabbit-Warren of Spies',
    authors: ['Egemen Bezci'],
    containerTitle:
      'Neutral Countries as Clandestine Battlegrounds, 1939–1968: Between Two Fires',
    publisher: 'Lexington Books',
    pages: '193–208',
    doi: '10.5040/9781978724624.ch-009',
    url: 'https://doi.org/10.5040/9781978724624.ch-009',
  },
  {
    id: 'bezci-2019-turkish-diplomatic-security',
    category: 'book-chapter',
    year: 2019,
    title: 'Turkish Diplomatic Security: Lessons Not Learned',
    authors: ['Egemen B. Bezci'],
    containerTitle: 'Diplomatic Security: A Comparative Analysis',
    publisher: 'Stanford University Press',
    pages: '164–179',
    doi: '10.1515/9781503608986-010',
    url: 'https://doi.org/10.1515/9781503608986-010',
  },
  // ---------------------------------------------------------------
  // Research articles
  // ---------------------------------------------------------------
  {
    id: 'bezci-2023-seeking-shelter-anthropocene',
    category: 'journal-article',
    year: 2023,
    title:
      'Seeking Shelter in the Anthropocene: Challenges and Opportunities for Taiwan',
    authors: ['Egemen Bezci'],
    venue: 'The Pacific Review',
    volume: '36',
    issue: '1',
    pages: '177–202',
    doi: '10.1080/09512748.2021.1948912',
    url: 'https://doi.org/10.1080/09512748.2021.1948912',
  },
  {
    id: 'kadioglu-bezci-2020-small-state-intelligence',
    category: 'journal-article',
    year: 2020,
    title: 'Small State Intelligence: New Zealand in SEATO Security Affairs',
    authors: ['İ. Aytaç Kadıoğlu', 'Egemen B. Bezci'],
    venue: 'Pacific Focus',
    volume: '35',
    issue: '1',
    pages: '5–28',
    doi: '10.1111/pafo.12152',
    url: 'https://doi.org/10.1111/pafo.12152',
  },
  {
    id: 'kadioglu-bezci-2020-intra-alliance-intelligence',
    category: 'journal-article',
    year: 2020,
    title:
      'The Mystery of Intra-Alliance Intelligence: Turkey’s Covert Operations in the Cyprus Conflict',
    authors: ['İ. Aytaç Kadıoğlu', 'Egemen Bezci'],
    venue: 'Middle Eastern Studies',
    volume: '56',
    issue: '4',
    pages: '638–652',
    doi: '10.1080/00263206.2020.1737524',
    url: 'https://doi.org/10.1080/00263206.2020.1737524',
  },
  {
    id: 'bezci-2019-ai-sustainable-agriculture',
    category: 'journal-article',
    year: 2019,
    title:
      'Use of Artificial Intelligence in Sustainable Agriculture: A Preliminary Analysis',
    authors: ['Egemen Bezci'],
    venue: 'Journal of AI Humanities',
    volume: '4',
    pages: '51–79',
    doi: '10.46397/JAIH.4.3',
    url: 'https://doi.org/10.46397/JAIH.4.3',
  },
  {
    id: 'bezci-2019-secrecy-international-history',
    category: 'journal-article',
    year: 2019,
    title:
      'Secrecy and the Study of International History: Missing Dimension in Turkish Foreign Policy',
    authors: ['Egemen Bezci'],
    venue: 'All Azimuth: A Journal of Foreign Policy and Peace',
    volume: '8',
    issue: '2',
    pages: '327–338',
    doi: '10.20991/allazimuth.477317',
    url: 'https://doi.org/10.20991/allazimuth.477317',
    openAccessUrl: 'https://dergipark.org.tr/en/pub/allazimuth/article/477317',
  },
  {
    id: 'bezci-oztan-2016-turkish-emergency-state',
    category: 'journal-article',
    year: 2016,
    title:
      'Anatomy of the Turkish Emergency State: A Continuous Reflection of Turkish Raison d’état between 1980 and 2002',
    authors: ['Egemen B. Bezci', 'Güven Gürkan Öztan'],
    venue: 'Middle East Critique',
    volume: '25',
    issue: '2',
    pages: '163–179',
    doi: '10.1080/19436149.2016.1148858',
    url: 'https://doi.org/10.1080/19436149.2016.1148858',
  },
  {
    id: 'bezci-2016-intelligence-diplomacy-ww2',
    category: 'journal-article',
    year: 2016,
    title: 'Turkey’s Intelligence Diplomacy during the Second World War',
    authors: ['Egemen Bezci'],
    venue: 'Journal of Intelligence History',
    volume: '15',
    issue: '2',
    pages: '80–95',
    doi: '10.1080/16161262.2016.1165534',
    url: 'https://doi.org/10.1080/16161262.2016.1165534',
  },
  {
    id: 'hashimoto-bezci-2016-kurds-no-friends',
    category: 'journal-article',
    year: 2016,
    title:
      'Do the Kurds Have ‘No Friends but the Mountains’? Turkey’s Secret War against Communists, Soviets and the Kurds',
    authors: ['Chikara Hashimoto', 'Egemen B. Bezci'],
    venue: 'Middle Eastern Studies',
    volume: '52',
    issue: '4',
    pages: '640–655',
    doi: '10.1080/00263206.2016.1175344',
    url: 'https://doi.org/10.1080/00263206.2016.1175344',
  },
  {
    id: 'oztan-bezci-2015-turkiyede-olaganustu-hal',
    category: 'journal-article',
    year: 2015,
    title: 'Türkiye’de Olağanüstü Hal: Devlet Aklı, Askerler ve Siviller',
    authors: ['Güven Gürkan Öztan', 'Egemen B. Bezci'],
    venue: 'Mülkiye Dergisi',
    volume: '39',
    issue: '1',
    pages: '159–186',
    language: 'Turkish',
    url: 'https://dergipark.org.tr/tr/pub/mulkiye/article/1251',
  },
  {
    id: 'warhola-bezci-2013-return-of-putin',
    category: 'journal-article',
    year: 2013,
    title:
      'The Return of President Putin and Russian–Turkish Relations: Where Are They Headed?',
    authors: ['James W. Warhola', 'Egemen B. Bezci'],
    venue: 'SAGE Open',
    volume: '3',
    issue: '3',
    doi: '10.1177/2158244013503165',
    url: 'https://doi.org/10.1177/2158244013503165',
  },
  {
    id: 'warhola-bezci-2013-war-and-peace-caucasus',
    category: 'journal-article',
    year: 2013,
    title:
      'War and Peace: Russia, Turkey, and the Domestic Dimension of Conflict Perpetuation, Cessation, and Resolution in the Caucasus',
    authors: ['James W. Warhola', 'Egemen B. Bezci'],
    venue: 'Avrasya İncelemeleri Dergisi',
    volume: '2',
    issue: '1',
    pages: '1–37',
    url: 'https://dergipark.org.tr/tr/pub/iuavid/article/251386',
  },
  {
    id: 'warhola-bezci-2010-religion-state-turkey',
    category: 'journal-article',
    year: 2010,
    title:
      'Religion and State in Contemporary Turkey: Recent Developments in Laiklik',
    authors: ['James W. Warhola', 'Egemen B. Bezci'],
    venue: 'Journal of Church and State',
    volume: '52',
    issue: '3',
    pages: '427–453',
    doi: '10.1093/jcs/csq052',
    url: 'https://doi.org/10.1093/jcs/csq052',
  },
  // ---------------------------------------------------------------
  // Editorial and review essays
  // ---------------------------------------------------------------
  {
    id: 'bezci-2022-hacker-and-the-state-review',
    category: 'review-essay',
    year: 2022,
    title:
      'The Hacker and the State: Cyber Attacks and the New Normal of Geopolitics',
    authors: ['Egemen Bezci'],
    note: 'Book review',
    venue: 'Intelligence and National Security',
    volume: '37',
    issue: '5',
    pages: '743–745',
    doi: '10.1080/02684527.2021.1911393',
    url: 'https://doi.org/10.1080/02684527.2021.1911393',
  },
  {
    id: 'bezci-2018-guest-editors-introduction-kurds',
    category: 'editorial',
    year: 2018,
    title: 'Guest Editor’s Introduction: Trajectory for Kurds',
    authors: ['Egemen B. Bezci'],
    note: 'Editorial introduction',
    venue: 'Middle East Critique',
    volume: '27',
    issue: '1',
    pages: '1–6',
    doi: '10.1080/19436149.2017.1411108',
    url: 'https://doi.org/10.1080/19436149.2017.1411108',
  },
  {
    id: 'bezci-2016-review-risso-propaganda-intelligence',
    category: 'review-essay',
    year: 2016,
    title:
      'Book Review: Linda Risso, Propaganda and Intelligence in the Cold War: The NATO Information Service',
    authors: ['Egemen B. Bezci'],
    venue: 'Political Studies Review',
    volume: '14',
    issue: '3',
    pages: '438–439',
    doi: '10.1177/1478929916653517',
    url: 'https://doi.org/10.1177/1478929916653517',
  },
  {
    id: 'bezci-2016-review-smersh',
    category: 'review-essay',
    year: 2016,
    title: 'Book Review: SMERSH: Stalin’s Secret Weapon',
    authors: ['Egemen B. Bezci'],
    venue: 'Political Studies Review',
    volume: '14',
    issue: '1',
    pages: '121–122',
    doi: '10.1177/1478929915609472c',
    url: 'https://doi.org/10.1177/1478929915609472c',
  },
  {
    id: 'bezci-2014-militarist-state-discourse-review',
    category: 'review-essay',
    year: 2014,
    title: 'Militarist State Discourse in Turkey, 1960–1983',
    authors: ['Egemen B. Bezci'],
    note: 'Book review',
    venue: 'Politics, Religion & Ideology',
    volume: '15',
    issue: '4',
    pages: '625–626',
    doi: '10.1080/21567689.2014.889379',
    url: 'https://doi.org/10.1080/21567689.2014.889379',
  },
  // ---------------------------------------------------------------
  // Doctoral thesis
  // ---------------------------------------------------------------
  {
    id: 'bezci-2017-phd-thesis',
    category: 'thesis',
    year: 2017,
    title: 'Turkey and Western Intelligence Cooperation, 1945–1960',
    authors: ['Egemen B. Bezci'],
    note: 'PhD thesis',
    institution: 'University of Nottingham',
    url: 'https://eprints.nottingham.ac.uk/id/eprint/44828',
  },
  // ---------------------------------------------------------------
  // Policy and public writing
  // ---------------------------------------------------------------
  {
    id: 'bezci-2019-what-next-kurds-syria',
    category: 'policy-writing',
    year: 2019,
    title: 'What Next for the Kurds in Syria?',
    authors: ['Egemen Bezci'],
    venue: 'The Big Q / Public Interest Media',
    publicationDate: '2019-01-22',
    url: 'https://www.thebigq.org/2019/01/22/what-next-for-the-kurds-in-syria/',
  },
  {
    id: 'causevic-bezci-borroz-2018-trump-climate',
    category: 'policy-writing',
    year: 2018,
    title: 'Trump’s Disregard for Climate Change Is Only Natural',
    authors: ['Amar Causevic', 'Egemen Bezci', 'Nicholas Borroz'],
    venue: 'Bulletin of the Atomic Scientists',
    publicationDate: '2018-03-28',
    url: 'https://thebulletin.org/2018/03/trumps-disregard-for-climate-change-is-only-natural/',
  },
  {
    id: 'bezci-borroz-2018-ardern-post-brexit',
    category: 'policy-writing',
    year: 2018,
    title:
      'The Challenge Jacinda Ardern Faces in Dealing with a Post-Brexit Britain',
    authors: ['Egemen Bezci', 'Nicholas Borroz'],
    venue: 'Noted',
    // Original noted.co.nz URL no longer resolves (verified 2026-08); the
    // record is kept as a citation without a link.
    linkStatus: 'legacy',
  },
  {
    id: 'bezci-borroz-2016-cia-turkish-coup',
    category: 'policy-writing',
    year: 2016,
    title: 'The CIA and a Turkish Coup',
    authors: ['Egemen Bezci', 'Nicholas Borroz'],
    venue: 'War on the Rocks',
    publicationDate: '2016-09-16',
    url: 'https://warontherocks.com/the-cia-and-a-turkish-coup/',
  },
  {
    id: 'bezci-borroz-2016-isis-kurdish-nation',
    category: 'policy-writing',
    year: 2016,
    title: 'ISIS Helps Forge the Kurdish Nation',
    authors: ['Egemen Bezci', 'Nicholas Borroz'],
    venue: 'The National Interest',
    publicationDate: '2016-02-05',
    url: 'https://nationalinterest.org/feature/isis-helps-forge-the-kurdish-nation-15116',
  },
  {
    id: 'bezci-2016-ankara-hidden-hand',
    category: 'policy-writing',
    year: 2016,
    title: 'Ankara’s Hidden Hand: Turkish Covert Ops Then and Now',
    authors: ['Egemen Bezci'],
    venue: 'War on the Rocks',
    publicationDate: '2016-01-01',
    url: 'https://warontherocks.com/ankaras-hidden-hand-turkish-covert-ops-then-and-now/',
  },
  {
    id: 'bezci-borroz-2015-turkey-pkk-conflict',
    category: 'policy-writing',
    year: 2015,
    title:
      'The Renewed Turkey–PKK Conflict Has Shattered the Illusion That Kurds Can Participate Legitimately in Turkey’s Political System',
    authors: ['Egemen Bezci', 'Nicholas Borroz'],
    venue: 'LSE European Politics and Policy',
    publicationDate: '2015-09-22',
    url: 'https://blogs.lse.ac.uk/europpblog/2015/09/22/the-renewed-turkey-pkk-conflict-has-shattered-the-illusion-that-kurds-can-participate-legitimately-in-turkeys-political-system/',
  },
  {
    id: 'bezci-yanarocak-2014-backgammon-chess',
    category: 'policy-writing',
    year: 2014,
    title: 'Playing Backgammon on a Chess Board',
    authors: ['Egemen B. Bezci', 'Hay Eytan Cohen Yanarocak'],
    venue: 'Hürriyet Daily News',
    url: 'https://www.hurriyetdailynews.com/playing-backgammon-on-a-chess-board-67837',
  },
  {
    id: 'warhola-bezci-2011-wolf-bear-eagle',
    category: 'policy-writing',
    year: 2011,
    title: 'The Wolf, the Bear, and the Eagle: Peace in the Valley?',
    authors: ['James W. Warhola', 'Egemen B. Bezci'],
    venue: 'E-International Relations',
    publicationDate: '2011-03-10',
    url: 'https://www.e-ir.info/2011/03/10/the-wolf-the-bear-and-the-eagle-peace-in-the-valley/',
  },
] satisfies Publication[];

/** Stable reverse-chronological sort; supplied order kept within a year. */
const byCategory = (category: PublicationCategory): Publication[] =>
  publications
    .filter((entry) => entry.category === category)
    .sort((a, b) => b.year - a.year);

export const book = byCategory('book');
export const chapters = byCategory('book-chapter');
export const articles = byCategory('journal-article');
export const editorialEssays = [
  ...byCategory('editorial'),
  ...byCategory('review-essay'),
].sort((a, b) => b.year - a.year);
export const theses = byCategory('thesis');
export const policyWriting = byCategory('policy-writing');

// ---------------------------------------------------------------
// Translated edition of the featured book
// ---------------------------------------------------------------
export const translatedEditions: BookEdition[] = [
  {
    title:
      'Türk İstihbaratı ve Soğuk Savaş: ABD ve İngiltere Arasında Türk Gizli Servisi',
    year: 2023,
    publisher: 'Kronik Kitap',
    language: 'Turkish',
    isbn: '978-625-6989-22-1',
    url: 'https://kronikkitap.com/kitap/turk-istihbarati-ve-soguk-savas/',
  },
];

// ---------------------------------------------------------------
// Reviews and reception of the featured book
// ---------------------------------------------------------------
export const formalReviews: BookReview[] = [
  {
    reviewer: 'Hayden Peake',
    title: 'Intelligence Officer’s Bookshelf—March 2020',
    year: 2020,
    outlet: 'Studies in Intelligence',
    volume: '64',
    issue: '1',
    date: '2020-03',
    note: 'Published by the CIA’s Center for the Study of Intelligence.',
    url: 'https://www.cia.gov/resources/csi/studies-in-intelligence/volume-64-no-1/intelligence-officers-bookshelf-march-2020/',
    classification: 'professional',
  },
  {
    reviewer: 'Şevki Kıralp',
    year: 2021,
    outlet: 'Middle Eastern Studies',
    volume: '57',
    issue: '4',
    pages: '684–686',
    doi: '10.1080/00263206.2021.1891045',
    url: 'https://doi.org/10.1080/00263206.2021.1891045',
    classification: 'scholarly',
  },
  {
    reviewer: 'Thomas Riegler',
    year: 2021,
    outlet: 'sehepunkte',
    volume: '21',
    issue: '9',
    date: '2021-09-15',
    url: 'https://www.sehepunkte.de/2021/09/35779.html',
    classification: 'scholarly',
  },
  {
    reviewer: 'Stéphane Lefebvre',
    year: 2022,
    outlet: 'Intelligence and National Security',
    volume: '37',
    issue: '7',
    pages: '1086–1087',
    doi: '10.1080/02684527.2021.1964261',
    url: 'https://doi.org/10.1080/02684527.2021.1964261',
    classification: 'scholarly',
  },
  {
    reviewer: 'Margaux Sciandra',
    year: 2023,
    outlet: 'Études françaises de renseignement et de cyber',
    volume: '2023/1',
    issue: '1',
    pages: '263–268',
    doi: '10.3917/efrc.231.0263',
    url: 'https://doi.org/10.3917/efrc.231.0263',
    classification: 'scholarly',
  },
];

export const publicReviews: PublicReview[] = [
  {
    reviewer: 'Luke Frostick',
    title: 'Turkish intelligence and the Cold War',
    outlet: 'Duvar English',
    date: '2019-12-14',
    url: 'https://www.duvarenglish.com/books/2019/12/14/turkish-intelligence-and-the-cold-war',
  },
  {
    reviewer: 'Usman Butt',
    title:
      'Strange bedfellows: How Turkish intelligence influenced the Western alliance during the Cold War',
    outlet: 'The New Arab',
    date: '2021-05-27',
    url: 'https://www.newarab.com/features/turkish-intelligence-and-cold-war',
  },
];

export const authorInterviews: AuthorInterview[] = [
  {
    title: 'Interview: Turkish Intelligence and the Cold War — Egemen Bezci',
    outlet: 'The Bosphorus Review of Books',
    url: 'https://bosphorusreview.com/interview-turkish-intelligence-and-the-cold-war-egemen-bezci',
  },
];

// ---------------------------------------------------------------
// External scholarly profiles
// ---------------------------------------------------------------
export const researchProfiles: ResearchProfile[] = [
  { label: 'ORCID', url: 'https://orcid.org/0000-0002-1089-5907' },
  {
    label: 'Google Scholar',
    url: 'https://scholar.google.com/citations?hl=en&user=uzocfvYAAAAJ',
  },
];
