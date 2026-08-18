import { studies, jobs } from '../data/timeline.js'
import useReveal from '../hooks/useReveal.js'
import './Journey.css'

/**
 * Journey — a vertical timeline built around a continuous time line.
 *
 * A grey line runs from the earliest entry to the present. Beside it sit
 * a studies line and a work line. Those coloured lines follow the dates,
 * not just their own cards: if a degree was still underway when a job
 * started, the study line runs alongside that job (and vice versa). The
 * card sits at the top of its line — the newest end of the stretch —
 * and the line continues downward to show how long it lasted. They still
 * break wherever there is a gap.
 *
 * Desktop puts the grey line in the middle with study bubbles to the
 * left and work bubbles to the right. On phones all three lines move to
 * the left edge (grey outermost) with every bubble to their right.
 *
 * Edit the content in src/data/timeline.js — nothing here.
 */
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

/** Months of slack between two entries that still counts as continuous. */
const GAP_TOLERANCE = 3 / 12

/** Row 1 of the grid holds the column headers, so entries start at row 2. */
const HEADER_ROWS = 1

const today = new Date()
const NOW = today.getFullYear() + today.getMonth() / 12

/**
 * Dates are a year (2024), a month ('2019-09') or 'present'. Converting
 * them to a decimal year lets us measure the gaps between entries; a bare
 * year counts as January when starting and as December when ending.
 */
function toDecimalYear(value, isEnd = false) {
  if (value === 'present') return NOW
  if (value == null) return null
  if (typeof value === 'number') return isEnd ? value + 1 : value

  const [year, month] = String(value).split('-').map(Number)
  if (!month) return isEnd ? year + 1 : year
  return year + (isEnd ? month : month - 1) / 12
}

/** 'Sep 2019' when the month is known, otherwise '2019'. */
function formatPoint(value) {
  if (value === 'present') return 'Present'
  if (typeof value === 'number') return String(value)

  const [year, month] = String(value).split('-').map(Number)
  return month ? `${MONTHS[month - 1]} ${year}` : String(year)
}

/** "Sep 2019 — Feb 2023" / "2024 — Present" / "2026" */
function periodLabel(item) {
  const start = formatPoint(item.start)
  if (item.end == null) return start

  const end = formatPoint(item.end)
  return end === start ? start : `${start} — ${end}`
}

const entries = [...studies.map((item) => ({ ...item, kind: 'study' })), ...jobs.map((item) => ({ ...item, kind: 'work' }))]
  .map((item) => ({
    ...item,
    startYear: toDecimalYear(item.start),
    endYear: toDecimalYear(item.end ?? item.start, true),
  }))
  .sort((a, b) => b.startYear - a.startYear)

/**
 * Merge one track's date ranges into continuous intervals. Entries of
 * the same kind that nearly touch (within GAP_TOLERANCE) count as one
 * stretch; a real gap stays a gap.
 */
function activityIntervals(kind) {
  const intervals = []

  entries
    .filter((item) => item.kind === kind)
    .sort((a, b) => a.startYear - b.startYear)
    .forEach((item) => {
      const last = intervals[intervals.length - 1]
      if (last && item.startYear <= last.end + GAP_TOLERANCE) {
        last.end = Math.max(last.end, item.endYear)
        return
      }
      intervals.push({ start: item.startYear, end: item.endYear })
    })

  return intervals
}

/** True when this track was already underway at a given date. */
function isUnderway(interval, year) {
  return year >= interval.start && year < interval.end
}

/**
 * Rows this track should be drawn through. A study line covers its own
 * cards, and also any work card that started while studying was still
 * going — so overlapping periods sit as parallel lines. Two stretches
 * stay separate when they belong to different date intervals.
 */
function buildSegments(kind) {
  const intervals = activityIntervals(kind)
  const segments = []
  let current = null

  entries.forEach((item, index) => {
    const row = index + 1 + HEADER_ROWS
    const intervalIndex = intervals.findIndex((interval) => isUnderway(interval, item.startYear))
    const active = intervalIndex !== -1 || item.kind === kind

    if (!active) {
      current = null
      return
    }

    const id = intervalIndex === -1 ? `own-${index}` : intervalIndex
    if (current && current.to === row - 1 && current.id === id) {
      current.to = row
      return
    }

    current = { from: row, to: row, id }
    segments.push(current)
  })

  return segments
}

function spineRow(index) {
  return index + 1 + HEADER_ROWS
}

function wasUnderwayAt(item, year) {
  return year >= item.startYear && year < item.endYear
}

/**
 * Place each card at the top of the coloured line that represents it.
 * The line still covers every spine row for that date range, so a long
 * degree keeps its length; only the bubble moves up next to the newest
 * overlapping job. One study and one work card may share a row; two of
 * the same kind never do.
 */
function assignCardRows() {
  const taken = { study: new Set(), work: new Set() }

  return entries.map((item, index) => {
    let target = spineRow(index)

    entries.forEach((other, otherIndex) => {
      if (other.kind === item.kind) return
      if (wasUnderwayAt(item, other.startYear)) {
        target = Math.min(target, spineRow(otherIndex))
      }
    })

    if (taken[item.kind].has(target)) {
      target = spineRow(index)
    }

    taken[item.kind].add(target)
    return target
  })
}

const cardRows = assignCardRows()
const laneRows = [...new Set(cardRows)].sort((a, b) => a - b)

function itemsOnLane(row) {
  return entries
    .map((item, index) => ({ item, index }))
    .filter(({ index }) => cardRows[index] === row)
    .sort((a, b) => (a.item.kind === 'study' ? 0 : 1) - (b.item.kind === 'study' ? 0 : 1))
}

function Entry({ item, row }) {
  const ref = useReveal()

  return (
    <div
      ref={ref}
      role="listitem"
      className={`journey-entry journey-${item.kind} reveal`}
      style={{ gridRow: row }}
    >
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
    </div>
  )
}

export default function Journey() {
  const firstRow = 1 + HEADER_ROWS
  const lastRow = entries.length + 1 + HEADER_ROWS

  return (
    <div className="journey-wrap">
      <div className="journey" role="list">
        {/* Column headers (hidden on phones, where each bubble is labelled) */}
        <span className="journey-head journey-head--study" aria-hidden="true">
          Studies
        </span>
        <span className="journey-head journey-head--axis" aria-hidden="true">
          Time
        </span>
        <span className="journey-head journey-head--work" aria-hidden="true">
          Work
        </span>

        {/* Unbroken grey line: earliest entry through to today */}
        <span
          className="journey-axis"
          style={{ gridRow: `${firstRow} / ${lastRow}` }}
          aria-hidden="true"
        />

        {buildSegments('study').map((segment) => (
          <span
            key={`study-${segment.from}`}
            className="journey-track journey-track--study"
            style={{ gridRow: `${segment.from} / ${segment.to + 1}` }}
            aria-hidden="true"
          />
        ))}

        {buildSegments('work').map((segment) => (
          <span
            key={`work-${segment.from}`}
            className="journey-track journey-track--work"
            style={{ gridRow: `${segment.from} / ${segment.to + 1}` }}
            aria-hidden="true"
          />
        ))}

        {entries.map((item, index) => (
          <span
            key={`dot-${item.kind}-${item.title}-${item.start}`}
            className={`journey-dot journey-dot--${item.kind}`}
            style={{ gridRow: cardRows[index] }}
            aria-hidden="true"
          />
        ))}

        {laneRows.map((row) => (
          <div key={`lane-${row}`} className="journey-lane" style={{ gridRow: row }}>
            {itemsOnLane(row).map(({ item }) => (
              <Entry
                key={item.kind + item.title + item.start}
                item={item}
                row={row}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
