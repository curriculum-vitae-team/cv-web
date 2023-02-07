import { ReactNode } from 'react'

export type BreadcrumbsConfig = {
  [key: string]: string | undefined
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
