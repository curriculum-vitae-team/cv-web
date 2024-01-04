import { useQuery } from '@apollo/client'
import { Department } from 'cv-graphql'
import { DEPARTMENTS } from 'graphql/departments'
import { DepartmentsResult } from 'graphql/departments/departments.types'

export const useDepartments = (): [Department[], boolean] => {
  const { data, loading } = useQuery<DepartmentsResult>(DEPARTMENTS)

  return [data?.departments || [], loading]
}
