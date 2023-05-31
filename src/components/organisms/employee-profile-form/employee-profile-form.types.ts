import { IUser } from '@interfaces/user.interface'

export type EmployeeProfileFormProps = {
  user: IUser
}

export type EmployeeProfileFormValues = {
  first_name: string
  last_name: string
  department: string
  position: string
}
