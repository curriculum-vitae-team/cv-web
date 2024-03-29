const authRoutes = {
  root: '/auth',
  login: '/auth/login',
  signup: '/auth/signup'
} as const

const userRoutes = {
  root: '/users',
  user: '/users/:userId',
  profile: '/users/:userId/profile',
  skills: '/users/:userId/skills',
  languages: '/users/:userId/languages',
  cvs: '/users/:userId/cvs'
} as const

const projectRoutes = {
  root: '/projects',
  project: '/projects/:projectId'
} as const

const cvRoutes = {
  root: '/cvs',
  cv: '/cvs/:cvId',
  details: '/cvs/:cvId/details',
  skills: '/cvs/:cvId/skills',
  projects: '/cvs/:cvId/projects',
  preview: '/cvs/:cvId/preview'
} as const

export const routes = {
  root: '/',
  auth: authRoutes,
  verify: '/verify',
  users: userRoutes,
  settings: '/settings',
  projects: projectRoutes,
  cvs: cvRoutes,
  departments: '/departments',
  positions: '/positions',
  skills: '/skills',
  languages: '/languages'
} as const
