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
  {
    slug: 'building-dependable-robot-systems',
    title: 'Building Dependable Robot Systems',
    description:
      'Innovating a basic mobile robot platform into a robust, mission-ready system for a competition, from mechanics to Python software.',
    tech: ['Mobile Robots', 'Python', 'C++', 'Arduino', 'Project Planning'],
    github: null,
    demo: null,
    image: null,
    longDescription: [
      'Starting from a basic mobile robot platform with limited functionality, this project is about turning it into a dependable, competition-ready system under real resource constraints — the kind of technical problem analysis and consequence assessment that matters once a robot has to work reliably outside a lab.',
      'The base software is C++ (partly Arduino), extended with Python, while the mechanical design was rebuilt where needed to hold up under demanding missions. Working in a group meant real project planning and control, on top of the engineering itself.',
    ],
    learnings: [
      'Formulate technical problem analysis, consequence assessment and solution results.',
      'Analyse a challenge and design innovative solutions with limited resources.',
      'Use project planning and project control for a team.',
      'Relate characteristics of robot platform types to practical use.',
      'Relate characteristics of sensors and actuators to use in mobile robots.',
      'Use and programme mobile robots for demanding missions.',
      'Build robust solutions for risky challenges.',
      'Employ a reflective fault-finding method.',
    ],
    sections: [
      {
        heading: 'What the project covers',
        items: [
          'Group work solving practical, hands-on issues',
          'Innovating a base mobile robot platform for a final competition',
          'Software development in Python, extending a C++/Arduino base',
          'Mechanical design work to improve competition performance',
          'Installing tooling, calibration and fault diagnosis exercises',
        ],
      },
    ],
    gallery: [],
    video: null,
    links: [],
  },
  {
    slug: 'autonomous-marine-robotics',
    title: 'Autonomous Marine Robotics',
    description:
      'Modelling, planning and controlling autonomous surface and underwater vehicles for ocean observation missions.',
    tech: ['Marine Robotics', 'Path Planning', 'PID Control', 'Sensor Fusion', 'Mission Planning'],
    github: null,
    demo: null,
    image: null,
    longDescription: [
      'This project covers the building blocks of an autonomous marine system end to end: dynamical models for surface and underwater vehicles, 2D/3D path planning, and the control loops that turn a plan into motion.',
      'It also covers situational awareness — the sensing technologies used for navigation and perception in the marine environment, and how multimodal sensor fusion combines them — plus operating real mission planners to set up and examine missions before integrating everything into a working solution and testing it in the field.',
    ],
    learnings: [
      'Explain what an autonomous marine system is and describe its building blocks and functions.',
      'Interpret mathematical models for marine vehicles, for both surface and underwater applications.',
      'Formulate a path-planning problem in 2D and 3D, and code state-of-the-art path-planning algorithms.',
      'Illustrate control functionalities for surface and underwater operations, and tune basic control loops.',
      'Describe sensing technologies for situational awareness and the principles of multimodal sensor fusion.',
      'Operate state-of-the-art mission planners and set up and examine a designed mission.',
      'Architect autonomous marine systems for a given ocean observation problem.',
      'Integrate the building blocks into a working solution and run experimental campaigns to verify it.',
      'Present complex development solutions for autonomous marine systems to a qualified audience.',
    ],
    sections: [
      {
        heading: 'What the project covers',
        items: [
          'Dynamical models for surface and underwater vehicles',
          'Path planning methods',
          'Tuning of PID controllers for marine operations',
          'Sensor technologies for navigation and perception of the marine environment',
          'Situational awareness and mission planning',
          'Experimental marine robotics',
        ],
      },
    ],
    gallery: [],
    video: null,
    links: [],
  },
  {
    slug: 'perception-for-autonomous-systems',
    title: 'Perception for Autonomous Systems',
    description:
      'From multi-view 3D reconstruction to visual odometry and SLAM — building the perception stack that lets autonomous systems sense the world.',
    tech: ['Computer Vision', '3D Reconstruction', 'SLAM', 'Visual Odometry', 'State Estimation'],
    github: null,
    demo: null,
    image: null,
    longDescription: [
      'This project builds up the perception stack of an autonomous system layer by layer: 3D reconstruction from multiple views, image feature extraction and matching, and the various ranging sensors and techniques used to measure the world.',
      'It combines classical and learning-based approaches for scene understanding — processing 3D point clouds, estimating object pose, fusing visual and 3D sensory input with state estimation, and finally visual odometry and SLAM. The exercises moved from guided introductions into a team project proposing a real perception application.',
    ],
    learnings: [
      'Describe the steps that lead to 3D reconstruction using multiple views.',
      'Define commonly used image feature extraction and matching techniques.',
      'Discuss the characteristics of various ranging sensors and techniques.',
      'Apply software tools to process 3D point clouds.',
      'Combine visual and 3D sensory input with state estimation techniques.',
      'Describe the differences between classical and learning-based classification techniques.',
      'Describe the steps in visual odometry and explain the related algorithms.',
      'Combine the material to propose and describe further perception applications.',
    ],
    sections: [
      {
        heading: 'What the project covers',
        items: [
          'Multiple view geometry',
          'Image feature detection and description',
          'Ranging and 3D point cloud processing',
          'Object pose estimation and state estimation',
          'Classification, visual odometry and SLAM',
          'Object detection',
          'A team project proposing a new perception application',
        ],
      },
    ],
    gallery: [],
    video: null,
    links: [],
  },
]
