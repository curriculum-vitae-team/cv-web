import { Skill } from 'cv-graphql'
import { DialogProps } from 'graphql/dialogs/dialogs.types'

export type SkillFormValues = {
  name: string
  categoryId: string
}

export type SkillProps = DialogProps & {
  item?: Skill
}
