import { useMutation, useQuery } from '@apollo/client'
import {
  CreateDepartmentInput,
  DeleteDepartmentInput,
  Department,
  UpdateDepartmentInput
} from 'cv-graphql'
import {
  CREATE_DEPARTMENT,
  DELETE_DEPARTMENT,
  DEPARTMENTS,
  UPDATE_DEPARTMENT
} from 'graphql/departments'
import {
  CreateDepartmentResult,
  DepartmentsResult,
  UpdateDepartmentResult
} from 'graphql/departments/departments.types'

export const useDepartments = (): [Department[], boolean] => {
  const { data, loading } = useQuery<DepartmentsResult>(DEPARTMENTS)

  return [data?.departments || [], loading]
}

export const useDepartmentCreate = () => {
  return useMutation<CreateDepartmentResult, { department: CreateDepartmentInput }>(
    CREATE_DEPARTMENT,
    {
      refetchQueries: [DEPARTMENTS]
    }
  )
}

export const useDepartmentUpdate = () => {
  return useMutation<UpdateDepartmentResult, { department: UpdateDepartmentInput }>(
    UPDATE_DEPARTMENT
  )
}

export const useDepartmentDelete = (departmentId: string) => {
  return useMutation<null, { department: DeleteDepartmentInput }>(DELETE_DEPARTMENT, {
    variables: {
      department: { departmentId }
    },
    update(cache) {
      const id = cache.identify({ id: departmentId, __typename: 'Department' })
      cache.evict({ id })
      cache.gc()
    }
  })
}
