/**
 * PROJECTS DATA
 * -------------
 * Each project shows as a card on /projects and has its own detail
 * page at /projects/<slug>. To add a project, append an object below.
 *
 * Fields:
 *   slug            - URL-friendly id, used in /projects/:slug (must be unique)
 *   title           - project name (card + detail heading)
 *   description     - SHORT blurb shown on the card (1-2 sentences)
 *   tech            - tags shown as chips
 *   github, demo    - external links (both optional; omit or set null to hide)
 *   image           - cover image path (in /public) or null for a placeholder
 *   longDescription - array of paragraphs shown on the detail page
 *   learnings       - array of bullet points ("what I learned" / objectives)
 *   sections        - optional array of { heading, items:[...] } rendered as
 *                     titled bullet lists on the detail page (great for
 *                     course syllabi / structured content)
 *   gallery         - array of { src, alt, caption } images shown on detail
 *   video           - optional { src, title } (YouTube embed URL or mp4 in /public)
 *   links           - optional [{ label, url }] extra references
 */
export const projects = [
  {
    slug: 'bio-inspired-control-for-robots',
    title: 'Bio-inspired Control for Robots',
    description:
      'Designing biomimetic control loops for robots by borrowing principles from the brain, neurons and the cerebellum.',
    tech: ['Neural Networks', 'Control Theory', 'Robotics', 'Cerebellar Models'],
    github: null,
    demo: null,
    image: null,
    longDescription: [
      'This project explores how the organisation and function of the biological motor hierarchy can inspire the control systems we build for robots. It sits at the intersection of three fields: neural science, neural processing and control.',
      'Starting from mathematical models of how neurons process information, it works up to the role the cerebellum plays in coordinating voluntary movement — then applies that cerebellar control theory to real robotics tasks, designing and implementing bio-inspired control loops for specific case studies.',
    ],
    learnings: [
      'Relate the organisation and function of the motor hierarchy.',
      'Use a mathematical model and analyse information processing by neurons.',
      'Explain the role of the cerebellum in voluntary movements.',
      'Apply cerebellar control theory to the assessment of robotics tasks.',
      'Design and build simple neural networks.',
      'Determine the bio-inspired control loop to implement for a specific case study.',
      'Design and implement basic bio-inspired control loops for robots.',
      'Describe a research problem and promote ideas and technological solutions.',
    ],
    sections: [
      {
        heading: 'Neural science',
        items: [
          'Brain areas and their functions',
          'Motor hierarchy for voluntary movements',
          'Principles of neural networks',
          'Motor control',
        ],
      },
      {
        heading: 'Neural processing',
        items: [
          'Electrical signal transmission within and between neurons',
          'Neuronal biological and artificial models',
          'Neural network computing',
        ],
      },
      {
        heading: 'Control',
        items: [
          'Bio-inspired control principles',
          'Biomimetic control blocks for robots',
          'Cerebellar control models',
          'Bio-inspired robotic applications',
        ],
      },
    ],
    gallery: [],
    video: null,
    links: [],
  },
  {
    slug: 'unmanned-autonomous-systems',
    title: 'Unmanned Autonomous Systems',
    description:
      'Modelling, controlling and programming an unmanned aerial vehicle to plan and carry out an autonomous task end to end.',
    tech: ['Autonomous Systems', 'UAV', 'Navigation', 'Perception', 'Simulation'],
    github: null,
    demo: null,
    image: null,
    longDescription: [
      'This project covers the full stack of building an unmanned autonomous system: the mechatronic design of the vehicle, its mechanical modelling, and the control, perception, navigation and software that let it act on its own.',
      'It combines introductory theory with hands-on assignments, moving from lectures into simulation and finally real experimentation. The final task is solved on one of the AUT unmanned aerial vehicles — analysing the mission, planning the autonomous solution, and developing the software to make the drone complete it.',
    ],
    learnings: [
      'Explain the uses of autonomous systems.',
      'Explain the mechanics of autonomous systems.',
      'Model and control an autonomous system.',
      'Apply relevant theories to unmanned autonomous systems.',
      'Analyse a task and plan the autonomous solution using a given unmanned system.',
      'Program, integrate and develop software for an unmanned system to perform a task.',
      'Troubleshoot and solve practical problems in the laboratory.',
      'Work in a team to solve a complex task.',
    ],
    sections: [
      {
        heading: 'What the project covers',
        items: [
          'Mechatronic design of unmanned systems and their mechanical modelling',
          'Control, perception and navigation',
          'Software and simulation',
          'Experimentation with unmanned aerial vehicles',
          'A final mission solved on an AUT unmanned aerial vehicle',
        ],
      },
    ],
    gallery: [],
    video: null,
    links: [],
  },
]
