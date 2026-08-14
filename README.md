# Personal Portfolio & CV Website

A static portfolio website built with **React** and **Vite**, hosted for free on **GitHub Pages**.

Pages: **Home** (intro, photo carousel and the career timeline) · **Projects** · **CV / Resume**

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
| `src/data/timeline.js` | Studies and jobs in the Home page journey timeline |
| `src/data/heroImages.js` | Photos in the Home page carousel |

Other things to replace:

- `public/hero-*.jpg` — carousel photos. They are all exported at the same size (1000x1250, 4:5) with black bars where the original ratio didn't fit, so slides don't jump; the untouched originals are kept in `assets/originals/` (that folder is not deployed).
- `public/logo.png` — the "CV" mark used as the favicon and in the navbar, tinted with the terracotta accent.
- `public/cv.pdf` — placeholder PDF. Replace it with your real CV (keep the same file name).
- Your name/links in `src/pages/Home.jsx`, `src/components/Navbar.jsx`, `src/components/Footer.jsx`, and the `<title>` in `index.html`.
- Colors and fonts: everything is defined in `src/styles/variables.css`.

## Project structure

```
src/
├── components/   # Reusable pieces: Navbar, Footer, ProjectCard, Journey, HeroCarousel
├── pages/        # One file per page: Home, Projects, ProjectDetail, Resume
├── data/         # YOUR CONTENT — edit these files
├── hooks/        # useReveal (scroll-in animation), useTheme (light/dark)
├── styles/       # variables.css (design tokens) + global.css
├── App.jsx       # Routes and shared layout
└── main.jsx      # Entry point
```

---

## Deploying to GitHub Pages (first time)

### 0. One-time setup

- Create a free account at [github.com](https://github.com) if you don't have one.
- Install [Git for Windows](https://git-scm.com/download/win) if `git --version` fails in a terminal.
- Tell git who you are (goes into every commit you make):

```powershell
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

### 1. Create a repository on GitHub

On github.com click **+** (top right) → **New repository**. Name it (e.g. `cvpage`), keep it **Public** (required for free GitHub Pages), and do **not** tick "Add a README". Click **Create repository**.

### 2. Put your code into git and push it

Run these in the project folder:

```powershell
git init                  # turns this folder into a git repository
git add .                 # stages all files (marks them for the next commit)
git commit -m "Initial portfolio website"   # saves a snapshot of the staged files
git branch -M main        # names the current branch "main"
git remote add origin https://github.com/YOUR-USERNAME/cvpage.git
                          # links your local repo to the one on GitHub
git push -u origin main   # uploads your commits to GitHub
```

What each command does:

- `git init` — creates a hidden `.git` folder that tracks your file history.
- `git add .` — selects which changes to include in the next snapshot (`.` = everything). The `.gitignore` file already excludes `node_modules` and `dist`, so they won't be uploaded.
- `git commit -m "..."` — permanently records the snapshot with a message.
- `git branch -M main` — GitHub expects the main branch to be called `main`.
- `git remote add origin <url>` — saves the GitHub address under the nickname `origin`. **Replace YOUR-USERNAME with your GitHub username.**
- `git push -u origin main` — uploads. The `-u` remembers the destination so next time plain `git push` is enough. Git will pop up a browser window to log in the first time.

### 3. Enable GitHub Pages

1. Open your repository on github.com.
2. Go to **Settings** (tab) → **Pages** (left sidebar).
3. Under **Build and deployment → Source**, choose **GitHub Actions**.

That's it. The workflow in `.github/workflows/deploy.yml` already ran when you pushed (check the **Actions** tab — green check = success). If it ran before you set the source, click the failed run and press **Re-run all jobs**, or just push again.

Your site will be live at:

```
https://YOUR-USERNAME.github.io/cvpage/
```

### 4. Updating the website later

Edit your files, check the result with `npm run dev`, then:

```powershell
git add .                          # stage everything you changed
git commit -m "Update projects"    # describe what you changed
git push                           # upload — this triggers automatic redeploy
```

Every push to `main` rebuilds and republishes the site automatically. It takes 1–2 minutes; watch progress in the **Actions** tab.

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
