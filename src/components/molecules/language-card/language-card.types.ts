import { LanguageProficiency } from 'cv-graphql'

export type LanguageCardProps = {
  language: LanguageProficiency
  disabled?: boolean
  onClick(language: LanguageProficiency): void
}
