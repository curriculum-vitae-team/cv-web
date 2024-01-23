import { LanguageProficiency, Proficiency } from 'cv-graphql'
import { DialogProps } from 'graphql/dialogs/dialogs.types'

export type LanguageProficiencyFormValues = {
  name: string
  proficiency: Proficiency
}

export type LanguageProficiencyProps = DialogProps & {
  title: string
  ownLanguages: string[]
  languageProficiency?: LanguageProficiency
  disableLanguageSelect?: boolean
  onConfirm(values: LanguageProficiencyFormValues): Promise<unknown>
}
