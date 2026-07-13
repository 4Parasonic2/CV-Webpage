import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'
import './Projects.css'

/**
 * Projects — a responsive grid of project cards.
 * The list of projects comes from src/data/projects.js;
 * this component just maps over it.
 */
export default function Projects() {
  return (
    <div className="page container">
      <h1 className="section-title">Projects</h1>
      <p className="section-subtitle">
        A selection of things I've built. Each card links to the source code
        on GitHub — and to a live demo where available.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  )
}
