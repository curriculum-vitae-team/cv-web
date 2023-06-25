import { lazy } from 'react'

export const Employees = lazy(() => import(/* webpackChunkName: "employees" */ './employees.page'))
