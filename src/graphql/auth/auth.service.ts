import { makeVar } from '@apollo/client'
import { IUser } from '../../interfaces/user.interface'
import { StorageKeys } from '../../constants/storage.constants'
import { IAuthService } from './auth.types'

class AuthService implements IAuthService {
  user$ = makeVar<IUser | null>(null)
  access_token$ = makeVar('')

  constructor(private readonly storageService: Storage) {
    this.readFromStorage()
  }

  private readFromStorage() {
    const user = this.storageService.getItem(StorageKeys.User)
    const access_token = this.storageService.getItem(StorageKeys.AccessToken)
    if (user && access_token) {
      this.user$(JSON.parse(user))
      this.access_token$(access_token)
    }
  }

  writeToStorage(user: IUser, access_token: string) {
    this.user$(user)
    this.access_token$(access_token)
    this.storageService.setItem(StorageKeys.User, JSON.stringify(user))
    this.storageService.setItem(StorageKeys.AccessToken, access_token)
  }

  clearStorage() {
    this.user$(null)
    this.access_token$('')
    this.storageService.removeItem(StorageKeys.User)
    this.storageService.removeItem(StorageKeys.AccessToken)
  }
}

export const authService = new AuthService(sessionStorage)
