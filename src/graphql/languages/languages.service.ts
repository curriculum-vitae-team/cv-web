import { makeVar } from '@apollo/client'
import i18n from 'i18n'
import { StorageKeys } from 'constants/storage.constants'
import { ILanguageService } from './languages.types'

class LanguageService implements ILanguageService {
  language$ = makeVar(this.getLanguage())

  constructor(private readonly storageService: Storage) {}

  getLanguage() {
    return this.storageService.getItem(StorageKeys.Language) || 'en'
  }

  changeLanguage(language: string) {
    i18n.changeLanguage(language)
    this.language$(language)
    this.storageService.setItem(StorageKeys.Language, language)
  }
}

export const languageService = new LanguageService(localStorage)
