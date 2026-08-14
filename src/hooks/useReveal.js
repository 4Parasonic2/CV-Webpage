import { useEffect, useRef } from 'react'

/**
 * useReveal — scroll-reveal animation hook.
 *
 * Usage:
 *   const ref = useReveal()
 *   <div ref={ref} className="reveal">...</div>
 *
 * The element starts hidden (via the .reveal CSS class). An
 * IntersectionObserver — a browser API that reports when an element
 * scrolls into view — adds the .is-visible class the first time the
 * element appears, which triggers the CSS fade/slide-in transition.
 * Observing stops after the first reveal so the animation only
 * plays once.
 *
 * Only apply this to individual items (cards, timeline entries), never
 * to a tall wrapper section: a threshold is a fraction of the ELEMENT's
 * own area, so a section taller than the viewport can never reach a
 * large threshold and would stay invisible.
 *
 * Options:
 *   threshold  - fraction of the element that must be visible (0 = any part)
 *   rootMargin - shrinks the trigger area; the default negative bottom
 *                means an item reveals just after it enters the viewport
 */
export default function useReveal({
  threshold = 0,
  rootMargin = '0px 0px -8% 0px',
} = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Older browsers: show the content rather than hiding it forever
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return ref
}
