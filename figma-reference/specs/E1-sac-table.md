# E1 – SAC page header + "Strategy for the combined plan" pivot table

File key `U14fUtpHqbIHUuJnMfWAzu`. Screens:
- `5022:14259` (ref `08-5022-14259.png`): base state, "Consolidate" button, 12 rows.
- `5077:33318` (ref `10-…`): after consolidation. Group columns highlighted, "Publish Data" button, extra "Tariffs" row, toast "Consolidation completed successfully."
- `5091:43484` (ref `11-…`): same as 10, toast reads "Data published successfully."
- `5080:42295` (ref `12-…`): the shellbar `5080:42299` uses the accent (purple) Joule icon.

Frame: 1920×1080, page bg white. Layout is a column: **Header** (`5034:19256`, h 260), then **Content** (`5022:14261`, h 820).

Fonts: "72 Brand" (Light 300, Regular 400, Medium 500, Bold 700). The variance % labels use the **"72"** family (Regular), not "72 Brand".

Tokens below are given as `Figma/Variable` → resolved value. **RAW** means the value is hardcoded in Figma with no variable.

---

## 1. Header `5034:19256`
- Column, `align-items: center`, full width. bg `Color/Neutral/White` #ffffff.
- **Bottom border**: 1px solid `Color/Grey/3` #d5dadd.
- Children: Shellbar (h 64), then Header Addon (h 196).

### 1.1 Showcase Shellbar `5034:19257` (component `5034:18843`, props showcaseName="XXX", toolName="SAP Analytics Cloud")
- Row, `justify-content: space-between`, `align-items: center`. h 64, padding 0 48px. bg `Color/Neutral/White` #fff.
- **Left** (`5034:18852`): row, gap 16, align center.
  - SAP logo: **60×30**, `src/assets/icons/sap-logo.svg` (the SVG's intrinsic size is 2122×1050, so scale it to 60×30). Accessible name: `alt="SAP"`.
  - **Titles** (`5034:18854`): row, gap 8, align center. 24px / 32px line height, colour **#333 (RAW)**, nowrap.
    - "XXX": 72 Brand **Bold**.
    - "|": 72 Brand **Light**.
    - "SAP Analytics Cloud": 72 Brand **Light**.
- **Right**: Joule icon, 32×32.
  - Default (screens 08/10/11): `src/assets/icons/joule-icon.svg`, fill #556B82 (`Tile/sapTile_IconColor`). Figma layer name "DA shellbar icon - Evening - Inactive".
  - Accent variant (screen 12, `I5080:42299;4303:2863`, ".Joule Icon"): `src/assets/icons/joule-icon-accent.svg`, fill #5D36FF ("Joule Accent 5 - Morning Horizon"). Use it for the active/open Joule state.
  - Intent: opens Joule. Render it as a `<button aria-label="Joule">` with no visible chrome.

### 1.2 Header Addon `5034:19258`
- Column, gap 24, padding 24px 48px, full width.
- **Title row** `5034:19259`: row, `justify-content: space-between`, `align-items: flex-start`, h 36.
  - Title text "2026 Financial Plan" (`5034:19260`): style `Heading/Regular/S` = 72 Brand Regular 28/31, colour `Core/HeadingDark` #000000. Use an `<h1>`.
  - Actions container `5034:19261`: row, gap 16, `justify-content: flex-end`. Figma gives it a fixed width of 960.5, so treat it as flex and push it right.
  - **Emphasized Button** `5034:19262` (110×36): "Consolidate".
    - bg `Button/Regular/Primary/Default/Background` #0057d2.
    - border `Button/Border` 1px, colour `Button/Regular/Primary/Default/Border` #0057d2.
    - radius `Button/Radius` 8. Padding 9px 10px, gap 6, centred.
    - Text: `Navigation/Medium/XL` = 72 Brand Medium 16/18, colour `Button/Regular/Primary/Default/Text` #fff, nowrap.
    - Screens 10/11 show the same button with label **"Publish Data"** (`5077:33327`, 114×36). Figma has a **click** interaction annotation on it.
    - Flow: Consolidate, then toast 1 and Publish Data appear; Publish Data then shows toast 2.
    - No hover or pressed styling was found in these frames.
  - A second button `5034:19263` exists but is hidden. Ignore it.
- **KPI row** `5034:19264` contains **KPIs Header** `5034:19505` (1026×88).

### 1.3 KPIs Header `5034:19505`
- Docs: https://www.figma.com/design/VkgcZtnUNvN6kDmXH5e4k7/SIX-D-P-Showcase-Components?node-id=234-15382
- Component description (from `5034:19494`): "3 different colors: positive, neutral, negative. 2 different trend directions: up, down."
- Layout: column, h 88, content centred vertically. Inner "KPIs" is a row, gap **60**, align center.
- Each KPI is a column with `justify-content: space-between` and full height (88). The last KPI uses gap 8 instead, which looks the same.
  - **Title + Subline**: column, gap 4, nowrap.
    - Title: `Heading/Medium/XXXXS` = 72 Brand Medium 16/18, colour `Core/HeadingDark` #000.
    - Subline "2026 Projection": `Body/XXS` = 72 Brand Regular 12/18, colour `Input/Color/Standard/Default/Label` #475e75.
  - **Base**: row, gap 8, `align-items: flex-start`.
    - Value: `Heading/Regular/L` = 72 Brand Regular 36/40, colour `Core/TextDark` #223548.
    - **Indicator**: column, `padding-top: 7px`, overflow clip.
      - Trend icon, 11×7.
      - Delta text below it: `Body/S` = 72 Brand Regular 16/24, colour `sapNegativeTextColor` #aa0808.
- All five KPIs use the **negative** colour.

| # | Node | Title | Sub | Value | Icon | Delta |
|---|---|---|---|---|---|---|
| 1 | I5034:19505;189:4379 | Net Revenue | 2026 Projection | 8,043 | up `trend-up-negative.svg` | -5% |
| 2 | …;189:4401 | Cost of Goods Sold | 2026 Projection | 3,143 | down `trend-down-negative.svg` | +13,7% |
| 3 | …;189:4412 | Operating Income | 2026 Projection | 2,865 | down | -24,96% |
| 4 | …;189:4423 | Operating Profit Margin | 2026 Projection | 35.65% | down | -9% |
| 5 | …;189:4434 | Cash Flow | 2026 Projection | 3,281% | down | -22,51% |

- Icons live in `src/assets/icons/`. Both are filled #AA0808.
- Text is copied verbatim from Figma, including the comma decimals, "3,281%" and "+13,7%" next to a down arrow. Figma has trailing spaces in "Net Revenue " and "Cost of Goods Sold "; trim them.
- Accessibility: give each trend icon an `aria-hidden` attribute and put a visually-hidden "trend up/down" in the delta text, or put it in an `aria-label`.

---

## 2. Content `5022:14261`
- Column, padding **24px 48px 48px**. The Card fills the remaining height (flex 1). In the frame the card is 1824×748.

### 2.1 Card `5034:25523` (component `5034:18921`, "Card")
- Component description: "Customizable Header: toggle headlines/sublines, toggle icons/buttons, toggle stroke, toggle swap slot. Swap Slot: select a component to display in the card."
- Shadow `Shadow/S`: `0 2px 4px 0 rgba(34,54,73,0.2)` (`Core/Shadow/S/*`; colour-1 #22364933). A second layer is transparent `0 0 0 0`. Corner radius 16.
- **Card Header** `I5034:25523;3718:36861`:
  - bg `Color/Neutral/White` #fff. Padding 16px 16px 12px. Top radii 16. Height 52.
  - Headline "Strategy for the combined plan": 72 Brand Medium 20/24, colour **black (RAW)**. Single line with ellipsis. Use `<h2>`.
  - Hidden in Figma, so ignore: subline, the "customer" icon and Buttons 1–3.
- **Stroke** `I5034:25523;3718:37290`: 1px line, #D5DADD. Asset `src/assets/icons/card-stroke-1824.svg` (1824×1). A CSS `border-top: 1px solid #d5dadd` on the content is equivalent.
- **Content slot** `I5034:25523;3718:36866`: bg white, padding 16, bottom radii 16, overflow clip. It holds the Table (1792×664).

### 2.2 Table
- Structure: Table Toolbar (h 52), Header Row 1 (h 42), Header Row 2 (h 42), then Row Layer.
- Row Layer (h 528): column, gap 4, overflow clip. The inner "Rows" container has **overflow-y: auto** and overflow-x clip.
- Variable `Table/Cell/Size/ContainerHeightM` = **42** gives the height of every row.
- Hidden in Figma, so ignore: scrollbars, Footnote and spare `.Table Row`s.

**Column grid** (table width 1792):

| Col | Width | Notes |
|---|---|---|
| Label | **256** fixed | — |
| 8 data cols (US Plan, US AF, Canada Plan, Canada AF, UK Plan, UK AF, Group Plan, Group AF) | flex 1 each (≈153.6) | — |
| Variance | **307** fixed (308 in header row 2) | — |

- In header row 1 the 5 group headers are equal flex cells of 307.2 each. Each one spans 2 data columns, and "Variance" spans the variance column.
- CSS grid: `256px repeat(8, 1fr) 307px`, with header row 1 using `grid-column: span 2`.

**Borders**: every cell has `border-bottom: 1px`. A `border-left: 1px` appears only at group boundaries:
- on every header-row-1 cell after the label column;
- on each **Plan** cell and on the Variance cell.
- There is **no** border between Plan and Agent Forecast, and none on the label column.
- Colours: header cells `Table/Header/Default/Border` #d5dadd; body cells `Table/Item/Default/Border` #d5dadd.

#### .Table Toolbar `I5034:25523;3718:36866;5034:31085`
- bg `Core/Surface/Neutral` #fff. Padding 16, gap 16. **border-bottom 1px `Table/Toolbar/Border` #a9b4be**, which is darker than the cell borders.
- Title "Q4 2026": `Heading/Bold/XXXS` = 72 Brand Bold 18/20, colour `Table/Toolbar/TextAndIcon` #223548. **Centred** across the full width. Figma has "Q4 2026 " with a trailing space; trim it.
- It acts as the table caption. Use `<caption>` or `aria-labelledby`.

#### Header row 1 `…;5076:20555`
- Cells: bg `Table/Header/Default/Background` #fff. Padding 12px 16px, gap 8.
- Text: `Navigation/Medium/XL` = 72 Brand Medium 16/18, colour `Core/Text/Text` #223548, **left-aligned**.
- Cells: (empty label cell) | "US" | "Canada" | "UK" | "Group" | "Variance". Use `<th scope="colgroup">`.

#### Header row 2 `…;5076:21341`
- Same cell styling as row 1, with the text **right-aligned**.
- Cells: (empty) | Plan | Agent Forecast | Plan | Agent Forecast | Plan | Agent Forecast | Plan | Agent Forecast | (empty, contains a zero-width space).
- Use `<th scope="col">`. Figma has trailing spaces in some labels; trim them.

#### Body rows (`.Table Row`, h 42)
- Cells: bg `Table/Item/Default/Background` #fff. Padding **8px 16px**, gap 4, align center.
- **Label cell** (256): text `Body/S` = 72 Brand Regular 16/24, colour `Core/Text/Text` #223548, left-aligned. Use `<th scope="row">`.
  - Top-level row: padding-left 16.
  - **Child row**: **padding-left 32** (example `…;5034:32187` "Event Delivery Costs").
  - **Parent row with expand button** (`…;5034:32120` "COGs"): gap 8 between the label (flex 1) and a trailing **tertiary icon Button**:
    - bg/border `Button/Regular/Tertiary/Default/*` = transparent, border 1px, radius 8, padding 5px 6px. Overall about 28×26.
    - Icon `slim-arrow-down` 14×14 (`Button/Size/Icon/S` = 14): `src/assets/icons/slim-arrow-down.svg`, fill #1D2D3E. Expanded state shows the down chevron.
    - Accessibility: `<button aria-expanded="true" aria-label="Collapse COGs">`; when collapsed use `aria-expanded="false"`, a right chevron and "Expand COGs". The right chevron is not in this Figma. `src/assets/icons/slim-arrow-right.svg` already exists, but its look was not checked against this design.
    - Collapsing hides the child rows. Hover/collapsed visuals are not designed.
    - Use `role="treegrid"` or `aria-level` on rows if a tree is implemented.
- **Number cells**: `Body/S` 16/24, colour #223548, **right-aligned**.
- **Group column cells (Plan + AF)**:
  - Screen 08: no fill (transparent over white).
  - Screens 10/11: **highlighted** with bg **`rgba(255,248,214,0.5)` (RAW, no token)**. This applies to header row 1 "Group", both header row 2 cells and every body cell in those 2 columns. Borders are unchanged.
- No row hover state exists in Figma.

#### Variance cell (307 wide; example `…;5034:32035` for +3.0%, `…;5034:32120` for -0.9%)
- Cell: padding 8px 16px. Inner "Data Section" is 275×26.
- "Data Subsection" is **236×26**, centred in the Data Section (Figma offset +1.16px, which can be ignored).
- Layout inside the subsection, with absolute positions:
  - **Negative half**: x 0, w 117, y 5, h 16. Row, gap 1. A spacer (flex 1) comes first, then the label, then the bar, so the bar ends at the baseline.
  - **Baseline**: x 117, **2×26, black (RAW #000)**. Asset `src/assets/icons/variance-baseline.svg` (2×26).
  - **Positive half**: x 119, w 117, y 5, h 16. Row, gap 1. The bar starts at the baseline, then the label, then a spacer.
- Bars:
  - Height 16. **Negative fill #E00000 (RAW)**. **Positive fill #118843 (RAW)**.
  - These are plain filled rectangles named "Vector 8 (Stroke)". Their width depends on the data, so render them as CSS boxes rather than per-value SVGs.
  - Width scale is about 10px per 1%, with a maximum of 81px (117 − 35 label − 1 gap). The Figma widths are listed in the data table below. They are hand-drawn and only roughly proportional.
- Label:
  - Font **"72" Regular 13/16, black (RAW)**. Fixed width 35. Left-aligned, except "0%", which is right-aligned so it sits against the baseline.
  - **0%**: no bar; the label sits immediately left of the baseline.
- Accessibility: expose the text value (e.g. "-0.9%") and set `aria-hidden` on the bars.

#### Table data — screen 08 (`5022:14259`)
All cells are "123" except the ones marked **bold**.

| # | Row label | Level / control | US P | US AF | CA P | CA AF | UK P | UK AF | Grp P | Grp AF | Variance | Bar (Figma px) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Gross Profit | top | 123 | 123 | 123 | 123 | 123 | 123 | 123 | 123 | +3.0% | pos 24 |
| 2 | Net Revenue | top | 123 | **390** | 123 | **55** | 123 | **95** | 123 | **540** | 0% | — |
| 3 | COGs | top, **chevron (expanded)** | 123… | | | | | | | | -0.9% | neg 7 |
| 4 | Event Delivery Costs | child of COGs | 123… | | | | | | | | -6.2% | neg 62 |
| 5 | Procurement Costs | child of COGs | 123… | | | | | | | | 0% | — |
| 6 | Venue Operating Costs | child of COGs | 123… | | | | | | | | -1.3% | neg 11 |
| 7 | Travel Expenses | **top** (not indented in 08) | 123… | | | | | | | | -1.3% | neg 11 |
| 8 | Operating Expenses | top, **chevron (expanded)** | 123… | | | | | | | | -0.3% | neg 4 |
| 9 | Workforce Expenses | child of OpEx | 123… | | | | | | | | 0% | — |
| 10 | Facility Expenses | child of OpEx | 123… | | | | | | | | -2.7% | neg 18 |
| 11 | Corporate Services | child of OpEx | 123… | | | | | | | | 0% | — |
| 12 | Intercompany Charges | child of OpEx | 123… | | | | | | | | +5.4% | pos 60 |

- Row node IDs (prefix `I5034:25523;3718:36866;`), in order: 5034:31986, 5034:32053, 5034:32120, 5034:32187, 5034:32254, 5034:32321, 5076:21692, 5034:32388, 5034:32455, 5034:32522, 5034:32589, 5034:32656.
- The 12 rows take 504 of the 528 px available, so screen 08 does not scroll.

#### Table data — screens 10/11 (`5077:33318` / `5091:43484`, card `5125:18970` / `5125:21030`)
These screens have 13 rows. The differences from screen 08 are:
- Net Revenue Group AF = **530** (was 540). The other Net Revenue values are the same (390 / 55 / 95).
- **Travel Expenses is now a child of COGs** (padding-left 32).
- New row **"Tariffs"** (`I5125:18970;3718:36866;5125:18803`) is inserted after Travel Expenses as a child of COGs. All values are 123; variance **-1.3%** (neg bar 11).
- Resulting order: Gross Profit, Net Revenue, COGs▾, ·Event Delivery Costs, ·Procurement Costs, ·Venue Operating Costs, ·Travel Expenses, ·Tariffs, Operating Expenses▾, ·Workforce Expenses, ·Facility Expenses, ·Corporate Services, ·Intercompany Charges.
- 13 × 42 = 546 px is more than the 528 px available, so the last row (Intercompany Charges) is **clipped and the Rows area scrolls vertically**. The card stays 748 tall.
- Group columns are highlighted (see above).

---

## 3. Toast (`5077:34483` "Consolidation completed successfully." / `5091:43498` "Data published successfully.")
- Position: overlay, **centred horizontally**, **bottom 40px** from the viewport. Size 305×53 and 242×53 (hug content). It overlaps the table.
- Box:
  - bg `List/Default/Background` #fff.
  - border 1px `Tiles/Border` #eaecee. The border is inside the box: 53 = 16 + 21 + 16, so use `box-sizing: border-box`, or include the border in the padding.
  - radius `Dropdown/Radius` 8. Padding 16, gap 16, row, align center, overflow clip.
  - **Shadow `Shadow/L`**: `0 10px 30px 0 rgba(34,54,73,0.25)`, plus a transparent second layer.
- Icon: `status-positive` 18×18, `src/assets/icons/status-positive.svg`, fill #256F3A. Description: "positive, completed, on track…". Mark it decorative.
- Text: `Body/XS` = 72 Brand Regular 14/21, colour `Core/Text/Text` #223548, nowrap.
- Use `role="status"` / `aria-live="polite"`.
- Auto-dismiss timing is not specified in Figma (assume about 3–5 s). No close button.

---

## Assets (all in `src/assets/icons/`)
| File | Size | Use |
|---|---|---|
| sap-logo.svg | intrinsic 2122×1050, render 60×30 | shellbar logo |
| joule-icon.svg | 32×32 | shellbar Joule (default, #556B82) |
| joule-icon-accent.svg | 32×32 | shellbar Joule accent (#5D36FF, screen 12) |
| trend-up-negative.svg | 11×7 | KPI up triangle, #AA0808 |
| trend-down-negative.svg | 11×7 | KPI down triangle, #AA0808 |
| slim-arrow-down.svg | 14×14 | row expand/collapse chevron (#1D2D3E) |
| status-positive.svg | 18×18 | toast check (#256F3A) |
| variance-baseline.svg | 2×26 | variance zero line (black) |
| card-stroke-1824.svg (already existed, identical) | 1824×1 | card header divider (#D5DADD) |

Variance bars are not saved as assets: they are solid rectangles whose width depends on the data, so render them as CSS boxes with the RAW colours above.

## Uncertainties
- There is no hover, focus or pressed state for the buttons or rows, and no collapsed-row visual.
- The Group highlight colour `rgba(255,248,214,0.5)` is raw, not a token.
- Bar widths in Figma are only approximately proportional.
- The intent of the accent Joule icon (active or hover state?) is inferred from screen 12.
