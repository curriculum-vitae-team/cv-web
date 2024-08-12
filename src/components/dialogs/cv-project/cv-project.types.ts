import { CvProject, Project } from 'cv-graphql'
import { DialogProps } from 'graphql/dialogs/dialogs.types'

export type CvProjectFormValues = {
  projectId: string
  name: string
  domain: string
  start_date: Date | null
  end_date: Date | null
  description: string
  roles: string[]
  responsibilities: string
}

export type CvProjectDialogProps = DialogProps & {
  title: string
  confirmText: string
  item?: CvProject
  availableProjects?: Project[]
  createNewProject?: boolean
  onConfirm(
    values: Omit<CvProjectFormValues, 'responsibilities'> & { responsibilities: string[] }
  ): Promise<unknown>
}
