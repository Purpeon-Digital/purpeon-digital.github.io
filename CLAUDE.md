# CLAUDE.md

Guidelines for working with this codebase.

## Project Overview

Astro 5 website with Vue 3 components for Purpeon Digital IT consulting.

## Tech Stack

- **Framework**: Astro 5
- **UI Components**: Vue 3 with `<script setup>` and TypeScript
- **Package Manager**: Bun - always use bun commands!
- **Styling**: Global CSS with CSS custom properties (variables)
- **Theme**: Light/dark mode via `data-theme` attribute on `<html>`

## Key Patterns

### Vue Components
- Use `<script setup lang="ts">` for all components
- Static components render server-side (no directive needed)
- Interactive components use `client:load` in Astro pages

### Styling
- All styles in `src/styles/global.css`
- CSS variables defined in `:root` and `[data-theme="dark"]`
- Mobile-first responsive design with breakpoints at 768px and 480px

### File Organization
- Pages: `src/pages/*.astro`
- Components: `src/components/*.vue`
- Layouts: `src/layouts/*.astro`
- Static assets: `public/`

## Commands

```bash
bun dev      # Development server
bun run build    # Production build
bun preview  # Preview production build
```

## Path Aliases

`@/*` maps to `src/*` (configured in tsconfig.json)
