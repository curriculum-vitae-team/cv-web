import { lazy } from 'react'

export const User = lazy(() => import(/* webpackChunkName: "user" */ './user'))
