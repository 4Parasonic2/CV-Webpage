import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal.js'
import './ProjectCard.css'

/**
 * One project card. Receives a single project object from
 * src/data/projects.js and renders its screenshot (or a placeholder),
 * title, description, tech tags and links.
 */
export default function ProjectCard({ project }) {
  const ref = useReveal()

  return (
    <article className="project-card reveal" ref={ref}>
      {/* Screenshot area: shows the image if one is set, otherwise a
          decorative placeholder with the project's initials */}
      <Link to={`/projects/${project.slug}`} className="project-image">
        {project.image ? (
          <img src={project.image} alt={`Screenshot of ${project.title}`} />
        ) : (
          <div className="project-image-placeholder" aria-hidden="true">
            {project.title
              .split(' ')
              .map((word) => word[0])
              .join('')
              .slice(0, 3)}
          </div>
        )}
      </Link>

      <div className="project-body">
        <h3 className="project-title">
          <Link to={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        <p className="project-description">{project.description}</p>

        {/* Technology tags */}
        <ul className="project-tech">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className="project-links">
          <Link to={`/projects/${project.slug}`}>Read more →</Link>
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer">
              GitHub →
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer">
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
