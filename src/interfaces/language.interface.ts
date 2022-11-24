import { LanguageProficiency } from '../constants/language-proficiency.constants'

export interface ILanguage {
  id: string
  name: string
  iso2: string
}

export interface ILanguageProficiency {
  language_name: string
  proficiency: LanguageProficiency
}
