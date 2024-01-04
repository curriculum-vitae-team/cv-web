import { Position } from 'cv-graphql'
import { DialogProps } from 'graphql/dialogs/dialogs.types'

export type PositionFormValues = Omit<Position, 'id'>

export type PositionProps = DialogProps & {
  item?: Position
}
