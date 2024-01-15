import { lazy } from 'react'

export const VerifyEmail = lazy(() =>
  import(/* webpackChunkName: "verify-email" */ './verify-email')
)
