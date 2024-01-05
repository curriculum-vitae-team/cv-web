import { Position } from 'cv-graphql'
import { DialogProps } from 'graphql/dialogs/dialogs.types'

export type PositionFormValues = Omit<Position, 'id'>

export type PositionProps = DialogProps & {
  title: string
  confirmText: string
  position?: Position
  onConfirm(values: PositionFormValues): Promise<unknown>
}
