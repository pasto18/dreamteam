# Trazado — Technical Drawing System

A design system for **clear technical/architectural drawing sheets with one highlight color** — built from two reference images (an architectural permit-set detail sheet and a hand-lettered blueprint floor plan) and this brief:

> dibujo técnico, claro pero con detalles de diseño, con un color de resaltado. Formato A4 vertical. Títulos y anotaciones en parte superior e inferior.

Two proposals ship side by side as a theme switch — `data-theme="color"` / `data-theme="mono"` on any element (usually the sheet); the default at `:root` is color:
- **Color proposal** — warm paper, near-black ink, flat grey fills, one safety-orange (`#E24A1E`) highlight reserved for the sheet's subject.
- **B&W proposal** — pure greyscale; text-bearing highlights (`--fill-accent`) become solid ink so they stay legible, while area highlights (`--fill-highlight`) and drawing fills become hatches (tramas).

**Sources provided:** two reference JPGs uploaded directly by the user (an "OUTPOST" architectural detail sheet, and a blueprint-style floor plan illustration). No codebase, Figma file, or existing brand assets were attached — this system is built from-scratch to match the brief and those two references. No logo exists; the wordmark "Trazado" is shown in plain type everywhere a mark would go.

## Content fundamentals
- Copy is **functional, not marketing**: sheet titles, material callouts, dimensions, revision status. No taglines, no "you/we" address — it's third-person/labeling ("Clear cedar fascia, paint black", not "You'll love this fascia").
- **ALL CAPS for labels and annotations**, sentence case reserved for the occasional hand-written margin note.
- No emoji, ever — the only non-text marks are the crosshair revision stamp and dimension tick marks.
- Vibe: precise, restrained, permit-drawing-serious, with a single warm accent as the only "designed" flourish.

## Visual foundations
- **Color**: warm off-white paper + near-black ink + one orange highlight (color proposal); pure white/greyscale + hatch fill standing in for the highlight (mono proposal). Max one accent color, ever.
- **Highlight rule**: the accent marks only the sheet's subject (e.g. the nails on a nails sheet, the measured outline and Ø on a measures sheet). Everything else stays ink/grey. Tokens: `--accent` (lines, dots, key figures), `--fill-accent` + `--fill-accent-ink` (tags with text), `--fill-highlight` (decorative areas), `--plan-fill` (flat drawing fill, color only).
- **Type**: Oswald (condensed, bold, uppercase) for titles/sheet names; IBM Plex Mono for all annotations, dimensions, and labels (all-caps, wide letter-spacing); Caveat (handwriting) used sparingly for margin notes/sketch callouts — never for primary content.
- **Layout**: fixed-height header and footer "bands" (title block up top, notes/legend down below) with the drawing itself filling the space between — see the "A4 Sheet Anatomy" card. Format is A4 portrait (595×842 at 72dpi).
- **Borders/frame**: every sheet is a hairline-bordered rectangle with four corner crop marks (printer's marks), never rounded corners.
- **Line weights**: 4-step scale, hairline (grids) → heavy (primary outline) — see Spacing group.
- **Patterns**: SVG hatch fills (45°, cross, dots, vertical, brick) stand in for both materials and, in the mono proposal, the highlight color itself.
- **Shadows/gradients/blur**: none. Flat ink on flat paper throughout — this is a drafting aesthetic, not a UI aesthetic.
- **Corners**: square everywhere except the fully-round revision stamp.
- **Animation/hover/press**: not applicable to print sheets; the kit toolbars use a plain color swap on their theme toggles, no motion.
- **Proportion**: drawings are drawn in true proportion, but sheets never carry a scale label or scale bar — dimensions are given explicitly with `DimensionLine` chains.
- **Imagery**: no photography. The "drawing" itself (plans, sections, elevations) is the imagery, represented in this kit by `<image-slot>` placeholders for the user's real linework — never hand-drawn SVG facsimiles of a floor plan.

## Iconography
- No icon font or SVG icon set — the only "icon" is the crosshair revision stamp (`RevisionStamp`), drawn as two straight lines inside a circle, matching the reference sheet's permit stamp. Dimension tick marks are 45° line segments, not arrowheads.
- No emoji, no unicode glyphs used as icons.
- If future screens need real icons (north arrow, section markers, door swings), source them from the user's actual drafting standards rather than inventing new marks.

## Components (`components/drawing/`)
Domain-specific primitives (no source library was provided, so this is a from-scratch set sized to technical-sheet needs, not a generic UI kit):
- **SheetFrame** — A4 shell: bordered frame, corner crop marks, fixed header/footer bands, drawing viewport between.
- **TitleBlock** — project name + status stamp + sheet title/number, for the header band; `size="lg"` for plan/cover sheets.
- **RevisionStamp** — circular crosshair revision/status mark.
- **AnnotationCallout** — dot + leader line + uppercase label.
- **DimensionLine** — ticked dimension rule, horizontal or vertical; label `inline` or `above` (for chains); `tone="accent"`.
- **Legend** — drawing key: hatch, flat-fill, dot, or line swatches + labels, row or column.

## Structure
- `styles.css` — imports only; pulls in `tokens/`.
- `tokens/` — `typography.css` (fonts), `colors.css` (both themes), `spacing.css`, `patterns.css` (SVG hatches).
- `components/drawing/` — the 6 primitives above + one card (`drawing.card.html`).
- `guidelines/` — 9 foundation specimen cards (Colors ×2, Type ×3, Patterns, Spacing ×2, Brand/anatomy).
- `ui_kits/sheets/` — `index.html`: two generic sample A4 sheets (architectural detail, floor plan) with a Color/B&W toggle.
- `ui_kits/subardo/` — the Subardo tent sheet set S-01…S-06 (Measures, Tent Nails, Poles, Front & Side View, Sidewalls, Tireforts), with Color / B&W / Both views. See its README.
- `templates/a4-sheet/` — A4 Technical Sheet template for consuming projects.
- `thumbnail.html` — homepage tile.
- `SKILL.md` — Claude Code-portable version of this system.

## Font substitution flag
No font files were provided. **Oswald, IBM Plex Mono, and Caveat are Google Fonts substitutes** chosen to match the reference images' condensed-title / technical-mono / hand-lettered look. If real brand fonts exist, replace the `@import` in `tokens/typography.css` with actual `@font-face` files.

## Intentional additions
Every component here is an intentional addition — no source component library was given, so the full set (SheetFrame, TitleBlock, RevisionStamp, AnnotationCallout, DimensionLine, Legend) was authored from scratch to serve the technical-drawing-sheet brief specifically, rather than a generic app UI kit.
