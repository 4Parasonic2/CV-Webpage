import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'
import './Projects.css'

/**
 * Projects — featured header, then a responsive grid of project
 * cards from src/data/projects.js.
 */
export default function Projects() {
  const featured = projects.filter((p) => p.featured !== false)

  return (
    <div className="page container">
      <header className="projects-featured">
        <div className="projects-bracket" aria-hidden="true">
          <span className="projects-bracket-corner projects-bracket-corner--tl" />
          <span className="projects-bracket-corner projects-bracket-corner--bl" />
        </div>

        <div className="projects-featured-copy">
          <p className="projects-eyebrow">Portfolio</p>
          <h1 className="projects-featured-title">Featured Projects</h1>
          <p className="projects-featured-blurb">
            A selection of things I&apos;ve built and worked on — robotics,
            autonomy, perception, and entrepreneurship.
          </p>
        </div>
      </header>

      <div className="projects-grid">
        {featured.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  )
}
