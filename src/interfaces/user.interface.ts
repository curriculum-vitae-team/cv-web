import { UserRole } from 'constants/user-role.constants'
import { IProfile } from './profile.interface'
import { IDepartment } from './department.interface'
import { IPosition } from './position.interface'
import { ICV } from './cv.interface'

export interface IUser {
  id: string
  created_at: string
  email: string
  is_verified: boolean
  profile: IProfile
  cvs: Omit<ICV, 'user'>[]
  department: IDepartment
  department_name: string
  position: IPosition
  position_name: string
  role: UserRole
}
