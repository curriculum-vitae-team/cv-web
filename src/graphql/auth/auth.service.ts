import { makeVar } from '@apollo/client'
import type { AuthResult, UpdateTokenResult, User } from 'cv-graphql'
import { StorageKeys } from 'constants/storage.constants'

class AuthService {
  user$ = makeVar<User | null>(null)
  access_token$ = makeVar('')
  refresh_token$ = makeVar('')

  constructor() {
    const user = localStorage.getItem(StorageKeys.User)
    const access_token = localStorage.getItem(StorageKeys.AccessToken)
    const refresh_token = localStorage.getItem(StorageKeys.RefreshToken)

    if (user && access_token && refresh_token) {
      this.user$(JSON.parse(user))
      this.access_token$(access_token)
      this.refresh_token$(refresh_token)
    }
  }

  setToken({ access_token, refresh_token }: UpdateTokenResult) {
    this.access_token$(access_token)
    localStorage.setItem(StorageKeys.AccessToken, access_token)
    this.refresh_token$(refresh_token)
    localStorage.setItem(StorageKeys.RefreshToken, refresh_token)
  }

  login({ user, access_token, refresh_token }: AuthResult) {
    this.user$(user)
    localStorage.setItem(StorageKeys.User, JSON.stringify(user))
    this.setToken({ access_token, refresh_token })
  }

  logout() {
    this.user$(null)
    localStorage.removeItem(StorageKeys.User)
    this.setToken({ access_token: '', refresh_token: '' })
  }
}

export const authService = new AuthService()
