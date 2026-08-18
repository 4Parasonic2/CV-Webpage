# Personal Portfolio & CV Website

A static portfolio website built with **React** and **Vite**, hosted for free on **GitHub Pages**.

Pages: **Home** · **Projects** · **CV / Resume** · **Career Roadmap** (animated timeline)

---

## Running the site locally

```powershell
npm install    # first time only: downloads dependencies into node_modules
npm run dev    # starts a local dev server, usually at http://localhost:5173
```

The dev server has *hot reload*: save a file and the browser updates instantly.

To create a production build (what gets deployed):

```powershell
npm run build    # outputs static files into the dist/ folder
npm run preview  # serves dist/ locally so you can check the real build
```

## Editing your content

All personal content lives in `src/data/` — you should rarely need to touch anything else:

| File | Controls |
|---|---|
| `src/data/projects.js` | Project cards on the Projects page |
| `src/data/resume.js` | Education, experience, skills, certifications, languages |
| `src/data/timeline.js` | Career Roadmap milestones (keep newest first!) |

Other things to replace:

- `public/profile.svg` — placeholder avatar. Drop in your photo (e.g. `profile.jpg`) and update the `src` in `src/components/Navbar.jsx` and `src/pages/Home.jsx`.
- `public/cv.pdf` — placeholder PDF. Replace it with your real CV (keep the same file name).
- Your name/links in `src/pages/Home.jsx`, `src/components/Navbar.jsx`, `src/components/Footer.jsx`, and the `<title>` in `index.html`.
- Colors and fonts: everything is defined in `src/styles/variables.css`.

## Project structure

```
src/
├── components/   # Reusable pieces: Navbar, Footer, ProjectCard, TimelineItem
├── pages/        # One file per page: Home, Projects, Resume, Roadmap
├── data/         # YOUR CONTENT — edit these files
├── hooks/        # useReveal (scroll-in animation)
├── styles/       # variables.css (design tokens) + global.css
├── App.jsx       # Routes and shared layout
└── main.jsx      # Entry point
```



### Common mistakes and fixes

| Problem | Cause | Fix |
|---|---|---|
| Blank white page after deploy | Asset paths point to the wrong place | Already prevented here: `base: './'` in `vite.config.js` makes all paths relative. If you ever remove it, put it back. |
| 404 when refreshing a subpage | Static hosts don't know client-side routes | Already prevented: we use `HashRouter`, so routes live after `#` and never hit the server. |
| Actions tab shows a red X | Build failed | Click the run to read the error. Usually a typo/syntax error — run `npm run build` locally to reproduce and fix it. |
| Page didn't update after push | Browser cache or deploy still running | Wait for the green check in Actions, then hard-refresh with `Ctrl+F5`. |
| `git push` rejected | GitHub has commits you don't have locally (e.g. you edited a file on github.com) | Run `git pull` first, then `git push`. |
| Pushed `node_modules` by accident | Missing `.gitignore` | This project's `.gitignore` already excludes it. If it happens anyway: `git rm -r --cached node_modules`, commit, push. |
| Site URL shows README instead of the site | Pages source set to "Deploy from a branch" | In Settings → Pages set Source to **GitHub Actions**. |
