import { lazy } from 'react'

export const ResetPassword = lazy(
  () => import(/* webpackChunkName: "reset_password" */ './reset_password')
)
