import { gql } from '@apollo/client'

export const PROJECTS = gql`
  query Projects {
    projects {
      id
      name
      domain
      start_date
      end_date
      description
      environment
    }
  }
`

export const CREATE_PROJECT = gql`
  mutation CreateProject($project: CreateProjectInput!) {
    createProject(project: $project) {
      id
      name
      domain
      start_date
      end_date
      description
      environment
    }
  }
`

export const UPDATE_PROJECT = gql`
  mutation UpdateProject($project: UpdateProjectInput!) {
    updateProject(project: $project) {
      id
      name
      domain
      start_date
      end_date
      description
      environment
    }
  }
`

export const DELETE_PROJECT = gql`
  mutation DeleteProject($project: DeleteProjectInput!) {
    deleteProject(project: $project) {
      affected
    }
  }
`
