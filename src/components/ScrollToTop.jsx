import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Client-side routing keeps the scroll position when you change pages,
 * which feels wrong (you'd land mid-page). This small helper scrolls
 * back to the top every time the route changes. It renders nothing.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
