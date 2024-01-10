import { lazy } from 'react'

export const UserProfile = lazy(() =>
  import(/* webpackChunkName: "user-profile" */ './user-profile')
)
