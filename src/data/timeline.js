/**
 * CAREER TIMELINE DATA — dual track (studies + jobs).
 *
 * Shown in the "Journey" timeline on the Home page: a grey time line
 * runs down the middle with a studies line on one side and a work line
 * on the other. Those coloured lines run side by side when study and
 * work overlap in time, and break wherever there is a gap in the dates.
 *
 * Fields per entry:
 *   start    - when it began: a year (2024) or a month ('2019-09')
 *   end      - when it ended, same formats, or 'present' if ongoing
 *   title    - degree name or job title
 *   place    - university / company name
 *   details  - short description; the bubble grows with it
 *   children - (studies only, optional) shorter study trips that happened
 *              INSIDE this study — summer schools, exchange semesters,
 *              field campaigns. Rendered as small nested bubbles inside
 *              the parent bubble. Same fields (start, end, title, place,
 *              details), and `end` may be omitted for one-off trips.
 *
 * Use the 'YYYY-MM' form wherever you know the month: it makes the gap
 * detection between entries accurate. A plain year counts as starting in
 * January and ending in December.
 *
 * Order within the arrays doesn't matter — entries are sorted
 * newest-first automatically.
 */
export const studies = [
  {
    start: 2024,
    end: 'present',
    title: 'Autonomous Systems MSc',
    place: 'Technical University of Denmark',
    details:
      'On my masters I had experience of control and path planning on robots on the ground, in the air and on water.',

    children: [
      {
        start: 2026,
        title: 'Exchange semester',
        place: 'Spain, Barcelona',
        details:
        'Exchange focused on learning about Human computer interaction, viability of business ideas Research and engineering ethics, and semantic data management',
      },
    ],
  },
  {
    start: '2019-09',
    end: '2023-02',
    title: 'BSc Computer Engineering',
    place: 'University of Szeged',
    details:
      'Computer engineering covering AI, machine learning and computer vision, plus microcontrollers, embedded systems and robotics.',
  },
]

export const jobs = [
  {
    start: 2024,
    end: 'present',
    title: 'RPA engineer',
    place: 'Totalenergies',
    details:
      'Part-time alongside the MSc. Developing and testing navigation software for autonomous mobile robots used in warehouse logistics: path planning, obstacle avoidance, and the tooling to diagnose failures in the field. Working in a small cross-functional team shipping to real customer sites.',
  },
  {
    start: '2023-03',
    end: '2024-07',
    title: 'Cyber Security Engineer',
    place: 'Bosch Magyarország',
    details:
      'Automotive cybersecurity testing in the lab, and PowerBI dashboards of the results structured around ASPICE and ISO 26262.',
  },
  {
    start: '2022-03',
    end: '2023-02',
    title: 'Software Engineer',
    place: 'TEConcept Hungary Kft.',
    details:
      'Part-time alongside the BSc. Embedded C/C++ firmware for factory communication protocols, with hardware assembly and lab validation.',
  },
]
