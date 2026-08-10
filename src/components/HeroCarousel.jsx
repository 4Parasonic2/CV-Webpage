import { useEffect, useRef, useState } from 'react'
import { heroImages } from '../data/heroImages.js'
import './HeroCarousel.css'

const AUTOPLAY_MS = 5000

/**
 * Landing-page photo library: cycles through heroImages with
 * left/right arrows, dot indicators, and gentle autoplay.
 */
export default function HeroCarousel() {
  const [index, setIndex] = useState(0)
  const timerRef = useRef(null)
  const count = heroImages.length

  const goTo = (next) => {
    if (count === 0) return
    setIndex(((next % count) + count) % count)
  }

  const prev = () => goTo(index - 1)
  const next = () => goTo(index + 1)

  // Restart autoplay whenever the slide changes (or on mount)
  useEffect(() => {
    if (count <= 1) return undefined

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) return undefined

    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % count)
    }, AUTOPLAY_MS)

    return () => clearInterval(timerRef.current)
  }, [index, count])

  // Pause autoplay while the user focuses / hovers the carousel
  const pause = () => clearInterval(timerRef.current)
  const resume = () => {
    if (count <= 1) return
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % count)
    }, AUTOPLAY_MS)
  }

  if (count === 0) return null

  const current = heroImages[index]

  return (
    <div
      className="hero-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Photo gallery"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={resume}
    >
      <div className="hero-carousel-stage">
        {heroImages.map((img, i) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            width={800}
            height={600}
            className={`hero-carousel-img${i === index ? ' is-active' : ''}`}
            aria-hidden={i !== index}
          />
        ))}
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            className="hero-carousel-nav hero-carousel-nav--prev"
            onClick={prev}
            aria-label="Previous photo"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path
                d="M15 5l-7 7 7 7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            type="button"
            className="hero-carousel-nav hero-carousel-nav--next"
            onClick={next}
            aria-label="Next photo"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path
                d="M9 5l7 7-7 7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="hero-carousel-dots" role="tablist" aria-label="Choose photo">
            {heroImages.map((img, i) => (
              <button
                key={img.src}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show photo ${i + 1}: ${img.alt}`}
                className={`hero-carousel-dot${i === index ? ' is-active' : ''}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </>
      )}

      <span className="visually-hidden" aria-live="polite">
        Photo {index + 1} of {count}: {current.alt}
      </span>
    </div>
  )
}
