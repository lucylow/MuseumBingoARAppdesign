# Museum Bingo AR App Design

Museum Bingo AR is a Figma-generated Vite + React + TypeScript code bundle that turns a museum visit into a playful scavenger-hunt experience with camera-assisted discovery, guided onboarding, rewards, and a VR mode for immersive exploration. The repository’s public README states that this is a code bundle for the Museum Bingo AR App Design and that the project is run by installing dependencies with `npm i` and starting the dev server with `npm run dev`. :contentReference[oaicite:1]{index=1}

---

## Table of Contents

- [Overview](#overview)
- [Product Vision](#product-vision)
- [Repository Structure](#repository-structure)
- [App Architecture](#app-architecture)
- [Navigation and Routes](#navigation-and-routes)
- [State Model](#state-model)
- [Screen-by-Screen Guide](#screen-by-screen-guide)
- [Technical Diagrams](#technical-diagrams)
- [Getting Started](#getting-started)
- [Development Notes](#development-notes)
- [Extending the App](#extending-the-app)
- [Accessibility and UX Considerations](#accessibility-and-ux-considerations)
- [Known Gaps and Next Steps](#known-gaps-and-next-steps)
- [License / Attribution](#license--attribution)

---

## Overview

Museum Bingo AR is designed to make museum exploration feel like a game. Users enter through an immersive welcome screen, pick a museum, then move through a guided experience that can include camera-based discovery, hints, rewards, leaderboards, settings, and a VR gallery mode. The current `App.tsx` uses React state to switch between the welcome flow, museum selection, VR mode, and a router-based mobile app shell. :contentReference[oaicite:2]{index=2}

The experience is intentionally modular. Each major screen is isolated as a component, which makes the app easier to extend, test, and redesign without rewriting the entire flow. The current router imports dedicated components for welcome, museum selection, home, camera, camera onboarding, camera settings, hints, rewards, leaderboard, settings, bottom navigation, VR gallery, VR mode toggle, VR comfort settings, multiplayer room, and celebration. :contentReference[oaicite:3]{index=3}

---

## Product Vision

The app blends three ideas:

1. **Museum exploration** — users move through exhibits and discover artworks or clues.
2. **Game mechanics** — users collect items, earn rewards, and possibly compare progress.
3. **Immersive experiences** — VR mode offers a parallel gallery flow for more immersive interaction. :contentReference[oaicite:4]{index=4}

The result is a museum companion that feels less like a utility app and more like a guided adventure.

---

## Repository Structure

The repository is organized as a generated frontend bundle. The live GitHub repository currently shows a `src` directory, a top-level `README.md`, and supporting files such as `package.json`, `vite.config.ts`, and styling/configuration assets. The repository is also marked as generated from `figma/repo-template`. :contentReference[oaicite:5]{index=5}

A practical high-level structure looks like this:

```text
MuseumBingoARAppdesign/
├── src/
│   ├── app/
│   │   └── App.tsx
│   └── components/
├── README.md
├── package.json
├── vite.config.ts
├── postcss.config.mjs
└── ...
