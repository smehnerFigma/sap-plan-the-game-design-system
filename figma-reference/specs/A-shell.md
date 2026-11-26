# Spec A: Spaces app shell chrome

Figma file `U14fUtpHqbIHUuJnMfWAzu`. Font family **"72"** (Regular 400, Semibold 600).
Icon paths are relative to `src/assets/icons/`. Use SVGs at their root `width`/`height`. Don't stretch them to 100%.

## 0. Tokens used (Figma variable → resolved value)

| Variable | Value | Variable | Value |
|---|---|---|---|
| Shell/shell-bg-primary | #f8f9fa | Border/border-primary | #e6e7ea |
| Brand/gradient-1 | #fdfeff | Border/border-secondary | #b5bcca |
| Text/text-primary | #0b0c0f | Text/text-tertiary (= Neutral/foreground-muted) | #636d83 |
| Text/text-accent | #0057d2 | Brand/pressed-background | #0040b0 |
| Brand/selected-background (= Shell/shell-button-bg-selected) | #e5ecf5 | Joule/background-area-2 | #f1ecff |
| Semantic/negative | #c72f2b | Neutral/background-white | #ffffff |
| Spacing/spacing-3xs | 4 | Spacing/spacing-2xs | 8 |
| Spacing/spacing-xs | 12 | Spacing/spacing-s | 16 |
| Spacing/spacing-l | 24 | var(--sds-size-space-200) | 8 |
| Radius/radius-s | 4 | Radius/radius-m | 8 |

**Typography styles**
| Style | Font | Size/LH | Weight |
|---|---|---|---|
| Heading2 | 72 Regular | 40 / 48 | 400 |
| Title-Strong | 72 Semibold | 16 / 22 | 600 |
| Title | 72 Regular | 16 / 22 | 400 |
| Body-Strong | 72 Semibold | 14 / 20 | 600 |
| Body | 72 Regular | 14 / 20 | 400 |

All letter-spacing values are 0.

**Effect style "Pane Shadow"** has two drop shadows: (0,22) blur 14 #0000000F, and (0,182) blur 111 #0000000D.
In CSS: `box-shadow: 0 22px 14px rgba(0,0,0,.06), 0 182px 111px rgba(0,0,0,.05)`. Figma blur maps 1:1 to box-shadow blur. If you use `filter: drop-shadow`, halve the blur to 7px / 55.5px. On the canvas, this shadow creates the soft gray gradient that appears to the left of the content pane over the nav rail.

---

## 1. Overall page layout (`Spaces` instance `5150:45271`, ref `04-5150-45269.png`)

The frame is 1920×1080.

```
Spaces (row, bg Shell/shell-bg-primary #f8f9fa, size 100%)
├─ Main Navigation  w80, h100%, z-index 2
└─ Content + Right Pane (row, flex 1, h100%, align center, z-index 1)   [I5150:45271;14908:6483]
   ├─ Content Pane  flex 1 (1332 wide when right pane open; 1840 when closed)   [I5150:45271;11620:10005]
   │   └─ Pane Bar + Content (column, flex 1, w100%)
   │       ├─ Pane Bar  h80, w100%, z2
   │       └─ Content (slot)  column, align-items center, z1   [;3411:19663]
   │           ├─ Page Header
   │           └─ Section(s)
   └─ Right Pane  w508 fixed, h100%   [I5150:45271;11620:10006]
```

**Content Pane** (`I5150:45271;11620:10005`)
- Background: `Brand/gradient-1` #fdfeff.
- Left border: 1px solid `Border/border-primary` #e6e7ea.
- Shadow: "Pane Shadow" (see above).
- Layout: column, items centered.
- The Content Pane scrolls vertically. The content is 2452px tall, while the pane is 1080px.

**Content slot** (`…;3411:19663`)
- Column layout with `align-items:center`. The horizontal padding sets the content column:

| State | Pane width | Content padding-x | Resulting column width | Content slot bg |
|---|---|---|---|---|
| No right pane (`5150:45270`, `I5150:45270;11620:9998`) | 1840 | **248px** | 1344 | none (Content Pane #fdfeff shows through) |
| Right pane open (`5150:45271`) | 1332 | **80px** | 1172 | **`white` (raw #ffffff, not bound to a variable)** |

- No explicit max-width is set in Figma. A responsive equivalent is `padding-inline: 80px` plus `max-width: 1344px; margin-inline: auto`.

**Sections** (`Section 2` frame `…;5150:45782`)
- Column layout, `padding: 20px 0`, width 100%.
- Gap between children: **24px** in the right-pane screen. In the no-right-pane screen the Section 2 gap is 20px (raw).
- The `Section 3` frame (`I5150:45270…;5150:45587`) uses py 20 and gap 0.
- Child order: Section Header (40h) → card(s) → Section Header → card(s). Cards are out of scope for this spec. They are 8px radius with a 1px #e6e7ea border.
- The second Section Header ("Configuration Information") carries the dev annotation *"this section is added by joule"*.

**Bottom Joule Input area** is out of scope. It is a 162px-high `Input` frame at the bottom of the Content Pane and Right Pane. Its "Gradient" overlay is 164px high: `linear-gradient(to bottom, Brand/gradient-5 #f8f9fa33 0%, Brand/gradient-4 #f8f9facc 12%, Brand/gradient-3 #f8f9fa 24%)` with `backdrop-filter: blur(1px)`.

**Right Pane** (`I5150:45271;11620:10006`)
- Size: w508, h100%.
- Background: `Shell/shell-bg-primary` #f8f9fa.
- Left border: 1px `Border/border-primary`.
- Layout: column, gap 10px (raw), `overflow:hidden`.
- Children: Pane Bar (80h) → Messages (flex 1, px 24, gap `Spacing/spacing-l` 24, max-w 800) → Input (162h).

---

## 2. Main Navigation (left rail)

Nodes:
- Default: `I5150:45271;11620:10004` (ref `04`).
- Extended: `I5026:17513;11620:9996` (ref `07`).

Component description (Main Navigation / "Screen Usage=Product Truth, State=Collapsed"): the "Product Truth" set is Web Conversations, Spaces, Develop. The "Vision" set adds Discover and Jobs. Do not show the Collaboration / Sharing feature in Product Truth.

**Container**
- Column layout, `justify-content: space-between`, `align-items: flex-start`.
- Size: w80, h100% (1080).
- Padding: 24px top/bottom, 20px left/right (raw values).
- Right border: 1px solid `Border/border-primary` #e6e7ea.
- No own background. The `Spaces` root #f8f9fa shows through.

Children, in order:
1. **Logo**: Joule logomark → `joule-logomark.svg` (38×36). Default variant: 38×36. Extended variant: 32×30, drawn in Figma from masked vectors (not exported). Use the same SVG scaled to 32×30.
2. **Navigation Items** (column, gap 16px). The rail renders vertically centered because of space-between.
3. **Footer** (column, gap 16px).

**_Main Navigation Item** (each item)
- Row, h40, radius `Radius/radius-s` 4.
- **Left Container**: 40×40, centers the icon. This is the only visible part in the collapsed rail.
- **Container**: holds the text label (Body-Strong-ish: 72 Semibold 14, line-height normal, `Text/text-primary`). It has **opacity 0** in the collapsed state, and padding-left `spacing-xs` 12, padding-right `spacing-3xs` 4, gap 8. Use the label as the accessible name or tooltip, and render it visually hidden.

**Default variant items** (top → bottom)

| Group | Icon (asset, size) | Label text in Figma | Suggested a11y name | State |
|---|---|---|---|---|
| Nav | `conversations.svg` 20×20 (#0B0C0F) | Conversations | Conversations | regular |
| Nav | `spaces-pressed.svg` (svg 25×18.96, in a 20×20 slot) | Conversations (placeholder) | Spaces | **selected** |
| Nav | `develop.svg` 20×20 | Conversations (placeholder) | Develop | regular |
| Footer | `bell.svg` **16×16** | Notifications | Notifications (1 unread) | regular + **attention badge** |
| Footer | Avatar 32×32 (`avatar-user.png`, 272×272) | Conversations (placeholder) | User profile | regular |
| Footer | `navigation-collapsed.svg` 16×16 | Expand | Expand navigation | button |

**Extended variant** (`I5026:17513;11620:9996`) differs as follows:
- Nav items: Conversations, **Discover** (`discover.svg` 20, compass), Spaces (selected), **Jobs** (`jobs.svg` 20, network/flow), Develop.
- The footer bell is **20×20** (`bell-20.svg`).
- The last footer item uses `expand.svg` 20×20 (the ">>" chevrons) instead of `navigation-collapsed.svg`.
- The logo is 32×30.

**Selected state (Spaces)**
- The Left Container gets a background of `Joule/background-area-2` #f1ecff and radius `Radius/radius-s` 4 (40×40 tile).
- The icon switches to `spaces-pressed.svg`, which has a purple gradient fill baked in.
- The label colour becomes `Text/text-accent` #0057d2 (label is still hidden).
- Icon placement: in the 20×20 icon box, place the SVG at its intrinsic 25.0×18.96 at `left:-2.61px; top:0.71px`. It overflows the box slightly. Figma calculates this from inset 3.53%/4.44%/2.39%/4.44%, with the image offset −19.2% left and −17.97% right.
- Use `aria-current="page"`.

**Attention badge (notifications)**
- Size 10×10, radius 16 (circle).
- Background: `Semantic/negative` #c72f2b.
- Border: 1px solid `Shell/shell-bg-primary` #f8f9fa.
- Position: absolute, at `left:-8px; top:-2px` relative to the label Container, which starts at x=40. That puts the badge at x=32, y=−2 relative to the item, so it sits top-right of the bell.

**Avatar** (component "Avatar", Image / XS / Regular)
- 32×32 (max 32), radius 64 (circle), padding 8.
- The image is cover-cropped at 125% size, offset −12.5%/−12.5%.
- Overlay: `rgba(0,0,0,0.2)` full-size, radius 64. **This is a raw value.** Figma includes it as a dim layer.
- Other avatar variants: "Active" adds a 1px `Border/border-joule` #2c13ad border. "Optional Border" adds 1px `Border/border-secondary` #b5bcca. The Icon/S variant is 48 max, bg+border `Neutral/pressed-background-2` #e6e7ea, radius 6, p 12.
- Avatar doc: https://www.sap.com/design-system/fiori-design-web/ui-elements/avatar-web-component/ ("Always use square avatars for products, and circular avatars for people").

**Interactivity**
- Each item is a nav link or button.
- The Expand item is a `<button>` (Figma marks it as a button) with an aria-label of "Expand navigation". It toggles the rail to the expanded width, where labels become visible. The expanded design is not in scope.
- Avatar: button "User profile".
- Hover/pressed: not defined in these instances.

---

## 3. Pane Bar (content pane top bar)

Nodes:
- **A** `I5150:45271;11620:10005;3411:19628`: chat toggle pressed (Product Truth, 40px buttons).
- **B** `I3356:7497;3411:19628`: default, chat toggle not pressed.
- **C** `I5026:17513;11620:9998;3411:19628`: compact 32px buttons with refresh/share.

### Variants A/B (40px buttons)
- Container: row, `justify-content: space-between`, `align-items:center`, padding **20px 24px** (raw), height 80, width 100%. No background.
- **Header** (left group, row, gap `spacing-l` 24):
  1. **Buttons** (row, gap `spacing-2xs` 8) containing a **Toggle Icon Button**:
     - 40×40: icon 18.286 + padding 10.855 (raw).
     - Radius `Radius/radius-m` 8, `overflow:hidden`.
     - Icon `menu.svg` (18.29×18.29).
     - a11y: toggle button "Toggle side panel" / "Show list". Component desc: "menu, list".
  2. **Breadcrumb**:
     - A single text node, Title-Strong (Semibold 16/22), `Text/text-primary`, nowrap.
     - Text A: **"Spaces / Operating Expenses — Variance Resolution"**.
     - Text B: **"Spaces / Operating Expenses — Variance Resolution / Skill Gap Analysis"**.
     - The text uses an em dash "—". Implement it as a breadcrumb `<nav aria-label="Breadcrumb">` split on " / ".
- **Actions** (right group, row, gap 8, raw):
  1. **Button** (text button, transparent):
     - Padding 9px (raw) × `spacing-s` 16, gap `spacing-2xs` 8, radius `radius-m` 8, height 40.
     - Icon `legend.svg` 18.29.
     - Label Title-Strong, `Text/text-primary`. A: "Operating Expenses Overview". B: "Workforce Expense Analysis " (trailing space in Figma).
     - Desc: "legend". This is a document/link button that opens the related artifact.
  2. **Icon Button**: 40×40, p 10.855, radius 8, icon `overflow.svg` 18.29 ("•••"). aria-label "More actions", `aria-haspopup="menu"`.
  3. **Toggle Icon Button** (chat toggle): 40×40, p 10.855, radius 8.
     - **Pressed (A)**: background `Brand/selected-background` #e5ecf5. Icon `conversations-accent.svg` 18.29 (fill #0040B0 = `Brand/pressed-background`). Use `aria-pressed="true"`.
     - **Unpressed (B)**: transparent background, icon `conversations-toggle.svg` 18.29 (#0B0C0F). Figma marks this as a `<button>`.
     - a11y: "Joule chat" / "Toggle chat pane". It opens or closes the Right Pane.
- Hidden optional slots in the component: `backButton` (Icon Button after the menu toggle) and `related` (Icon Button after the text Button). Both are off in all instances.

### Variant C (compact, `I5026:17513;11620:9998;3411:19628`)
- Padding: 24px all sides (`py` bound to `spacing-l`; px raw 24). Height 80.
- **Header**: row, gap `spacing-s` 16.
  1. **Toggle Panel** button:
     - 32×32: p `spacing-2xs` 8, icon 16, radius `radius-s` 4.
     - Icon `left-pane-collapsed.svg` 16 (desc: "screen, split, two, master, detail, split app").
     - a11y: "Toggle left pane".
  2. **Container** (gap `spacing-3xs` 4) → Breadcrumb:
     - "Spaces / Operating Expenses — Variance Resolution", Title-Strong.
     - Colour is **raw #0b0c0f** (not bound; equals text-primary).
- **Actions**: row, gap `spacing-s` 16.
  - **Actions Group** (row, gap 4, raw):
    1. Button: padding 6px (raw) × `spacing-xs` 12, gap 6 (raw), radius 4, height 32. Icon `legend-16.svg` 16. Label **Body-Strong** 14/20 `Text/text-primary`: "Operating Expenses Overview".
    2. Icon Button 32×32 (p 8, radius 4), `refresh.svg` 16. aria-label "Refresh".
    3. Icon Button 32×32, `share.svg` 16. aria-label "Share". The Figma icon name was not exposed; it is a three-node network glyph.
    4. Icon Button 32×32, `overflow-16.svg` 16. aria-label "More actions".
  - **Toggle Chat**: 32×32, p 8, radius 4, icon `chat-collapsed.svg` 16 (unpressed). aria-label "Toggle chat pane".

---

## 4. Right Pane bar

Node: `I5150:45271;11620:10006;3543:27698` (PaneBar `section="Right Pane"`). Size 508×80.

- Container: row, gap 16 (raw), padding **20px 24px**, `align-items:center`. No background; it sits on the Right Pane #f8f9fa.
- **Header**: flex 1, gap `spacing-s` 16. Breadcrumb text **"Title"**, Title-Strong, `Text/text-primary`. This is placeholder text in Figma. In the app it is the chat or space title.
- **Actions**: one **Icon Button**, 40×40, p 10.855, radius `radius-m` 8, icon `add.svg` 18.29 (desc "add, plus, …"). aria-label "New chat".

---

## 5. Page Header

Node: `I5150:45271;11620:10005;3411:19663;5150:45590`. Size 1172×104 (the no-pane screen uses 1344×104, `…;5150:45273`).

- Column layout, `justify-content:flex-end`, `align-items:flex-start`. Padding top **40px**, bottom **16px** (raw), w100%.
- Title `<h1>`: **Heading2** (72 Regular 40/48), `Text/text-primary` #0b0c0f, w100%, wraps.
  - Text: **"Concert Revenue Opportunity - Impact Analysis"** (no-pane screen: "Overview Soccer Tournament Financial Plan").

**Variant with subtitle**
- Node `I3265:11065;3411:19663;3265:13308`, screen `3265:11043`, ref `05`.
- This is a plain frame, not the Page Header component.
- Column layout, `justify-end`, no padding, no gap. Size 1365×70. It sits at the top of "Body FX - 1", which is 24px below the pane bar. 40px separates it from the following content.
- Title: Heading2 40/48, colour **raw #0b0c0f**. Text: "Skill Gap Analysis".
- Subtitle: **Title** style (72 Regular 16/22), colour **raw #636d83** (equals `Text/text-tertiary`). Text: **"Updated just now "** (trailing space in Figma).

---

## 6. Section Header

Nodes:
- `I5150:45271;11620:10005;3411:19663;5150:45783` ("Finance Overview").
- `…;5150:45790` ("Configuration Information").
- `I5150:45270…;5150:45586` ("Summary").

Layout and content:
- Container: row, gap 12 (raw), padding 2px 0 (raw), `align-items:center`, w100%, height 40.
- **Text Container**: padding 7px 0 (raw). Text in Title-Strong 16/22, `Text/text-primary`, nowrap with ellipsis overflow. Use an `<h2>`.
- **Icon Container**: row, gap 4 (raw).
  1. Icon Button 32×32: p `spacing-2xs` 8, radius `radius-s` 4, icon `overflow-16.svg` 16 ("•••"). aria-label "More options for {section}".
  2. Icon Button 32×32, icon `navigation-down-arrow.svg` 16 (chevron down; desc "navigation, down, collapse, expanded tree"). This is a collapse/expand toggle: use `aria-expanded="true"` and aria-label "Collapse {section}".
- Edge case: `Section 3` in the no-pane screen has an empty title (a zero-width space character).

---

## 7. Assets (all in `src/assets/icons/`)

| File | Size | Used in |
|---|---|---|
| joule-logomark.svg | 38×36 | Nav logo |
| conversations.svg | 20 | Nav |
| spaces-pressed.svg | 25×18.96 (in a 20 box) | Nav selected Spaces |
| discover.svg | 20 | Nav (extended) |
| jobs.svg | 20 | Nav (extended) |
| develop.svg | 20 | Nav |
| bell.svg | 16 | Nav footer (default) |
| bell-20.svg | 20 | Nav footer (extended) |
| navigation-collapsed.svg | 16 | Nav expand (default) |
| expand.svg | 20 | Nav expand ">>" (extended) |
| avatar-user.png | 272×272 px | Nav avatar |
| menu.svg | 18.29 | Pane Bar A/B |
| legend.svg | 18.29 | Pane Bar A/B doc button |
| overflow.svg | 18.29 | Pane Bar A/B more |
| conversations-accent.svg | 18.29 (#0040B0) | Chat toggle pressed |
| conversations-toggle.svg | 18.29 (#0B0C0F) | Chat toggle unpressed |
| left-pane-collapsed.svg | 16 | Pane Bar C |
| legend-16.svg | 16 | Pane Bar C doc button |
| refresh.svg | 16 | Pane Bar C |
| share.svg | 16 | Pane Bar C |
| overflow-16.svg | 16 | Pane Bar C, Section Header |
| chat-collapsed.svg | 16 | Pane Bar C chat toggle |
| add.svg | 18.29 | Right Pane bar |
| navigation-down-arrow.svg | 16 | Section Header |

## 8. Gaps / not defined in Figma
- No hover/focus states are present in these instances. Use Fiori Horizon defaults, for example a hover background of #e6e7ea-ish.
- The expanded nav layout (visible labels) is not shown.
- The extended nav's logo is a masked vector composite. Use `joule-logomark.svg` scaled to 32×30.
- The Figma name of `share.svg` is unknown. The name was inferred from the glyph.
