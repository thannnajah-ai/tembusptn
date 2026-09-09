# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** TembusPTN
**Generated:** 2026-09-09 13:34:08
**Category:** Educational App

---

## Global Rules

### Color Palette (Academic Royal Cobalt & Focus Gold)

| Role | Hex | CSS Variable | Tailwind Class |
|------|-----|--------------|----------------|
| Primary | `#2563EB` | `--primary` | `primary-600` / `indigo-600` |
| Primary Hover | `#1D4ED8` | `--primary-hover` | `primary-700` / `indigo-700` |
| Primary Subtle | `#EFF6FF` | `--primary-subtle` | `primary-50` / `indigo-50` |
| Accent / CTA | `#F59E0B` | `--accent` | `amber-500` |
| Accent Hover | `#D97706` | `--accent-hover` | `amber-600` |
| Success | `#10B981` | `--success` | `emerald-500` |
| Destructive | `#EF4444` | `--danger` | `rose-500` / `red-500` |
| Dark Canvas | `#080C14` | `--bg-dark-base` | `slate-950` |
| Dark Surface | `#0B0F19` | `--bg-dark-surface`| `slate-900` |
| Light Canvas | `#F8FAFC` | `--bg-light-base`| `slate-50` |
| Focus Ring | `#2563EB` | `--ring` | `ring-primary` |

**Color Notes:** Academic Royal Cobalt (`#2563EB`) gives authoritative scholastic presence; Focus Amber/Gold (`#F59E0B`) highlights streaks, badges, and CTAs; Deep Obsidian (`#080C14`) provides fatigue-free dark mode reading for extended CBT drills.

### Typography

- **Heading Font:** Outfit (`font-heading`, bold, geometric, authoritative)
- **Body & Stimulus Font:** Plus Jakarta Sans (`font-body`, high x-height, `line-height: 1.6–1.7`, optimal long-text readability)
- **Monospace / Timer Font:** JetBrains Mono (`font-mono`, timer, stats, tabular numbers)
- **Mood:** Scholastic rigor, ergonomic CBT reading, distraction-free
- **Google Fonts:** [Outfit + Plus Jakarta Sans + JetBrains Mono](https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500;600;700&family=Outfit:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap)

**CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600;700&family=Outfit:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
```

### Spacing Variables

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | Tight gaps |
| `--space-sm` | `8px` / `0.5rem` | Icon gaps, inline spacing |
| `--space-md` | `16px` / `1rem` | Standard padding |
| `--space-lg` | `24px` / `1.5rem` | Section padding |
| `--space-xl` | `32px` / `2rem` | Large gaps |
| `--space-2xl` | `48px` / `3rem` | Section margins |
| `--space-3xl` | `64px` / `4rem` | Hero padding |

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.1)` | Cards, buttons |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Modals, dropdowns |
| `--shadow-xl` | `0 20px 25px rgba(0,0,0,0.15)` | Hero images, featured cards |

---

## Component Specs

### Buttons

```css
/* Primary Button */
.btn-primary {
  background: #2563EB;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}

.btn-primary:hover {
  background: #1D4ED8;
  transform: translateY(-1px);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: #2563EB;
  border: 1.5px solid #2563EB;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}

.btn-secondary:hover {
  background: #EFF6FF;
}
```

### Cards

```css
.card {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  padding: 24px;
  box-shadow: var(--shadow-sm);
  transition: all 200ms ease;
}

.dark .card {
  background: #0B0F19;
  border-color: #1E293B;
}

.card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}
```

### Inputs

```css
.input {
  padding: 12px 16px;
  border: 1px solid #CBD5E1;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 200ms ease;
}

.input:focus {
  border-color: #2563EB;
  outline: none;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
}
```

### Modals

```css
.modal-overlay {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.modal {
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: var(--shadow-xl);
  max-width: 500px;
  width: 90%;
}
```

---

## Style Guidelines

**Style:** Educational Platform (UI/UX Pro Max)

**Keywords:** Academic rigor, editorial precision, high-contrast clarity, distraction-free CBT drills, crisp typography, subtle elevation

**Best For:** CBT/CAT computer-based testing, SNBT-UTBK simulations, scholastic study platforms, interactive score reports

**Key Effects:** Tactile button clicks (`transform: translateY(1px)` / `scale(0.98)`), accessible focus outlines (`:focus-visible`), fluid dark/light mode transitions, tabular numbers for timers and score tables

### Page Pattern

**Pattern Name:** Educational Command Center & CBT Exam Hall

- **Conversion Strategy:** Clear academic hierarchy. Focus on active practice (Drill Kilat, Simulasi CBT UTBK). High-visibility stats (Streak, XP, Target PTN).
- **CTA Placement:** Quick Drill CTA on Dashboard, Persistent CBT floating controls during simulation, Sticky Action bar on Score Cards
- **Section Order:** Sticky Scholastic Navbar > Hero / Progress Command Center > Active Practice Modes > Analytics & History > Leaderboard & Target Explorer

---

## Anti-Patterns (Do NOT Use)

- ❌ Low-contrast text (< 4.5:1 ratio)
- ❌ Distracting decorative clutter during CBT exams
- ❌ Non-tabular numbers for timers and score matrices

### Additional Forbidden Patterns

- ❌ **Emojis as icons** — Use SVG icons (Heroicons, Lucide, Simple Icons)
- ❌ **Missing cursor:pointer** — All clickable elements must have cursor:pointer
- ❌ **Layout-shifting hovers** — Avoid scale transforms that shift layout
- ❌ **Low contrast text** — Maintain 4.5:1 minimum contrast ratio
- ❌ **Instant state changes** — Always use transitions (150-300ms)
- ❌ **Invisible focus states** — Focus states must be visible for a11y

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set (Heroicons/Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbars
- [ ] No horizontal scroll on mobile
