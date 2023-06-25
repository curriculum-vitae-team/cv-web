import { IUser } from 'interfaces/user.interface'

export type UsersResult = {
  users: IUser[]
}

export type UserResult = {
  user: IUser
}

export type CreateUserResult = {
  createUser: IUser
}

export type UpdateUserInput = {
  id: string
  user: {
    profile: {
      first_name: string
      last_name: string
    }
    departmentId: string
    positionId: string
  }
}

export type UpdateUserResult = {
  updateUser: IUser
}
