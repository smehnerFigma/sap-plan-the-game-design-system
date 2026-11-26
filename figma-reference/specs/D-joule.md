# D — Joule Input & Conversation (spec)

Figma file `U14fUtpHqbIHUuJnMfWAzu`, page "Plan the Game" (1:6). Font family everywhere: **"72"** (Regular 400, Italic 400, Semibold 600, Semibold Duplex 600, Bold 700).
Token notation: `Figma/variable` → resolved value. **RAW** = hardcoded in Figma (no variable).
Icon paths are relative to `src/assets/icons/`. All SVGs carry their own root width/height and baked-in fill — do not resize beyond the listed slot size.

## 0. Shared tokens

| Token | Value |
|---|---|
| `joule/background-area` | #f1ecff |
| `border/border-area` | #b894ff |
| `borderwidth/border-width-m` | 2px |
| `surface/card-bg-primary` | #fdfeff |
| `surface/background-secondary` | #f8f9fa |
| `colors/specific/joule-input-gradient-blue` (Colors/Specific/Joule-Input-Gradient-Blue) | #4295ff |
| `Colors/Specific/Brand-Purple` | #5d36ff |
| `joule/background` | #5d36ff |
| `joule/foreground` | #5d36ff |
| `joule/hover-background` | #470ced |
| `accent/accent-bg-5` | #ded3ff |
| `accent/accent-5` | #552cff |
| `text/text-primary` | #0b0c0f |
| `text/text-secondary` | #353c4a |
| `text/text-tertiary` | #636d83 |
| `brand/toggled-background` | #d6e1f0 |
| `Brand/gradient-5` / `-4` / `-3` | #f8f9fa @ 20% / 80% / 100% alpha |
| `radius/radius-m` | 8px |
| `radius/radius-s` | 4px |
| `full` | 100px |
| `spacing/spacing-null` 0 · `spacing-3xs` 4 · `2xs` 4 (sic, var `--2xs`) · `spacing-2xs` 8 · `spacing-s` 16 · `spacing-l` 24 | px |
| `opacity/disabled-opacity` | 40 (%) |
| `sapButton_BorderCornerRadius` | 8px |

**Effect style "Joule Input"** (on the white Input frame; CSS order top→bottom):
```
box-shadow:
  0 0 4px 0 #7858FF33,
  0 8px 24px 0 #7858FF29,
  0 24px 16px 0 #0000000D,
  0 8px 8px 0 #0000000D,
  0 4px 3px -10px #0A0A0A0A,
  0 4px 3px -10px #0A0A0A08;
```
(Figma defines spread −10 on the two #0A0A0A shadows; MCP code dropped it → effectively invisible. Use −10.)

**Stroke style "Joule Input Gradient"** — this is how the gradient border is built (NOT layered frames):
- Single `GRADIENT_LINEAR` stroke on the white Input frame, **2px, strokeAlign OUTSIDE**, paint **opacity 0.6**.
- Stops: `Colors/Specific/Joule-Input-Gradient-Blue` #4295ff @ **14.58%** → `Colors/Specific/Brand-Purple` #5d36ff @ **100%**.
- Direction (from gradientTransform): start at (53.0% x, 0% y) → end at (79.7% x, 100% y) of the box, i.e. diagonal top-left-ish → bottom-right. Equivalent CSS angle ≈ **119deg** for the 752×110 Wide input, ≈ **137deg** for the 460×132 Narrow input. Recommended CSS: `linear-gradient(120deg, #4295ff 14.58%, #5d36ff 100%)` at 60% opacity, rendered as a 2px outside ring (e.g. `::before` at `inset:-2px` with gradient background + `mask`/`padding:2px` content-box exclusion, radius 10px outer / 8px inner). MCP fallback is a solid `#4295ff` 2px border — acceptable fallback only.
- The outer "Input + Context Area" frame also has a 2px OUTSIDE stroke `border/border-area` #b894ff (solid) and fill `joule/background-area`. The two outside strokes overlap at the bottom/sides of the inner input; visually the lilac frame shows only above it (context header) and as a halo.

**Fill style "Input Gradient 1"** (scroll fade behind the right-pane input, rect `I5146:22686;11620:10006;8645:5343`): absolute, bottom 0, left/right 0, height 164px, `linear-gradient(180deg, Brand/gradient-5 rgba(248,249,250,.2) 0%, Brand/gradient-4 rgba(248,249,250,.8) 12%, Brand/gradient-3 #f8f9fa 24%)`, `backdrop-filter: blur(1px)` (RAW).

Typography styles used: Title 16/22 Regular · Title-Italic 16/22 Italic · Title-Strong 16/22 Semibold · Body 14/20 Regular · Body-Strong 14/20 Semibold · Body/Body 2 14/20 Regular ls 0.25px · Caption 12/16 Regular · Caption-Strong 12/16 Semibold · sapButton_FontFamily 14 Semibold Duplex lh normal.

---

## 1. Joule Input — component "Joule Input"

Two Figma component sets are in use:
- **Set A** variants `Size=Wide | Size=Narrow`; props: `Context Area` (bool), `✏️ Context` (text), `Icon` (swap, default 3041:1438 "header"), `AI Notice` (bool), `Suggestions` (bool, hidden in all usages).
- **Set B** (compact/newer) variants `State=Idle | Active | Auto-Complete`; props: `Pills`, `Attachment`, `Message Strip`, `Delete Text Button`, `Type-Ahead (Welcome Screen Only)`, `Context Area`, `AI Notice`, `Suggestions`, `✏️ Context`, `Icon`.
No component descriptions/doc links returned for either set. Focused state is not separately drawn in Figma — the gradient ring + shadow is the always-on (idle) look; see §1.5.

### 1.1 Floating Wide with "Space ×" tag — `I5146:22685;11620:9998;3411:19683` (Set A, Size=Wide; ref 01/02)
Size 752 × 162. Placeholder "Can I help with anything else?".

Structure
```
Joule Input (column, gap 20, justify end, w 100%)
├─ Input + Context Area (column, bg joule/background-area, 2px outside stroke border/border-area, radius 8)  [Context Area=false → no header]
│  └─ Input (column, gap 24, padding 16, bg surface/card-bg-primary, radius 8, gradient stroke, effect Joule Input) 752×110
│     ├─ Text: "Can I help with anything else? " — Title 16/22 Regular, text/text-tertiary #636d83, w 100%
│     └─ Actions (row, justify space-between, align end, w 100%)
│        ├─ Left Actions (row, gap 8, align center)
│        │  ├─ Add Button 32×32, padding 10, bg surface/background-secondary #f8f9fa, radius 8 → icon add-joule.svg 16
│        │  ├─ Add Button (mention) 32×32 same → icon arobase-joule.svg 16
│        │  └─ Tag (row, gap spacing/spacing-2xs 8, h 32, px 8 py 4, bg #f8f9fa, radius 8, overflow clip)
│        │     ├─ leading icon spaces-joule-12.svg 12×12
│        │     ├─ "Space" Caption 12/16 Regular, joule/hover-background #470ced, nowrap
│        │     └─ trailing "Accessory" decline-joule-12.svg 12×12  (remove-chip button)
│        └─ Send Button 32×32, padding 10, bg #f8f9fa, radius 8 → paper-plane-joule.svg 16
└─ AI Notice Container (row, center, pb spacing/spacing-s 16, px 4)
   └─ "Joule uses AI, verify results." Caption 12/16, text/text-secondary #353c4a, centered
```

### 1.2 Right-pane Narrow with context header + typed text — `I5146:22686;11620:10006;3543:27648` (Set A, Size=Narrow, Context Area=true; ref 02)
Wrapper frame `I5146:22686;11620:10006;3543:27692` "Input" 508×224 (column, gap 10, center) contains the fade rect ("Input Gradient 1", above) + Joule Input.
Joule Input: px 24, min-w 250, column gap 20 → inner area 460 wide.

```
Input + Context Area 460×172 (as 1.1)
├─ Context area (row, pl 12 pr 4 py 4, radius 8 RAW) 460×40
│  └─ Context (row, justify space-between, align center, flex 1, overflow clip, radius 8 RAW)
│     ├─ Context description (row, gap 8 RAW): icon header-brand.svg 16 + "Execution Risk"
│     │     Body/Body 2 14/20 ls 0.25, joule/foreground #5d36ff, nowrap, ellipsis
│     └─ Icon Button (padding spacing/spacing-2xs 8, radius radius/radius-s 4) → decline-brand.svg 16  (32×32; "remove context")
└─ Input 460×132 (padding 16, gap 24 — same styles as 1.1)
   ├─ Text: "Show me the underlying configuration this warning is based on. " — Title 16/22, **text/text-tertiary #636d83** (wraps to 2 lines, 428 wide)
   └─ Actions: Add (add-joule.svg), Mention (arobase-joule.svg), [Tag hidden], Send (paper-plane-joule.svg) — same 32×32 #f8f9fa buttons
AI Notice "Joule uses AI, verify results." (as 1.1)
```
Note: filled text uses the same tertiary color as the placeholder in Figma (no distinct filled color). Recommend real input text in `text/text-primary` #0b0c0f and placeholder tertiary — flag as design ambiguity.

### 1.3 Right-pane Narrow empty — `I5150:45271;11620:10006;3543:27648` (Set A, Narrow, Context Area=false)
Same as 1.2 without Context area. Text "Message Joule..." Title 16/22 Regular (not italic) tertiary. Actions: add-joule.svg, arobase-joule.svg, Send paper-plane-joule.svg. Send button looks identical to filled state (no disabled styling in Set A).

### 1.4 Compact empty-state with "Space" pill + disabled send — `I5026:17513;11620:9998;3411:19683` (Set B, State=Idle, Pills=true; ref 07)
Outer: px 96 (RAW), column gap 20. Size 752×142 (input area 560 wide inside the 752 instance? — Text frame has fixed w 720 RAW; use fill-width).
```
Input + Context Area (as 1.1)
└─ Input (padding spacing/spacing-3xs 4, gradient stroke, effect Joule Input, radius 8, bg #fdfeff)
   └─ Content (column, gap spacing-3xs 4, padding 0, radius 8)
      ├─ Attachment + Text (column, gap spacing-s 16, px spacing/spacing-2xs 8, py 0)
      │  └─ Text (row, py spacing-2xs 8, align end) → "Message Joule..." Title-Italic 16/22 Italic, text-tertiary, single line, ellipsis
      └─ Actions (row, space-between, align center, padding spacing-2xs 8)
         ├─ Left Actions (row, gap 8)
         │  ├─ Icon Button (padding 6, radius radius-s 4, transparent) → add-brand-12.svg 12   (24×24)
         │  ├─ Icon Button same → arobase-brand-12.svg 12
         │  └─ Pills (row gap 8) → Pill (row, gap spacing-3xs 4, px 6, bg accent/accent-bg-5 #ded3ff, radius radius-s 4)
         │        └─ (row, gap spacing-2xs 8, py spacing-3xs 4): icon spaces-12.svg 12 + "Space" Caption-Strong 12/16 Semibold accent/accent-5 #552cff
         └─ Send Icon Button (padding 6, radius 4, bg joule/background #5d36ff, opacity opacity/disabled-opacity 40%) → paper-plane-white-12.svg 12
AI Notice (as 1.1)
```
- spaces-12.svg ships with fill #0B0C0F, but in Figma the icon layer is filled #552cff (accent/accent-5). Render it tinted #552cff (CSS `mask-image` with bg #552cff, or inline-SVG `currentColor`) — **flagged mismatch**.
- Send disabled = opacity 0.4 on the whole button. Enabled = same at opacity 1 (inferred, not drawn here).

### 1.5 States summary
| State | Visual |
|---|---|
| Empty / placeholder | Text = placeholder in text-tertiary (Set A Regular "Message Joule..." / "Can I help with anything else?"; Set B Italic "Message Joule...") |
| Filled | Text in input (Figma keeps tertiary color; recommend text-primary). Field grows vertically (2-line in 1.2). |
| Focused | Not separately drawn. Gradient ring + Joule Input shadow are the default look; implement `:focus-within` = same visuals (optionally ring opacity 1.0 instead of 0.6 — not specified). Hide native outline only if ring remains visible. |
| With context | Context area header (1.2) inside lilac frame, or inline Tag (1.1) / Pill (1.4). |
| Send enabled | Set A: 32×32 #f8f9fa square, #470ced icon. Set B: #5d36ff bg, white icon, opacity 1. |
| Send disabled | Set B: opacity 40% (`opacity/disabled-opacity`). Set A has no disabled visual — use disabled when text empty + `aria-disabled`, opacity .4. |
| Set B variants Active / Auto-Complete | exist in Figma but not used in scope frames (not extracted). |

### 1.6 Interaction / a11y
- `<textarea>` (auto-grow) with `aria-label="Message Joule"`, placeholder per variant. Enter = send, Shift+Enter = newline.
- Add button `aria-label="Add attachment"` (icon "add"); mention button `aria-label="Mention"` (icon "arobase": at/@).
- Tag/Pill "Space": chip with remove button `aria-label="Remove Space context"` (1.1 only has ×).
- Context header remove button `aria-label="Remove context Execution Risk"`.
- Send `<button aria-label="Send message">` (icon "paper-plane"), `disabled` when empty.
- AI notice: plain text, can be `role="note"`.

---

## 2. Conversation — `I5150:45271;11620:10006;3543:27558` (ref 04)
Messages container: column, gap spacing/spacing-l 24, px 24 (RAW) → content 460 wide. Inner "Messages" slot column gap 24.

### 2.1 Timestamp (Message Content)
Row, center, gap spacing-3xs 4, Caption 12/16 Regular, text-tertiary #636d83, nowrap: "Yesterday" · "8:44 AM" (two text nodes).

### 2.2 User message bubble ("Chat Bubble")
Row wrapper aligns end (right). Bubble: column, max-w 600 RAW, px 16 py 8, bg `brand/toggled-background` #d6e1f0, radius **16 16 2 16** (TL TR BR BL; bottom-right 2px), overflow clip.
Text "Show me the underlying configuration this warning is based on. " Body-Strong 14/20 Semibold, text-primary #0b0c0f.

### 2.3 Joule reply (Message Content)
Column gap spacing-l 24, max-w 600, w 100%. No bubble/background.
- Content (column gap 24):
  - Paragraph: Body 14/20 Regular text-primary: "Sure. I added three cards in a new section called “Configuration Information” that display the configuration created in SAP Analytics Cloud."
  - Numbered block ×2 (column, gap 4, each "Joule Reply Content"):
    - `<ol start=N>` item, Title-Strong 16/22 Semibold text-primary, list marker decimal, item margin-inline-start 24.
    - Subcontent: pl 24, Body 14/20 Regular text-primary.
    - 1. "Configuration overview" — "Chronos Pro return rate has spiked to 22% (+12%) from the baseline of 10% derived from historical performance and comparable products."
    - 2. "KPIs at Risk of Deletion" — same body text.
  Implement as one `<ol>` with two `<li>` (heading + paragraph).

### 2.4 Action Container
Row gap 24, w 422 RAW → Slot (row, gap 2):
| # | Button | Icon (16) | a11y name |
|---|---|---|---|
| 1 | Icon Button: padding spacing-2xs 8, radius radius-s 4, transparent (32×32) | copy-tertiary.svg | "Copy" |
| 2 | same | thumb-up-tertiary.svg | "Good response" (toggle, `aria-pressed`) |
| 3 | same | thumb-down-tertiary.svg | "Bad response" (toggle) |
| 4 | same | refresh-tertiary.svg | "Regenerate" |
| 5 | same | lightbulb-tertiary.svg | "Explain" / "Show reasoning" |
| 6 | Button "Sources": row gap 6, min-h 26, px 8 py 5, radius sapButton_BorderCornerRadius 8, transparent → Text+Badge (row gap 4): "Sources" 14 Semibold Duplex lh normal, text-tertiary #636d83; Counter Badge px 6, bg accent/accent-bg-5 #ded3ff, radius `full` 100px, "3" Body/Body 2 14/20 ls .25 accent/accent-5 #552cff centered | — | "Sources, 3" |
Icons all #636D83 baked in. Hover/pressed states not provided.

---

## 3. Explainability Progress Steps — `I5150:41725;11620:10006;3543:27558` (ref 03)
Same timestamp + user bubble as §2. Joule message content replaces reply with:
- Steps container: column gap 8 (RAW); each "Explainability Progress Steps" → Step Item (row, h 24, align center, w 100%):
  - Step Indicator: padding spacing-3xs 4 → 16×16 status (24×24 total)
  - Label flex 1, Body 14/20 Regular.
| Step | Status | Icon | Text color |
|---|---|---|---|
| "Analyzing your request..." | Completed | accept-tertiary.svg 16 (#636D83) | text-tertiary #636d83 |
| "Reading the UI context..." | Completed | accept-tertiary.svg | tertiary |
| "Calling the MCP tool..." | Completed | accept-tertiary.svg | tertiary |
| "Decomposing it into 2 focused cards..." | Loading | Animated Busy Indicator | **text-primary #0b0c0f** |
- Busy indicator (component "Animated Busy Indicator", doc: https://www.sap.com/design-system/fiori-design-web/ui-elements/busy-indicator-web-component/): 16×4.571 row of 3 dots, each busy-indicator-dot.svg 2.286×2.286 (#5D36FF), centers at x −5.71 / 0 / +5.71 px from center (≈ 3.43px gap). Static layer opacity = 1 in Figma; screenshot shows fading — animate opacity sequentially (e.g. 0.3→1, 1.2s staggered); respect `prefers-reduced-motion`.
- Text uses literal "..." (three dots, not ellipsis char).
- Action Container (§2.4) still rendered below (gap 24).
- a11y: list `role="list"` with `aria-live="polite"`; completed items `aria-label` suffix "completed", loading item `aria-busy="true"`.
- Annotation on user bubble: "asking joule to explain the config".

---

## 4. SAC Joule side panel "New Conversation" — `5114:12435` (component "Joule - New Campaign", variant Step=2 of Step=0…6; ref 12)
Component description: "🎯 Detach to start using. Do not detach the components within the panel." Uses SAP Horizon tokens (different from §1–3).

Panel: 416 × 742, column, bg white RAW, radius 16 RAW, `filter: drop-shadow(0 0 1px rgba(91,115,139,.16)) drop-shadow(0 32px 32px rgba(91,115,139,.16))` (style "CxD/Grey/XL" defines 0 32 64 #5B738B29 + 0 0 2 #5B738B29 — code output shows 32/1; prefer style values: `0 0 2px`, `0 32px 64px`).

### 4.1 Panel Header (h 56, row center)
- bg `linear-gradient(180deg, #5d36ff 0%, #6431fa 100%)` **RAW**, radius 16 16 0 0.
- Title (row, flex 1, pl 4): Menu (pr 4) → Header Button + "New Conversation" 16 Bold lh normal white.
- Tool Bar (row gap 8, pr 8 py 10, justify end): Overflow, Fullscreen, Close.
- Header Button: min-h 36, padding 10, border 1px `sapButton_BorderWidth` color `buttons/sapassistant_button_lite_stroke` rgba(255,255,255,0), bg `buttons/sapassistant_lightbutton_lite_background` rgba(255,255,255,0), radius 8 → 36×36.
| Button | Icon 16 | a11y |
|---|---|---|
| Menu | menu2-white.svg | "Open conversation menu" |
| Overflow | overflow-white.svg | "More options" |
| Fullscreen | full-screen-white.svg | "Expand to full screen" |
| Close | decline-white.svg | "Close Joule" |
(Icon Button doc: "Use Icon Buttons with well known icon metaphors and tooltips. Ensure a touch area with 44px (Cozy) / 32px (Compact)." – https://wiki.one.int.sap/wiki/pages/viewpage.action?pageId=2698912599#Button(Horizon)-CozyandCompactButtonColorSpecifications)

### 4.2 Body (flex 1, scroll y, w 416)
Content column, gap 16, py 16, items center, children 384 wide.
- Timestamp 20h: "**Today** 8:00 AM" — 14/20, "Today" Bold, " 8:00 AM" Regular, color #8396a8 (`Text/sapContent_LabelColor`), centered.
- User bubble (right aligned): max-w 268, px 16 py 8, bg & 1px border `sapassistant_question_background`/`_bordercolor` #eae5ff, radius 8 8 0 8 (TL TR BR BL → bottom-right square). Text 14 Regular lh normal #131e29 (`Input/Standard/sapField_TextColor`), max-w 236. Text: "Update the financial outlook chapter considering the grounding source." (wraps).
- Joule bubble (left): max-w 384, px 16 py 8, bg & 1px border `sapassistant_answer_background`/`_bordercolor` #eff1f2, radius 8 8 8 0 (bottom-left square). Text "XXX" 14 / lh `sapContent_LineHeight_MediumText` 21px, color `sapassistant_answer_textcolor` #1d2d3e.
- Quick reply chip: bg white, px 8 py 4, radius 16, shadow `0 0 2px rgba(27,144,255,.16), 0 4px 8px rgba(27,144,255,.16)` (style CxD/Blue/S), text "X" 14/21 #0064d9 (`sapButton_Lite_Hover_TextColor`). Button, accessible name = its label.
- User bubble 2: "xxx".
- Typing indicator ("Loading Chat Bubble Three Dots") 64×44 transparent bubble, radius 16 16 16 2; image typing-indicator.svg 35×8.186 at left 16, top 18.42 (3 dots #A100C2 "Joule Accent 4 - Morning Horizon" at opacity .2/.4/.6, 3rd has gradient). `role="status" aria-label="Joule is typing"`.

### 4.3 Input field (h 64, px 16 pt 16 pb 12, max-w 800, min-w 416)
- Input area: bg white, 2px border `sapField_Active_BorderColor` #0064d8 (focused state), radius 4, py 4, `filter: drop-shadow(0 0 1px rgba(27,144,255,.16)) drop-shadow(0 4px 4px rgba(27,144,255,.16))`.
  - Text (row gap 10, pl 8 pt 5 pb 7): placeholder "Message Joule..." 14 Italic lh normal #556b82 (`sapField_PlaceholderTextColor`). Blinking cursor 1×18 #223548 (Grey8) at left 7 top 3 → focused state.
  - Actions (h 28, pr 8): round send Icon Button 28×28, radius 24, bg+1px border `sapButton_Emphasized_Background/BorderColor` #0070f2, opacity `sapContent_DisabledOpacity` 40% (disabled, empty), icon paper-plane-white.svg 16. `aria-label="Send message"`.
- Textarea `aria-label="Message Joule"`.

### 4.4 Disclaimer
pb 16 pt 4 px 16, radius 0 0 16 16; "Joule uses AI, verify results." 11/12 Regular #32363a centered, w 386.

---

## 5. Assets saved (src/assets/icons/)
| File | Size | Fill | Used in |
|---|---|---|---|
| add-joule.svg | 16 | #470CED | Set A add button |
| arobase-joule.svg | 16 | #470CED | Set A mention |
| paper-plane-joule.svg | 16 | #470CED | Set A send |
| spaces-joule-12.svg | 12 | #470CED | 1.1 tag leading |
| decline-joule-12.svg | 12 | #470CED | 1.1 tag remove |
| add-brand-12.svg | 12 | #5D36FF | 1.4 add |
| arobase-brand-12.svg | 12 | #5D36FF | 1.4 mention |
| spaces-12.svg | 12 | #0B0C0F (tint to #552cff!) | 1.4 pill |
| paper-plane-white-12.svg | 12 | white | 1.4 send |
| header-brand.svg | 16 | #5D36FF | 1.2 context icon |
| decline-brand.svg | 16 | #5D36FF | 1.2 context remove |
| copy-/thumb-up-/thumb-down-/refresh-/lightbulb-tertiary.svg | 16 | #636D83 | §2.4/§3 actions |
| accept-tertiary.svg | 16 | #636D83 | §3 completed step |
| busy-indicator-dot.svg | 2.286 | #5D36FF | §3 loading (×3) |
| typing-indicator.svg | 35×8.186 | #A100C2 | §4 typing |
| menu2-white / overflow-white / full-screen-white / decline-white / paper-plane-white.svg | 16 | white | §4 header + send |
Variants returned by other nodes that differ only in internal ids/clip-path ids were not duplicated (same visual as the files above).
