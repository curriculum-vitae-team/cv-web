import { IUser } from '../../../interfaces/user.interface'
import { IDepartment } from '../../../interfaces/department.interface'
import { IPosition } from '../../../interfaces/position.interface'

export type EmployeeProfileFormProps = {
  user: IUser
  departments: IDepartment[]
  positions: IPosition[]
}

export type EmployeeProfileFormValues = {
  first_name: string
  last_name: string
  department: string
  position: string
}
