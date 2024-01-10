import { lazy } from 'react'

export const Users = lazy(() => import(/* webpackChunkName: "users" */ './users'))
