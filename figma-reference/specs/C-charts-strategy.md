# Spec C: Charts, Skill Gap and Strategy Selection

Source: Figma file `U14fUtpHqbIHUuJnMfWAzu`. Reference PNGs: `figma-reference/05-3265-11043.png`, `figma-reference/06-3356-7494.png`.
The Card shell is already specified elsewhere (bg `Surface/card-bg-primary` #fdfeff, 1px `Border/border-primary` #e6e7ea, `Radius/radius-m` 8, padding `Spacing/spacing-l` 24, column gap 16, header Title-Strong). This spec only covers what goes inside.
Icon paths are relative to `src/assets/icons/`. "RAW" means the value is hardcoded in Figma and not bound to a variable.

## 0. Tokens used (Figma variable → resolved value)

| Variable | Value | Used for |
|---|---|---|
| Text/text-primary | #0b0c0f | titles, KPI numbers, body text |
| Text/text-secondary | #353c4a | subtitles, section labels |
| Text/text-tertiary | #636d83 | KPI captions |
| Label/Primary Label | #223548 | skill-gap paragraph |
| core/text/text | #223548 | Opex legend labels, risk list text (no variable def returned, fallback only) |
| Semantic/warning / warning-bg | #a95a00 / #fef5c8 | warning tag, avatar |
| Semantic/negative / negative-bg | #c72f2b / #f6e6e7 | Critical tag, +15% tag |
| Semantic Negative | #aa0808 | negative KPI triangle |
| Joule/background | #5d36ff | "View Solutions" button |
| Opacity/disabled-opacity | 40 (%) | disabled button |
| brand/foreground | #0057d2 | transparent/toggle button text, toggle border (fallback only) |
| brand/selected-background | #e5ecf5 | toggle selected bg (fallback; same as Shell/shell-button-bg-selected) |
| brand/background | #0070f2 | "Apply" emphasized button (fallback only) |
| neutral/background-white | #ffffff | toggle unselected bg |
| Neutral/foreground-white | #ffffff | text on filled buttons |
| borderwidth/border-width-s | 1px | toggle border |
| sapButton_Selected_Background | #edf6ff | chart-type toggle, selected |
| sapButton_Selected_BorderColor | #0064d9 | chart-type toggle, selected border |
| sapButton_Lite_Background / _BorderColor | transparent | chart-type toggle, unselected |
| sapButton_BorderWidth | 1px | |
| sapButton_BorderCornerRadius | 8px | chart toolbar buttons |
| sapButton_Lite_TextColor | #0064d9 | toolbar icon color |
| sapElement_Compact_Height | 26px | toolbar button min-height |
| sapToolbar_SeparatorColor | #d9d9d9 | toolbar separator |
| sapChart_OrderedColor_1 | #168eff | Plan series (blue) |
| sapChart_OrderedColor_2 | #c87b00 | Actual(s) series (orange) |
| sapChart_OrderedColor_5 | #8b47d7 | Forecast series (purple) |
| Widget Content/Chart/Value & Data Labels | #000000 | data labels |
| Widget Content/Chart/Axis Labels | #1d2d3e | x-axis labels (Skill Gap charts) |
| Widget Content/Chart/Axis Line | #758ca4 | x-axis line (Skill Gap charts) |
| Widget Content/Chart/Legend | #1d2d3e | legend labels (Skill Gap charts) |
| sapTile_TextColor | #556b82 | Opex y-axis labels |
| sapTextColor | #131e29 | Opex x-axis labels (fallback only) |
| sapField_BorderWidth / sapField_BorderCornerRadius | 1px / 4px | checkbox |
| Border/border-secondary | #b5bcca | checkbox border (fallback only) |
| Surface/canvas-primary | #fdfeff | checkbox bg (fallback only) |
| Spacing: 4xs 2, 3xs 4, 2xs 8, xs 12, s 16, l 24 · Radius: s 4, m 8 | | |

Typography (all font family "72"):
| Style | Spec |
|---|---|
| Title-Strong | Semibold 600, 16/22 |
| Title | Regular 400, 16/22 |
| Body | Regular 400, 14/20 |
| Body-Strong | Semibold 600, 14/20 |
| Caption-Strong | Semibold 600, 12/16 |
| MediumText/LHAuto/Regular | Regular 14, line-height normal (100%) |
| SmallText/LHAuto/Regular | Regular 12, line-height normal |
| Display/36/Regular | Regular 36, line-height normal |
| Charts/Data Labels, Charts/Axis Labels, Charts/Legend | Regular 12, line-height normal |
| Body/S (Opex legend) | **"72 Brand"** Regular 16/24 |
| Risk list text | **"72 Brand" Medium** 16/24 (no style name, RAW) |
| "Included Driver:" | 72 **Bold** 14/20 (no style name, RAW) |

---

## 1. Line Chart Card "Operating Expenses"
Node `I5150:45271;11620:10005;3411:19663;5150:45789`, Card **1172 × 395**.

### Structure
```
Card (shell, padding 24, gap 16)
├─ _Card Header → Title "Operating Expenses" (Title-Strong, text-primary, ellipsis)
│                  Subtitle "Variance Detected between Plan and Agentic Forecast" (Body, text-secondary, ellipsis)
└─ Card Body → Body Slot 1 (column, gap 16, width 1124)
   ├─ Driver row (row, gap 24, align start, h 22)
   │   ├─ "Included Driver:" 72 Bold 14/20, text-secondary, nowrap
   │   └─ 3 × Check Box (checked): "Workforce Expense Increase", "Exchange Rate Exposure", "Procurement Cost Variant " (trailing space in source)
   ├─ Chart Card (h 211, min-h 100, padding-x 24, overflow clip) → chart 1101 × 167 (it is 25px wider than its 1076 parent and runs into the right padding)
   └─ Legend (row, gap 5) → 3 × .Legend item
```

### Check Box (checked) (component `Check Box`, instance e.g. `…5150:45916`)
- Row, gap 8, align start. Total heights 22.
- Box: 22×22, bg `Surface/canvas-primary` #fdfeff, border `sapField_BorderWidth` 1px solid `Border/border-secondary` #b5bcca, radius `sapField_BorderCornerRadius` 4.
- Check mark: 12×12 centered → `accept-accent-12.svg` (fill #0057D2).
- Label container padding-y 3; label MediumText/LHAuto/Regular 14, `Text/text-primary`, nowrap.
- Use a real `<input type="checkbox" checked>` with the label as its accessible name. All three are checked in the design. Their purpose is to filter which drivers feed the forecast.

### Chart geometry (chart frame 1101 × 167, origin top-left)
- Plot left edge x = 57; plot width 1044 (to x = 1101).
- Horizontal gridlines are **vectors**, 1px. Color #D9D9D9 (RAW). The baseline is #798C77 (RAW).

| Y label | gridline y | label box |
|---|---|---|
| $550M | 5.5 | right-aligned, right edge x=42, top 0 |
| $500M | 35 | top 29 |
| $450M | 64 | top 58 |
| $400M | 93.5 | top 88 |
| $350M | 123 | top 116 |
| 0 (baseline, #798C77) | 153.5 | "0" box x13–36, top 147 |
- The axis is **broken**: the values run 350 → 550 at about 29.5px per $50M (0.59px per $1M), then jump to 0 at the baseline. Use `y = 64 − (v − 450) × 0.59` for values above 350.
- Y labels use SmallText/LHAuto/Regular 12, color `sapTile_TextColor` #556b82, right-aligned.
- X labels: "Q1 2026", "Q2 2026", "Q3 2026", "Q4 2026". They use SmallText 12, `sapTextColor` #131e29, centered in a 54px box, at top ≈154–156. The design places their centers at x = 161, 429, 692, 955.
- The data points sit at x ≈ **246.5, 514.5, 777.5, 1043** (about 266px apart). That is about 85px to the right of each x label. This is a design inconsistency. Recommendation: center each label under its point, or keep the offset if you want pixel parity.
- No y-axis line and no vertical gridlines.

### Series and data (exact text values)
| Series (legend label) | Color | Q1 2026 | Q2 2026 | Q3 2026 | Q4 2026 | Marker |
|---|---|---|---|---|---|---|
| Actual | #C87B00 `sapChart_OrderedColor_2` | **$455M** (label above) | **$452M** (label below) | – | – | circle 12px (r 5.5, fill and 1px stroke same color) |
| Plan | #168EFF `sapChart_OrderedColor_1` | **$451M** (below) | **$449M** (above) | **$464M** (below) | **$469M** (below) | circle 12px (r 6) |
| Plan (2nd; magenta) | #BA066C (**RAW**, no ordered-color token) | (line starts here at ≈452, no marker) | – | **$494M** (above) | **$498M** (above) | circle 12px (r 6) |

- Data labels use Charts/Data Labels (72 Regular 12), color `Widget Content/Chart/Value & Data Labels` #000, centered on the marker. There is a 1px gap between label and marker, and the label box is about 14px tall.
- The lines are **vectors**, stroke 2px, no fill, straight segments.
  - The magenta line goes Q2 (≈516,68) → Q3 (777,43) → Q4 (1041,35).
  - The Actual line is drawn flat at y ≈ 63–65.
- Design marker centers (x, y in the chart frame), useful for pixel parity:
  - Actual: (246.5, 63) and (514.5, 65).
  - Plan: (246.5, 64), (514.5, 60), (777.5, 64), (1043, 52).
  - Magenta: (778, 42) and (1042.5, 35).
- The Plan line passes near the Actual points in Q1/Q2, and the markers overlap.
- **Flag:** the third legend entry says "Plan" in the source, but it is probably meant to read "Forecast" or "Agentic Forecast". Keep "Plan" unless told otherwise.

### Legend (`.Legend`, Opex variant)
- The outer row has gap 5 and sits left-aligned below the chart. Item widths are 89/76/76 and the row is 24 tall.
- Each item is a row with gap 8:
  - Symbol: 36×18 vector. Asset: `legend-line-point-orange.svg` / `legend-line-point-blue.svg` / `legend-line-point-magenta.svg`. It is a 12px line, then a point (r 5.5, white 1px stroke), then a 12px line, all at stroke 2px.
  - Label: Body/S = **72 Brand** Regular 16/24, color `core/text/text` #223548.
- **Flag:** the legend blue is #1B90FF (RAW) while the series uses #168EFF. Use #168EFF for both.
- Labels: "Actual", "Plan", "Plan".

---

## 2. Screen 3265:11043 "Skill Gap Analysis" (ref 05)
Content column: `Body FX - 1`, width 1365, at x=248 inside the content slot.
- Header: page title "Skill Gap Analysis" plus a subtitle, then the "Workforce Expense Analysis" section header. These belong to the shared page spec.
- `Exchange Rate Content` is a column with gap 24:
  - Section Header (h 40)
  - Summary row (row, gap 24, two cards of 670.5 × **387**)
  - Chart card "Driver - Staffing Cost" (1365 × 496)
  - Chart card "Impact - Operating Expenses" (1365 × 504)

### 2a. Skill Gap summary card `I3265:11065;3411:19663;3277:8238`
- Card 670.5 × 387. Body flex:1, so the footer sits at the bottom.
- **Header** (row, gap 16, align center):
  - Avatar (component Avatar, square):
    - Container: padding 12, max 48×48, bg #fef5c8 (RAW, equal to Semantic/warning-bg), border 1px #e6e7ea (RAW), radius **6** (RAW).
    - Icon: 18×18 → `warning-warning.svg` (warning, #A95A00).
    - Doc: "Always use square avatars for products, and circular avatars for people." https://www.sap.com/design-system/fiori-design-web/ui-elements/avatar-web-component/
  - Title (wraps): "Skill Gap Identified through additional concert opportunity", Title-Strong, text-primary.
  - Subtitle: "More specialists required", Body, text-secondary, h 20, ellipsis.
- **Body** (column, gap 16):
  - "More staff required for additional concerts": Title (72 Regular 16/22), text-secondary.
  - Paragraph: Body, `Label/Primary Label` #223548. Text: "GSVG identifies a 22% shortfall in critical event skills. To close the gap, experienced tournament personnel are redeployed from Mexico and Europe, supported by targeted hiring and accelerated training. These actions increase Skills Gap Coverage from 78% to 96%, reduce contractor dependence, and help protect the forecasted £57M profit opportunity."
- **Footer**: Button Group, justify end, gap 16. One button, 120 × 32.
  - Button "View Solutions" (Joule emphasized): bg `Joule/background` #5d36ff, padding 6 / `spacing-xs` 12, radius `radius-s` 4, gap 6, label Body-Strong white, nowrap.
  - It carries a click annotation and opens the strategy panel (screen 3356:7494).
  - **Disabled state** (screen 3356:7494, `…5022:13030`): the same button with `opacity: 0.4` (`Opacity/disabled-opacity` 40). Render it as `disabled` / `aria-disabled` after a strategy has been viewed.
- On screen 6 this card `I3356:7497;3411:19663;5022:13030` is identical except for the disabled button.

### 2b. Workforce Expenses card `I3265:11065;3411:19663;3277:8239`
- Card 670.5 × 387. Identical on screen 6 (`I3356:7497;3411:19663;5022:13031`).
- **Header** (row, gap 16). The width is fixed at 339 (RAW), so let it fill instead.
  - Leading icon wrapper: padding-y `spacing-3xs` 4. Icon 20×20 → `trend-up.svg` (trend-up, #0B0C0F).
  - Title "Workforce Expenses" (Title-Strong). Subtitle "Specialized Workforce " (Body, text-secondary, h 20; trailing space in source).
- **Body** (column, gap 16):
  1. Block (column, gap 8):
     - Row (gap 8, center): 16×16 → `bar-chart.svg` (#353C4A), then "Included Drivers" in Title (16/22), text-secondary.
     - Text: "Increasing contingency workforce needs and FX rate exposure risks are effecting the forecast for operating expenses forecast." Body, text-secondary.
  2. KPI tiles (row, gap 24). Two nested Cards, flex 1 each, 299.25 × 155. Each uses the standard Card shell (padding 24), no header. Tile 1 stretches to equal height.
     - **Tile 1** (`Card KPI & Status`):
       - Value row (gap 4, align flex-end, color text-primary): "50" in Display/36/Regular, right-aligned. Then "M" in 14px (MediumText/LHAuto), box 9×21, centered.
       - Caption: padding-y 4, "Planned Q3 2026,Q4 2026", 14px MediumText/LHAuto, text-tertiary #636d83.
     - **Tile 2** (`Card KPI & Status`, row, justify space-between, align start):
       - Left KPI column (gap 4):
         - Value row (gap 4, align flex-end): _KPI Trend Marker (padding-bottom 6) holding a 14×14 icon → `project-definition-triangle-2-negative.svg` (#AA0808, Semantic Negative). Then "238" (Display/36) and "M" (14px).
         - Caption "Impact due to Increased Staffing Demand", 14px, text-tertiary, wraps.
         - Variance `Card Tag`: h 18 (min 18), padding-x 4, radius 16 (RAW). Bg and 1px border are both `Semantic/negative-bg` #f6e6e7. Gap 4. Contents: 12×12 `arrow-top-negative.svg` (#C72F2B with a white glow filter), then "+15%" in Caption-Strong, `Semantic/negative` #c72f2b, text-shadow `0 0 2px #fff`.
       - Right: Tag "Critical". Padding `spacing-3xs` 4 / `spacing-2xs` 8, radius 4, bg `Semantic/negative-bg` #f6e6e7, text Caption-Strong `Semantic/negative` #c72f2b.
  3. Tag "Immediate action needed " (trailing space). Padding 4/8, radius 4, bg `Semantic/warning-bg` #fef5c8, text Caption-Strong `Semantic/warning` #a95a00. Width hugs content (156 × 24).

### 2c. Chart cards "Driver - Staffing Cost" / "Impact - Operating Expenses"
- Nodes:
  - Screen 5: `I3265:11065;3411:19663;3268:4951` (Staffing, 1365×496) and `…3270:4770` (Impact, 1365×504).
  - Screen 6: `I3356:7497;3411:19663;3356:7556` and `…3356:7557`.
- **Header** row (gap 16, center):
  - Title and Subtitle (flex 1):
    - Title "Driver - Staffing Cost " / "Impact - Operating Expenses " (Title-Strong, nowrap, ellipsis; trailing spaces in source).
    - Subtitle (Body, text-secondary): "Million in USD" for both on screen 5. On screen 6 Staffing reads **"Million in MXN"**; Impact stays "Million in USD".
  - Right Accessories: the chart toolbar.

#### Chart-type toggle toolbar (`Card_Right Accessories` → Slot)
- Row, gap 10, justify end. The design puts it in an 88px-wide slot that overflows to the left; treat it as auto width (about 169px).

| # | Role | Component | Icon (16×16, #0064D9) | State |
|---|---|---|---|---|
| 1 | Line chart | Icon Button / Third Action | `business-objects-experience-button.svg` | **selected** |
| 2 | Bar chart | Icon Button | `bar-chart-button.svg` | unselected |
| 3 | Stacked bar | Icon Button | `vertical-waterfall-chart-button.svg` | unselected |
| – | Separator | Toolbar Items / Fourth Action | – | 1×26, `sapToolbar_SeparatorColor` #d9d9d9 |
| 4 | Chart settings | Icon Button / Fifth Action | `action-settings-button.svg` | normal (Lite) |

- Button box: min-h 26 (`sapElement_Compact_Height`), padding 5 / 8, radius `sapButton_BorderCornerRadius` 8, border `sapButton_BorderWidth` 1px.
  - Selected: bg `sapButton_Selected_Background` #edf6ff, border `sapButton_Selected_BorderColor` #0064d9.
  - Unselected: bg and border `sapButton_Lite_*` (transparent).
- Buttons 1–3 are a single-select segmented toggle group. Use `role="radiogroup"` or `aria-pressed` buttons, with accessible names "Line chart", "Bar chart", "Stacked bar chart". Button 4 is "Chart settings".
- Doc (Icon Button): "Use Icon Buttons with well known icon metaphors and tooltips. Ensure a touch area with 44px (Cozy) / 32px (Compact)." https://www.sap.com/design-system/fiori-design-web/ui-elements/button-web-component/
- Toolbar doc: https://www.sap.com/design-system/fiori-design-web/ui-elements/toolbar-web-component/
- Only the line view is designed. Bar and stacked views are not designed.

#### Chart body (column, gap 16)
- The plot plus x-labels form a column with gap 8:
  - **Plot**: 1317 × 321, overflow clip. No gridlines and no y-axis.
    - Staffing has an x-axis line: `border-bottom: 3px solid` `Widget Content/Chart/Axis Line` #758ca4.
    - **Impact has no axis line** on either screen. That is probably an oversight; apply the same 3px line for consistency, or omit it for parity.
  - **X-axis labels**: 4 equal flex columns (329.25 each), padding-x 8, h 29, two lines centered. Charts/Axis Labels 12, color #1d2d3e, ellipsis. Texts: "Fourth Quarter\n2025", "First Quarter\n2026", "Second Quarter\n2026", "Third Quarter\n2026". Category centers x = 164.6, 493.9, 823.1, 1152.4.
- **Legend**: centered row, gap 16. Each item is a row with gap 4: a 16×16 symbol, then the label in Charts/Legend 12, `Widget Content/Chart/Legend` #1d2d3e.
  - Actuals → `symbol-container-orange.svg` (line plus circle, #C87B00)
  - Plan → `symbol-container-blue.svg` (line plus circle, #168EFF)
  - Forecast → `symbol-container-diamond-purple.svg` (line plus diamond, #8B47D7)
- **Series styling**:
  - Lines are vectors, stroke 2px, straight segments.
  - Actuals: #C87B00 (`sapChart_OrderedColor_2`), circle markers 12px.
  - Plan: #168EFF (`sapChart_OrderedColor_1`), circle markers 12px.
  - Forecast: #8B47D7 (`sapChart_OrderedColor_5`), **diamond** markers 12×12 (path `M12 6L6 12L0 6L6 0Z`).
  - The Forecast line starts at the last Actuals point (First Quarter 2026), so it continues from Actuals.
- Data labels: Charts/Data Labels 12, #000, centered on the marker, above or below as listed below.

**Driver - Staffing Cost** (use the screen-6 version as canonical; it is cleaner)
| Series | Q4 2025 | Q1 2026 | Q2 2026 | Q3 2026 |
|---|---|---|---|---|
| Actuals | 18.021 (above) | 17.911 (above) | – | – |
| Plan | 18.201 (above) | 18.112 (above) | 18.616 (above) | 18.667 (above) |
| Forecast | – | (line starts at 17.911) | 17.798 (above) | 16.408 (above) |

- Screen-6 marker centers in the 1317×321 plot:
  - Actuals: (115, 157) and (493.5, 173).
  - Plan: (163, 134), (493, 147), (822.5, 83), (1152, 84).
  - Forecast: (814, 184) and (1154, 245).
- The Forecast line runs (493,175) → (814,186) → (1160,246).
- The Q4 2025 Actuals point sits about 48px left of the band center. That is a design offset.
- The y-positions are illustrative, not linear. Suggested: either use these pixel positions, or a linear y-domain of about 16.0–19.0 over about 60–280px.
- On screen 5 the Forecast markers sit about 48px left of their category, and the line extends from Q1 to past Q3. Screen 6 corrects the markers. The values are the same on both screens; only the subtitle unit differs (USD on screen 5, MXN on screen 6).

**Impact - Operating Expenses** (same values on screens 5 and 6)
| Series | Q4 2025 | Q1 2026 | Q2 2026 | Q3 2026 |
|---|---|---|---|---|
| Actuals | 1.820 (above) | 1.796 (below) | – | – |
| Plan | 1.805 (below) | 1.809 (above) | 1.856 (below) | 1.876 (below) |
| Forecast | – | (line starts at 1.796) | 1.915 (above) | 1.978 (above) |

- Screen-6 marker centers:
  - Actuals: (164.5, 224) and (496.5, 242).
  - Plan: (164.5, 239), (496.5, 233), (823.5, 209), (1154, 195).
  - Forecast: (823, 158) and (1153.5, 122).
- The Forecast line vector runs (496,242) → (858,159) → (1203,124). It does not pass exactly through the diamonds, and it overshoots past Q3. Recommendation: connect the line through the actual data points.

---

## 3. Screen 3356:7494 strategy selection (ref 06)
- Screen order (column, gap 24): Summary row, then the **Options Container**, then Staffing chart (MXN), then Impact chart.

### 3a. Options Container `I3356:7497;3411:19663;3356:7508` (1365 × 849)
- Container: column, gap 24, padding 24 (RAW), radius `radius-m` 8.
  - Bg **rgba(226,233,248,0.5)** (RAW tint).
  - Border 1px `Border/border-primary` #e6e7ea.
- Children:
  1. **Options Title**: " Select a strategy to reduce the identified skill gap. " (leading/trailing spaces in source; trim them). Body-Strong 14/20, text-primary.
  2. **Options Grid**: row, gap 24, align stretch. Three Cards, flex 1 (423 × 701 each, equal height). Use the standard Card shell. The body is flex:1, so the footer sits at the bottom.
  3. **Button Bar**: row, justify end, gap 8.
     - "Compare Impacts" (transparent button, 138×32).
     - "Apply" (emphasized, 62×32).

#### Option Card content
- Header:
  - Title (Title-Strong, ellipsis): "Maintain Existing Workforce Plan" / "Moderate Workforce Expansion " / "Aggressive Workforce Expansion".
  - Subtitle "Subtitle" (Body, text-secondary). This is a **placeholder** in the source.
- Body Slot 1: column, gap 16.
  - **Card Text Block "Summary"** (column, gap `spacing-3xs` 4):
    - Label "Summary": Body-Strong, text-secondary.
    - Description: padding-y 4, Body, text-primary, text "XXX" (**placeholder**).
  - **KPI blocks** (each a column with gap 16):
    - Label: Body-Strong, text-secondary. The source has trailing spaces: "Additional Revenue Captured ", "Additional Labor Cost ", "Operating Profit Impact ".
    - Value row: gap 4, align flex-end.
      - _KPI Trend Marker: padding-bottom 6, 14×14 → `trend-up-positive.svg`. That file is the positive project-definition-triangle-2, #007B3E; it is reused with identical content.
      - Prefix "$" or "+$" in Display/36.
      - Number in Display/36.
      - "M" in 14px, box 9×21.
      - All text-primary.
  - **Risk Assessment** block (gap 4):
    - Label "Risk Assement" (sic, a typo in the source; consider "Risk Assessment"): Body-Strong, text-secondary.
    - Then the Data List Items:
      - Row: padding 12, gap 12, `border-left: 3px solid` `list/default/border` (transparent).
      - Icon wrapper: h 24, padding-x 3. Icon 18×18 → `warning2-text-18.svg` (warning-2 outline, #223548).
      - Text: **72 Brand Medium 16/24**, `core/text/text` #223548, wraps.
- Footer: Button Group, justify end, gap 16.
  - "Preview": transparent button.
  - Select/Selected: toggle button.

| Card | Revenue | Labor Cost | Op. Profit | Risks | Toggle |
|---|---|---|---|---|---|
| Maintain Existing Workforce Plan | ▲ $18 M | ▲ $2 M | ▲ +$16 M | "Some event opportunities cannot be serviced.", "Potential customer experience issues." | **Selected** |
| Moderate Workforce Expansion | ▲ $25 M | ▲ $5 M | ▲ +$20 M | "Moderate hiring effort.", "Could also imply intercompany", "Capacity sufficient for most expected demand." | Select |
| Aggressive Workforce Expansion | ▲ $30 M | ▲ $8 M | (no Op. Profit block; it does not exist in the node) | "Moderate hiring effort.", "Could also imply intercompany" | Select |

- Many risk strings have trailing spaces in the source; trim them.
- **"Greyed" values:** "Additional Labor Cost" and its $2/$5/$8 values look faded in the screenshots. This is **not** a style on the nodes; no opacity is set. It comes from the floating Joule input's white gradient overlay at the bottom of the viewport. Render those values at full opacity.

#### Buttons and states (all 32px tall)
- Shared box: padding 6 / `spacing-xs` 12, radius `radius-s` 4, gap 6, label Body-Strong 14/20, nowrap.

| Variant | Bg | Border | Text | Example |
|---|---|---|---|---|
| Transparent | none | none | `brand/foreground` #0057d2 | "Preview", "Compare Impacts" |
| Emphasized (brand) | `brand/background` #0070f2 | none | white | "Apply" |
| Emphasized (Joule) | `Joule/background` #5d36ff | none | white | "View Solutions" |
| Disabled (any) | same as variant | | | opacity 0.4 (`Opacity/disabled-opacity`) |
| Toggle, unselected | `neutral/background-white` #fff | 1px (`borderwidth/border-width-s`) `brand/foreground` #0057d2 | #0057d2 | "Select" (64×32) |
| Toggle, selected | `brand/selected-background` #e5ecf5 | none | #0057d2 plus a leading 16×16 check `accept-accent.svg` (#0057D2) | "Selected" (102×32) |

Interaction intent:
- Option toggles form a single-select group: selecting one deselects the others. Use `aria-pressed`, or a radio group labelled "Select a strategy to reduce the identified skill gap". The selected label changes from "Select" to "Selected".
- "Preview" previews that strategy's impact (likely updates the charts below).
- "Compare Impacts" opens a comparison.
- "Apply" applies the selected strategy.
- Give each "Preview" and "Select" button an accessible name that includes the card title, e.g. "Preview Moderate Workforce Expansion".

---

## 4. Asset map

| Slot | File | Size |
|---|---|---|
| Opex checkbox check mark | `accept-accent-12.svg` (new) | 12×12 |
| Opex legend symbols | `legend-line-point-orange.svg`, `legend-line-point-blue.svg`, `legend-line-point-magenta.svg` (new) | 36×18 |
| Skill-gap avatar icon | `warning-warning.svg` (reused, identical) | 18×18 |
| Workforce header icon | `trend-up.svg` (new) | 20×20 |
| Included Drivers icon | `bar-chart.svg` (reused, identical) | 16×16 |
| Negative KPI triangle | `project-definition-triangle-2-negative.svg` (new) | 14×14 |
| Positive KPI triangle | `trend-up-positive.svg` (reused; same content, only clip IDs differ) | 14×14 |
| +15% arrow | `arrow-top-negative.svg` (reused; only IDs differ) | 12×12 |
| Chart toolbar icons | `business-objects-experience-button.svg`, `bar-chart-button.svg`, `vertical-waterfall-chart-button.svg`, `action-settings-button.svg` (new) | 16×16 |
| Skill-gap chart legend | `symbol-container-orange.svg`, `symbol-container-blue.svg`, `symbol-container-diamond-purple.svg` (new) | 16×16 |
| Risk list icon | `warning2-text-18.svg` (new) | 18×18 |
| Selected toggle check | `accept-accent.svg` (new) | 16×16 |

These are **not saved**; draw them in SVG/React from the numbers above:
- chart line vectors
- 12px dots and diamonds (circle r 6, or r 5.5 plus a 1px same-color stroke for Actual; diamond path `M12 6L6 12L0 6L6 0Z`)
- gridlines (#D9D9D9 1px) and the baseline (#798C77 1px)
