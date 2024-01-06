import { DialogProps } from 'graphql/dialogs/dialogs.types'

export type CvFormValues = {
  name: string
  description: string
}

export type CvProps = DialogProps & {
  userId: string
}
