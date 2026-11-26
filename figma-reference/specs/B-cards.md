# Spec B: Spaces cards and card parts

Figma file `U14fUtpHqbIHUuJnMfWAzu`. Font family is "72" throughout. Asset paths are relative to `src/assets/icons/`.
**RAW** marks a value that is hardcoded in Figma and not bound to a variable.

## 0. Tokens used (variable → resolved value)

| Variable | Value |
|---|---|
| Surface/card-bg-primary | #fdfeff |
| Surface/canvas-primary | #fdfeff (table cells) |
| Surface/background-quaternary | #e6e7ea (neutral tag bg) |
| Neutral/background-white | #ffffff |
| Border/border-primary | #e6e7ea |
| Text/text-primary | #0b0c0f |
| Text/text-secondary | #353c4a |
| Text/text-tertiary | #636d83 |
| Brand/foreground | #0057d2 |
| Semantic/negative / negative-bg | #c72f2b / #f6e6e7 |
| Semantic/positive / positive-bg | #007b3e / #dfefe6 (already known) |
| Semantic/info / info-bg | #0064d9 / #e2e9f8 |
| Semantic/warning-bg / warning-border | #fef5c8 / rgba(169,90,0,0.3) |
| Accent/accent-8 / accent-bg-8 | #256f3a / #ebf5cb |
| radius/radius-s / radius-m | 4 / 8 |
| spacing/spacing-4xs, 3xs, 2xs, xs, s, l, null | 2, 4, 8, 12, 16, 24, 0 |
| container/spacing/tiny | 8 |
| borderwidth/border-width-s, sapElement_BorderWidth | 1 |
| font/size/sapfontsize | 14 |

Typography styles:
- Title-Strong: 16/22, Semibold 600.
- Title: 16/22, Regular.
- Body: 14/20, Regular.
- Body-Strong: 14/20, Semibold.
- Caption: 12/16, Regular.
- Caption-Strong: 12/16, Semibold.
- Display/36/Regular: 36, line-height 100% ("normal").
- MediumText/LHAuto/Regular: 14, line-height normal (auto), Regular.

---

## 1. Primitives

### 1.1 Card (shared, see the summary card in the brief)
- Container: column layout. Bg Surface/card-bg-primary. Border 1px Border/border-primary. Radius radius-m (8). Inner "Header + Body + Footer" has padding spacing-l (24), column layout, gap 16 (RAW 16).
- Card Body:
  - Row variant (`31781:127`): gap spacing-s (16), holding Body Slot 1 (flex 1, column, gap 16).
  - Column variant (`3090:4327` in Recommended Actions): column, gap 16.
- Nested KPI tile cards use the same Card with no header.
- When a card sits in a stretched grid row (screen 7), the body is `flex:1` so the card fills the row height.

### 1.2 CardHeader (`3045:3363`)
Row layout, gap 16 (RAW), items centered, full width. It has two leading variants:

- **A. Avatar leading** (Execution Risk): a square Avatar (see 1.3, size L).
- **B. Icon leading** (Recommended Actions, Configuration overview, KPIs at Risk): a wrapper with `align-self:stretch` and padding-y spacing-3xs (4) that aligns to the top. It holds a 20×20 icon.

Title and Subtitle block: column, flex 1, gap spacing-null (0).
- Title: Title-Strong, text-primary. Single line, ellipsis.
- Subtitle (optional): Body, text-secondary. Ellipsis.

Variant A also has an empty "Right Accessories" slot, 32px wide, on the right (`16573:1324`). Reserve it or omit it; it contains nothing.

| Card | Leading | Title | Subtitle |
|---|---|---|---|
| Execution Risk | Avatar warning, `warning-warning.svg` 18 | Execution Risk | – |
| Recommended Actions | `task.svg` 20 | Recommended Actions | – |
| Configuration overview | `business-objects-experience.svg` 20 | Configuration overview | General info, business context & KPI setup |
| KPIs at Risk of Deletion | `warning.svg` 20 (filled, black) | KPIs at Risk of Deletion | KPIs bound to the planning model — permanently deleted if model or account dimension change |

In the Recommended Actions header the width is a fixed 339px (RAW). Treat it as full width.

### 1.3 Avatar (square; component desc: "Always use square avatars for products, and circular avatars for people." Docs: https://www.sap.com/design-system/fiori-design-web/ui-elements/avatar-web-component/)

| Size | Box | Padding | Radius | Icon |
|---|---|---|---|---|
| L (card header) | max 48×48 | 12 | 6 (RAW) | 18 |
| S (action item) | max 32×32 | 8 | radius-s 4 | 16 |

Semantic variants seen:

| Variant | Bg | Border | Icon asset | Where |
|---|---|---|---|---|
| accent-8 (green) | Accent/accent-bg-8 #ebf5cb | – | `accept.svg` | Summary card (already known) |
| warning | **RAW #fef5c8** (equals Semantic/warning-bg) | 1px RAW #fef5c8 | `warning-warning.svg` (18, fill #A95A00) | Execution Risk, main screen `5271:21034` |
| warning (screen 7) | **RAW #fff3b8** | 1px RAW #fff3b8 | `warning-warning-2.svg` (18, fill #A93E00) | Execution Risk, screen 7 `5067:17697` |
| neutral (S) | Neutral/background-white #fff | none | `warning2.svg` (16, outline, #0B0C0F) or `accept-neutral.svg` (16, check, #0B0C0F) | Action items |

The two warning variants differ slightly in Figma. Suggestion: use the token Semantic/warning-bg (#fef5c8) with `warning-warning.svg` for both, unless pixel-exact matching of screen 7 is required. The Avatar is decorative, so give the icon `alt=""`.

### 1.4 Tag (status tag, `Tag`): rectangular

- Layout: row, gap 6, centered. Padding is spacing-2xs (8) horizontal and spacing-3xs (4) vertical. Radius radius-s (4).
- Text: Caption-Strong 12/16 Semibold, nowrap. Rendered height is 24.

| Variant | Bg | Text color | Icon | Text seen |
|---|---|---|---|---|
| neutral | Surface/background-quaternary #e6e7ea | Text/text-secondary #353c4a | – | "Open" |
| positive/accent | Accent/accent-bg-8 #ebf5cb | Accent/accent-8 #256f3a | – | "Completed" |
| negative | Semantic/negative-bg #f6e6e7 | Semantic/negative #c72f2b | – | "Critical" |
| info | Semantic/info-bg #e2e9f8 | Semantic/info #0064d9 | `message-information-info.svg` 12×12 leading | "INC" |

The "Completed" tag uses the Accent-8 tokens, not Semantic/positive. The tag is static and not interactive.

### 1.5 CardTag (pill, `Card Tag` 15432:138)
Already specified in the brief for the positive variant. Shared layout:
- Height 18, min-height 18. Padding-x 4. Radius 16 (RAW).
- Border 1px in the same color as the bg.
- Content is right-justified: 12×12 arrow icon, then text in Caption-Strong 12/16.
- Text has `text-shadow: 0 0 2px white`.

| Variant | Bg/border | Text | Icon |
|---|---|---|---|
| positive | Semantic/positive-bg #dfefe6 | Semantic/positive #007b3e | `arrow-top-positive.svg` |
| negative | Semantic/negative-bg #f6e6e7 | Semantic/negative #c72f2b | `arrow-top-negative.svg` (12, #C72F2B, has white drop-shadow filter) |

The icon is "arrow-top" (desc: "arrow top, up"). The negative variant still points up, because cost is increasing.

### 1.6 KpiTile ("Card KPI & Status", 3279:4014 family)
A nested Card (1.1) with no header. The body holds "Card KPI & Status": a row with `justify-content: space-between` and `align-items: flex-start`.

- **Left, "KPI"**: column, flex 1, gap 4, justify-end. It contains:
  - **Value** (column, gap 4):
    - "Variance Value Stacked": row, gap 4, align-items end, text-primary. It has three parts:
      - prefix ("+$" or "+"): Display/36.
      - number: Display/36, right-aligned.
      - unit ("M" or "%"): 14px (font/size/sapfontsize), line-height normal, centered. The unit box is 9×21 (RAW).
    - Optional trend marker: the positive variant (summary card) has a 14px triangle, `trend-up-positive.svg`, with pb 6 before the prefix. **The Execution Risk tiles have no trend marker.**
    - Label row: py 4. Text is MediumText/LHAuto 14px, line-height normal, text-tertiary. Wraps.
  - **Variance**: a row containing "Variance Order Inline" (gap 4, overflow clip) → CardTag (1.5).
- **Right (optional)**: a status Tag (1.4). Execution Risk uses negative "Critical".

Variants:

| Variant | Trend marker | CardTag | Status tag |
|---|---|---|---|
| positive (summary card) | trend-up-positive 14 | positive | none |
| negative/critical (Execution Risk) | none | negative | negative "Critical" |

### 1.7 Button: outlined/secondary ("Button", text label 539:1103)

| Property | Value |
|---|---|
| Bg | Neutral/background-white #fff |
| Border | 1px (borderwidth/border-width-s), Brand/foreground #0057d2 |
| Radius | radius-s 4 |
| Padding | x spacing-xs 12, y 6 (RAW) |
| Layout | gap 6, centered, overflow clip |
| Text | Body-Strong 14/20 Semibold, Brand/foreground #0057d2, nowrap |
| Height | 34 |
| Labels | "Open Space", "Initiate Consolidation" |

Interactive. Use a native `<button type="button">`; the accessible name is the label. Hover and active states are not provided in the frames. Suggest Fiori defaults: a light brand-tint bg on hover, and a focus ring of 2px brand outline.

Figma interaction annotations:
- The "Open Space" button on item 1 (`5150:45847`) is annotated "continuing the regular flow with skill gap". It navigates into the Skill Gap space.
- The "Initiate Consolidation" button on item 4 in screen 7 (`5067:17687`) is annotated "click". It is the next step of the prototype flow.

### 1.8 ActionItem ("Object List Item", e.g. `5150:45833`)
- Outer: row, gap 16, padding-bottom 8 (RAW), items flex-start, full width.
- **Left** (flex 1, column, gap container/spacing/tiny 8) → **Top** (row, gap 12 RAW, items start):
  - Avatar S, neutral (1.3), with a 16px icon.
  - **Title & Link** (column, flex 1, gap 4 on item 1; other items show gap 0 in Figma). Use gap 4 for all items:
    1. Title: Body-Strong 14/20, text-primary, single line, ellipsis.
    2. Description: Caption 12/16, text-tertiary. Wraps.
    3. Status Tag (1.4).
- **Right / Actions**: row, gap 8, items start. Holds one Button (1.7) aligned top-right.
- Items 2–4 are wrapped in an extra "Attributs and Status Bar" column. It adds no visual effect and can be ignored.
- Between items is the Card Body gap of 16, plus each item's pb 8.
- Status mapping: Open → neutral tag + `warning2.svg` icon. Completed → accent tag + `accept-neutral.svg` icon.

Use a list (`<ul>`/`<li>`). The icon is decorative; the tag text conveys the status.

### 1.9 Field ("Card Text Block", `15021:13991` label + `1338:9429` description)
- Column, gap spacing-3xs 4, flex 1.
- Label: MediumText/LHAuto 14, line-height normal, text-tertiary, nowrap.
  - The label wrapper has odd radii: tl, tr and br of 5px (RAW). It has no visible effect; ignore it.
  - Nested wrappers ("Vertical Slots" gap 8, "Label" gap 2) have no visual effect.
- Value wrapper: py 4. Value text is Body 14/20, text-primary.
- The value slot can instead hold a bullet list or a Tag:
  - Bullet list (`<ul>` disc): Body 14/20, text-primary, item indent `margin-inline-start: 21px` (RAW), no gap between items.
  - Tag: info Tag. The value wrapper is then `align-items:center` and not stretched.
- Semantic markup: `<dl>` with `<dt>`/`<dd>`.

### 1.10 SectionHeading (inside Configuration card)
Body-Strong 14/20, text-secondary #353c4a, full width, ellipsis. The texts are "General Information", "Business Context" and "KPI Setup".

### 1.11 Divider ("Line Divider")
A full-width 1px line in Border/border-primary #e6e7ea. Implement it as `border-top: 1px solid var(--border-primary)` (height 0, line drawn at the top). An exported asset `line-divider.svg` (1124×1) exists, but CSS is recommended because the asset has a fixed width.

### 1.12 MessageStrip, warning ("Message Strip", `5151:60944`)
- Container: column, gap spacing-3xs 4, padding spacing-2xs 8, radius radius-s 4, full width.
  - Bg Semantic/warning-bg #fef5c8.
  - Border 1px (border-width-s), Semantic/warning-border rgba(169,90,0,0.3).
- Content: row, gap 4, items start.
  - Icon wrapper: padding 4, holding `warning2-warning.svg` 16×16 (fill #A95A00).
  - Right Area (flex 1, column, gap 4) → Title + Actions (row, gap 4) → text in Body-Strong 14/20, text-primary.
- Text: "The following KPIs will be permanently deleted if the planning model or account dimension is changed."
- No close button and no actions are shown.
- Use `role="status"` or `role="note"`. The icon is decorative; add visually hidden text "Warning:" in front of the message.

### 1.13 Table ("Table", `5151:50101`)
- Container: 1px Border/border-primary, radius radius-m 8, overflow clip, column, full width.
- Rows: each row is a horizontal row of three parts:
  1. A leading spacer cell, 8px wide, with padding 8.
  2. "Cells": flex 1, with equal-width cells (flex 1 each).
  3. A trailing cell. In the header it is a navigation/action cell with padding 8, holding an invisible (opacity 0) icon button: padding 6, radius 4, `slim-arrow-right.svg` 12 (#636D83). In body rows it is an empty cell, 40px wide.
- Cell: min-height 32. Padding is 8 horizontal (RAW) and spacing-xs 12 vertical. Bg Surface/canvas-primary #fdfeff. Bottom border 1px Border/border-primary.
- Header cells: Body-Strong 14/20, text-primary, nowrap, ellipsis.
- Body cells: MediumText/LHAuto 14, line-height normal, text-primary.
- In the body row the trailing 40px cell has no bg or border, so the bottom border stops short of the right edge (visible in the screenshot). Recommendation: apply the border across the full row, or replicate the design exactly.
- The header row height is about 44 and the body row about 40.
- Columns: KPI | Account Type | KPI Context | Risk.
- Row: FFA1/08 | INC | - | Will be deleted.
- Use a semantic `<table>` with `<th scope="col">`. The hidden chevron column is not interactive and can be omitted, keeping a 40px spacer.

---

## 2. Card compositions

### 2.1 Execution Risk, main screen (`I5150:45271;11620:10005;3411:19663;5271:21034`)
- CardHeader A: Avatar L warning (`warning-warning.svg`), title "Execution Risk".
- Body Slot 1 (column, gap 16):
  1. Intro block (column, gap 8):
     - Row (gap 8, centered): `bar-chart.svg` 16 and "Included Drivers" in Title 16/22, text-secondary.
     - Paragraph in Body 14/20, text-secondary: "Accepting the event requires additional capacity. Current plans indicate potential gaps that could affect profitability by $14,000,000.00 profit at risk."
  2. KPI grid: `flex-wrap`, gap 16 (RAW). Tiles are a fixed 314/315/314px wide (RAW), so the container wraps to two per row at a width of about 694. Recommendation: CSS grid `repeat(auto-fill, minmax(314px,1fr))`, gap 16.

     | # | Prefix | Number | Unit | Label | CardTag (negative) | Status |
     |---|---|---|---|---|---|---|
     | 1 | +$ | 31 | M | Workforce Expense Increase for Q3 2026, Q4 2026 | Agent Forecast: $238M | Critical |
     | 2 | + | 3 | % | Exchange Rate Exposure for Q3 2026, Q4 2026 | Agent Forecast: $28M | Critical |
     | 3 | +$ | 6 | M | Procurement Cost Variance for Q3 2026, Q4 2026 | Agent Forecast: $28M | Critical |

### 2.2 Execution Risk, screen 7 (`I5026:17513;11620:9998;3411:19663;5067:17697`)
Same as 2.1, with these differences:
- Avatar bg is RAW #fff3b8 and the icon is `warning-warning-2.svg` (#A93E00).
- There is no Right Accessories slot.
- The KPI row is a non-wrapping row, gap **24**, with **2 tiles** (#1 and #2 only), each flex 1. Tiles stretch to equal height.
- The card and body are `flex:1`, so the card fills the height of the grid cell (empty space at the bottom).

### 2.3 Recommended Actions, main screen (`I5150:45271;11620:10005;3411:19663;5150:45788`)
- CardHeader B: `task.svg` 20 (desc "clipboard, task, work item, checklist, checkmark"), title "Recommended Actions".
- Card Body: column, gap 16, with 4 ActionItems. All are status **Open**, with avatar icon `warning2.svg`.

| # | Title | Description | Button |
|---|---|---|---|
| 1 | Assess Skill Gap | The additional events require increased staffing. | Open Space |
| 2 | Asses FX Risk Exposure *(sic)* | Recent increase in USD volatility presents a material downside risk. | Open Space |
| 3 | Address Accelerated Procurement | TODO *(placeholder in Figma; description is single-line ellipsis, width 411 RAW)* | Open Space |
| 4 | Initiate Forecast Process | Create private forecast version in SAP Business Data Cloud and share with workforce operations and treasury. | Initiate Consolidation |

On item 3 the Title & Link block is not flex 1 (it hugs its content). Use flex 1 everywhere.

### 2.4 Recommended Actions, screen 7 (`I5026:17513;11620:9998;3411:19663;5067:17698`)
Same structure, but the card is wider (about 662), so the descriptions fit on fewer lines.
- Items 1–2: status **Completed** (accent tag), avatar icon `accept-neutral.svg` 16 (check, #0B0C0F).
- Items 3–4: Open, with `warning2.svg`.
- All buttons remain. Item 4 "Initiate Consolidation" is annotated "click" as the next flow step.

### 2.5 Configuration overview (`I5150:45271;11620:10005;3411:19663;5150:45791`)
- CardHeader B: `business-objects-experience.svg` 20. Title "Configuration overview", subtitle "General info, business context & KPI setup".
- Body Slot 1: column, gap 16, in this order:
  1. SectionHeading "General Information".
  2. Field row (gap 24, 2 × flex 1): Name = "Concert Revenue Opportunity - Impact Analysis"; Description = "Revenue impact analysis for concert event portfolio across EMEA profit centers".
  3. Field row (gap 24): Created by = "system-internal"; Last Edited = "Sep 22, 2026, 3:52:41PM".
  4. Divider.
  5. SectionHeading "Business Context".
  6. Field row (gap 24): Business Drivers = bullet list ("Ticket sales uplift", "Venue capacity optimisation", "Sponsorship revenue growth"); Additional Context = "Focus on Q4 2026 touring season, European market expansion".
  7. Divider.
  8. SectionHeading "KPI Setup".
  9. Field row with **gap 16** (RAW; note the difference) and 4 × flex 1: Planning Model = "SAP_FI_FPA_IM_S4_Finance_Planning"; Look Back = "12 Months"; Look Ahead = "6 Months"; Measure = "Row_Opening_LC".
  10. Field row with **gap 24** and 4 × flex 1: Account Dimension = "SAP_XPA_ACCOUNT"; KPI = "FFA1/08"; Hierarchy = "Finance"; Account Type = info Tag "INC" with the `message-information-info.svg` icon.

Because of the gap difference, the columns of rows 9 and 10 are slightly misaligned in Figma. Recommendation: use one 4-column grid, gap 16 or 24.

### 2.6 KPIs at Risk of Deletion (`I5150:45271;11620:10005;3411:19663;5151:49024`)
- CardHeader B: `warning.svg` 20 (filled, #0B0C0F). Title "KPIs at Risk of Deletion", subtitle "KPIs bound to the planning model — permanently deleted if model or account dimension change". The subtitle has a trailing space in Figma; trim it.
- Body Slot 1: column, gap 16, containing the MessageStrip warning (1.12) and the Table (1.13).

---

## 3. Assets (all in `src/assets/icons/`)

| File | Size | Color | Figma icon | Used in |
|---|---|---|---|---|
| warning-warning.svg | 18 | #A95A00 | warning (3041:4201) | Execution Risk avatar (main) |
| warning-warning-2.svg | 18 | #A93E00 | warning | Execution Risk avatar (screen 7) |
| warning.svg | 20 | #0B0C0F | warning | KPIs at Risk header |
| warning2.svg | 16 | #0B0C0F | warning2 (3082:9325) | ActionItem avatar (Open) |
| warning2-warning.svg | 16 | #A95A00 | warning2 | MessageStrip warning |
| accept-neutral.svg | 16 | #0B0C0F | accept (3041:5905) | ActionItem avatar (Completed) |
| arrow-top-negative.svg | 12 | #C72F2B | arrow-top (3041:8190) | CardTag negative |
| task.svg | 20 | #0B0C0F | task (3256:4736) | Recommended Actions header |
| business-objects-experience.svg | 20 | #0B0C0F | business-objects-experience (3041:17221) | Configuration header |
| message-information-info.svg | 12 | #0064D9 | message-information (3041:2759) | Info Tag "INC" |
| slim-arrow-right.svg | 12 | #636D83 | slim-arrow-right (3041:4961) | Table header nav cell (opacity 0) |
| line-divider.svg | 1124×1 | stroke #E6E7EA | Line Divider | optional; prefer CSS border |
| bar-chart.svg (existing, identical) | 16 | – | bar-chart | Included Drivers row |

Some Figma exports differed from these files only in internal clip/filter IDs and were deduplicated into the files above:
- the second warning2 export → `warning2.svg`
- the screen 7 arrow-top → `arrow-top-negative.svg`
- the screen 7 task → identical to `task.svg`

Do not size SVGs to 100%/100%; keep each file's own width and height.
