import { Department } from 'cv-graphql'

export type DepartmentsResult = {
  departments: Department[]
}

export type CreateDepartmentResult = {
  createDepartment: Department
}

export type UpdateDepartmentResult = {
  updateDepartment: Department
}
