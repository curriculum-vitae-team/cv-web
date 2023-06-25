import { lazy } from 'react'

export const EmployeeSkills = lazy(() =>
  import(/* webpackChunkName: "employee-skills" */ './employee-skills.page')
)
