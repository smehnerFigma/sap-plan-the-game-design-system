# E2 – SAC "Full Consolidation" dialog + Disclosure Management editor

Figma file `U14fUtpHqbIHUuJnMfWAzu`. References: `figma-reference/09-5076-21758.png` (dialog), `figma-reference/12-5080-42295.png` (editor).
Out of scope: Shellbar, KPI header, pivot table, Joule panel `5114:12435`.
Fonts: everything here is **"72 Brand"** (Regular 400 / Medium 500 / Bold 700). `[raw]` = hardcoded value in Figma (no variable bound).

## 0. Shared tokens (variable → resolved)

| Variable | Value |
|---|---|
| Core/Text/Text | #223548 |
| Core/Text/Heading, Core/HeadingDark, Color/Neutral/Black | #000000 |
| Core/Text/SupportingText | #475e75 |
| Core/Text/BrandText, Core/BrandSelection | #0057d2 |
| Core/DividerDefault, Color/Grey/3, Table/Header/Default/Border | #d5dadd |
| Color/Grey/1 | #f5f6f7 |
| Color/Grey/5, Scrollbar/ThumbDefault | #8396a8 |
| Color/Neutral/White, Modal/Background, List/Default/Background, Scrollbar/Track | #ffffff |
| Color/Neutral/White-0, List/Default/Border | #ffffff00 (transparent) |
| Color/Neutral/Black-40 | rgba(0,0,0,0.4) = #00000066 |
| List/Selected/Background | #ebf8ff |
| Spacer/2 · /12 · /16 | 2 · 12 · 16 px |
| Button/Radius · Button/Border | 8px · 1px |
| Button/Regular/Primary/Default/{Background,Border,Text} | #0057d2 / #0057d2 / #ffffff |
| Button/Regular/Secondary/Default/{Background,Border,Text} | #ffffff / #475e75 / #0040b0 |
| Button/Regular/Tertiary/Default/{Background,Border,Text} | transparent / transparent / #0040b0 |
| Button/Control/Standard/Default/{Background,Border,Icon} | transparent / transparent / #475e75 |
| Button/Control/Border · Input/ContainerRadius | 1px · 4px |
| Disabled | 40 (→ `opacity: 0.4`) |
| LoadingIndicator/Busy · LoadingIndicator/Size/S/Min | #0057d2 · 4 |
| Scrollbar/Size/Track | 12 |
| Core/Size/Icon/Input, List/Icon/Size/M | 18 |
| **Shadow/S** | `0 2px 4px 0 #22364933` (+ second layer `0 0 0 0 #ffffff00` – no-op) |
| **Shadow/XL** | `0 20px 80px 0 #22364940` (+ no-op second layer) |

Typography styles:

| Style | Weight | Size/LH |
|---|---|---|
| Heading/Regular/S | Regular 400 | 28/31 |
| Heading/Medium/XS | Medium 500 | 24/26 |
| Heading/Medium/XXS | Medium 500 | 20/22 |
| Heading/Medium/XXXS | Medium 500 | 18/20 |
| Navigation/Bold/XL | Bold 700 | 16/18 |
| Navigation/Medium/XL | Medium 500 | 16/18 |
| Navigation/Medium/M | Medium 500 | 14/15 |
| Body/S | Regular 400 | 16/24 |

All letter-spacing 0.

---

## 1. Modal "Full Consolidation" — `5077:31910` (screen `5076:21758`)

### 1a. Backdrop — `5076:22935` (Rectangle)
- Full viewport (1920×1080), fill `Color/Neutral/Black-40` = **rgba(0,0,0,0.4)**. Sits above the page (shellbar + content), below the modal.

### 1b. Disabled "Consolidate" button (visible behind backdrop) — `5077:32131`
- Primary (emphasized) regular button, 110×36: bg/border `Button/Regular/Primary/Default/*` #0057d2, text #fff, border 1px, radius 8, padding 9px 10px, gap 6.
- Text "Consolidate", Navigation/Medium/XL (16/18 Medium).
- **Disabled**: whole button `opacity: calc(var(--disabled, 40)/100)` → **0.4**. Use `disabled` attribute / `aria-disabled`.

### 1c. Modal container
- 700×380 (auto height from content), positioned centered (x 610, y 367 in 1920×1080).
- bg `Modal/Background` #fff; radius **20px** `[raw]`; `overflow: hidden`; shadow **Shadow/XL** `0 20px 80px 0 #22364940`.
- Flex column, align-items start. (Actions footer `I5077:31910;887:8122` is hidden – no buttons.)
- A11y: `role="dialog"` `aria-modal="true"` `aria-labelledby` → title id; optional `aria-describedby` → status sentence. Focus trap; Esc + close button close.

### 1d. Header — `I5077:31910;887:8116`
- Row, gap 8, padding **24px 32px**, align-items flex-start, full width (height 74).
- Title `887:8117`: "Full Consolidation" — Heading/Medium/XS (24/26 Medium), color `Core/Text/Heading` #000; flex 1, single line, ellipsis.
- Close Button wrapper `887:8118`: 32×26; contains `.Control` `887:8119` 32×32 absolutely right-aligned, vertically centered (so it overflows wrapper by 3px top/bottom).
  - `.Control`: bg/border `Button/Control/Standard/Default/*` (transparent), border 1px, radius `Input/ContainerRadius` 4, padding 12 (content centered), icon 18×18.
  - Icon layer named "add" (instance of **decline** icon, description: "reject, close, remove, cancel, x…"): `src/assets/icons/decline.svg` (18×18, fill #131E29 baked in). Note: variable `Button/Control/Standard/Default/Icon` = #475e75 is bound in the component; screenshot renders a grey X → recommend recolouring to #475e75 via CSS mask or `currentColor` wrapper if the implementer needs exact tone (SVG file itself is #131E29).
  - A11y: `<button aria-label="Close">`.

### 1e. Content — `I5077:31910;5229:10873`
- Column, padding **16px 32px**; inner stack `5077:31889` column, **gap 16**, justify center.
- Status sentence `5077:34496`: "Consolidation Sequence is in process." — Navigation/Medium/XL (16/18 Medium), `Core/Text/Text` #223548.
- Then 4 sequence steps, each a **Data List Item** 466px wide (`[raw]` width):
  - Item box: bg `List/Default/Background` #fff, **border-left 3px solid** `List/Default/Border` (transparent), padding `Spacer/12` 12px vertical × `Spacer/16` 16px horizontal, gap 12, align center. Height 48.
  - Inner "Text and Icon": row gap 8, align start.
  - Icon slot: 24px tall (24×24 for loading/pending), padding 0 3px, centered.
  - Text: Body/S (16/24 Regular), `Core/Text/Text` #223548.
  - Suggested semantics: `<ol aria-label="Consolidation sequence">` with `<li>`; add `aria-current="step"` on active; visually-hidden status text ("Completed"/"In progress"/"Pending"). Optionally `aria-live="polite"` on the list.

| # | Node | State | Icon slot | Exact text |
|---|---|---|---|---|
| 1 | `5077:31890` | done | `accept` 18×18 → `src/assets/icons/accept-text.svg` (fill #223548). Icon desc: "accept, approve, correct, checkmark, tick" | `Currency Conversion ` (trailing space) |
| 2 | `5077:31891` | in-progress | Loading Indicator `5077:31899` 26×8 → `src/assets/icons/loading-indicator.svg` (3 dots, `LoadingIndicator/Busy` #0057d2; dot min size 4). Slot is 24×24 but the 26px indicator overflows by 2px (px 3) | ` BS  + PL Elminations` (leading space, double space after "BS", typo kept; `white-space: pre-wrap`) |
| 3 | `5077:31908` | pending | empty 24×24 slot (keeps text aligned) | `Investment Eliminations ` |
| 4 | `5077:31909` | pending | empty 24×24 slot | `Group Minority ` |

- Loading indicator: static SVG in Figma. For a live demo you may animate the three dots (pulse/opacity) – no motion data provided in Figma. Give it `role="progressbar"`/`aria-busy` or a hidden label "In progress".

---

## 2. Disclosure Management screen — `5080:42295` (1920×1080)

Page background: white (frame shows no fill on Header Addon / Content; reference renders #fff). Structure:
```
Header (193)  = Shellbar 64 (skip) + Header Addon 129 (5080:42300)
Content (887) = 5091:56689 padding 24 48 48 → Card 5091:56734 (1824×815)
```

### 2a. Header Addon — `5080:42300`
- Column, gap **24**, padding-top 24, padding-x 48, justify center. Doc link: https://www.figma.com/design/VkgcZtnUNvN6kDmXH5e4k7/SIX-D-P-Showcase-Components?node-id=234-15382
- Row `5080:42301`: space-between; title left, empty 960.5×36 action area right (its only Button `5080:42305` is hidden).
- Title `5080:42302`: "Disclosure Management " (trailing space) — **Heading/Regular/S 28/31 Regular**, color `Core/HeadingDark` #000. `<h1>`.

### 2b. Horizontal Tab bar — `5080:42308` (1824×45)
- Container `3331:1020`: row, gap 32, **border-bottom 1px `Core/DividerDefault` #d5dadd**, overflow clip. Tabs group: row gap 32, align center. (Component note: "If you need more tabs, 3 are currently hidden by default".)
- Each `.Horizontal Tab`: column, gap 12, padding-top 12; Tab Text row padding 0 4px, gap 4; label Navigation/Bold/XL (16/18 Bold), centered, nowrap.
- **Selected** (`6547:21692` "Editing"): label `Core/Text/BrandText` #0057d2; below it Selection Bar 3px tall, full tab width, bg `Core/BrandSelection` #0057d2, radius 2px 2px 0 0. (No bottom padding – bar sits on the divider.)
- **Unselected** ("Tagging", "Consolidating", "Commenting", "Versioning"): label `Core/Text/Text` #223548, padding-bottom 15 (= 12 gap + 3 bar) so heights match; no bar.
- A11y: `role="tablist"` (aria-label "Disclosure Management views"); each `role="tab"` `aria-selected`, roving tabindex, arrow-key navigation; content area `role="tabpanel"` `aria-labelledby` the tab.

### 2c. Content wrapper — `5091:56689`
- Row, padding **24px 48px 48px**. Card `5091:56734`: flex 1, column, full height (815), shadow **Shadow/S** `0 2px 4px #22364933`. Visual radius **16** (children carry 16 top/bottom corners; apply `border-radius:16px; overflow:hidden` on the card so the shadow follows).

### 2d. Card toolbar header — `5091:56735` (1824×54)
- bg `Color/Neutral/White` #fff, padding 16, radius 16 16 0 0, row centered (toolbar content horizontally **centered** in the card).
- Toolbar `5091:56736`: row, **gap 32**, height 22, align center. Order:
  1. Group `5091:56919` (row gap 10): **AI Draft** (secondary + icon), **Submit for Review** (secondary), **Save & Check in** (secondary).
  2. Separator `5091:56739`
  3. Icons 16×16: edit `5091:56740`, show `5091:56741`, document-text `5091:56742`
  4. Separator `5091:56743`
  5. Icons 16×16: history `5091:56744`, tag `5091:56745`, attachment `5091:56746`, write-new `5091:56983`
  6. Separator `5091:56747`
  7. Group `5091:56941` (row gap 10): **Save** (primary/emphasized), **PDF** (secondary + download icon), **Validate ESEF** (secondary + checklist-item icon).
- Separators: 0-width, 22px tall vertical line, 1px stroke **#8396A8** (Color/Grey/5) → `src/assets/icons/separator-vertical.svg` (1×22) or CSS `border-left:1px solid #8396a8; height:22px`. `role="separator" aria-orientation="vertical"`.
- Stroke under header `5091:56750`: 1px line #d5dadd full width (`card-stroke-1824.svg`, or simply `border-bottom:1px solid #d5dadd`).

**Compact button (height 25)** — all six text buttons:
- padding **5px 10px**, gap 4, border 1px (`Button/Border`), radius 8 (`Button/Radius`); label Navigation/Medium/M **14/15 Medium**, centered, nowrap; leading icon 14×14.
- Secondary (outline): bg #fff, border **#475e75**, text **#0040b0**.
- Primary/emphasized ("Save"): bg #0057d2, border #0057d2, text #fff.
- Sizes: AI Draft 87×25, Submit for Review 138×25, Save & Check in 123×25, Save 52×25, PDF 65×25, Validate ESEF 127×25.
- Disabled variant (from dialog screen): same button at `opacity:0.4` (`Disabled` = 40).

| Button | Node | Icon → asset | Text |
|---|---|---|---|
| AI Draft | 5091:56920 | ai 14×14 → `ai-brand.svg` (#0040B0) | `AI Draft` |
| Submit for Review | 5091:56921 | – | `Submit for Review` |
| Save & Check in | 5091:56922 | – | `Save & Check in` |
| Save (primary) | 5091:56943 | – | `Save` |
| PDF | 5091:56942 | download 14×14 → `download.svg` (#0040B0) | `PDF` |
| Validate ESEF | 5091:56944 | **checklist-item** 14×14 → `checklist-item.svg` (#0040B0; shield-with-check glyph; Figma name is checklist-item, not "shield") | `Validate ESEF` |

Toolbar icon buttons (16×16 glyphs, fill #8396A8 baked into SVG; no button chrome in Figma – render as transparent icon buttons, suggest 24–26px hit area without changing layout gap). All need `aria-label`:

| Icon | Node | Asset | Suggested aria-label |
|---|---|---|---|
| edit | 5091:56740 | `edit.svg` 16×16 | Edit |
| show | 5091:56741 | `show.svg` 16×16 | Preview |
| document-text | 5091:56742 | `document-text.svg` 16×16 | Document |
| history | 5091:56744 | `history.svg` 16.0004×16 | Version history |
| tag | 5091:56745 | `tag.svg` 16×16 | Tags |
| attachment | 5091:56746 | `attachment.svg` 16×16.0029 | Attachments |
| write-new | 5091:56983 | `write-new.svg` 16×16 | New section |

Wrap whole bar in `role="toolbar" aria-label="Document actions"`.

### 2e. Content Slot — `5091:56751` (1824×761)
- **bg `Color/Grey/1` #f5f6f7** (the light grey behind the editor card), radius 0 0 16 16, overflow clip, row, **gap 24**, align start.
- Children: Left Panel (320 wide, full height) + frame `5093:57989` (1480×761, column, padding 24px 0 → editor card fills height 713, flush right edge).

### 2f. Left Panel "Structure" — `5091:57030` (320×761)
- bg #fff, shadow Shadow/S, column, align end, full height (bottom-left corner clipped to 16 by Content Slot).
- Heading `5091:57031`: padding 16, **border-bottom 1px `Color/Grey/3` #d5dadd**, height 54. Text "Structure" — Heading/Medium/XXS (20/22 Medium), `Color/Neutral/Black` #000. `<h2 id>`.
- Data List `5091:57670` (320×480, overflow clip): row ["List" flex 1 | Scrollbar].
  - Items (each 48 tall, full width) — `Data List Item` Standard, no selector, no supporting text:
    - Default: bg `List/Default/Background` #fff, border-left 3px `List/Default/Border` transparent, padding 12px 16px, gap 12; text Body/S 16/24 `Core/Text/Text` #223548.
    - **Selected** ("Financial Outlook", `I5091:57670;3465:48424`): bg **`List/Selected/Background` #ebf8ff**, border-left **3px `Core/BrandSelection` #0057d2**; text unchanged.
  - Item texts in order (inside list): `Financial Results`, **`Financial Outlook` (selected)**, `(H.1) Segment Policies and Changes`, `SAP Performance Measures`, `SX months ended June 2026`, then `List item` ×5.
  - After the Data List, 5 more `Data List Item` instances (`5091:57918/57928/57937/57946/57955`) with text `List item` (default state); the last is clipped by panel height.
  - Scrollbar (component "Scrollbar" `5034:23108`): track 16 wide, padding-left 2 / right 3, bg `Scrollbar/Track` #fff; thumb bg `Scrollbar/ThumbDefault` #8396a8, radius 8, width fills (11px), height = 50% of list (240px, top-aligned); lower half is track (`Scrollbar/Size/Track` 12). Implement as a styled native scrollbar or custom overlay; thumb only in the list region (top 480px).
  - A11y: `<nav aria-labelledby="structure-heading">` with a list of buttons, `aria-current="true"` on selected; or `role="listbox"` + `role="option" aria-selected`. Click selects a chapter and updates the editor card title.

### 2g. Editor Card — `5091:57966` (1480×713) — component "Card" `5034:18921`
- Column, shadow Shadow/S; header and content carry radius 16 (top / bottom).
- Header `I5091:57966;3718:36861`: bg #fff, padding **16px 16px 12px**, gap 8, row align start, height 72.
  - Text column gap 4: Headline "Financial Outlook" — Medium **20/24** `[raw lh 24 – no style]`, `Core/Text/Heading` #000, ellipsis. Subline "Draft" — Regular 14 / line-height normal `[raw]`, `Core/Text/SupportingText` #475e75.
  - (Button 2/3 hidden; avatar "customer" hidden.)
  - **Button 1** `3938:29170` (26×24, right): tertiary icon button — transparent bg, border 1px `Button/Regular/Tertiary/Default/Border` transparent, radius 8, padding 5px 6px; icon overflow 14×14 → `src/assets/icons/overflow-14.svg` (fill #131E29 in SVG; screenshot renders it blue ≈ tertiary text #0040b0 – recolor if exact match needed). `aria-label="More actions"`, `aria-haspopup="menu"`.
- Stroke `3718:37290`: 1px #d5dadd (`card-stroke-1480.svg` or `border-bottom`).
- Content slot `3718:36866`: bg #fff, radius 0 0 16 16, column **gap 16**, overflow clip.
  - Icons row `5093:58011`: row, **centered**, gap 32, padding 8px 0 (height 32). Icons 16×16, fill #8396A8:
    | Icon | Node | Asset | aria-label |
    |---|---|---|---|
    | ai | 5093:58017 | `ai-grey.svg` (16.0001²) | Generate with AI |
    | arrow-top | 5113:12413 | `arrow-top.svg` | Move section up |
    | arrow-bottom | 5093:58018 | `arrow-bottom.svg` | Move section down |
    | delete | 5093:58019 | `delete.svg` | Delete section |
  - Text block `5113:12424`: column gap 16, padding 0 16, color **black `[raw]`**:
    - Section heading "Financial Outlook" — Heading/Medium/XXXS 18/20 Medium.
    - Body "XXX" — Body/S 16/24 Regular (placeholder; editable rich-text area intent → `contenteditable`/textarea, `aria-label="Section content"`).

---

## Assets (all in `src/assets/icons/`, SVG roots keep their width/height)

| File | Size | Fill | Used by |
|---|---|---|---|
| decline.svg | 18×18 | #131E29 | Modal close |
| accept-text.svg | 18×18 | #223548 | Step done |
| loading-indicator.svg | 26×8 | #0057D2 | Step in progress |
| ai-brand.svg | 14×14 | #0040B0 | AI Draft button |
| download.svg | 14×14 | #0040B0 | PDF button |
| checklist-item.svg | 14×14 | #0040B0 | Validate ESEF button |
| separator-vertical.svg | 1×22 | stroke #8396A8 | Toolbar separators |
| edit / show / document-text / history / tag / attachment / write-new .svg | 16×16 | #8396A8 | Toolbar icons |
| ai-grey.svg, arrow-top.svg, arrow-bottom.svg, delete.svg | 16×16 | #8396A8 | Editor icon row |
| overflow-14.svg | 14×14 | #131E29 | Editor card Button 1 |
| card-stroke-1824.svg / card-stroke-1480.svg | 1824×1 / 1480×1 | stroke #D5DADD | header dividers (CSS border equivalent) |

## Gaps / notes
- Page/root background not returned by Figma; reference shows white.
- No hover/pressed/focus variants were returned for tabs, list items, buttons → use SAP Horizon conventions (e.g. focus ring 2px #0057d2) as needed.
- Close-icon and overflow SVGs bake #131E29 while bound/rendered colors differ (#475e75 / blue) – see notes above.
- Loading indicator has no animation data.
