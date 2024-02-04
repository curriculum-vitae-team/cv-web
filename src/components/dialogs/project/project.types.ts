import { Project } from 'cv-graphql'
import { DialogProps } from 'graphql/dialogs/dialogs.types'

export type ProjectFormValues = {
  name: string
  internal_name: string
  description: string
  domain: string
  start_date: Date | null
  end_date: Date | null
  team_size: string
}

export type ProjectDialogProps = DialogProps & {
  title: string
  confirmText: string
  item?: Project
  onConfirm(values: ProjectFormValues): Promise<unknown>
}
