import { DialogProps } from 'graphql/dialogs/dialogs.types'
import { IProject } from 'interfaces/project.interface'

export type ProjectFormValues = {
  name: string
  internal_name: string
  description: string
  domain: string
  start_date: null | Date
  end_date: null | Date
  team_size: number
}

export type ProjectDialogProps = DialogProps & {
  item?: IProject
}
