import { DialogProps } from 'graphql/dialogs/dialogs.types'
import { IPosition } from 'interfaces/position.interface'

export type PositionFormValues = Omit<IPosition, 'id'>

export type PositionProps = DialogProps & {
  item?: IPosition
}
