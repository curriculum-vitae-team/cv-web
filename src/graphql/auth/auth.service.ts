import { makeVar } from '@apollo/client'
import { User } from 'cv-graphql'
import { StorageKeys } from 'constants/storage.constants'
import { IAuthService } from './auth.types'

class AuthService implements IAuthService {
  user$ = makeVar<User | null>(null)
  access_token$ = makeVar('')

  constructor() {
    this.getUser()
  }

  private getUser() {
    const user = sessionStorage.getItem(StorageKeys.User)
    const access_token = sessionStorage.getItem(StorageKeys.AccessToken)

    if (user && access_token) {
      this.user$(JSON.parse(user))
      this.access_token$(access_token)
    }
  }

  login(user: User, access_token: string) {
    this.user$(user)
    this.access_token$(access_token)
    sessionStorage.setItem(StorageKeys.User, JSON.stringify(user))
    sessionStorage.setItem(StorageKeys.AccessToken, access_token)
  }

  logout() {
    this.user$(null)
    this.access_token$('')
    sessionStorage.removeItem(StorageKeys.User)
    sessionStorage.removeItem(StorageKeys.AccessToken)
  }
}

export const authService = new AuthService()
