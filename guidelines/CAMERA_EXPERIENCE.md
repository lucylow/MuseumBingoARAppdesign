# Camera Experience Design

## Overview
The camera is the core feature of Museum.Bingo, designed to make scanning artwork feel instant, reliable, and exciting.

## Camera States

### 1. Idle State
- Clean viewfinder with subtle guide frame
- "Point camera at artwork" helper text
- Frame corners in blue (#3b82f6)
- Minimal UI to keep focus on artwork

### 2. Focusing State
- Pulsing cyan frame borders
- "Focusing..." message with spinner
- Frame scales slightly (breathing effect)
- Prepares user for scanning

### 3. Scanning State
- Animated scan line moving vertically
- Cyan gradient borders (#06b6d4)
- Bottom status card with:
  - Artwork name
  - Confidence percentage
  - Animated progress bar
  - "Analyzing artwork..." text

### 4. Matched State
- Green frame borders (#10b981)
- Success glow effect
- "Match Confirmed!" message
- 96% confidence display
- Confirm/Retake action buttons

### 5. Low Confidence State
- Amber/orange warning color
- Helpful suggestions:
  - "Move closer"
  - "Reduce glare"
  - "Enable flash"
- Distance/lighting hints

### 6. Error State
- Red accent for critical errors
- Clear error messages
- Retry action button
- Helpful recovery suggestions

## UI Components

### Frame Guides
- Large corner brackets (16x16px, 4px border)
- Rounded corners for friendly feel
- Dynamic colors based on state
- 80x440px frame area

### Status Cards
- Glassmorphic design (backdrop-blur-2xl)
- Gradient backgrounds per state
- Icon + text + progress layout
- Bottom-anchored (32px from bottom)

### Action Buttons
- Large touch targets (py-5, py-4)
- Gradient backgrounds
- Shadow effects matching state color
- Clear labels: "Scan", "Confirm", "Retake"

### Top Controls
- Minimal corner placement
- Close (X), Flash, Help icons
- 44x44px touch targets
- Black/60 backdrop blur

## Visual Feedback

### Colors by State
- Idle: Blue (#3b82f6)
- Focusing: Cyan (#06b6d4)
- Scanning: Cyan gradient
- Matched: Emerald (#10b981)
- Warning: Amber (#f59e0b)
- Error: Red (#ef4444)

### Animations
- Scan line: 2s linear loop
- Focus pulse: 1.5s ease-in-out
- Success glow: fade-in 0.4s
- Button press: scale 0.98

### Audio/Haptic (Visual Indicators)
- Vibration icon for haptic confirmation
- Sound wave for audio feedback
- Represented in settings UI

## Accessibility

### Contrast
- WCAG AAA preferred for text
- High contrast mode available
- Works in dim gallery lighting

### Touch Targets
- Minimum 44x44px
- Generous spacing
- One-hand thumb reach

### Feedback
- Visual (color, animation)
- Optional haptic
- Optional sound
- Clear text labels

## Camera Settings

### Performance
- Scan Speed slider (0-100)
  - 0-40: Careful (more accurate)
  - 40-70: Balanced
  - 70-100: Fast (quicker results)

### Feedback
- Haptic vibration toggle
- Sound effects toggle

### Behavior
- Auto-scan toggle
- High contrast mode
- Flash default setting

## Best Practices

1. **Frame the artwork fully** - Guide users to center
2. **Hold steady** - Show focusing state
3. **Good lighting** - Flash helper available
4. **Clear confirmation** - Explicit match state
5. **Easy retry** - Always offer retake option
