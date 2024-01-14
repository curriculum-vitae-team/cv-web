import { makeVar } from '@apollo/client'
import { StorageKeys } from 'constants/storage.constants'
import { IThemeService } from './theme.types'

class ThemeService implements IThemeService {
  theme$ = makeVar('device')

  constructor(private readonly storageService: Storage) {
    this.readFromStorage()
  }

  private readFromStorage() {
    const theme = this.storageService.getItem(StorageKeys.Theme)

    if (theme) {
      this.theme$(theme)
    }
  }

  setTheme(theme: string) {
    this.theme$(theme)
    this.storageService.setItem(StorageKeys.Theme, theme)
  }
}

export const themeService = new ThemeService(localStorage)
