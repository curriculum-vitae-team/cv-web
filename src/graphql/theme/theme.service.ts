import { makeVar } from '@apollo/client'
import { StorageKeys } from 'constants/storage.constants'
import { IThemeService } from './theme.types'

class ThemeService implements IThemeService {
  theme$ = makeVar(this.getTheme())

  constructor(private readonly storageService: Storage) {}

  private getTheme() {
    return this.storageService.getItem(StorageKeys.Theme) || 'device'
  }

  setTheme(theme: string) {
    this.theme$(theme)
    this.storageService.setItem(StorageKeys.Theme, theme)
  }
}

export const themeService = new ThemeService(localStorage)
