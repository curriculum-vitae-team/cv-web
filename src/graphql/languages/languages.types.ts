import { Language } from 'cv-graphql'

export type LanguagesResult = {
  languages: Language[]
}

export type CreateLanguageResult = {
  createLanguage: Language
}

export type UpdateLanguageResult = {
  updateLanguage: Language
}

export interface ILanguageService {
  getLanguage(): string | null
  changeLanguage(language: string): void
}
