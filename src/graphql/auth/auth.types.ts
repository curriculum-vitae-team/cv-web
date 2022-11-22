import { IUser } from '../../interfaces/user.interface'

export type AuthResult = {
  user: IUser
  access_token: string
}

export type LoginResult = {
  login: AuthResult
}

export type SignupResult = {
  signup: AuthResult
}
