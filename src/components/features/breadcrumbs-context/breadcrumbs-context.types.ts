import { ReactNode } from 'react'
import { SvgIconComponent } from '@mui/icons-material'

export type BreadcrumbsConfig = {
  [key: string]: {
    text: string | undefined
    to?: string
    color?: MuiColor
    Icon?: SvgIconComponent
  }
}

type BreadcrumbsContextApi = {
  updateConfig: (config: BreadcrumbsConfig) => void
}

export type BreadcrumbsContextValue = BreadcrumbsContextApi & {
  config: BreadcrumbsConfig
}

export type BreadcrumbsProviderProps = {
  children: ReactNode
}
