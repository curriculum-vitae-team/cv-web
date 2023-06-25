import { StorageKeys } from 'constants/storage.constants'
import i18n from 'i18n'
import { ILanguageService } from './languages.types'

class LanguageService implements ILanguageService {
  constructor(private readonly storageService: Storage) {
    this.readFromStorage()
  }

  private readFromStorage() {
    const language = this.storageService.getItem(StorageKeys.Language)
    if (language) {
      i18n.changeLanguage(language)
    }
  }

  changeLanguage(language: string) {
    i18n.changeLanguage(language)
    this.storageService.setItem(StorageKeys.Language, language)
  }
}

export const languageService = new LanguageService(localStorage)
