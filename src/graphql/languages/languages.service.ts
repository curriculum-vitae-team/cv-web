import { makeVar } from '@apollo/client'
import i18next from 'config/i18next'
import { StorageKeys } from 'constants/storage.constants'
import { ILanguageService } from './languages.types'

class LanguageService implements ILanguageService {
  language$ = makeVar(this.getLanguage())

  getLanguage() {
    return localStorage.getItem(StorageKeys.Language) || 'en'
  }

  changeLanguage(language: string) {
    i18next.changeLanguage(language)
    this.language$(language)
    localStorage.setItem(StorageKeys.Language, language)
  }
}

export const languageService = new LanguageService()
