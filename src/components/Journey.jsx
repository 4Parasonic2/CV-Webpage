import { studies, jobs } from '../data/timeline.js'
import useReveal from '../hooks/useReveal.js'
import './Journey.css'

/**
 * Journey — a center-split vertical timeline for the landing page.
 *
 * Two colored lines run side by side down the MIDDLE of the section:
 * the left line is the studies track (forest green / moss in dark
 * mode) and the right line is the work track (terracotta). Study
 * bubbles sit on the LEFT of the lines, work bubbles on the RIGHT,
 * all merged into one newest-first flow. Each bubble's dot sits on
 * its own line, aligned with the top of the bubble.
 *
 * Studies can contain `children` — shorter study trips (summer
 * schools, exchange semesters) that happened inside a longer study —
 * rendered as small nested bubbles inside the parent bubble.
 *
 * Edit the content in src/data/timeline.js — nothing here.
 */
const entries = [
  ...studies.map((item) => ({ ...item, kind: 'study' })),
  ...jobs.map((item) => ({ ...item, kind: 'work' })),
].sort((a, b) => b.start - a.start)

/** "2021 — Present" / "2020" (single year when start === end or no end) */
function periodLabel(item) {
  const end = item.end === 'present' ? 'Present' : item.end
  if (end == null || end === item.start) return String(item.start)
  return `${item.start} — ${end}`
}

function Entry({ item }) {
  const ref = useReveal()

  return (
    <li ref={ref} className={`journey-entry journey-${item.kind} reveal`}>
      {/* Dot on this entry's own center line, at the top of the bubble */}
      <span className="journey-dot" aria-hidden="true" />

      <article className="journey-card">
        <div className="journey-meta">
          <span className="journey-kind">
            {item.kind === 'study' ? 'Studies' : 'Work'}
          </span>
          <span className="journey-period">{periodLabel(item)}</span>
        </div>
        <h3 className="journey-title">{item.title}</h3>
        <p className="journey-place">{item.place}</p>
        <p className="journey-details">{item.details}</p>

        {/* Nested bubbles: study trips inside a longer study */}
        {item.children?.length > 0 && (
          <ul className="journey-subs">
            {item.children.map((sub) => (
              <li key={sub.title + sub.start} className="journey-sub">
                <div className="journey-meta">
                  <span className="journey-sub-badge">Study trip</span>
                  <span className="journey-period">{periodLabel(sub)}</span>
                </div>
                <h4 className="journey-sub-title">{sub.title}</h4>
                <p className="journey-place">{sub.place}</p>
                <p className="journey-details">{sub.details}</p>
              </li>
            ))}
          </ul>
        )}
      </article>
    </li>
  )
}

export default function Journey() {
  return (
    <div className="journey-wrap">
      {/* Column headers naming the two sides/lines */}
      <div className="journey-heads" aria-hidden="true">
        <span className="journey-head journey-head-study">Studies</span>
        <span className="journey-head journey-head-work">Work</span>
      </div>

      <ul className="journey">
        {entries.map((item) => (
          <Entry key={item.kind + item.title + item.start} item={item} />
        ))}
      </ul>
    </div>
  )
}
