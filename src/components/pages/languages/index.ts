import { lazy } from 'react'

export const Languages = lazy(() => import(/* webpackChunkName: "languages" */ './languages'))
