import { CvProject, Project } from 'cv-graphql'
import { DialogProps } from 'graphql/dialogs/dialogs.types'

export type CvProjectFormValues = {
  projectId: string
  name: string
  internal_name: string
  description: string
  domain: string
  start_date: Date | null
  end_date: Date | null
  team_size: string
  roles: string[]
  responsibilities: string[]
}

export type CvProjectDialogProps = DialogProps & {
  title: string
  confirmText: string
  item?: CvProject
  availableProjects?: Project[]
  createNewProject?: boolean
  onConfirm(values: CvProjectFormValues): Promise<unknown>
}
