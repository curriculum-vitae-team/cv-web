import { lazy } from 'react'

export const Departments = lazy(() => import(/* webpackChunkName: "departments" */ './departments'))
