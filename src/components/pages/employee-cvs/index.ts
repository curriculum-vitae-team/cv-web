import { lazy } from 'react'

export const EmployeeCvs = lazy(() =>
  import(/* webpackChunkName: "employee-cvs" */ './employee-cvs.page')
)
