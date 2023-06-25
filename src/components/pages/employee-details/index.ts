import { lazy } from 'react'

export const EmployeeDetails = lazy(() =>
  import(/* webpackChunkName: "employee-details" */ './employee-details.page')
)
