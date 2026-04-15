# Personal Portfolio — Data & Project Analytics

A polished, recruiter-friendly personal portfolio built with **React + Vite + Tailwind CSS**.
Soft lavender + warm yellow palette on a warm-ivory light theme. Fully responsive,
optimized for desktop and mobile, and deployable to Vercel or GitHub Pages.

---

## File Structure

```
portfolio-site/
├── public/
│   ├── favicon.svg
│   ├── portrait.jpg        ← (optional) drop your portrait here
│   └── resume.pdf          ← (optional) drop your resume PDF here
├── src/
│   ├── components/
│   │   ├── Badge.jsx           # rounded tag pill (tools / skills)
│   │   ├── DashboardMock.jsx   # pure-CSS dashboard illustration
│   │   ├── FocusCard.jsx       # "what I focus on" card
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx          # sticky nav + mobile drawer
│   │   ├── ProjectCard.jsx
│   │   └── SectionHeading.jsx
│   ├── data/
│   │   ├── profile.js          # EDIT: name, role, links, skills, focus areas
│   │   └── projects.js         # EDIT: project cards
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   └── Projects.jsx
│   ├── App.jsx
│   ├── index.css              # Tailwind layers + component classes
│   └── main.jsx
├── index.html
├── tailwind.config.js         # design tokens (colors, fonts, shadows)
├── postcss.config.js
├── vite.config.js
├── package.json
└── README.md
```

---

## Setup

```bash
# 1. Install dependencies
cd portfolio-site
npm install

# 2. Start the local dev server (http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

> Requires Node.js 18+.

---

## How to Personalize

Almost every string on the site lives in two files — no component edits needed.

### 1. `src/data/profile.js`
Edit your name, role, hero copy, location, links, skill groups, and
"What I Focus On" cards.

```js
export const profile = {
  name: 'Your Name',
  role: 'Junior Project Coordinator · Data & Dashboard Analyst',
  headlineLead: 'Turning data into',
  headlineAccent: 'clear, confident decisions.',
  intro: '...',
  location: 'Greater Toronto Area, Canada',
  links: {
    email: 'mailto:you@example.com',
    linkedin: 'https://www.linkedin.com/in/your-handle',
    github: 'https://github.com/your-handle',
    resume: '/resume.pdf',
  },
  contactBlurb: '...',
}
```

### 2. `src/data/projects.js`
Each project is an object in the `projects` array. To add a new project,
copy an existing entry and change the fields. The Projects page
auto-generates category filters from the `category` field.

```js
{
  id: 'unique-slug',
  title: 'Project Title',
  category: 'Real Estate',
  shortDescription: '...',
  tools: ['Tableau', 'SQL'],
  liveUrl: 'https://...',   // Live Demo button
  repoUrl: 'https://...',   // GitHub / Case Study button
  featured: true,           // shows on the Home page
  accent: 'lavender',       // 'lavender' | 'sunbeam' | 'mixed'
}
```

### 3. Portrait photo
Drop a file named `portrait.jpg` into `/public`.
If no file is present, the page falls back to a soft gradient placeholder.

### 4. Resume
Drop a file named `resume.pdf` into `/public` so the Resume button works.

### 5. Colors, fonts, spacing
Tune design tokens in `tailwind.config.js` → `theme.extend.colors`,
`fontFamily`, `boxShadow`, etc. Everything cascades through the app.

---

## Deployment

### Vercel (easiest)
1. Push the repo to GitHub.
2. On [vercel.com](https://vercel.com), click **Add New → Project**, import
   the repo, and accept the defaults (Vite is auto-detected).
3. Deploy. You'll get a `*.vercel.app` URL in about a minute.

No config changes required — `vite.config.js` defaults to `base: '/'`.

### GitHub Pages
1. Install the Pages helper: `npm install --save-dev gh-pages`
   *(already listed as a devDependency).*
2. In `vite.config.js`, set `base: '/your-repo-name/'` so asset paths match
   the subpath served by GitHub Pages.
3. In `src/main.jsx`, change `<BrowserRouter>` to
   `<BrowserRouter basename="/your-repo-name">` for client-side routing.
4. Deploy:
   ```bash
   npm run deploy
   ```
5. In your repo settings, under **Pages**, point the source at the
   `gh-pages` branch.

---

## Design Notes

- **Typography**: Fraunces (display serif) for headlines · Inter (sans) for body.
- **Palette**: warm ivory base (`#FDFCFA`), soft lavender accent, buttery sunbeam yellow.
- **Motion**: subtle — fade-ups on load, hover lift + shadow on cards, underline
  grow on nav links. Nothing flashy.
- **Responsive**: single-column under 768px, 2/3-column grids above.
- **Accessibility**: visible focus rings, semantic headings, `aria-label`s on
  icon-only buttons, sufficient contrast on both lavender and sunbeam tones.

---

## Next ideas (optional)

- Add a blog (`/writing`) by dropping MDX support into Vite.
- Swap the pure-CSS `DashboardMock` for real screenshots of your dashboards
  — just replace the component body with `<img src="..." />`.
- Wire the Contact page to Formspree or Resend for a real message form.
