---
name: mobile-sheet
description: Build the mobile "layers" version of a Trazado tent sheet set (e.g. from "La Ballena Measures.dc.html"), following the reference "Konsum Layers.dc.html". Use when asked for "la versión móvil" / "versión de capas" of any sheet set in this project.
---

# Mobile layers version of a tent sheet set

Reference implementation: **`Konsum Layers.dc.html`** (built from `Konsum Measures.dc.html`). Copy its structure exactly; only swap geometry/data for the new tent.

## Concept
On mobile the separate A4 sheets become one tent drawing with selectable layers stacked on top.
- One drawing, in color only (B&W is only for print, so no theme toggle).
- Each former sheet is a **layer** (Measures, Tent nails, Poles, Sidewalls, Tireforts). Tick box = show/hide, and several layers can be on at once. Tapping the name makes it the **active** layer, and only the active layer uses `--accent`. Other visible layers draw in `--ink`.
- Notes are hidden for now; they will come back later as a panel tied to the active layer.
- Nail Layout and Front & Side View are left out for now.

## Steps
1. Read the source `<Name> Measures.dc.html`. Copy its logic methods unchanged: `geometry`, `poleMarks`, `tireMarks`, `wallMarks` (plus any tent-specific ones).
2. Build `<Name> Layers.dc.html` from `Konsum Layers.dc.html`:
   - Template: header (project + status + "TENT PLAN"), drawing box, layer list, legend. Keep the draw order: ext lines → ring/tent fills → nails/vees/short cables → long cables (measures) → dome/antennas → walls → measures marks → tire → poles → base nail dots → active nail dots → FRONT arrow; then the HTML overlays (DimensionLines, labels, wall badges, B# labels).
   - Each layer's markup sits inside `<sc-if value="{{ L.<k>.on }}">`. Highlighted strokes and fills use `fill`/`stroke` attributes bound to `{{ L.<k>.c }}` (accent when active, ink otherwise).
3. `renderVals()`:
   - One shared geometry: `geometry(S, CX, CY)` with the scale that fits the largest layer (Konsum: `S = 10.5, CX = 297, CY = 290`). Pass the same `S` to every `*Marks` function.
   - `crop {x,y,w,h}` = the bounding box of ALL layers together (Konsum: `46,34,504,556`). Check it by turning every layer on and taking a screenshot; nothing may be clipped.
   - `DEF` = the layer list `{k, name, stat, unit}`. Take the numbers from the source sheets.
   - `EXTRA` = the legend items specific to each layer. `base` = the shared legend items.
   - `fit = w / crop.w`, zoom `z = max(1.3, fit * zoomFactor)`.
4. Default state: `on: { nails: true }, active: 'nails'`.
5. Props: `zoomFactor` only (range 1.5–3, default 2).

## Mobile type scale (minimums)
- Meta labels: IBM Plex Mono 11px, 0.16em, uppercase, `--ink-soft`
- Layer name: Oswald 600 20px, uppercase; layer stat: Oswald 700 26px
- Layer rows 56px high; every tap target ≥ 44px
- Legend: DS `Legend` size 14 in a 2-column grid with `zoom:1.3`
- Text on the drawing keeps its original px and scales with the drawing; the zoom button covers small detail.

## Rules (Trazado)
- One accent only, used for the active layer.
- No shadows, no rounded corners, no emoji; hairline `1px solid var(--ink)` dividers.
- Load the DS tokens + `_ds_bundle.js` in `<helmet>`; use DS `DimensionLine` and `Legend` rather than redrawing them.
- Copy text and numbers stay identical to the A4 sheets.
