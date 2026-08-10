import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal.js'
import HeroCarousel from '../components/HeroCarousel.jsx'
import Journey from '../components/Journey.jsx'
import './Home.css'

/**
 * Home — the landing page.
 *
 * Hero introduction, then the full career journey as a center-split
 * timeline: two colored lines down the middle with study bubbles on
 * the left and work bubbles on the right. Content from src/data/.
 */
export default function Home() {
  const heroRef = useReveal()
  const journeyRef = useReveal()

  return (
    <div className="editorial">
      <div className="container">
        {/* ---- Hero ---- */}
        <section className="ed-hero reveal" ref={heroRef}>
          <div className="ed-hero-text">
            <h1 className="ed-title">
              Autonomous systems student <span className="ed-amp">&amp;</span> engineer
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
            <HeroCarousel />
          </div>
        </section>

        {/* ---- Career journey timeline ---- */}
        <section className="journey-section reveal" ref={journeyRef}>
          <h2 className="ed-section-heading">Journey</h2>
          <p className="journey-blurb">
            Studies on the left, work on the right — newest first.
          </p>
          <Journey />
        </section>
      </div>
    </div>
  )
}
