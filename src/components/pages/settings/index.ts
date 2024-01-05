import { lazy } from 'react'

export const Settings = lazy(() => import(/* webpackChunkName: "settings" */ './settings'))
