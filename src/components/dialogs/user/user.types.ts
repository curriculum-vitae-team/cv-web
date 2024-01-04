import { User, UserRole } from 'cv-graphql'
import { DialogProps } from 'graphql/dialogs/dialogs.types'

export type UserFormValues = {
  auth: {
    email: string
    password: string
  }
  profile: {
    first_name: string
    last_name: string
  }
  departmentId: string
  positionId: string
  role: UserRole
}

export type UserProps = DialogProps & {
  title?: string
  saveText?: string
  item?: User
}
