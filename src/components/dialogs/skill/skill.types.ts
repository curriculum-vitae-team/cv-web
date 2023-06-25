import { DialogProps } from 'graphql/dialogs/dialogs.types'
import { ISkill } from 'interfaces/skill.interface'

export type SkillFormValues = Omit<ISkill, 'id'>

export type SkillProps = DialogProps & {
  item?: ISkill
}
