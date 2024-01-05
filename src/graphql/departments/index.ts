import { gql } from '@apollo/client'

export const DEPARTMENTS = gql`
  query Departments {
    departments {
      id
      name
    }
  }
`

export const CREATE_DEPARTMENT = gql`
  mutation CreateDepartment($department: CreateDepartmentInput!) {
    createDepartment(department: $department) {
      id
      name
    }
  }
`

export const UPDATE_DEPARTMENT = gql`
  mutation UpdateDepartment($department: UpdateDepartmentInput!) {
    updateDepartment(department: $department) {
      id
      name
    }
  }
`

export const DELETE_DEPARTMENT = gql`
  mutation DeleteDepartment($department: DeleteDepartmentInput!) {
    deleteDepartment(department: $department) {
      affected
    }
  }
`
