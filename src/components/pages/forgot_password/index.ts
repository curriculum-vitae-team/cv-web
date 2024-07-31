import { lazy } from 'react'

export const ForgotPassword = lazy(
  () => import(/* webpackChunkName: "forgot_password" */ './forgot_password')
)
