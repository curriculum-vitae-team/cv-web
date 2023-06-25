import { lazy } from 'react'

export const EmployeeProfile = lazy(() =>
  import(/* webpackChunkName: "employee-profile" */ './employee-profile.page')
)
