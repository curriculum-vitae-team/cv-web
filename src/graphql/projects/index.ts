import { gql } from '@apollo/client'

export const PROJECTS = gql`
  query Projects {
    projects {
      id
      name
      internal_name
      domain
      description
      start_date
      end_date
      team_size
    }
  }
`

export const CREATE_PROJECT = gql`
  mutation CreateProject($project: CreateProjectInput!) {
    createProject(project: $project) {
      id
      name
      internal_name
      description
      domain
      start_date
      end_date
      team_size
    }
  }
`

export const UPDATE_PROJECT = gql`
  mutation UpdateProject($project: UpdateProjectInput!) {
    updateProject(project: $project) {
      id
      name
      internal_name
      description
      domain
      start_date
      end_date
      team_size
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
