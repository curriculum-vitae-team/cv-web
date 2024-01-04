import { useContext, useEffect } from 'react'
import { BreadcrumbsContext, BreadcrumbsConfig } from '@features/breadcrumbs-context'

export const useBreadcrumbs = (config: BreadcrumbsConfig) => {
  const context = useContext(BreadcrumbsContext)

  useEffect(() => {
    context.updateConfig(config)
  }, [config])

  return null
}
