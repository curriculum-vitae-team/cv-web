import { lazy } from 'react'

export const Home = lazy(() => import(/* webpackChunkName: "home" */ './home'))
