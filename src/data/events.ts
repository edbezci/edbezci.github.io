/**
 * Speaking and events.
 *
 * Each event distinguishes status (upcoming/recent) from role so that
 * attendance or round-table participation is never presented as a
 * presentation. `presentationTitle` remains undefined until a title
 * has been supplied; components must not invent one.
 */

export type EventStatus = 'upcoming' | 'recent';

export type EventRole =
  | 'conference-presenter'
  | 'speaker'
  | 'attending'
  | 'invited-talk'
  | 'conference-speaker'
  | 'invited-participant';

export interface SpeakingEvent {
  status: EventStatus;
  role: EventRole;
  dates: string;
  event: string;
  theme?: string;
  location?: string;
  url?: string;
  /** Subject of an invited talk or conference presentation. */
  topic?: string;
  /** Only set once an official title has been supplied. */
  presentationTitle?: string;
}

const statusLabels: Record<EventStatus, string> = {
  upcoming: 'Upcoming',
  recent: 'Recent',
};

const roleLabels: Record<EventRole, string> = {
  'conference-presenter': 'Conference presenter',
  speaker: 'Speaker',
  attending: 'Attending',
  'invited-talk': 'Invited talk',
  'conference-speaker': 'Conference speaker',
  'invited-participant': 'Invited participant',
};

/** e.g. 'Upcoming · Conference presenter' */
export const eventLabel = (event: SpeakingEvent): string =>
  `${statusLabels[event.status]} · ${roleLabels[event.role]}`;

export const events: SpeakingEvent[] = [
  {
    status: 'upcoming',
    role: 'conference-presenter',
    dates: '10–11 December 2026',
    event: 'ECPR 5th Conference on Organised Crime',
    theme: 'Mafia, Cartels and Crime Networks: Challenges to State and Society',
    location: 'University of Naples Federico II, Naples, Italy',
    url: 'https://ecpr.eu/Events/361',
    // No presentation title supplied yet; do not invent one.
    presentationTitle: undefined,
  },
  {
    status: 'recent',
    role: 'invited-talk',
    dates: '2025',
    event: 'German Federal Foreign Office',
    topic: 'Large language models and crisis early warning',
  },
  {
    status: 'recent',
    role: 'invited-participant',
    dates: '2025',
    event: 'Intelligence Studies Round Table Conference',
  },
  {
    status: 'recent',
    role: 'conference-speaker',
    dates: '2024',
    event: 'EuroSciPy',
    topic: 'Applied data science',
  },
];

export const upcomingEvents = events.filter(
  (event) => event.status === 'upcoming',
);
export const recentEvents = events.filter((event) => event.status === 'recent');
