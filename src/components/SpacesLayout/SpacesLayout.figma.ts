// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=eac780dd5132ca31da88e4524ff91426cd6fb11a (Figma "Spaces"; seen in U14fUtpHqbIHUuJnMfWAzu as 5146:32688)
// source=src/components/SpacesLayout/SpacesLayout.tsx
// component=SpacesLayout
import figma from 'figma'
const instance = figma.selectedInstance

// "Initial", "Example Content" and "Left Pane" have no code equivalent — SpacesLayout always renders the
// Main Navigation rail. Content Pane "Canvas"/"Gradient" and Right Pane "Gradient"/"Type" are visual only.
// paneBar.breadcrumb is a string[] in code; the Figma breadcrumb is slot content, so it is left empty.
const set = instance.getEnum('‼️ Screen Usage', {
  Vision: 'vision',
  'Product Truth': 'product-truth',
})
const hasRightPane = instance.getEnum('Right Pane', {
  True: true,
  False: false,
})

const contentPane = instance.findInstance('Content Pane')
let content
let promptCode
if (contentPane && contentPane.type === 'INSTANCE') {
  content = contentPane.getSlot('Content')
  const prompt = contentPane.getBoolean('Joule Input') ? contentPane.findInstance('Joule Input') : null
  if (prompt && prompt.type === 'INSTANCE') {
    promptCode = prompt.executeTemplate().example
  }
}

const rightPane = hasRightPane ? instance.findInstance('Right Pane') : null
let rightPaneCode
if (rightPane && rightPane.type === 'INSTANCE') {
  const messages = rightPane.getSlot('Content')
  const title = rightPane.findText('Title')
  const input = rightPane.getBoolean('Input') ? rightPane.findInstance('Joule Input') : null
  let inputCode
  if (input && input.type === 'INSTANCE') {
    inputCode = input.executeTemplate().example
  }
  rightPaneCode = figma.code`
  rightPane={{
    title: '${title.type === 'TEXT' ? title.textContent : ''}',
    messages: <>${messages}</>,
    input: ${inputCode ? figma.code`${inputCode}` : 'null'},
  }}`
}

export default {
  example: figma.code`<SpacesLayout
  nav={{ set: '${set}' }}
  paneBar={{ breadcrumb: [] }}${promptCode ? figma.code`
  prompt={${promptCode}}` : ''}${rightPaneCode ?? ''}
>
  ${content}
</SpacesLayout>`,
  imports: ['import { SpacesLayout } from "@/components"'],
  id: 'spaces-layout',
  metadata: { nestable: false },
}
