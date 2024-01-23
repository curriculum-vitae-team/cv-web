import { lazy } from 'react'

export const UserLanguages = lazy(() =>
  import(/* webpackChunkName: "user-languages" */ './user-languages')
)
