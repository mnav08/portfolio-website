# Portfolio Website — Phase 1 Requirements

> **Type:** Single-page portfolio site  
> **Developer level:** Intermediate  
> **Goal:** First stone — clean, functional foundation to build on later

---

## Sections & Features

### body
- scroll directly to the start of the next section

### 1. Navbar
- Sticky on scroll once reached certain point
- Links to: About | Tech Stack | Projects | Contact
- Logo: initials (e.g. `YN.`) in accent color
- Smooth scroll to each section on click

### 2. Hero
- Developer name (large, serif font)
- Short tagline: one sentence, honest and human
- Comment-style availability tag: `// available for opportunities`
- Photo / avatar (right side, left-aligned layout)
- CTA buttons: **View Projects** (primary) + **GitHub ↗** + contact me 

### 3. About Me
- 2–3 sentences: who you are, what you enjoy about dev
- "Currently learning" badge (e.g. `🔧 Currently learning: React`)
- skills and tech stack that change content of section when clicked

### 4. Tech Stack
- Icon/pill grid
- Skills to include: HTML, CSS, JavaScript, DOM Manipulation, Responsive Design, Web accessibility

### 5. Projects
- grid
- Each card includes:
  - screenshot of project
  - Project title
  - Tech tags (pills)
  - img overlay: Link to live site and/or GitHub repo


### 6. Contact
- Short call-to-action line (e.g. "Let's build something together.")
- contact form 
- - GitHub, email, linkedin, front end mentor

### 7. Footer
- Copyright line


---

## Tech Constraints

| Area | Decision |
|---|---|
| Stack | Vanilla HTML, CSS, JavaScript |
| JS scope | DOM manipulation only (no frameworks) |
| Layout | Responsive (mobile-first) |
| Dependencies | None — zero external libraries required |
| File structure | Single `index.html` + `style.css` + `script.js` |

---

## Design System

### Color Palette

| Role | Name | Hex |
|---|---|---|
| Background | Deep Charcoal | `#1a1a1a` |
| Surface | Elevated Dark | `#222222` |
| Surface Alt | Card Background | `#242424` |
| Border | Subtle | `#2e2e2e` |
| Border Alt | Hover | `#3a3a3a` |
| Accent | Amber Gold | `#E8C870` |
| Text Primary | Off-White | `#f0ede6` |
| Text Secondary | Muted Gray | `#aaaaaa` |
| Text Dim | Dimmed | `#777777` |
| Text Ghost | Faint | `#555555` |

> **Rule:** Use the amber gold sparingly — logo, section labels, badges, tags, and interactive highlights only. Let the dark tones breathe.

### Typography

| Role | Font | Style | Size |
|---|---|---|---|
| Name / Hero Heading | Georgia (serif) | Bold | `~2rem` |
| Section Labels | Monospace (system) | Regular | `0.6rem`, uppercase, tracked |
| Body Text | System sans-serif | Regular | `0.85rem`, line-height `1.7` |
| Buttons & Tags | Monospace (system) | Medium | `0.65rem`, tracked |
| Nav Links | Monospace (system) | Regular | `0.7rem` |

**Font stack suggestions (no external dependencies):**

```css
/* Heading — name only */
font-family: Georgia, 'Times New Roman', serif;

/* UI labels, buttons, nav, tags */
font-family: 'Courier New', Courier, monospace;

/* Body text — about, project descriptions */
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

> **Why this pairing:** The serif name creates personality and contrast. Monospace labels speak the developer's native language. System sans-serif keeps body text readable without loading any external fonts — zero performance cost.

### Spacing & Layout

| Token | Value |
|---|---|
| Section padding | `60px` vertical, `24px` horizontal |
| Card padding | `14px 16px` |
| Card border-radius | `8px` |
| Grid gap (projects) | `12px` |
| Nav height | `~48px` |
| Max content width | `900px` centered |

### Component Notes

- **Navbar:** `position: sticky; top: 0;` with `background: #1a1a1a` and a bottom border `0.5px solid #2e2e2e`
- **Section labels:** Uppercase monospace + trailing horizontal rule via `::after` pseudo-element
- **Buttons:** Primary = amber bg + dark text; Ghost = transparent + muted border
- **Badge:** Pill shape, `border-radius: 20px`, amber text on dark surface

---

## Page Structure (HTML skeleton outline)

```
index.html
├── <header> — Navbar
├── <main>
│   ├── <section id="hero">
│   ├── <section id="about">
│   ├── <section id="stack">
│   ├── <section id="projects">
│   └── <section id="contact">
└── <footer>
```

---

## Next Steps (Phase 2)

- [ ] Write HTML skeleton (`index.html`)
- [ ] Set up CSS variables for the design system
- [ ] Style navbar and hero section
- [ ] Build remaining sections
- [ ] Add scroll behavior via JavaScript
- [ ] Responsive breakpoints (mobile-first)
- [ ] Deploy to GitHub Pages
