import { useContext, useEffect } from 'react'
import { BreadcrumbsContext, BreadcrumbsConfig } from '@features/breadcrumbs-context'

export const useBreadcrumbs = (config: BreadcrumbsConfig) => {
  const context = useContext(BreadcrumbsContext)

  const onceUpdate = Object.values(config).every((value) => value.text)

  useEffect(() => {
    context.updateConfig(config)
  }, [onceUpdate])

  return null
}
