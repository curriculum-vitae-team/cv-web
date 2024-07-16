import { useContext, useEffect } from 'react'
import { BreadcrumbsContext, BreadcrumbsConfig } from '@features/breadcrumbs-context'

export const useBreadcrumbs = (config: BreadcrumbsConfig) => {
  const { updateConfig } = useContext(BreadcrumbsContext)

  useEffect(() => {
    updateConfig(config)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config])

  return null
}
