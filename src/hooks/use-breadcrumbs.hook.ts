import { useContext, useEffect } from 'react'
import { BreadcrumbsContext } from '../components/features/breadcrumbs-context'
import { BreadcrumbsConfig } from '../components/features/breadcrumbs-context/breadcrumbs-context.types'

export const useBreadcrumbs = (config: BreadcrumbsConfig) => {
  const context = useContext(BreadcrumbsContext)

  const onceUpdate = Object.values(config).every((value) => value.text)

  useEffect(() => {
    context.updateConfig(config)
  }, [onceUpdate])

  return null
}
