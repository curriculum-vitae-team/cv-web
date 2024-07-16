import type { Department, User } from 'cv-graphql'

export type DepartmentWithUsers = Department & {
  users: User[]
}
