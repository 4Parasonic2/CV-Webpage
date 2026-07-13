import useReveal from '../hooks/useReveal.js'
import {
  education,
  experience,
  skills,
  certifications,
  languages,
} from '../data/resume.js'
import './Resume.css'

/**
 * Small wrapper that gives every resume section the same structure
 * (heading + content) and its own scroll-reveal animation.
 */
function Section({ title, children }) {
  const ref = useReveal()
  return (
    <section className="resume-section reveal" ref={ref}>
      <h2>{title}</h2>
      {children}
    </section>
  )
}

/**
 * CV / Resume — professional details in stacked sections.
 * All content comes from src/data/resume.js.
 */
export default function Resume() {
  return (
    <div className="page container resume">
      <div className="resume-header">
        <div>
          <h1 className="section-title">CV / Resume</h1>
          <p className="section-subtitle">
            My education, experience and skills at a glance — or grab the PDF
            version for printing.
          </p>
        </div>
        {/* The "download" attribute makes browsers save the file
            instead of opening it. The file lives in /public. */}
        <a href="cv.pdf" download className="btn btn-primary resume-download">
          Download CV (PDF)
        </a>
      </div>

      <Section title="Work Experience">
        {experience.map((job) => (
          <div className="resume-entry" key={job.role + job.period}>
            <div className="resume-entry-header">
              <h3>{job.role}</h3>
              <span className="resume-period">{job.period}</span>
            </div>
            <p className="resume-org">{job.company}</p>
            <p className="resume-details">{job.details}</p>
          </div>
        ))}
      </Section>

      <Section title="Education">
        {education.map((item) => (
          <div className="resume-entry" key={item.degree}>
            <div className="resume-entry-header">
              <h3>{item.degree}</h3>
              <span className="resume-period">{item.period}</span>
            </div>
            <p className="resume-org">{item.school}</p>
            <p className="resume-details">{item.details}</p>
          </div>
        ))}
      </Section>

      <Section title="Skills">
        <div className="skills-groups">
          {skills.map((group) => (
            <div key={group.group}>
              <h3 className="skills-group-name">{group.group}</h3>
              <ul className="skills-tags">
                {group.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Certifications">
        <ul className="cert-list">
          {certifications.map((cert) => (
            <li key={cert.name}>
              <span className="cert-name">{cert.name}</span>
              <span className="cert-meta">
                {cert.issuer} · {cert.year}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Languages">
        <ul className="lang-list">
          {languages.map((lang) => (
            <li key={lang.name}>
              <span className="lang-name">{lang.name}</span>
              <span className="lang-level">{lang.level}</span>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  )
}
