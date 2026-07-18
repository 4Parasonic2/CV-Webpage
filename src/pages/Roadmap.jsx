import { studies, jobs } from '../data/timeline.js'
import useReveal from '../hooks/useReveal.js'
import './Roadmap.css'

/**
 * Roadmap — two simple vertical timelines side by side.
 *
 * Each track (Studies / Work experience) is just a normal, top-to-
 * bottom list of cards — no absolute positioning or year-based math.
 * A single straight line runs behind each list (drawn once on the
 * container, not recalculated per item), so there is nothing that can
 * misalign or overlap, and the exact same markup collapses cleanly
 * into a single column on mobile.
 */
function Track({ title, items }) {
  // Newest first, so the present sits at the top of each track.
  const sorted = [...items].sort((a, b) => b.start - a.start)

  return (
    <div className="track">
      <h2 className="track-title">{title}</h2>

      <ul className="track-list">
        {sorted.map((item) => (
          <Entry key={item.title + item.start} item={item} />
        ))}
      </ul>
    </div>
  )
}

function Entry({ item }) {
  const ref = useReveal()
  const endLabel = item.end === 'present' || item.end == null ? 'Present' : item.end

  return (
    <li ref={ref} className="track-entry reveal">
      <span className="track-dot" aria-hidden="true" />
      <div className="track-card">
        <div className="track-period">
          {item.start} — {endLabel}
        </div>
        <h3 className="track-card-title">{item.title}</h3>
        <p className="track-card-place">{item.place}</p>
        <p className="track-card-details">{item.details}</p>
      </div>
    </li>
  )
}

export default function Roadmap() {
  return (
    <div className="page container">
      <h1 className="section-title">Career Roadmap</h1>
      <p className="section-subtitle">
        Two parallel journeys — my studies and my work experience, each
        newest first.
      </p>

      <div className="roadmap">
        <Track title="Studies" items={studies} />
        <Track title="Work experience" items={jobs} />
      </div>
    </div>
  )
}
