// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=d42a8af286764de6b55120dd5985b88246368315 (Figma "Main Navigation"; seen in U14fUtpHqbIHUuJnMfWAzu as 5146:28432)
// source=src/components/MainNavigation/MainNavigation.tsx
// component=MainNavigation
import figma from 'figma'
const instance = figma.selectedInstance

// "Notifications" and "User Menu" (item visibility) and "State" (Collapsed|Expanded) have no code
// equivalent — the code rail is always collapsed and always shows both items.
const set = instance.getEnum('‼️ Screen Usage', {
  Vision: 'vision',
  'Product Truth': 'product-truth',
})

export default {
  example: figma.code`<MainNavigation set="${set}" />`,
  imports: ['import { MainNavigation } from "@/components"'],
  id: 'main-navigation',
  metadata: { nestable: true },
}
