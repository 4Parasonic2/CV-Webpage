/**
 * PROJECTS DATA
 * -------------
 * Each object below becomes one card on the Projects page.
 * To add/remove/edit a project you only touch this file —
 * the page layout updates automatically.
 *
 * Fields:
 *   title       - project name
 *   description - 1-3 sentences about what it does
 *   tech        - list of technologies, shown as small tags
 *   github      - link to the repository
 *   demo        - (optional) link to a live demo; omit or set null to hide
 *   image       - (optional) path to a screenshot placed in /public,
 *                 e.g. "screenshots/my-app.png"; null shows a placeholder
 */
export const projects = [
  {
    title: 'Weather Dashboard',
    description:
      'A responsive dashboard showing current weather and a 7-day forecast for any city, with animated charts and location search.',
    tech: ['React', 'CSS', 'OpenWeather API'],
    github: 'https://github.com/your-username/weather-dashboard',
    demo: 'https://your-username.github.io/weather-dashboard/',
    image: null,
  },
  {
    title: 'Task Tracker',
    description:
      'A to-do application with drag-and-drop task boards, local storage persistence, and dark mode. Built to practice state management.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/your-username/task-tracker',
    demo: null,
    image: null,
  },
  {
    title: 'Recipe Finder',
    description:
      'Search thousands of recipes by ingredient, save favourites, and generate shopping lists. Focused on accessibility and fast search.',
    tech: ['React', 'Vite', 'REST API'],
    github: 'https://github.com/your-username/recipe-finder',
    demo: null,
    image: null,
  },
  {
    title: 'Portfolio Website',
    description:
      'This very website! A static portfolio built with React and deployed for free on GitHub Pages.',
    tech: ['React', 'Vite', 'GitHub Pages'],
    github: 'https://github.com/your-username/cvpage',
    demo: null,
    image: null,
  },
]
