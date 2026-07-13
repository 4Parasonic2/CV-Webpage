import useReveal from '../hooks/useReveal.js'
import './TimelineItem.css'

/**
 * One milestone on the Roadmap timeline.
 *
 * The parent passes `side` ("left" or "right") so cards alternate
 * around the central double line. Each item reveals itself with a
 * slide-in from its own side as it scrolls into view.
 */
export default function TimelineItem({ milestone, side }) {
  const ref = useReveal()

  return (
    <li className={`timeline-item ${side} reveal`} ref={ref}>
      {/* Dot sitting on the central line */}
      <span className="timeline-dot" aria-hidden="true" />

      <div className="timeline-card">
        <span className="timeline-date">{milestone.date}</span>
        <h3 className="timeline-title">{milestone.title}</h3>
        <p className="timeline-place">{milestone.place}</p>
        <p className="timeline-details">{milestone.details}</p>
      </div>
    </li>
  )
}
