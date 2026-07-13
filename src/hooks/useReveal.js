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
 */
export default function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      // Trigger a bit before the element is fully in view
      { threshold: 0.15 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
