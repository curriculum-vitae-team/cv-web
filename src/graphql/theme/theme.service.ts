import { makeVar } from '@apollo/client'
import { StorageKeys } from 'constants/storage.constants'
import { IThemeService } from './theme.types'

class ThemeService implements IThemeService {
  theme$ = makeVar(this.getTheme())

  private getTheme() {
    return localStorage.getItem(StorageKeys.Theme) || 'device'
  }

  setTheme(theme: string) {
    this.theme$(theme)
    localStorage.setItem(StorageKeys.Theme, theme)
  }
}

export const themeService = new ThemeService()
