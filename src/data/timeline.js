/**
 * CAREER ROADMAP DATA
 * -------------------
 * Milestones for the timeline on the Roadmap page.
 * IMPORTANT: keep this list ordered NEWEST FIRST — the page renders
 * items top-to-bottom, and the design starts with the present at the
 * top and goes back in time as you scroll down.
 *
 * Fields:
 *   date    - when it happened (free text: a year, "Summer 2020", ...)
 *   title   - short headline for the milestone
 *   place   - company / school / context line
 *   details - 1-2 sentences describing the milestone
 */
/**
 * CAREER ROADMAP DATA — dual track (studies + jobs).
 *
 * Two separate arrays render as two vertical lines on the Roadmap
 * page: studies on the LEFT, jobs on the RIGHT. Each entry has a
 * start and end year. A missing `end` (or end: 'present') means the
 * entry is still ongoing — its line runs to the bottom of the page.
 * Entries whose `end` is set have their line stop at the end year,
 * which naturally visualises career gaps.
 *
 * Keep both arrays ordered NEWEST FIRST (largest start year first).
 */
export const studies = [
  {
    start: 2021,
    end: 2024,
    title: 'BSc Computer Science',
    place: 'University of Somewhere',
    details:
      'Focused on web technologies and human-computer interaction. Thesis on progressive web applications.',
  },
  {
    start: 2017,
    end: 2021,
    title: 'High school diploma',
    place: 'Somewhere High',
    details:
      'Wrote my first line of HTML for a school project — the spark that led to everything since.',
  },
]

export const jobs = [
  {
    start: 2024,
    end: 'present',
    title: 'Frontend Developer',
    place: 'Acme Web Studio',
    details:
      'Leading the UI work on client projects, building design systems, and mentoring junior developers.',
  },
  {
    start: 2022,
    end: 2024,
    title: 'Junior Web Developer',
    place: 'Startup Inc.',
    details:
      'First developer job. Learned professional workflows: code review, agile, testing, and shipping to production.',
  },
  {
    start: 2021,
    end: 2021,
    title: 'Summer internship',
    place: 'Local Agency',
    details:
      'A short summer fixing bugs and shipping small features — my first taste of real-world code.',
  },
]
