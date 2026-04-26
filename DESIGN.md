# Design Brief

## Direction

Serene Professional — A clean, trustworthy local tuition center website with light, airy aesthetics and confident typography.

## Tone

Calm, approachable, professional education tech — not flashy, but confident and accessible to students and parents.

## Differentiation

Prominent, warm-teal highlighted contact number paired with ocean-blue primary actions creates a memorable, action-oriented focal point.

## Color Palette

| Token      | OKLCH           | Role                          |
| ---------- | --------------- | ----------------------------- |
| background | 0.98 0.008 230  | Cool cream off-white          |
| foreground | 0.18 0.015 230  | Deep blue-grey text           |
| card       | 1.0 0.004 230   | Pure white section containers |
| primary    | 0.42 0.14 240   | Deep ocean blue CTAs          |
| accent     | 0.6 0.15 170    | Warm teal highlights          |
| muted      | 0.94 0.01 230   | Light grey secondary areas    |

## Typography

- Display: Space Grotesk — Modern, geometric sans-serif for headings, tuition center name, hero text. Creates confident, contemporary feel.
- Body: DM Sans — Friendly, highly readable sans-serif for all body text, labels, and descriptions.
- Scale: Hero `text-5xl md:text-7xl font-bold tracking-tight`, h2 `text-3xl md:text-5xl font-bold tracking-tight`, label `text-sm font-semibold uppercase`, body `text-base md:text-lg`

## Elevation & Depth

White cards (bg-card) on cream background with subtle borders; no shadows to maintain clean, airy aesthetic. Visual separation through color and borders only.

## Structural Zones

| Zone    | Background            | Border           | Notes                                      |
| ------- | --------------------- | ---------------- | ------------------------------------------ |
| Header  | Primary blue gradient  | None             | Hero section with tuition name, tagline    |
| Content | Cream background      | Light blue-grey  | Alternating white cards and cream sections |
| Footer  | Muted light blue-grey | Top border only  | Contact info, location, phone highlighted |

## Spacing & Rhythm

Spacious layout with consistent 2rem (32px) gaps between major sections on mobile, 3rem (48px) on desktop. Cards use 1.5rem (24px) internal padding, content groups use 1rem (16px) micro-spacing.

## Component Patterns

- Buttons: Rounded 8px, deep ocean blue background, white text, hover opacity reduction (90%)
- Cards: 8px rounded corners, white background, subtle light border, no shadow
- Badges: Warm teal background, small rounded, used for class levels and highlights
- Contact number: Bold, large (text-3xl), warm teal accent color, click-to-call link

## Motion

- Entrance: Fade-in on scroll (opacity transition 0.3s)
- Hover: Button opacity 90%, card border brightens slightly
- Decorative: None (kept minimal per professional education context)

## Constraints

- No complex animations or transitions beyond opacity and color
- Maintain high contrast for readability (WCAG AA+)
- All interactive elements have clear focus states
- Mobile-first responsive (320px to 1400px max width)

## Signature Detail

Warm teal accent color (hue 170) applied exclusively to contact phone number and key call-to-action highlights creates an intuitive visual hierarchy where the most important action (contact) stands out without overwhelming the calm, professional aesthetic.
