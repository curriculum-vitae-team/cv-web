import { lazy } from 'react'

export const Projects = lazy(() => import(/* webpackChunkName: "projects" */ './projects.page'))
