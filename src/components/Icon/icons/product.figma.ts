// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=6b2655212b50d8dbf5d9ace87a1c7186942a28d5 (Figma icon "product", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 3041:16)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/product.svg
export default {
  example: figma.code`<Icon src={productIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import productIcon from "@/assets/icons/product.svg"'],
  id: 'icon-product',
  metadata: { nestable: true, props: { src: 'productIcon', srcImport: 'import productIcon from "@/assets/icons/product.svg"', size: '16' } },
}
