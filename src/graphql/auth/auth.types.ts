import { ReactiveVar } from '@apollo/client'
import { IUser } from '@interfaces/user.interface'

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

export interface IAuthService {
  user$: ReactiveVar<IUser | null>
  access_token$: ReactiveVar<string>
  writeToStorage: (user: IUser, access_token: string) => void
  clearStorage: () => void
}
