import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects.js'
import useReveal from '../hooks/useReveal.js'
import './ProjectDetail.css'

/**
 * Project detail page (route: /projects/:slug).
 *
 * We look the project up in the same projects.js array the grid uses,
 * so adding a project in one place gives you both the card AND the
 * detail page automatically.
 */
export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)
  const ref = useReveal()

  if (!project) {
    return (
      <div className="page container">
        <h1 className="section-title">Project not found</h1>
        <p className="section-subtitle">
          The project you&rsquo;re looking for doesn&rsquo;t exist.
        </p>
        <Link to="/projects" className="btn btn-outline">
          ← Back to projects
        </Link>
      </div>
    )
  }

  return (
    <div className="page container project-detail reveal" ref={ref}>
      <Link to="/projects" className="project-detail-back">
        ← Back to projects
      </Link>

      <header className="project-detail-header">
        <h1>{project.title}</h1>
        <p className="project-detail-lead">{project.description}</p>

        <ul className="project-tech">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className="project-detail-actions">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline">
              GitHub
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-primary">
              Live Demo
            </a>
          )}
        </div>
      </header>

      {/* Cover image (only when the project has one) */}
      {project.image && (
        <img
          src={project.image}
          alt={`Cover for ${project.title}`}
          className="project-detail-cover"
        />
      )}

      {/* Long-form description: one paragraph per array item */}
      {project.longDescription?.length > 0 && (
        <section className="project-detail-section">
          <h2>About this project</h2>
          {project.longDescription.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </section>
      )}

      {/* Structured content: titled bullet lists (e.g. course topics) */}
      {project.sections?.length > 0 && (
        <section className="project-detail-section">
          <h2>Core areas</h2>
          <div className="project-detail-groups">
            {project.sections.map((group) => (
              <div className="project-detail-group" key={group.heading}>
                <h3>{group.heading}</h3>
                <ul className="project-detail-list">
                  {group.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Optional video (YouTube embed URL or mp4 file in /public) */}
      {project.video && (
        <section className="project-detail-section">
          <h2>{project.video.title || 'Demo video'}</h2>
          <div className="project-detail-video">
            {project.video.src.endsWith('.mp4') ? (
              <video src={project.video.src} controls />
            ) : (
              <iframe
                src={project.video.src}
                title={project.video.title || 'Project video'}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </section>
      )}

      {/* What I learned */}
      {project.learnings?.length > 0 && (
        <section className="project-detail-section">
          <h2>What I learned</h2>
          <ul className="project-detail-list">
            {project.learnings.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Screenshot gallery */}
      {project.gallery?.length > 0 && (
        <section className="project-detail-section">
          <h2>Gallery</h2>
          <div className="project-detail-gallery">
            {project.gallery.map((img, i) => (
              <figure key={i}>
                <img src={img.src} alt={img.alt || ''} />
                {img.caption && <figcaption>{img.caption}</figcaption>}
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* Extra links */}
      {project.links?.length > 0 && (
        <section className="project-detail-section">
          <h2>Related links</h2>
          <ul className="project-detail-list">
            {project.links.map((link) => (
              <li key={link.url}>
                <a href={link.url} target="_blank" rel="noreferrer">
                  {link.label} →
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}