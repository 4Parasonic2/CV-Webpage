import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal.js'
import './Home.css'

/**
 * Home — the landing page.
 * A two-column hero: greeting/name/intro + buttons on the left,
 * profile picture on the right. All text here is placeholder
 * content for you to replace.
 */
export default function Home() {
  const heroRef = useReveal()
  const aboutRef = useReveal()

  return (
    <div className="page">
      <section className="container hero reveal" ref={heroRef}>
        <div className="hero-text">
          <p className="hero-greeting">
            Hi There!{' '}
            <span className="hero-wave" aria-hidden="true">
              👋
            </span>
          </p>

          <h1 className="hero-title">
            I'm <span className="hero-name">Jane Doe</span>
          </h1>

          <p className="hero-role">Frontend Developer</p>

          <p className="hero-intro">
            I build clean, modern web experiences with a focus on usability
            and performance. Welcome to my corner of the internet — have a
            look at my work, or grab a copy of my CV below.
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
          {/* Replace public/profile.svg with your own photo */}
          <img src="profile.svg" alt="Portrait of Jane Doe" />
        </div>
      </section>

      {/* Short "about me" strip below the hero */}
      <section className="container about reveal" ref={aboutRef}>
        <h2 className="section-title">About Me</h2>
        <p>
          I'm a developer based in Your City with a passion for turning ideas
          into polished, accessible websites. I enjoy working across the
          frontend stack — from crafting pixel-perfect interfaces to wiring
          up APIs. When I'm not coding, you'll find me hiking, reading, or
          experimenting with side projects. This paragraph is placeholder
          text: tell your own story here.
        </p>
      </section>
    </div>
  )
}
