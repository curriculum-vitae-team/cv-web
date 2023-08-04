import { DialogProps } from 'graphql/dialogs/dialogs.types'
import { IUser } from 'interfaces/user.interface'

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
  role: string
}

export type UserProps = DialogProps & {
  item?: IUser
}
