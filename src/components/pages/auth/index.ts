import { lazy } from 'react'

export const Auth = lazy(() => import(/* webpackChunkName: "auth" */ './auth.page'))
