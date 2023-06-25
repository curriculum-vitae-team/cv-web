import { DialogProps } from 'graphql/dialogs/dialogs.types'

export type ConfirmDialogProps = DialogProps & {
  dialogTitle: string
  dialogContent: JSX.Element
  cancelText?: string
  confirmText?: string
  confirmCallback(): Promise<unknown>
}
