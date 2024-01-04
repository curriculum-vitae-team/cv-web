import { ReactiveVar } from '@apollo/client'
import { User, AuthResult } from 'cv-graphql'

export type LoginResult = {
  login: AuthResult
}

export type SignupResult = {
  signup: AuthResult
}

export interface IAuthService {
  user$: ReactiveVar<User | null>
  access_token$: ReactiveVar<string>
  login(user: User, access_token: string): void
  logout(): void
}
