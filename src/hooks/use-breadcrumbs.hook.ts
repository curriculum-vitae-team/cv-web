import { useContext, useEffect } from 'react'
import { BreadcrumbsContext } from '../components/features/breadcrumbs-context'
import { BreadcrumbsConfig } from '../components/features/breadcrumbs-context/breadcrumbs-context.types'

export const useBreadcrumbs = (config: BreadcrumbsConfig) => {
  const context = useContext(BreadcrumbsContext)

  const triggerUpdate = Object.values(config).every((value) => value)

  useEffect(() => {
    context.updateConfig(config)
  }, [triggerUpdate])

  return null
}
