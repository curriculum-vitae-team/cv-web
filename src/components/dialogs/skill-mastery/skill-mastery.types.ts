import { Mastery, SkillMastery } from 'cv-graphql'
import { DialogProps } from 'graphql/dialogs/dialogs.types'

export type SkillMasteryFormValues = {
  name: string
  category: string
  mastery: Mastery
}

export type SkillMasteryProps = DialogProps & {
  title: string
  ownSkills: string[]
  skill?: SkillMastery
  disableSkillSelect?: boolean
  onConfirm(values: SkillMasteryFormValues): Promise<unknown>
}
