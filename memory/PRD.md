# PRD — Gopikrishna Rajendran ePortfolio

## Problem Statement
Rebuild an outdated GitHub-pages portfolio (https://gkrishna4346.github.io/gk-master-repo/) into a premium, modern ePortfolio. User chose: sleek dark Data/Tech theme, working contact form, Academic Projects gated behind a 4-digit PIN.

## Stack
React (CRA + craco) + FastAPI + MongoDB. Single page at route `/`.
Motion: framer-motion + lenis smooth scroll. Fonts: Cabinet Grotesk (display), JetBrains Mono (accent), IBM Plex Sans (body).

## User / Persona
Gopikrishna Rajendran — Assistant Manager, AIML Business Analyst, Capacity Planning, 17+ yrs ITES (TCS, Cognizant, Oracle, RNTBCI, HSBC). PGP AIML @ UT Austin/Great Lakes.

## Core Requirements (static)
- Kinetic hero w/ real headshot, stat strip
- About/profile + languages + education
- Skills (terminal UI) / Experience timeline / Live projects (9) 
- Academic vault (13 items) PIN-gated (PIN=4346 via backend ACADEMIC_PIN env)
- Manifesto + marquee, Pipeline tabs (Projects/Games/Hobbies)
- Contact form -> MongoDB (POST/GET /api/contact) + socials + resume

## Implemented (2026-07-26)
- Full single-page portfolio, all sections above. Backend: /api/verify-pin, /api/contact (POST/GET). 100% backend+frontend tests passed (iteration_1).
- Headshot cropped from user's provided screenshot -> /app/frontend/src/assets/headshot.png

## Backlog / Next
- P1: Admin-only inbox view to read contact messages in-app.
- P1: SEO meta/OpenGraph + favicon with initials.
- P2: Light/dark toggle; blog/notes section; per-project detail modal.
- P2: Real Streamlit thumbnails for project cards.
