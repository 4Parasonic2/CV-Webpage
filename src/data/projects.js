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
      'A rescue robot that navigates hazardous ground from a bird\u2019s-eye view, steered by a controller modelled on the cerebellum: a trained network for general navigation plus a second one that keeps learning while the robot drives.',
    tech: ['Bio-inspired Control', 'CMAC', 'Neural Networks', 'Mobile Robots', 'Imitation Learning'],
    github: null,
    demo: null,
    image: null,
    longDescription: [
      'Natural disasters and industrial accidents create places that are simply too dangerous for people to walk into, and rescue missions get slowed down by unstable terrain, toxic exposure and obstacles. A ground robot can go in instead, but only if it knows what is around it and from down at ground level, it usually does not. A drone overhead can supply exactly that missing perspective. We called the system UADIN, for "Using Aerial Drone Imagery to Navigate", a nod to Odin and the ravens he sent out to see the world for him.',
      'Autonomous rescue vehicles already exist, from semi-autonomous to fully autonomous. What our four-person team wanted to find out was whether the aerial view lets the robot plan better and therefore reach people faster, and whether a modular, two-part controller borrowed from biology could navigate well enough to be worth using.',
      'The control system is a simplified model of the cerebellum, split into two cooperating halves. A general navigation module, a multilayer perceptron, looks at the angle and distance to the target and decides the wheel speeds. A correction module, a CMAC, keeps learning from the environment while the robot drives and makes the fine adjustments the first network cannot anticipate. The robot itself is a differential wheeled platform, watched from above by a top-down camera that sees the whole workspace.',
      'Getting there took four stages. First an expert controller built from simple trigonometry drove the robot while we logged thousands of pairs of what it saw and what it did. Then the network was trained offline to imitate that expert. Next the trained network took over the driving while the CMAC watched from the side, learning where the policy and the real machine disagreed. In the finished system both run in parallel, and the robot\u2019s actual command is the general instruction plus the real-time correction on top of it.',
      'In ideal conditions the network alone drove perfectly well, and adding the CMAC bought only a marginal improvement. The difference showed up the moment things went wrong: with the motors simulated as decaying to 80% loss, the network on its own could not hold stability, while the pair adapted, reduced the error and recovered stable control. In other words, the adaptive half earns its place precisely under the non-ideal conditions a real rescue site would throw at it.',
      'It is a proof of concept rather than a finished vehicle, and worth being clear about why. Everything ran in a controlled setting, and the fixed overhead camera was standing in for a real drone, which introduced perspective distortion that a live aerial feed would not have. Motor decay was also the only disturbance we tested wheel slippage, sensor noise and unexpected payload changes are all still open questions. The obvious next step is taking it somewhere unstructured and messy.',
    ],
    learnings: [
      'How splitting a controller in two works in practice: a static policy for general behaviour, an adaptive one for the errors it cannot foresee.',
      'Imitation learning from a hand-written expert controller is a quick way to bootstrap a usable policy.',
      'A trained network is only as good as the conditions it was trained in  adaptation is what actually buys robustness.',
      'Online learning can absorb serious hardware degradation, recovering control after simulated 80% motor decay.',
      'Judging controllers honestly by comparing error across disturbance conditions instead of one good demo run.',
      'Splitting a research project across a four-person team and presenting the results.',
    ],
    sections: [
      {
        heading: 'How the controller works',
        items: [
          'Expert controller built from trigonometry, used to generate training data',
          'MLP trained offline to imitate the expert',
          'CMAC learning online to correct the gap between policy and real robot',
          'Final command = general MLP action + real-time CMAC correction',
          'Reference is the optimal heading and distance to the target',
        ],
      },
      {
        heading: 'The setup',
        items: [
          'Differential wheeled robot',
          'Top-down camera standing in for live drone imagery',
          'Angle and distance to target as the robot\u2019s view of the world',
          'Simulated motor decay as the disturbance under test',
        ],
      },
      {
        heading: 'The biology behind it',
        items: [
          'The motor hierarchy behind voluntary movement',
          'How the cerebellum coordinates and corrects motion',
          'Biological and artificial models of neurons',
          'Cerebellar control models applied to robots',
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
      'Making a quadrotor fly itself, from MATLAB and Simulink simulation to real flight tests in the lab: A* maze planning, position and attitude controllers written from scratch, minimum-snap trajectories and a geometric non-linear controller.',
    tech: ['MATLAB', 'Simulink', 'UAV', 'Control Theory', 'Path Planning', 'OptiTrack'],
    github: null,
    demo: null,
    image: null,
    longDescription: [
      'As a team of five we built autonomous flight capabilities for a quadrotor in MATLAB and Simulink, then took them into the lab and flew them for real, with an OptiTrack motion capture system tracking the drone. The course walked us through a long series of exercises, but the part that mattered was the end of it, where everything we had written in simulation had to work on a machine that can actually crash.',
      'The first job was knowing where to go. We implemented A* search over a 2D occupancy grid to find the shortest path through a maze, moving only in cardinal directions, and then extended it into three dimensions so the drone could plan through a volumetric maze  which meant reworking how nodes are represented, how neighbours expand along the Z axis, and how the heuristic estimates distance in 3D. A good chunk of the effort went into unglamorous details like whether the map was indexed from zero or one and whether its X axis was flipped. A second script then strips the raw path down to just the points where it actually turns, plus the start and the end.',
      'Next we replaced the simulator\u2019s built-in position controller with our own. It is proportional control on x, y and z: the position error becomes a desired acceleration, which becomes desired roll and pitch angles through a small-angle approximation, with yaw held at zero. Testing it with 1 m, 3 m and 9 m steps showed the rise time growing with the size of the step while the overshoot stayed exactly the same size that is a saturation filter capping the force the controller is allowed to ask for. Limiting that is standard safety practice, because otherwise a large position error lets the controller demand more current than the motors and battery can survive. The overshoot itself is simply what a proportional-only controller does with nothing to damp it; velocity feedback in a full PID would clean it up.',
      'The attitude controller underneath it got the same treatment: independent PID loops on roll, pitch and yaw, each turning an angle error into a torque command, with those torques and the total thrust passed through the inverse of the mixer matrix to become individual motor commands. Step tests at 5, 15 and 30 degrees of pitch tracked well with little overshoot, settling more slowly at the larger angles because of actuator limits and coupling between the axes. We tuned the gains by hand, aiming for a critically damped response.',
      'Trajectory generation was the piece I took further on my own. The brief was to get from one corner of the maze to the other in five seconds, and instead of placing waypoints by hand I wrote scripts that take the map, the start and end points and a clearance value and produce the trajectory automatically. Around every point on the planned route the script measures the surrounding free space and fits a 3D box, shrunk by the clearance margin which can usefully be negative, since an obstacle only really occupies the centre of its grid cell. Long segments get extra boxes inserted along the way so the optimiser cannot cut a corner through a wall. Those boxes become loose constraints for a minimum-snap optimiser using a 13th-order polynomial, with only the start and end pinned down hard. What I did not finish was the time allocation: ideally each segment gets its own duration so the drone slows through tight turns and accelerates down straights, right up against its velocity, acceleration, jerk and snap limits, and without that the peak dynamics are not as good as they could be.',
      'Alongside the PID work we also implemented a non-linear geometric controller, following a paper on complex quadrotor maneuvers and running it against the non-linear model of the drone. The core of it is building the desired thrust vector, deriving the commanded rotation matrix from it re-orthogonalising with cross products so the axes stay perpendicular  and differentiating that matrix through a discrete derivative block at 40 ms to match the drone\u2019s own sampling rate. Moving between vectors and skew-symmetric matrices for the moment equation uses the hat and vee operators. We picked the gains by approximating the whole thing as a second-order mass-spring-damper system.',
      'Then came the real drone, and with it the reality gap: latency in the OptiTrack feed, noise in the sensor readings, and hardware that does not behave like the model. We mapped thrust commands onto PWM signals and validated the whole stack with flight tests, hovering stably and tracking positions. More than any single controller, that gap between a clean simulation and a physical machine is what the project actually taught us.',
    ],
    learnings: [
      'Where theory and hardware part ways: motion capture latency, sensor noise and actuator limits all change the answer.',
      'Why saturation limits belong on a thrust controller, and how they shape the step response.',
      'What a proportional-only controller costs you, and where velocity feedback in a PID earns its place.',
      'Planning with A* on 2D and 3D grids, then reducing a raw path to only the turns that matter.',
      'Turning a planned route into a smooth minimum-snap trajectory using spatial corridors as constraints.',
      'Implementing a geometric non-linear controller from a research paper in Simulink.',
      'Reporting engineering work honestly, including the time optimisation I did not get finished.',
    ],
    sections: [
      {
        heading: 'From simulation to flight',
        items: [
          'A* path planning in 2D, extended to a 3D maze',
          'Route simplification down to the turning points',
          'Own position controller (P) and attitude controller (PID)',
          'Minimum-snap trajectories with dynamically generated corridors',
          'Geometric non-linear controller from the literature',
          'Thrust-to-PWM mapping, hover and position-tracking flight tests',
        ],
      },
      {
        heading: 'Tools and hardware',
        items: [
          'MATLAB and Simulink for modelling, control and simulation',
          'OptiTrack motion capture for position feedback in the lab',
          'A quadrotor UAV flown in the lab',
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
      'Turning a bare Robobot platform into a machine that could run the DTU RoboCup course on its own. My part was making it reliably count the line junctions that decide where it goes next.',
    tech: ['Mobile Robots', 'Python', 'C++', 'Raspberry Pi', 'Sensor Calibration'],
    github: null,
    demo: null,
    image: null,
    longDescription: [
      'The brief was to take a basic mobile robot platform with limited functionality and turn it into something dependable enough to compete, under real time and resource constraints. The target was DTU RoboCup, an annual autonomous robot competition that ran at DTU from 1997 until 2025, where self-driving robots take on a course in the university library and score points for each obstacle they manage to clear.',
      'The course is built around a tape line on the floor. Leaving the start plate begins a countdown on the guillotine gate, which you have to reach in time to get through, and beyond it are ramps, a staircase, a tunnel, gates and doorways, a roundabout and a speed section timed between two light beams. Apart from the guillotine at the start and the goal at the end, the obstacles can be attempted in any order, so part of the engineering is deciding which challenges are worth going for at all.',
      'Our robot was a Robobot: a Raspberry Pi handling the high-level logic in Python, talking over MQTT to a Teensy microcontroller that runs the low-level firmware in C++, with line sensors, a camera server and a calibration routine underneath. We extended that base rather than replacing it, and reworked mechanical parts where the platform was not up to the missions we wanted to attempt.',
      'My own technical challenge was junction detection. The robot follows a line, and at every point where the line splits it has to know which branch to take, so we counted the junctions it had passed and used that count to decide the route. Everything depends on that count being right: a missed junction or a false positive sends the robot down the wrong branch, which in some parts of the course means driving off a platform. We did consider hardcoding the turns on a timer, which would have been quicker to build, but it was rigid and awkward to debug, so we accepted the extra work and stayed with counting.',
      'The implementation reads the edge.crossingCnt value coming from the front-facing line sensors, which measure how strongly a line is detected and spike consistently whenever the robot crosses a junction. I watched those spikes and tuned the thresholds by running the robot again and again until detection was dependable. That makes the whole thing sensitive to calibration  lighting and the state of the tape both shift the readings  so recalibrating before a run, especially in a new environment, is not optional.',
      'One incident is worth telling. On Easter Monday the robot short-circuited. The Raspberry Pi survived, so most of the code was recoverable, but some of it was gone, and the GitHub history is what got it back. It is the most convincing argument for version control I have run into, because the failure had nothing to do with software at all.',
      'At the competition we scored 8 points on both runs. The plan would have been worth 13, but the robot did not complete everything we had prepared for on the day. Alongside the junction work I helped maintain the codebase and produced both the video submitted to RoboCup and the final course assignment video. As a team we worked to the double diamond method with stand-up meetings every Friday, and agreed up front to build as much as we could while accepting that not all of it would land.',
      'The counting approach still has a weakness: markings that are not really junctions can fool it. The fix I would build next is a recovery action using the onboard gyroscope to tell whether the robot is climbing, descending or on level ground, which would rule out a lot of false detections  though calibrating that reliably is a project in itself.',
    ],
    learnings: [
      'Reading the environment beats hardcoded timing when conditions can change, even though it is more work to get right.',
      'Anything that depends on sensor calibration has to be recalibrated whenever the lighting or the surface changes.',
      'Version control is a hardware safety net: after the short circuit, the git history is what saved the code.',
      'Tuning thresholds iteratively against real runs, and being honest that they need re-tuning as sensors drift.',
      'Planning a team project with the double diamond method and weekly stand-ups, scoped so partial delivery is acceptable.',
      'The distance between the points you plan to score and the points you actually score on competition day.',
    ],
    sections: [
      {
        heading: 'The competition',
        items: [
          'DTU RoboCup, run annually at DTU from 1997 to 2025',
          'Autonomous robots following a tape line through the library course',
          'Guillotine gate on a countdown from the start plate',
          'Ramps, staircase, tunnel, gates and a roundabout',
          'Speed section timed between two light beams',
          'Points per obstacle, in any order except the guillotine and the goal',
        ],
      },
      {
        heading: 'The Robobot platform',
        items: [
          'Raspberry Pi running the mission logic in Python',
          'Teensy microcontroller running the low-level C++ firmware',
          'MQTT between the two, plus a camera server',
          'Line sensors with a calibration routine',
          'Mechanical rework where the base platform fell short',
        ],
      },
      {
        heading: 'My contribution',
        items: [
          'Junction detection from the front line sensors',
          'Threshold tuning until detection was dependable',
          'Maintaining the shared codebase',
          'The RoboCup submission video and the final assignment video',
        ],
      },
    ],
    gallery: [],
    video: null,
    links: [
      { label: 'DTU RoboCup', url: 'https://robocup.dtu.dk/' },
      { label: 'Robobot platform wiki', url: 'https://rsewiki.electro.dtu.dk/index.php?title=Robobot_B' },
    ],
  },
  {
    slug: 'autonomous-marine-robotics',
    title: 'Autonomous Marine Robotics',
    description:
      'Working out how a marine robot actually moves by identifying its dynamics from real motion data, then testing how far visual odometry can be trusted to tell an underwater vehicle where it is.',
    tech: ['Marine Robotics', 'System Identification', 'Python', 'Visual Odometry', 'Sensor Fusion'],
    github: null,
    demo: null,
    image: null,
    longDescription: [
      'This project ran on real vehicles: an autonomous surface vessel and an underwater ROV. We went out and gathered the measurements ourselves, which is a very different experience from downloading a dataset. You get one session in the water, with the weather and the hardware you have on the day, and whatever you record is what you have to work with afterwards.',
      'The first half was system identification. You cannot control a marine robot well without knowing how it responds to its own thrusters, so the goal was to derive a dynamic model of the vehicle from its own sensor data. We wrote Python to model all six degrees of freedom surge, sway, heave, roll, pitch and yaw and designed excitation maneuvers, deliberate movements chosen to stir up each degree of freedom enough that the recorded motion actually reveals the dynamics behind it.',
      'Extracting the hydrodynamics from that data means peeling away everything that is already understood. Thruster PWM commands are converted into forces and mapped into a single force and torque vector on the body, and then the rigid-body inertia, the Coriolis terms and the restoring forces from gravity and buoyancy are all subtracted out. What remains is the hydrodynamic contribution, which we fitted per degree of freedom as added mass plus linear and quadratic damping.',
      'That produced 18 hydrodynamic parameters, three for each degree of freedom, along with six static ones for the centre of gravity and the moments of inertia. The fit held up well: an average R\u00b2 of 0.982 and RMSE of 1.065 on the validation set, and 0.938 and 1.643 on independent test measurements. The most interesting finding was a caution rather than a result. Forcing all the damping coefficients to be positive, which is what physics says they should be, barely changed the quality of the fit but produced substantially different parameter values  a good reminder that matching the data closely does not prove your numbers are the real physical ones.',
      'The second half looked at localisation underwater, where GPS is not an option. We first evaluated visual odometry on its own, estimating position from the camera feed, and under good conditions it tracked reasonably well against the SBL acoustic positioning and the depth sensor. The catch is that it lives entirely on the quality of the features in the image: even brief dropouts, when the camera has nothing distinctive to look at, invalidate the estimate completely.',
      'The idea was to fuse other sensors to cover those gaps, since a rangefinder, IMU and compass do not go blind at the same moment a camera does. We used the robot_localization package for odometry and then tried our own EKF combining rangefinder data, IMU, the filtered odometry and compass heading. In practice it made things worse: the covariance on the linear acceleration was so high that the overall covariance exploded, and adding the IMU constraints made the estimate less stable rather than more, taking the depth estimation error from 1.65 to 4.04. We believe that is an implementation error on our side rather than a flaw in the approach, and being able to say clearly why a result went the wrong way turned out to be as valuable as the half that worked.',
    ],
    learnings: [
      'Designing excitation maneuvers so the recorded data actually contains the dynamics you are trying to identify.',
      'Separating hydrodynamic effects from rigid-body inertia, Coriolis and restoring forces before fitting anything.',
      'A strong R\u00b2 does not mean the parameters are physically meaningful  constraining damping barely moved the fit but changed the values.',
      'Visual odometry is only as good as the features in frame, and a short dropout is enough to ruin the estimate.',
      'Sensor fusion can cover those gaps in principle, but covariance tuning decides whether it helps or actively hurts.',
      'Planning and running a field measurement campaign, where there is only one chance to record what you need.',
    ],
    sections: [
      {
        heading: 'Identifying the dynamics',
        items: [
          'Excitation maneuvers designed to reveal each degree of freedom',
          'Thruster PWM converted to a body-frame force and torque vector',
          'Rigid-body inertia, Coriolis and restoring forces subtracted out',
          'Added mass with linear and quadratic damping fitted per degree of freedom',
          '18 hydrodynamic and 6 static parameters identified',
        ],
      },
      {
        heading: 'Localisation underwater',
        items: [
          'Visual odometry evaluated against SBL positioning and a depth sensor',
          'Odometry estimation with the robot_localization package',
          'Own EKF fusing rangefinder, IMU, odometry and compass heading',
          'Covariance blow-up traced to the linear acceleration term',
        ],
      },
      {
        heading: 'Also covered on the course',
        items: [
          '2D and 3D path planning, exploration and adaptive sampling',
          'Tuning speed, heading and diving autopilots',
          'Navigation sensors for surface and underwater vehicles',
          'Automated mission planners and mission optimisation',
          'Situational awareness: perception, understanding and anticipation',
        ],
      },
    ],
    gallery: [
      {
        src: 'projects/marine-surface-vessel.jpg',
        alt: 'Autonomous surface vessel on the water at the quay',
        caption: 'The autonomous surface vessel used on the course.',
      },
      {
        src: 'projects/marine-rov.jpg',
        alt: 'Underwater ROV submerged in a test tank',
        caption: 'The underwater ROV whose dynamics we identified from recorded motion data.',
      },
    ],
    video: null,
    links: [],
  },
  {
    slug: 'perception-for-autonomous-systems',
    title: 'Perception for Autonomous Systems',
    description:
      'From multi-view 3D reconstruction to visual odometry and SLAM  building the perception stack that lets autonomous systems sense the world.',
    tech: ['Computer Vision', '3D Reconstruction', 'SLAM', 'Visual Odometry', 'State Estimation'],
    github: null,
    demo: null,
    image: null,
    longDescription: [
      'This project builds up the perception stack of an autonomous system layer by layer: 3D reconstruction from multiple views, image feature extraction and matching, and the various ranging sensors and techniques used to measure the world.',
      'It combines classical and learning-based approaches for scene understanding processing 3D point clouds, estimating object pose, fusing visual and 3D sensory input with state estimation, and finally visual odometry and SLAM. The exercises moved from guided introductions into a team project proposing a real perception application.',
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
  {
    slug: 'bachelors-thesis',
    title: 'Bachelors Thesis',
    description:
      'Real-time speech recognition running entirely on an STM32 microcontroller: recording my own audio dataset, training a convolutional neural network, and shrinking it until the board could classify live sound at 81% accuracy.',
    tech: ['STM32', 'Embedded Machine Learning', 'CNNs', 'Signal Processing', 'Edge Impulse'],
    github: null,
    demo: null,
    image: null,
    longDescription: [
      'For my bachelor thesis I set out to recognise a specific spoken sound in live audio using nothing but a microcontroller. The board listens through its own microphone, and all the classification happens on the chip itself  no phone, no PC, no cloud service doing the hard part.',
      'That meant owning the whole chain. I recorded the source audio myself and prepared it in Audacity so it could be used for training, then built the classifier in Edge Impulse, a web tool for embedded machine learning that let me tune exactly which features the model used and how big it was allowed to get. The trained network went onto an STM32H7A3 Nucleo-144 board through STM32Cube.AI, and from there I could run it both on pre-recorded clips and continuously on real-time audio.',
      'The interesting problem turned out to be the sampling rate. My starting point was 16,384 Hz, but the number of features  and with it the model complexity and the memory it needs  grows with every sample you feed in, and evaluating that in real time was simply too much for the microcontroller. So I built lower-rate versions of the model at 2,048 Hz and 1,024 Hz, resampling the ADC signal by keeping every 8th and every 16th sample. That only works if you filter the signal digitally first, otherwise the discarded samples come back as distortion.',
      'Something worth knowing if you do this yourself: the models never behaved on hardware exactly the way Edge Impulse said they would. Sometimes the difference was small, sometimes it was drastic, so I evaluated every model on the board as well and documented where the two disagreed. Removing the DC offset gave the single biggest jump in accuracy  neural networks are very sensitive to it, and a model that has to learn around it burns capacity it does not have to spare. The analog and digital filtering on top of that helped to varying degrees.',
      'In the end the 1,024 Hz model reached 82% accuracy in Edge Impulse and 81% on the microcontroller itself with all the filtering in place. The 16,384 Hz model was the best performer on paper, but the board could not evaluate that many features and scored poorly in practice. The result came from sizing the model to the hardware rather than chasing the best number in the browser.',
    ],
    learnings: [
      'Accuracy in a training tool is not accuracy on the device  every model has to be validated on the target hardware.',
      'Sampling rate drives feature count, which drives memory and inference time; the smaller model beat the theoretically better one.',
      'Removing the DC offset matters enormously, because a network otherwise spends its capacity learning around it.',
      'Signals must be digitally filtered before decimation, or resampling introduces distortion.',
      'Recording, cleaning and structuring your own dataset is a real part of the engineering work.',
      'Deploying a trained network to an STM32 with Cube.AI, and driving it from a live ADC audio stream.',
    ],
    sections: [
      {
        heading: 'The pipeline on the board',
        items: [
          'Audio capture through the microcontroller ADC',
          'DC offset removal',
          'Analog and digital filtering',
          'Resampling down to 2,048 Hz or 1,024 Hz',
          'Feature extraction and CNN classification',
          'Continuous real-time inference',
        ],
      },
      {
        heading: 'Tools and hardware',
        items: [
          'STM32H7A3 Nucleo-144 development board',
          'Edge Impulse for model design and training',
          'STM32Cube.AI for deployment to the board',
          'Audacity for preparing the audio dataset',
        ],
      },
    ],
    
    video: null,
    links: [{ label: 'Edge Impulse', url: 'https://edgeimpulse.com' }],
  },
  {
    slug: 'x-tech-entrepreneurship',
    title: 'X Tech Entrepreneurship',
    description:
      'Created the company Mental.ai within DTUs space and ran it for 5 moths as CEO. Accurate diagnoses, faster treatments. A startup using Garmin biometric data to help psychiatrists diagnose faster and more accurately.',
    tech: ['Health Tech', 'Biometrics', 'Diagnostics', 'Startups', 'Business Model'],
    github: null,
    demo: null,
    image: null,
    longDescription: [
      'X Tech Entrepreneurship was a project to found a real company. Ours was Mental.ai: accurate diagnoses, faster treatments. We use quantitative biometric data to help psychiatrists make faster and more accurate diagnoses.',
      'Biometric signals show real potential for identifying mental health disorders, but they are not yet widely adopted in the market. Mental.ai was built to close that gap turning wearable data into something a clinician can actually use before making a diagnosis.',
      'Patient monitoring ran for two weeks. We collected eight health data points from patients using Garmin smart watches. That stream feeds a doctor\u2019s dashboard: before diagnosing, clinicians can inspect data anomalies and diagnostic suggestions from an interactive view of the same recordings.',
      'We were planning a clinical study with the University of Copenhagen (KU) and Frederiksberg Hospital, focused on bipolar and depressed patients, to test whether the same biometric markers could support psychiatric diagnosis in a hospital setting.',
    ],
    learnings: [
      'Turn a clinical problem into a company: Mental.ai, built around faster and more accurate psychiatric diagnoses.',
      'Collect wearable biometric data in a structured two-week monitoring protocol.',
      'Design a doctor-facing dashboard around anomalies and diagnostic suggestions, not raw sensor dumps.',
      'See why biometric mental-health tools have scientific promise but still little market adoption.',
      'Scope a hospital study with KU and Frederiksberg Hospital on bipolar and depressed patients.',
      'Pitch a health-tech venture so engineering work connects to clinical and commercial outcomes.',
    ],
    sections: [
      {
        heading: 'Patient monitoring',
        items: [
          'Two-week collection window',
          'Eight health data points per patient',
          'Garmin smart watches as the sensor platform',
        ],
      },
      {
        heading: 'Doctor\u2019s dashboard',
        items: [
          'Interactive view of the recorded biometric data',
          'Flagged data anomalies before a diagnosis is made',
          'Diagnostic suggestions for the psychiatrist',
        ],
      },
      {
        heading: 'Planned clinical study',
        items: [
          'Partnership planned with the University of Copenhagen (KU) and Frederiksberg Hospital',
          'Focus on bipolar and depressed patients',
          'Test whether biometric markers can support psychiatric diagnosis in a hospital setting',
        ],
      },
    ],
    gallery: [],
    video: null,
    links: [],
  },
]
