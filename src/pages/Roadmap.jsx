import TimelineItem from '../components/TimelineItem.jsx'
import { milestones } from '../data/timeline.js'
import './Roadmap.css'

/**
 * Career Roadmap — a vertical timeline.
 *
 * The milestones array (src/data/timeline.js) is ordered newest-first,
 * so the present sits at the top and scrolling down travels back in
 * time. Items alternate left/right around a central double line:
 * even indexes go left, odd indexes go right.
 */
export default function Roadmap() {
  return (
    <div className="page container">
      <h1 className="section-title">Career Roadmap</h1>
      <p className="section-subtitle">
        My journey so far — starting from today at the top and travelling
        back in time as you scroll.
      </p>

      <ul className="timeline">
        {milestones.map((milestone, index) => (
          <TimelineItem
            key={milestone.date + milestone.title}
            milestone={milestone}
            side={index % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </ul>
    </div>
  )
}
