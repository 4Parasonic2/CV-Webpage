# Theme Archive

Every color/font theme this site has had, in order. To bring one back,
copy its CSS block over the contents of `src/styles/variables.css`
(everything except the Layout/Spacing section, which never changed),
and update the Google Fonts `<link>` in `index.html` if the theme uses
different fonts.

Current live theme: **5. Earthy (parchment / forest / terracotta)**.

---

## 1. Original — dark purple starfield

Dark-only theme (no light/dark toggle yet). Fonts: **Poppins** (headings) + **Inter** (body).

Fonts link for `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@500;600;700;800&display=swap" rel="stylesheet" />
```

```css
:root {
  /* Backgrounds (dark navy/near-black) */
  --bg: #0b0a12;
  --bg-elevated: #14121f;
  --bg-elevated-2: #1b1830;

  /* Brand accents */
  --accent: #b45eff;          /* primary purple/violet      */
  --accent-strong: #9333ea;   /* deeper purple for buttons  */
  --accent-soft: rgba(180, 94, 255, 0.14);
  --cream: #eed7ae;           /* warm cream secondary accent */

  /* Text */
  --text: #e9e6f2;
  --text-muted: #9a93b0;

  /* Borders */
  --border: rgba(180, 94, 255, 0.16);
  --border-strong: rgba(180, 94, 255, 0.4);

  /* Typography */
  --font-heading: 'Poppins', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;

  /* Effects */
  --shadow-card: 0 10px 30px rgba(0, 0, 0, 0.35);
  --glow-accent: 0 0 24px rgba(180, 94, 255, 0.35);
}
```

Note: this era also had an animated starfield background (tiny radial-gradient
"stars" with a twinkle animation) in `global.css` — the current `.starfield`
element is a plain radial wash instead.

---

## 2. Azure light/dark (Lovable era)

First theme with the light/dark toggle. Fonts: **Space Grotesk** (headings) + **Inter** (body).

Fonts link for `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
```

```css
:root,
:root[data-theme='light'] {
  --bg: #f8fafc;
  --bg-elevated: #ffffff;
  --bg-elevated-2: #eef4fb;

  --accent: #0ea5e9;          /* primary azure               */
  --accent-strong: #0369a1;
  --accent-2: #6366f1;        /* indigo, for gradients       */
  --accent-soft: rgba(14, 165, 233, 0.12);
  --cream: #0f172a;

  --text: #0f172a;
  --text-muted: #475569;

  --border: rgba(15, 23, 42, 0.10);
  --border-strong: rgba(3, 105, 161, 0.45);

  --shadow-card: 0 10px 30px rgba(15, 23, 42, 0.08);
  --glow-accent: 0 0 24px rgba(14, 165, 233, 0.22);
}

:root[data-theme='dark'] {
  --bg: #0f172a;
  --bg-elevated: #111f36;
  --bg-elevated-2: #17243d;

  --accent: #38bdf8;
  --accent-strong: #0ea5e9;
  --accent-2: #818cf8;
  --accent-soft: rgba(56, 189, 248, 0.14);
  --cream: #f1f5f9;

  --text: #e2e8f0;
  --text-muted: #94a3b8;

  --border: rgba(148, 163, 184, 0.18);
  --border-strong: rgba(56, 189, 248, 0.45);

  --shadow-card: 0 10px 30px rgba(0, 0, 0, 0.45);
  --glow-accent: 0 0 24px rgba(56, 189, 248, 0.35);
}

:root {
  --font-heading: 'Space Grotesk', 'Inter', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
}
```

---

## 3. Editorial — cream / ink / indigo (Playfair serif)

Print-magazine look: warm cream canvas, near-black ink, indigo accent,
big **Playfair Display** serif-italic display type.

Fonts link for `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,600;1,700&display=swap" rel="stylesheet" />
```

```css
:root,
:root[data-theme='light'] {
  --bg: #f5f5f0;              /* canvas — warm paper cream    */
  --bg-elevated: #ffffff;
  --bg-elevated-2: #eeede6;

  --accent: #4f46e5;          /* primary indigo               */
  --accent-strong: #4338ca;
  --accent-2: #6366f1;
  --accent-soft: rgba(79, 70, 229, 0.10);

  --ink: #1a1a1a;
  --text: #1a1a1a;
  --text-muted: rgba(26, 26, 26, 0.62);
  --cream: #1a1a1a;

  --border: rgba(26, 26, 26, 0.12);
  --border-strong: rgba(79, 70, 229, 0.45);

  /* Contrast band for the full-bleed contact CTA */
  --band-bg: #1a1a1a;
  --band-text: #f5f5f0;

  --shadow-card: 0 12px 34px rgba(26, 26, 26, 0.10);
  --glow-accent: 0 0 24px rgba(79, 70, 229, 0.22);
}

:root[data-theme='dark'] {
  --bg: #1a1a1a;
  --bg-elevated: #232323;
  --bg-elevated-2: #2c2c2c;

  --accent: #818cf8;
  --accent-strong: #6366f1;
  --accent-2: #a5b4fc;
  --accent-soft: rgba(129, 140, 248, 0.16);

  --ink: #f5f5f0;
  --text: #f5f5f0;
  --text-muted: rgba(245, 245, 240, 0.60);
  --cream: #f5f5f0;

  --border: rgba(245, 245, 240, 0.14);
  --border-strong: rgba(129, 140, 248, 0.45);

  --band-bg: #f5f5f0;
  --band-text: #1a1a1a;

  --shadow-card: 0 12px 34px rgba(0, 0, 0, 0.45);
  --glow-accent: 0 0 24px rgba(129, 140, 248, 0.35);
}

:root {
  --font-display: 'Playfair Display', Georgia, 'Times New Roman', serif;
  --font-heading: 'Inter', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
}
```

Design notes from this era: huge serif-italic hero headline
(`clamp(3rem, 9vw, 7.5rem)`, line-height 0.92) with the "&" upright in
accent color, 4:5 portrait, hairline dividers, and a full-bleed dark
"Let's build something remarkable." contact band using the `--band-*` tokens.

---

## 4. Editorial azure — cream / ink / azure blue

Same editorial layout as 3, with the indigo swapped for azure and the
serif display font replaced by compact Inter headings.

Fonts link for `index.html` (Inter only):

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

```css
:root,
:root[data-theme='light'] {
  --bg: #f5f5f0;
  --bg-elevated: #ffffff;
  --bg-elevated-2: #eeede6;

  --accent: #0ea5e9;          /* primary azure                */
  --accent-strong: #0369a1;
  --accent-2: #38bdf8;
  --accent-soft: rgba(14, 165, 233, 0.10);

  --ink: #1a1a1a;
  --text: #1a1a1a;
  --text-muted: rgba(26, 26, 26, 0.62);
  --cream: #1a1a1a;

  --border: rgba(26, 26, 26, 0.12);
  --border-strong: rgba(14, 165, 233, 0.45);

  --band-bg: #1a1a1a;
  --band-text: #f5f5f0;

  --shadow-card: 0 12px 34px rgba(26, 26, 26, 0.10);
  --glow-accent: 0 0 24px rgba(14, 165, 233, 0.22);
}

:root[data-theme='dark'] {
  --bg: #1a1a1a;
  --bg-elevated: #232323;
  --bg-elevated-2: #2c2c2c;

  --accent: #38bdf8;
  --accent-strong: #0ea5e9;
  --accent-2: #7dd3fc;
  --accent-soft: rgba(56, 189, 248, 0.16);

  --ink: #f5f5f0;
  --text: #f5f5f0;
  --text-muted: rgba(245, 245, 240, 0.60);
  --cream: #f5f5f0;

  --border: rgba(245, 245, 240, 0.14);
  --border-strong: rgba(56, 189, 248, 0.45);

  --band-bg: #f5f5f0;
  --band-text: #1a1a1a;

  --shadow-card: 0 12px 34px rgba(0, 0, 0, 0.45);
  --glow-accent: 0 0 24px rgba(56, 189, 248, 0.35);
}

:root {
  --font-heading: 'Inter', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
}
```

---

## 5. Earthy — parchment / forest / terracotta (CURRENT)

The live theme: see `src/styles/variables.css` for the authoritative copy.
Parchment `#f2efe6` / Midnight Soil `#141210` backgrounds, Warm Terracotta
`#B85C38` pop accent, Deep Forest `#1E3A2B` + terracotta timeline tracks
(forest swaps to Moss `#7A8B6E` in dark mode for contrast), Taupe muted text.
