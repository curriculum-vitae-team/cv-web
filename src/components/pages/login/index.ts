import { lazy } from 'react'

export const Login = lazy(() => import(/* webpackChunkName: "login" */ './login.page'))
