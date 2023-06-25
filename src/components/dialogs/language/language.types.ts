import { DialogProps } from 'graphql/dialogs/dialogs.types'
import { ILanguage } from 'interfaces/language.interface'

export type LanguageFormValues = Omit<ILanguage, 'id'>

export type LanguageProps = DialogProps & {
  item?: ILanguage
}
