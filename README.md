# Deena T A — Personal Portfolio

A minimal, editorial portfolio built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

---

## Stack

- **React 18** + **TypeScript**
- **Vite 5** — fast builds and dev server
- **Tailwind CSS 3** — utility styling
- **Framer Motion 11** — animations
- **Cormorant Garamond** + **DM Sans** — typography

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm

### Install & Run

```bash
# Clone the repo
git clone https://github.com/deena19liebert/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## Project Structure

```
src/
├── components/         # One file per section
│   ├── ProgressBar.tsx
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Curiosities.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Questions.tsx
│   ├── Beyond.tsx
│   ├── Achievements.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/
│   └── content.ts      # All text content — edit here
├── hooks/
│   ├── useScrollProgress.ts
│   └── useInView.ts
├── types/
│   └── index.ts
├── App.tsx
├── main.tsx
└── index.css
public/
├── favicon.svg
└── photo.jpg           # ← add your photo here
```

---

## Customization

### Updating content
All text lives in `src/data/content.ts`. Edit that file to:
- Add projects
- Update achievements
- Change curiosity cards
- Modify questions

### Adding your photo
1. Add your photo as `public/photo.jpg`
2. In `src/components/Hero.tsx`, replace the placeholder `<p>` with:
```tsx
<img
  src="/photo.jpg"
  alt="Deena T A"
  style={{
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    inset: 0,
  }}
/>
```

### Adding your resume
Place your resume PDF as `public/resume.pdf` — the "Download Resume" button links there automatically.

### Updating colors
CSS variables are in `src/index.css` under `:root`. The main accent is `--accent: #c17f4a`.

---

## Build for Production

```bash
npm run build
# Output is in /dist
```

---

## Deploy to Vercel (Recommended)

1. Push the repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repo
4. Vercel auto-detects Vite — click Deploy

**Done.** Your site is live.

### Deploy to GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "gh-pages -d dist"

# Add to vite.config.ts:
# base: '/your-repo-name/'

npm run build
npm run deploy
```

---

## SEO

Meta tags are in `index.html`. Update:
- `<title>` — your name and tagline
- `<meta name="description">` — 1-2 sentence bio
- `<meta property="og:url">` — your live URL

---

## Commit Message Convention

```
feat: add [section name]
fix: [what was broken]
content: update [what changed]
style: [visual tweak]
```

---

*Built with curiosity.*
