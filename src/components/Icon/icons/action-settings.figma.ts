// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=6adc21afa984697a521fc38cbab0ce1b6b7a65a0 (Figma icon "action-settings", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 3041:5967)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/action-settings-button.svg
export default {
  example: figma.code`<Icon src={actionSettingsButtonIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import actionSettingsButtonIcon from "@/assets/icons/action-settings-button.svg"'],
  id: 'icon-action-settings',
  metadata: { nestable: true, props: { src: 'actionSettingsButtonIcon', srcImport: 'import actionSettingsButtonIcon from "@/assets/icons/action-settings-button.svg"', size: '16' } },
}
