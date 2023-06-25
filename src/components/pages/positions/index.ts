import { lazy } from 'react'

export const Positions = lazy(() => import(/* webpackChunkName: "positions" */ './positions'))
