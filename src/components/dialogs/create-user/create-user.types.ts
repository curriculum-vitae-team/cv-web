export type CreateUserFormValues = {
  auth: {
    email: string
    password: string
  }
  profile: {
    first_name: string
    last_name: string
  }
  departmentId: string
  positionId: string
  role: string
}
