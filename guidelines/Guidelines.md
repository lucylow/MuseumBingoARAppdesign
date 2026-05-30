# Museum.Bingo VR — Design Guidelines

## Aesthetic Stance
**Swiss Spatial** — Clean, precise, grid-aligned UI with immersive 3D depth. Minimal overlays that float in space, allowing the museum environment to remain visible. Function-first design with subtle spatial effects.

## Typography
- **Display**: DM Sans (bold, geometric clarity for VR readability)
- **Body**: Inter (neutral, highly legible in varying light conditions)
- **Mono**: JetBrains Mono (spatial coordinates, technical data)

## Color System
**Dark Gallery Ground** — Deep blue-black backgrounds simulate museum gallery lighting
- Background: `#050a14` (deep space)
- Foreground: `#e8f0ff` (bright, readable white)
- Primary: `#3b82f6` → `#06b6d4` (blue-cyan gradient, AR/VR indicator)
- Accent: `#10b981` (emerald, success/match states)
- Warning: `#f59e0b` (amber, proximity/heat vision)
- Muted: `#1e3a5f` (subtle surfaces)

## Spatial Design Principles

### VR Comfort
- Large touch targets (min 44x44px, prefer 56x56px)
- High contrast text (WCAG AAA preferred)
- Minimal motion by default, opt-in for immersive parallax
- Comfort mode: reduced animations, static backgrounds
- Clear focus indicators for gaze-based selection

### Floating UI
- Cards and buttons float with subtle depth shadows
- Glassmorphic surfaces with backdrop blur
- Radial gradients for spotlight effects
- Soft elevation with multiple shadow layers
- Depth cues via parallax on gyroscope movement

### Museum Visual Language
- Framed artwork cards (border glow, museum-style matting)
- Soft spotlight halos around active elements
- Compass rings and directional arrows
- Spatial bingo chips that animate into 3D position
- Subtle scan lines and AR overlays
