import { makeVar } from '@apollo/client'
import i18next from 'config/i18next'
import { StorageKeys } from 'constants/storage.constants'
import { ILanguageService } from './languages.types'

class LanguageService implements ILanguageService {
  language$ = makeVar(this.getLanguage())

  constructor(private readonly storageService: Storage) {}

  getLanguage() {
    return this.storageService.getItem(StorageKeys.Language) || 'en'
  }

  changeLanguage(language: string) {
    i18next.changeLanguage(language)
    this.language$(language)
    this.storageService.setItem(StorageKeys.Language, language)
  }
}

export const languageService = new LanguageService(localStorage)
