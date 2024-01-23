import { LanguageProficiency } from 'cv-graphql'

export type LanguageCardProps = {
  language: LanguageProficiency
  onClick(language: LanguageProficiency): void
}
