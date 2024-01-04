import { SkillMastery } from 'cv-graphql'
import { DialogProps } from 'graphql/dialogs/dialogs.types'

export type SkillMasteryFormValues = SkillMastery

export type SkillMasteryProps = DialogProps & {
  title: string
  skillMastery?: SkillMastery
  disableSkillSelect?: boolean
  onConfirm(values: SkillMasteryFormValues): Promise<unknown>
}
