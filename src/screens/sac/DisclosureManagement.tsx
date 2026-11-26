import { useState } from 'react'
import aiBrand from '../../assets/icons/ai-brand.svg'
import download from '../../assets/icons/download.svg'
import checklistItem from '../../assets/icons/checklist-item.svg'
import edit from '../../assets/icons/edit.svg'
import show from '../../assets/icons/show.svg'
import documentText from '../../assets/icons/document-text.svg'
import history from '../../assets/icons/history.svg'
import tag from '../../assets/icons/tag.svg'
import attachment from '../../assets/icons/attachment.svg'
import writeNew from '../../assets/icons/write-new.svg'
import aiGrey from '../../assets/icons/ai-grey.svg'
import arrowTop from '../../assets/icons/arrow-top.svg'
import arrowBottom from '../../assets/icons/arrow-bottom.svg'
import deleteIcon from '../../assets/icons/delete.svg'
import overflow14 from '../../assets/icons/overflow-14.svg'
import {
  Button, Icon, IconButton, JoulePanel, List, ListItem, SacCard, SacHeader, Shellbar, Tabs, Toolbar, ToolbarGroup, ToolbarSeparator,
} from '../../components'
import type { PanelMessage } from '../../components/JoulePanel/JoulePanel'
import { disclosureTabs, structure } from '../data/sac'
import styles from './sac.module.css'

const tbIcon = (src: string, label: string) => <IconButton key={label} variant="ghost" icon={src} iconSize={16} label={label} />

/** Figma screen 11 (5080:42295): Disclosure Management editor with the Joule side panel. */
export interface DisclosureManagementProps {
  jouleOpen?: boolean
  /** Called when Joule is closed (flow returns to the plan). */
  onCloseJoule?: () => void
  homeHref?: string
}

export function DisclosureManagement({ jouleOpen: initialOpen = true, onCloseJoule, homeHref }: DisclosureManagementProps) {
  const [tab, setTab] = useState('Editing')
  const [chapter, setChapter] = useState(1)
  const [jouleOpen, setJouleOpen] = useState(initialOpen)
  const [messages, setMessages] = useState<PanelMessage[]>([
    { kind: 'user', text: 'Update the financial outlook chapter considering the grounding source.' },
    { kind: 'joule', text: 'XXX' },
    { kind: 'quick-reply', text: 'X' },
    { kind: 'user', text: 'xxx' },
    { kind: 'typing' },
  ])
  const title = structure[chapter]

  return (
    <div className={styles.page}>
      <header className={styles.headerPlain}>
        <Shellbar homeHref={homeHref} jouleActive={jouleOpen} onJoule={() => setJouleOpen(o => !o)} />
        <SacHeader title="Disclosure Management">
          <Tabs label="Disclosure Management views" tabs={disclosureTabs} selected={tab} onSelect={setTab} idBase="dm" />
        </SacHeader>
      </header>
      <main className={styles.content} id="dm-panel" role="tabpanel" aria-labelledby={`dm-tab-${disclosureTabs.indexOf(tab)}`}>
        <SacCard
          className={styles.fill}
          padded={false}
          contentClassName={styles.editorSlot}
          header={
            <div className={styles.toolbarHeader}>
              <Toolbar label="Document actions" fixedHeight>
                <ToolbarGroup>
                  <Button variant="secondary" family="sac" size="compact" icon={<Icon src={aiBrand} size={14} />}>AI Draft</Button>
                  <Button variant="secondary" family="sac" size="compact">Submit for Review</Button>
                  <Button variant="secondary" family="sac" size="compact">Save &amp; Check in</Button>
                </ToolbarGroup>
                <ToolbarSeparator />
                {tbIcon(edit, 'Edit')}{tbIcon(show, 'Preview')}{tbIcon(documentText, 'Document')}
                <ToolbarSeparator />
                {tbIcon(history, 'Version history')}{tbIcon(tag, 'Tags')}{tbIcon(attachment, 'Attachments')}{tbIcon(writeNew, 'New section')}
                <ToolbarSeparator />
                <ToolbarGroup>
                  <Button variant="emphasized" family="sac" size="compact">Save</Button>
                  <Button variant="secondary" family="sac" size="compact" icon={<Icon src={download} size={14} />}>PDF</Button>
                  <Button variant="secondary" family="sac" size="compact" icon={<Icon src={checklistItem} size={14} />}>Validate ESEF</Button>
                </ToolbarGroup>
              </Toolbar>
            </div>
          }
        >
          <nav className={styles.structure} aria-labelledby="structure-heading">
            <h2 id="structure-heading" className={`t-heading-medium-xxs ${styles.structureHeading}`}>Structure</h2>
            <List className={styles.structureList}>
              {structure.map((s, i) => <ListItem key={i} selected={i === chapter} onSelect={() => setChapter(i)}>{s}</ListItem>)}
            </List>
          </nav>
          <div className={styles.editorColumn}>
            <SacCard
              className={styles.fill}
              padded={false}
              contentClassName={styles.editorContent}
              title={title}
              subtitle="Draft"
              actions={<IconButton variant="tertiary" icon={overflow14} iconSize={14} label="More actions" aria-haspopup="menu" tint="var(--color-brand-pressed)" />}
            >
              <Toolbar label="Section actions" className={styles.sectionIcons}>
                {tbIcon(aiGrey, 'Generate with AI')}{tbIcon(arrowTop, 'Move section up')}{tbIcon(arrowBottom, 'Move section down')}{tbIcon(deleteIcon, 'Delete section')}
              </Toolbar>
              <div className={styles.section}>
                <h3 className="t-heading-medium-xxxs">{title}</h3>
                <div className={`t-body-s ${styles.editable}`} contentEditable suppressContentEditableWarning role="textbox" aria-multiline="true" aria-label="Section content">XXX</div>
              </div>
            </SacCard>
          </div>
        </SacCard>
      </main>
      {jouleOpen && (
        <JoulePanel
          className={styles.joulePanel}
          timestamp={{ day: 'Today', time: '8:00 AM' }}
          messages={messages}
          onClose={() => { setJouleOpen(false); onCloseJoule?.() }}
          onSend={t => setMessages(m => [...m.filter(x => x.kind !== 'typing'), { kind: 'user', text: t }, { kind: 'typing' }])}
        />
      )}
    </div>
  )
}
