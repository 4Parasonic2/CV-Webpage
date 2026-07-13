import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // "base" controls the URL prefix used for all built assets (JS, CSS, images).
  // './' makes every path RELATIVE, which means the built site works no matter
  // where it is hosted: locally, on username.github.io/repo-name/, or on a
  // custom domain. This avoids the most common GitHub Pages mistake
  // (a blank white page caused by absolute asset paths).
  base: './',
})
