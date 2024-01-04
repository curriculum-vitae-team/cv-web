import { Project } from 'cv-graphql'

export type ProjectsResult = {
  projects: Project[]
}

export type CreateProjectResult = {
  project: Project
}

export type UpdateProjectResult = {
  updateProject: Project
}
