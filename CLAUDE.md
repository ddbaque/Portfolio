# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for David Denis Baque Pincay. Built with Astro 4, Tailwind CSS 3, and TypeScript. Content is in Spanish. Deployed to GitHub Pages at `https://ddbaque.github.io/Portfolio/`.

## Commands

- **Dev server:** `npm run dev`
- **Build:** `npm run build` (runs `astro check` then `astro build`)
- **Preview production build:** `npm run preview`
- **Format:** `npx prettier --write .` (prettier + prettier-plugin-astro)

There are no test or lint scripts configured.

## Architecture

Single-page Astro site with section-based layout:

- `src/pages/index.astro` — Single entry page composing all sections
- `src/layouts/Layout.astro` — HTML shell, loads Onest font, renders sticky Header + slot
- `src/components/sections/` — Top-level page sections (Presentation, Projects, Experience, Skills, Contact)
- `src/components/Icons/` — SVG icon components (one per file)
- `src/components/` — Reusable UI components (Badge, SkillCard, ExperienceCard, PorjectCard, HeaderOption, buttons/)

## Data Flow

Project and experience content is driven by JSON files with TypeScript types:

- `src/data/projects.json` — Project entries (title, description, imageUrl, technologies, links)
- `src/data/experience.json` — Work experience entries (time, position, description, company)
- `src/types/data.ts` — `ProjectData` interface

To add a new project or experience, edit the corresponding JSON file. Project images go in `public/assets/`.

## Styling

- Tailwind CSS with custom color palette defined in `tailwind.config.mjs` (custom-pink, custom-purple, custom-indigo, custom-blue, custom-teal, custom-black, custom-gray, custom-darkGray, custom-lightGray, custom-lightPink, custom-lightViolet, custom-violet)
- Global styles in `public/global.css`
- Responsive breakpoint: mobile-first with `sm:` (960px content width)

## Deployment

- GitHub Pages with base path `/Portfolio/` (configured in `astro.config.mjs`)
- All asset URLs must be prefixed with `/Portfolio/` (e.g., `/Portfolio/assets/image.png`)
