import { Skill } from 'cv-graphql'
import { DialogProps } from 'graphql/dialogs/dialogs.types'

export type SkillFormValues = Omit<Skill, 'id'>

export type SkillProps = DialogProps & {
  item?: Skill
}
