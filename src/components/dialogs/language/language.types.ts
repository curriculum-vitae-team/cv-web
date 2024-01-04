import { Language } from 'cv-graphql'
import { DialogProps } from 'graphql/dialogs/dialogs.types'

export type LanguageFormValues = Omit<Language, 'id'>

export type LanguageProps = DialogProps & {
  item?: Language
}
