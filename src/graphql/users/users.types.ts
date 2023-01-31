import { IUser } from '../../interfaces/user.interface'

export type UsersResult = {
  users: IUser[]
}

export type UserResult = {
  user: IUser
}

export type UpdateUserInput = {
  id: string
  user: {
    profile: {
      first_name: string
      last_name: string
      skills: { skill_name: string; mastery: string }[]
      languages: { language_name: string; proficiency: string }[]
    }
    cvsIds: string[]
    departmentId: string
    positionId: string
  }
}

export type UpdateUserResult = {
  updateUser: IUser
}
