import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal.js'
import { experience, skills } from '../data/resume.js'
import './Home.css'

/**
 * Home — an editorial landing page.
 *
 * A minimalist print-magazine layout: a warm cream canvas, a compact
 * sans-serif headline, hairline dividers and an azure accent. Kept
 * intentionally compact so the hero fits comfortably on one screen.
 * The Experience and Focus Areas sections reuse the data in
 * src/data/resume.js, so you maintain that content in one place.
 */
export default function Home() {
  const heroRef = useReveal()
  const expRef = useReveal()
  const focusRef = useReveal()

  return (
    <div className="editorial">
      <div className="container">
        {/* ---- Hero ---- */}
        <section className="ed-hero reveal" ref={heroRef}>
          <div className="ed-hero-text">
            <p className="ed-eyebrow">Attila Kiri — Portfolio</p>
            <h1 className="ed-title">
              Robotics <span className="ed-amp">&amp;</span> Autonomous
              Systems.
            </h1>
            <p className="ed-lead">
              Designing bio-inspired control systems and software for robots
              and unmanned vehicles — where neuroscience, control theory and
              hands-on engineering meet.
            </p>
            <div className="ed-actions">
              <Link to="/projects" className="btn btn-primary">
                View Projects
              </Link>
              <a href="cv.pdf" download className="btn btn-outline">
                Download CV
              </a>
            </div>
          </div>

          <div className="ed-hero-media">
            <img
              src="profile.png"
              alt="Portrait of Attila Kiri"
              width={800}
              height={600}
              className="ed-portrait"
            />
          </div>
        </section>

        {/* ---- Selected Experience ---- */}
        <section id="experience" className="ed-section reveal" ref={expRef}>
          <div className="ed-section-label">
            <h2>Experience</h2>
          </div>
          <div className="ed-section-body">
            {experience.map((job) => (
              <article className="ed-exp" key={job.role + job.period}>
                <div className="ed-exp-head">
                  <h3 className="ed-exp-title">{job.company}</h3>
                  <span className="ed-exp-period">{job.period}</span>
                </div>
                <p className="ed-exp-role">{job.role}</p>
                <p className="ed-exp-details">{job.details}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ---- Focus Areas ---- */}
        <section id="focus" className="ed-section reveal" ref={focusRef}>
          <div className="ed-section-label">
            <h2>Focus Areas</h2>
          </div>
          <div className="ed-section-body">
            <div className="ed-focus-grid">
              {skills.map((group) => (
                <div className="ed-focus" key={group.group}>
                  <h4>{group.group}</h4>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
