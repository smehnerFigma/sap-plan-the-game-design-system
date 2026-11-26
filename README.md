# Plan the Game — design system (React + TypeScript + Vite)

A reusable component library and 12 composed screens, implemented from the Figma file
**“Plan the Game – CONNECT 2026”** (`U14fUtpHqbIHUuJnMfWAzu`).

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build
npm run lint
```

The app always opens on the first screen, **Impact Analysis**. Every load, including a reload, a deep link or an unknown URL, starts there, and you move through the prototype by interacting with it. The only other entry point is the component showcase at **`#/showcase`**, which lists tokens, type styles, every component and its states.

## The connected flow

Each Figma frame is one route. Clicking through the prototype moves between those routes, so the URL always names the Figma state on screen and browser back / forward work. Screens that are states of the same Figma flow share one mounted component (`group` in `src/screens/registry.tsx`), so typed text and running animations carry over between them.

```
Impact Analysis ──(chat toggle, or the “Ask Joule” button on the opportunity card)──▶ Joule with “Execution Risk” context
      │                                                       └─(send)──▶ Joule thinking ──(2.4 s)──▶ answer + “Configuration Information” section
      │ “Open Space” on Assess Skill Gap
      ▼
Skill Gap Analysis ──(View Solutions)──▶ strategies (select one) ──(Apply)──▶ Impact Analysis follow-up (2 actions completed)
      ▲ breadcrumb “Operating Expenses — Variance Resolution” returns           │ “Initiate Consolidation”
                                                                               ▼
2026 Financial Plan ──(Consolidate)──▶ Full Consolidation dialog (sequence runs) ──▶ consolidated + toast ──(Publish Data)──▶ published + toast
      ▲ SAP logo                                                                                                     │ Joule icon (shellbar)
      └──────────────────────────── closing Joule ◀── Disclosure Management + Joule ◀───────────────────────────────────┘
```

The main navigation's *Spaces* item returns to the start. Within a session, browser back and forward step through the visited states.

## Screens

| # | Figma node | Frame | Slug | Interactive behaviour |
|---|---|---|---|---|
| 0 | 3256:3446 | 1920 | `impact-analysis` | Chat toggle or “Ask Joule” → context; sending a prompt → thinking; “Open Space: Assess Skill Gap” → Skill Gap |
| 1 | 5146:22684 | 1920 | `impact-analysis-context` | Prefilled question with “Execution Risk” context (× removes it); send → thinking |
| 2 | 5150:41723 | 1920 | `impact-analysis-thinking` | Progress steps; auto-advances to the answer after sending |
| 3 | 5150:45269 | 1920 | `impact-analysis-answered` | Reply and the Configuration overview / KPIs at Risk cards; sections collapse |
| 4 | 3265:11043 | **1941** | `skill-gap` | “View Solutions” → strategies; chart-type toggles; breadcrumb back |
| 5 | 3356:7494 | **1941** | `skill-gap-strategies` | Single-select strategy toggles; Apply → follow-up |
| 6 | 5026:17511 | 1920 | `impact-analysis-follow-up` | “Initiate Consolidation” → Financial Plan; “Open Space: Assess Skill Gap” → strategies |
| 7 | 5022:14259 | 1920 | `financial-plan` | Consolidate → dialog; COGs / Operating Expenses rows expand and collapse |
| 8 | 5076:21758 | 1920 | `financial-plan-consolidating` | Dialog; Esc or × cancels back to the plan |
| 9 | 5077:33318 | 1920 | `financial-plan-consolidated` | Group highlight, Tariffs row, toast; Publish Data → published |
| 10 | 5091:43484 | 1920 | `financial-plan-published` | Toast; Joule icon → Disclosure Management |
| 11 | 5080:42295 | 1920 | `disclosure-management` | Tabs, chapter selection, editable section, Joule chat; closing Joule or the SAP logo → plan |

Frames 4 and 5 are 1941px wide in Figma (content column 1365px).

## Structure

```
src/
  tokens/tokens.css        CSS custom properties (Figma variables + marked inferred values)
  tokens/typography.css    one class per Figma text style (.t-heading2, .t-body-strong …)
  styles/fonts.css         SAP "72" @font-face (from @sap-theming/theming-base-content)
  components/<Name>/       38 components, CSS Modules, typed props — barrel in components/index.ts
  screens/                 compositions only (no new styling primitives), data/ holds Figma copy
  showcase/                component showcase; parses tokens.css at build time (?raw)
  assets/icons/            106 SVG/PNG assets exported from Figma via MCP (unaltered)
figma-reference/
  NN-<node>.png            Figma exports used as visual targets (compare against rendered/)
  rendered/NN-<slug>.png   headless-Chrome renders of this implementation at each frame's width × 1080
  specs/*.md               extracted design specs (layout, tokens, text, states per component)
  unused-assets/           exports replaced by CSS (1px rules, an opacity-0 chevron)
```

No existing code components or Code Connect mappings existed (`get_code_connect_map` returned `{}` and the repo was empty), so every component is new. No UI framework or Tailwind dependency is used.

## Component inventory (Figma → code)

| Figma component | Code | Variants / states implemented |
|---|---|---|
| Button | `Button` | Horizon: outline, emphasized (#0070f2), transparent, joule; SAC: emphasized, secondary, transparent; regular / compact; disabled (opacity 0.4); toggle `pressed` (Select/Selected with check) |
| Icon Button / Toggle Icon Button | `IconButton` | shell 40, compact 32, ghost, tertiary 26×24, joule, jouleOutline (card “Ask Joule”), header; pressed; disabled |
| Card / _Card Header / _Card Footer / _Card State | `Card` | avatar- or icon-leading header, subtitle, actions, footer; default / selected / interactive |
| Card KPI & Status, Variance Value Stacked | `KpiTile`, `KpiValue` | trend positive / negative / none, forecast tag, status tag |
| Card Tag | `TrendTag` | positive, negative |
| Tag | `Tag` | neutral, positive (accent-8), negative, info + icon, warning |
| Avatar | `Avatar` | size l / s; positive, warning, negative, info, neutral; person image |
| Object List Item | `ActionItem`, `ActionList` | open, completed; `dense` (0 gap, as on Figma items 2–4) |
| Card Text Block | `Field`, `FieldGrid`, `SectionHeading` | text, bullet list, tag value; 2 / 4 columns |
| Line Divider | `Divider` | horizontal / vertical |
| Message Strip | `MessageStrip` | warning |
| Table (Spaces) | `Table` | header + rows, caption |
| Check Box | `Checkbox` | checked, unchecked, disabled, focus |
| Line charts + .Legend | `LineChart` | `axis` (broken y-axis, gridlines) and `plain` (axis line, two-line categories); circle / diamond markers; label above/below; line start without marker; data-driven scale **or** exact Figma `geometry`; accessible data table |
| Card_Right Accessories toolbar | `ChartTypeToolbar` | single-select line / bar / stacked + settings |
| Main Navigation | `MainNavigation` | Product Truth / Vision sets, selected item, notification badge |
| Pane Bar | `PaneBar`, `RightPaneBar` | default, chat pressed, compact (refresh/share) |
| Page Header, Section Header | `PageHeader`, `SectionHeader`, `Section` | subtitle; expanded / collapsed |
| Spaces template | `SpacesLayout` | with / without right pane, floating prompt |
| Joule Input (Set A / Set B) | `JouleInput` | wide + chip, narrow + context header, narrow empty, compact + pill; focus; send enabled / disabled |
| Messages / Chat Bubble / Joule Reply Content / Action Container | `MessageList`, `Timestamp`, `UserMessage`, `JouleMessage`, `ReplyList`, `ResponseActions` | thumbs toggles, Sources badge |
| Explainability Progress Steps / Animated Busy Indicator | `ProgressSteps` | completed, loading |
| Joule – New Campaign (SAC) | `JoulePanel` | user / Joule bubbles, quick reply, typing, focused input |
| Showcase Shellbar / Header Addon | `Shellbar`, `SacHeader` | Joule inactive / active |
| KPIs Header | `KpiHeader` | trend up / down (negative) |
| Card (SAC showcase) | `SacCard` | title header or custom toolbar header |
| Table / .Table Cells / .Table Toolbar | `PivotTable`, `VarianceBar` | expand/collapse parents, child indentation, highlighted group, scroll |
| Horizontal Tab bar | `Tabs` | selected / unselected, arrow-key navigation |
| Data List Item | `ListItem`, `List`, `StepList` | default / selected; done / active / pending |
| Modal | `Dialog` | native `<dialog>`, backdrop, Esc / close, initial focus on the content, optional `top` |
| Message Toast | `Toast` | auto-dismiss |
| Loading Indicator | `LoadingIndicator` | brand dots, Joule dots |
| Toolbar items | `Toolbar`, `ToolbarGroup`, `ToolbarSeparator` | — |

## Tokens: defined in Figma vs inferred

`src/tokens/tokens.css` holds 119 tokens. Every line carries the Figma source name in a comment.
The showcase reads that file and labels each token **Figma** or **Inferred**.

**Defined in Figma (variables / styles, values taken verbatim):**
- **Colour:** text, surface, border, brand / interaction, semantic, accent, Joule and chart colours. SAC equivalents are merged where values coincide (e.g. `Core/DividerDefault` = `Table/*/Border` = `Color/Grey/3`).
- **Spacing:** `spacing-4xs … spacing-l`.
- **Radius:** `radius-s`, `radius-m`.
- **Border widths.**
- **Element heights:** `sapElement_Height`, `sapElement_Compact_Height`, `Table/Cell/Size/ContainerHeightM`.
- **Disabled opacity.**
- **Effect styles:** Joule Input, Pane Shadow, Shadow/S, Shadow/L, Shadow/XL, CxD/Blue/S, CxD/Grey/XL.
- **Text styles:** every Figma text style as a class in `typography.css`.
- **Gradient stroke** "Joule Input Gradient" (stops and opacity read from the file).

**Inferred:** raw values repeated across screens but not bound to a variable, promoted to tokens and marked `Inferred` in the CSS.

| Token | Value | Where it comes from |
|---|---|---|
| `--space-m` / `--space-xl` / `--space-2xl` | 20 / 32 / 48 | section padding, tab and toolbar gaps, SAC page padding |
| `--radius-avatar` | 6 | square avatar |
| `--radius-pill` | 16 | Card Tag; also SAC card and toast radii |
| `--color-focus` | #0064d9 | no focus state is drawn in Figma; uses the SAP focus colour |
| `--color-pivot-highlight` | rgba(255,248,214,.5) | raw Group-column highlight |
| `--color-variance-negative` / `--color-variance-positive` | #e00000 / #118843 | raw variance bar fills |
| `--font-brand-tracking` | −0.0175em | “72” Regular/Light at 36px and 24px runs ~1.75% wider than “72 Brand”; the value is measured on the SAC frames |

A few raw values remain inline at their only call site, with a `/* raw */` comment:
- the 20px dialog radius;
- the SAC Joule header gradient end colour #6431fa;
- the shellbar title #333;
- the strategy panel tint (Info-bg at 50%).

## Assumptions and deliberate deviations

**Fonts**
- **"72 Brand"** (SAC screens) isn't distributed on npm or installed locally, so it is aliased to **"72"**. 72 also has no Medium (500) cut, so 500 maps to Semibold.
- **Metric correction:** to keep layouts 1:1, the 36px KPI values and the 24px shellbar title use `--font-brand-tracking`, and compact SAC buttons use −0.01em. The KPI columns now land within 1px of Figma (48 / 231 / 441 / 656 / 888 vs 48 / 232 / 441 / 655 / 887).
- **Remaining difference:** glyph shapes still differ slightly. Adding the real 72 Brand files to `fonts.css` would remove both this and the tracking correction.

**Inferred states** (Figma draws none of these):
- **Hover:** subtle surface tints.
- **Focus:** 2px `--color-focus` outline. The Joule input's gradient ring goes to full opacity when focused.
- **Pressed:** none drawn.
- **Collapsed tree row:** the chevron rotates.
- **Unused chart views:** the bar and stacked views show a placeholder message.
- **Timing:** the consolidation sequence advances every 1.4s and toasts dismiss after 4s. These timings and the loading-dot animations are inferred, and the animations respect `prefers-reduced-motion`.

**Filled Joule input text** uses `text-primary`. Figma uses the placeholder's tertiary colour for typed text too, which would fail as a visible filled state.

**Charts.** The Figma charts are illustrations: markers aren't placed to scale, and in the Opex chart the x-labels sit about 85px left of their points. `LineChart` stays data-driven by default. For the 1:1 match, the screens pass the exact Figma geometry from `src/screens/data/chartGeometry.ts`: marker centres, line vertices, gridlines and label positions, read from nodes 5150:45789, 3268:4951 and 3356:7556/7557. The values still drive the labels and the accessible data table.
- **Two Staffing chart versions:** Figma draws the Staffing chart differently on screens 4 and 5, so each screen uses its own geometry.
- **Legend:** the magenta Opex series keeps its Figma legend label "Plan" (probably meant "Forecast").

**Variance bars** are data-driven by default (10px per 1%, max 81px). The SAC screens pass Figma's hand-drawn widths through `PivotRow.barWidth`.

**Figma quirks reproduced for 1:1**
- **Inside strokes:** strokes (cards, panes, nav, toolbars, tab bar, header) are drawn inside the box, as Figma does, so padding is measured from the outer edge. LHAuto text styles use the font's natural line height.
- **Card layout:**
  - The Execution Risk card is fixed at 694px wide.
  - Recommended Actions stretches to the row height only when the chat pane is open.
  - Action items 2–4 use a 0 title gap.
  - The two KPI Setup rows use different column gaps (16 / 24).
  - The follow-up cards are 20px apart.
  - The Skill Gap section uses 26px gaps.
- **Screen-specific details:**
  - On screen 2 the Execution Risk header shows the `product` icon while Joule analyses it.
  - On screen 0 the opportunity card has the "Ask Joule" button.
  - The Full Consolidation modal sits at y = 367 (34vh), not centred.

**Asset handling**
- **Colour mismatches:** `spaces-12.svg`, `decline.svg` and `overflow-14.svg` are exported with a different colour from the variable bound in Figma. They are recoloured through `Icon tint` (CSS mask); the asset shapes are unchanged.
- **Replaced by CSS:** the 1px divider exports (`card-stroke-*`, `line-divider`) are fixed-width lines, so CSS borders replace them. The opacity-0 table chevron isn't rendered. All four are kept in `figma-reference/unused-assets/`.

**Copy is kept verbatim** from Figma, including placeholders and typos: “Asses FX Risk Exposure”, “Risk Assement”, “BS  + PL Elminations”, “TODO”, “XXX”, “Subtitle”. Trailing spaces are trimmed.

## Visual comparison with Figma

Two checks were run on every screen, at its Figma frame width:
1. Element boxes were measured in headless Chrome and compared with absolute coordinates computed from the Figma metadata.
2. Each render was overlaid on the Figma export, in both 50% overlay and difference-blend modes.

The overlay tooling was removed from the app afterwards. Renders are in `figma-reference/rendered/`.

| Screen | Measured against Figma |
|---|---|
| 0–3 Impact Analysis | **Summary card:** exact at 160,268, 1172×331, including its KPI tiles (184,436, 359×139). **Right pane:** timestamp, bubble, reply, actions and input at identical coordinates. **Execution Risk tiles:** +1px each, from Figma's fractional 16.5px line height on two-line labels. |
| 4–5 Skill Gap (1941) | **Cards:** at 328,280. **Strategy cards:** 423×701, matching Figma. **Charts:** identical point positions. **Overall:** within 1px. |
| 6 Follow-up | Cards exact (662×436, 20px gap). Prompt exact (720,938, 560×90). |
| 7–10 Financial Plan | **Exact:** header 260px, card at 284, table rows from 404 in 42px steps. **KPI columns:** within 1px. **Glyphs:** differ slightly because of the font alias. |
| 11 Disclosure Mgmt | **Exact:** header 193px, tab bar 45px, card at 217 with a 54px toolbar, structure list rows at 325 + 48n, Joule panel. **Toolbar items:** within ~2px. |

The flow was tested end to end in headless Chrome, clicking from the first screen through Disclosure Management and back, with no console errors.

**Accessibility**
- **Semantics:** landmarks (`nav`, `main`, `aside`); breadcrumb `nav`; WAI-ARIA tabs with arrow keys.
- **State attributes:** `aria-pressed` toggles; `aria-expanded` for section and tree-row toggles.
- **Dialog:** a native modal `<dialog>`.
- **Live regions:** for chat, steps and toasts.
- **Hidden text:** visually-hidden data tables for charts, and hidden text for trend glyphs.
- **Inputs:** labelled inputs and checkboxes.
- **Icons:** decorative icons use `alt=""`.
