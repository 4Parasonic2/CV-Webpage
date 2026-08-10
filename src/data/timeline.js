/**
 * CAREER TIMELINE DATA — dual track (studies + jobs).
 *
 * Shown in the "My Journey" timeline on the Home page: two colored
 * lines run down the middle, with STUDY bubbles on the LEFT and WORK
 * bubbles on the RIGHT, flowing down the page newest first.
 *
 * Fields per entry:
 *   start    - year it began (number)
 *   end      - year it ended (number), or 'present' if ongoing
 *   title    - degree name or job title
 *   place    - university / company name
 *   details  - description; as long as you like, the bubble grows with it
 *   children - (studies only, optional) shorter study trips that happened
 *              INSIDE this study — summer schools, exchange semesters,
 *              field campaigns. Rendered as small nested bubbles inside
 *              the parent bubble. Same fields (start, end, title, place,
 *              details), and `end` may be omitted for one-off trips.
 *
 * Order within the arrays doesn't matter — entries are sorted
 * newest-first automatically. All text below is SAMPLE text: replace
 * it with your real studies and jobs.
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
    start: 2021,
    end: 2024,
    title: 'BSc Mechatronics Engineering',
    place: 'University of Somewhere',
    details:
      'Foundations in mechanics, electronics, control theory and programming. Thesis project: a self-balancing mobile robot with sensor fusion for state estimation, built and tested on real hardware.',
    children: [
      {
        start: 2023,
        end: 2023,
        title: 'Erasmus exchange semester',
        place: 'University of Elsewhere',
        details:
          'One semester abroad focused on embedded systems and robot kinematics; joined the local robot-soccer team for the spring tournament.',
      },
    ],
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
    start: 2022,
    end: 2023,
    title: 'Engineering Intern',
    place: 'Startup Inc.',
    details:
      'Six-month internship on the perception team. Built data-collection and labelling pipelines for a camera-based inspection product, and implemented evaluation scripts that became part of the team\u2019s standard release checks.',
  },
  {
    start: 2021,
    end: 2022,
    title: 'Student Assistant, Robotics Lab',
    place: 'University of Somewhere',
    details:
      'Maintained the lab\u2019s fleet of mobile robot platforms, prepared exercise materials for undergraduate courses, and helped supervise student projects during lab hours.',
  },
]
