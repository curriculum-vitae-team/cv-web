import { ReactNode } from 'react'
import { SvgIconComponent } from '@mui/icons-material'

export type LinkProps = {
  to: string
  children: ReactNode
  color?: MuiColor
  Icon?: SvgIconComponent
}
