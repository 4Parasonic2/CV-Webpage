/**
 * HERO IMAGE LIBRARY
 * ------------------
 * Photos shown in the landing-page carousel. The carousel autoplays
 * through every image and supports arrow + dot navigation.
 *
 * All files are pre-processed to the SAME size (1000x1250, 4:5) with
 * black bars added where the original aspect ratio didn't match, so
 * slides never jump or crop differently. Originals live in
 * assets/originals/ — re-export at 4:5 when adding a new photo.
 *
 * Fields:
 *   src - path relative to /public
 *   alt - accessible description
 */
export const heroImages = [
  {
    src: 'hero-1.jpg',
    alt: 'Portrait of Attila Kiri',
  },
  {
    src: 'hero-2.jpg',
    alt: 'Attila testing a mobile robot on a competition course at DTU',
  },
  {
    src: 'hero-3.jpg',
    alt: 'Attila with a megaphone hosting a student sports event',
  },
]
