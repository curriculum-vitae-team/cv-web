import i18n from 'i18n'
import { StorageKeys } from 'constants/storage.constants'
import { ILanguageService } from './languages.types'

class LanguageService implements ILanguageService {
  constructor(private readonly storageService: Storage) {}

  getLanguage() {
    return this.storageService.getItem(StorageKeys.Language)
  }

  changeLanguage(language: string) {
    i18n.changeLanguage(language)
    this.storageService.setItem(StorageKeys.Language, language)
  }
}

export const languageService = new LanguageService(localStorage)
