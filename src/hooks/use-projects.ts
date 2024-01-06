import { useMutation, useQuery } from '@apollo/client'
import { CREATE_PROJECT, DELETE_PROJECT, PROJECTS, UPDATE_PROJECT } from 'graphql/projects'
import {
  CreateProjectResult,
  ProjectsResult,
  UpdateProjectResult
} from 'graphql/projects/projects.types'

export const useProjects = () => {
  const query = useQuery<ProjectsResult>(PROJECTS)
  return { projects: query.data?.projects || [], ...query }
}

export const useProjectCreate = () => {
  return useMutation<CreateProjectResult>(CREATE_PROJECT, {
    refetchQueries: [PROJECTS]
  })
}

export const useProjectUpdate = () => {
  return useMutation<UpdateProjectResult>(UPDATE_PROJECT)
}

export const useProjectDelete = (projectId: string) => {
  return useMutation(DELETE_PROJECT, {
    variables: {
      id: projectId
    },
    update(cache) {
      const id = cache.identify({ id: projectId, __typename: 'Project' })
      cache.evict({ id })
      cache.gc()
    }
  })
}
