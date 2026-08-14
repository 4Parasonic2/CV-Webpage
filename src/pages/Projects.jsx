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
        <p className="projects-eyebrow">Portfolio</p>
        <h1 className="projects-featured-title">Featured Projects</h1>
      </header>

      <div className="projects-grid">
        {featured.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  )
}
