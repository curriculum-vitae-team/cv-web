import { Project } from 'cv-graphql'
import { DialogProps } from 'graphql/dialogs/dialogs.types'

export type ProjectFormValues = {
  name: string
  internal_name: null | string
  description: string
  domain: string
  start_date: null | Date
  end_date: null | Date
  team_size: number
}

export type ProjectDialogProps = DialogProps & {
  item?: Project
}
