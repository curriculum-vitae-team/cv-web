import { MutationFunction, useMutation } from '@apollo/client'
import { CREATE_PROJECT, PROJECTS } from '@graphql/projects'
import { CreateProjectResult } from '@graphql/projects/projects.types'

export const useProjectCreate = (): [MutationFunction<CreateProjectResult>, boolean] => {
  const [createProject, { loading }] = useMutation<CreateProjectResult>(CREATE_PROJECT, {
    refetchQueries: [PROJECTS]
  })
  return [createProject, loading]
}
