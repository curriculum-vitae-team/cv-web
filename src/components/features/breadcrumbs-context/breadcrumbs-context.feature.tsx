import { createContext, useCallback, useMemo, useState } from 'react'
import {
  BreadcrumbsProviderProps,
  BreadcrumbsContextValue,
  BreadcrumbsConfig
} from './breadcrumbs-context.types'

const defaultValue: BreadcrumbsContextValue = {
  config: {},
  updateConfig: () => {}
}

export const BreadcrumbsContext = createContext(defaultValue)

export const BreadcrumbsProvider = ({ children }: BreadcrumbsProviderProps) => {
  const [config, setConfig] = useState<BreadcrumbsConfig>(defaultValue.config)

  const updateConfig = useCallback((config: BreadcrumbsConfig) => {
    setConfig(config)
  }, [])

  const value = useMemo(() => {
    return { config, updateConfig }
  }, [config, updateConfig])

  return <BreadcrumbsContext.Provider value={value}>{children}</BreadcrumbsContext.Provider>
}
