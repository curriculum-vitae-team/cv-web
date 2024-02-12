import { lazy } from 'react'

export const CvProjects = lazy(() => import(/* webpackChunkName: "cv-projects" */ './cv-projects'))
