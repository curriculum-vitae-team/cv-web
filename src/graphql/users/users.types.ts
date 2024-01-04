import { User } from 'cv-graphql'

export type UsersResult = {
  users: User[]
}

export type UserResult = {
  user: User
}

export type CreateUserResult = {
  createUser: User
}

export type UpdateUserResult = {
  updateUser: User
}
