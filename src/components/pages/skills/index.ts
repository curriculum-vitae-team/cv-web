import { lazy } from 'react'

export const Skills = lazy(() => import(/* webpackChunkName: "skills" */ './skills'))
