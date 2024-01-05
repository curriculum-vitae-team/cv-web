import { Department } from 'cv-graphql'
import { DialogProps } from 'graphql/dialogs/dialogs.types'

export type DepartmentFormValues = Omit<Department, 'id'>

export type DepartmentProps = DialogProps & {
  title: string
  confirmText: string
  department?: Department
  onConfirm(values: DepartmentFormValues): Promise<unknown>
}
