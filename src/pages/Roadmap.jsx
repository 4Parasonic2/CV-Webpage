import { studies, jobs } from '../data/timeline.js'
import useReveal from '../hooks/useReveal.js'
import './Roadmap.css'

/**
 * Roadmap — dual-track vertical timeline.
 *
 * Two independent tracks (studies on the left, work on the right) run
 * side by side. Each track is a flex column of cards laid out by year:
 * every card's height is proportional to (end − start) years, so the
 * visible length of a card *is* the length of that period. Ongoing
 * entries (end === 'present') extend to the current year.
 *
 * On mobile the two tracks stack into one column.
 */
const CURRENT_YEAR = new Date().getFullYear()
const YEAR_PX = 90 // vertical pixels per year — tune to taste

/** Resolves the numeric end year, treating 'present' as this year. */
function endYear(item) {
  return item.end === 'present' || item.end == null ? CURRENT_YEAR : item.end
}

function Track({ title, items, side }) {
  // Sort newest first (largest start year at top) so the present sits high.
  const sorted = [...items].sort((a, b) => b.start - a.start)

  // The line running down each track spans from the newest entry's end
  // year back to the oldest entry's start year.
  const newestEnd = Math.max(...sorted.map(endYear))
  const oldestStart = Math.min(...sorted.map((i) => i.start))
  const totalYears = newestEnd - oldestStart

  return (
    <div className={`track track-${side}`}>
      <h2 className="track-title">{title}</h2>

      <div
        className="track-body"
        style={{ minHeight: `${totalYears * YEAR_PX}px` }}
      >
        {/* Vertical line — only as tall as the track's actual duration */}
        <span
          className="track-line"
          style={{ height: `${totalYears * YEAR_PX}px` }}
          aria-hidden="true"
        />

        {sorted.map((item) => {
          const spanYears = Math.max(0.5, endYear(item) - item.start)
          // Offset from the top = (newest end − this entry's end) × YEAR_PX
          const topOffset = (newestEnd - endYear(item)) * YEAR_PX
          return (
            <Card
              key={item.title + item.start}
              item={item}
              side={side}
              top={topOffset}
              height={spanYears * YEAR_PX}
            />
          )
        })}
      </div>
    </div>
  )
}

function Card({ item, side, top, height }) {
  const ref = useReveal()
  const endLabel = item.end === 'present' || item.end == null ? 'Present' : item.end

  return (
    <div
      ref={ref}
      className={`track-card reveal track-card-${side}`}
      style={{ top: `${top}px`, minHeight: `${height}px` }}
    >
      <span className="track-dot" aria-hidden="true" />
      <div className="track-period">
        {item.start} — {endLabel}
      </div>
      <h3 className="track-card-title">{item.title}</h3>
      <p className="track-card-place">{item.place}</p>
      <p className="track-card-details">{item.details}</p>
    </div>
  )
}

export default function Roadmap() {
  return (
    <div className="page container">
      <h1 className="section-title">Career Roadmap</h1>
      <p className="section-subtitle">
        Two parallel journeys — my studies on the left and my work
        experience on the right. Each line runs for as long as I was
        involved with that chapter.
      </p>

      <div className="roadmap">
        <Track title="Studies" items={studies} side="left" />
        <Track title="Work experience" items={jobs} side="right" />
      </div>
    </div>
  )
}
