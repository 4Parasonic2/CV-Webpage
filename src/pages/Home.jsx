import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal.js'
import './Home.css'

/**
 * Small presentational cards for the "What I do" strip.
 * Kept in an array so it's trivial to add/edit/remove one.
 */
const highlights = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M8 21h8M12 18v3" />
      </svg>
    ),
    title: 'Robotics & Control',
    text: 'Designing bio-inspired and autonomous control loops for real-world robotic systems.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" />
      </svg>
    ),
    title: 'Neural Systems',
    text: 'Modelling neurons and neural networks, from biological signals to computing.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
      </svg>
    ),
    title: 'Software & Simulation',
    text: 'Building, integrating and simulating software for unmanned autonomous systems.',
  },
]

/**
 * Home — the landing page.
 *
 * A polished, gradient-forward hero (status pill, gradient headline,
 * glowing orbs, glass profile card) followed by a "What I do" strip
 * and a short About section. All colors come from the theme tokens in
 * variables.css, so the page looks right in both light and dark mode.
 */
export default function Home() {
  const heroRef = useReveal()
  const highlightsRef = useReveal()
  const aboutRef = useReveal()

  return (
    <div className="page home">
      {/* Soft glowing gradient orbs floating behind the hero */}
      <div className="home-orbs" aria-hidden="true">
        <span className="orb orb-1" />
        <span className="orb orb-2" />
      </div>

      <section className="container hero reveal" ref={heroRef}>
        <div className="hero-text">
          <span className="hero-badge">
            <span className="hero-badge-dot" />
            Available for new opportunities
          </span>

          <p className="hero-greeting">
            Hi There!{' '}
            <span className="hero-wave" aria-hidden="true">
              👋
            </span>
          </p>

          <h1 className="hero-title">
            I'm <span className="hero-name">Attila Kiri</span>
          </h1>

          <p className="hero-role">Robotics &amp; Autonomous Systems Engineer</p>

          <p className="hero-intro">
            I design bio-inspired control systems and software for robots and
            unmanned autonomous vehicles — bridging neuroscience, control
            theory and hands-on engineering. Take a look at my work, or grab a
            copy of my CV.
          </p>

          <div className="hero-actions">
            {/* Internal navigation uses Link; downloads use a plain <a> */}
            <Link to="/projects" className="btn btn-primary">
              View Projects
            </Link>
            <a href="cv.pdf" download className="btn btn-outline">
              Download CV
            </a>
          </div>
        </div>

        <div className="hero-photo">
          {/* Gradient ring + glass card framing the profile picture.
              Replace public/profile.svg with your own photo. */}
          <div className="hero-photo-frame">
            <img src="profile.svg" alt="Portrait of Attila Kiri" />
          </div>
          <div className="hero-photo-glow" aria-hidden="true" />
        </div>
      </section>

      {/* "What I do" — three glass highlight cards */}
      <section className="container highlights reveal" ref={highlightsRef}>
        {highlights.map((item) => (
          <article className="highlight-card" key={item.title}>
            <span className="highlight-icon">{item.icon}</span>
            <h3 className="highlight-title">{item.title}</h3>
            <p className="highlight-text">{item.text}</p>
          </article>
        ))}
      </section>

      {/* Short "about me" strip */}
      <section className="container about reveal" ref={aboutRef}>
        <h2 className="section-title">About Me</h2>
        <p>
          I'm an engineer fascinated by how living systems move and think, and
          how we can borrow those principles to build smarter machines. My work
          spans neural science, neural processing and bio-inspired control —
          from modelling how the cerebellum coordinates movement to programming
          unmanned aerial vehicles to carry out real tasks. This paragraph is a
          starting point: tell your own story here.
        </p>
      </section>
    </div>
  )
}
