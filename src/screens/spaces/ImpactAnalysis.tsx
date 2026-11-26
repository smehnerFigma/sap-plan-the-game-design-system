import { useEffect, useState } from 'react'
import type { NavKey } from '../../components/MainNavigation/MainNavigation'
import {
  JouleInput, JouleMessage, MessageList, PageHeader, ProgressSteps, ReplyList, ResponseActions, Section,
  SpacesLayout, Timestamp, UserMessage,
} from '../../components'
import { breadcrumbImpact, chatAnswer, chatQuestion, impactTitle, progressSteps } from '../data/spaces'
import { ConfigurationCard, KpisAtRiskCard, OpexChartCard, OpportunityCard, RiskAndActionsRow } from './parts'

/**
 * Figma screens 0–3 (3256:3446, 5146:22684, 5150:41723, 5150:45269):
 * the Impact Analysis space with the Joule conversation in four stages.
 * Controlled: the stage comes from the route; transitions are reported via onStageChange.
 */
export type ChatStage = 'closed' | 'context' | 'thinking' | 'answered'

export interface ImpactAnalysisProps {
  stage: ChatStage
  onStageChange: (stage: ChatStage) => void
  onOpenSpace?: (actionTitle: string) => void
  onNavigate?: (key: NavKey) => void
}

export function ImpactAnalysis({ stage, onStageChange, onOpenSpace, onNavigate }: ImpactAnalysisProps) {
  const [question, setQuestion] = useState(chatQuestion)
  const [contextRemoved, setContextRemoved] = useState(false)
  // Auto-advance to the answer only after a message was sent here (a directly opened "thinking" screen stays put).
  const [sent, setSent] = useState(false)
  const ask = (q: string) => { setQuestion(q); setSent(true); onStageChange('thinking') }
  useEffect(() => {
    if (stage !== 'thinking' || !sent) return
    const t = window.setTimeout(() => onStageChange('answered'), 2400)
    return () => window.clearTimeout(t)
  }, [stage, sent, onStageChange])

  const chatOpen = stage !== 'closed'
  const showContext = stage === 'context' && !contextRemoved
  const messages = (
    <MessageList>
      <Timestamp day="Yesterday" time="8:44 AM" />
      {(stage === 'thinking' || stage === 'answered') && <UserMessage>{question}</UserMessage>}
      {stage === 'thinking' && (
        <JouleMessage>
          <ProgressSteps steps={progressSteps} />
          <ResponseActions sources={3} />
        </JouleMessage>
      )}
      {stage === 'answered' && (
        <JouleMessage>
          <p>{chatAnswer.intro}</p>
          <ReplyList items={chatAnswer.items} />
          <ResponseActions sources={3} />
        </JouleMessage>
      )}
    </MessageList>
  )

  return (
    <SpacesLayout
      nav={{ onNavigate }}
      paneBar={{
        breadcrumb: breadcrumbImpact,
        artifact: 'Operating Expenses Overview',
        onToggleChat: () => { setContextRemoved(false); onStageChange(chatOpen ? 'closed' : 'context') },
      }}
      prompt={!chatOpen && (
        <JouleInput variant="wide" placeholder="Can I help with anything else?" chip="Space" onSend={ask} />
      )}
      rightPane={chatOpen ? {
        title: 'Title',
        messages,
        input: showContext
          ? <JouleInput key="ctx" variant="narrow" context="Execution Risk" defaultValue={chatQuestion}
              onRemoveContext={() => setContextRemoved(true)} onSend={ask} />
          : <JouleInput key="plain" variant="narrow" placeholder="Message Joule..." onSend={ask} />,
      } : undefined}
    >
      <PageHeader title={impactTitle} />
      <Section title="Finance Overview">
        <OpportunityCard onAskJoule={chatOpen ? undefined : () => onStageChange('context')} />
        <RiskAndActionsRow onAction={onOpenSpace} stretchActions={chatOpen} riskInContext={stage === 'thinking'} />
        <OpexChartCard />
      </Section>
      {stage === 'answered' && (
        <Section title="Configuration Information">
          <ConfigurationCard />
          <KpisAtRiskCard />
        </Section>
      )}
    </SpacesLayout>
  )
}

/** Figma screen 6 (5026:17511): follow-up state — two actions completed, vision nav, compact prompt. */
export function ImpactAnalysisFollowUp({ onAction, onNavigate }: { onAction?: (actionTitle: string) => void; onNavigate?: (key: NavKey) => void }) {
  return (
    <SpacesLayout
      nav={{ set: 'vision', onNavigate }}
      paneBar={{ breadcrumb: breadcrumbImpact, artifact: 'Operating Expenses Overview', density: 'compact' }}
      prompt={<JouleInput variant="compact" chip="Space" />}
    >
      <PageHeader title={impactTitle} />
      <Section title="Finance Overview">
        <RiskAndActionsRow compact completed={2} onAction={onAction} />
      </Section>
    </SpacesLayout>
  )
}
