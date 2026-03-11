# Sherif Aboraya — Portfolio

My personal developer portfolio showcasing 3+ years of frontend experience building modern web applications for government and enterprise clients across Egypt, Kuwait, Denmark, and Dubai.

**Live:** [sherifaboraya.dev](https://sherifaboraya.dev) _(update with your actual URL)_

## Highlights

- Interactive particle constellation background with mouse interaction
- Typewriter effect cycling through roles
- 3D tilt project cards with spotlight hover tracking
- Photo with orbiting tech labels and animated gradient ring
- Animated stat counters, scroll progress bar, and floating glassmorphism nav
- Unique accent color per section (cyan → emerald → violet → amber → rose)
- Fully responsive

## Tech Stack

- **Vue 3** + **TypeScript**
- **Vite**
- **Tailwind CSS v4**

## Getting Started

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

## Project Structure

```
src/
├── components/
│   ├── HeroSection.vue         # Landing with particles, photo, typing effect
│   ├── ExperienceSection.vue   # Work history timeline
│   ├── ProjectsSection.vue     # Project cards with screenshots & 3D tilt
│   ├── SkillsSection.vue       # Categorized skills with floating tags
│   ├── ContactSection.vue      # Contact info & CTA
│   ├── FooterSection.vue
│   ├── ParticleCanvas.vue      # Canvas-based interactive particles
│   ├── ScrollProgress.vue      # Top scroll progress bar
│   └── FloatingNav.vue         # Glassmorphism sticky nav
├── composables/
│   ├── useScrollAnimation.ts   # Intersection Observer scroll reveals
│   └── useTypingEffect.ts      # Typewriter composable
└── style.css                   # Global styles, gradient utilities, effects
```

## License

MIT
