import { User } from 'cv-graphql'

export type EmployeeProfileFormProps = {
  user: User
}

export type UserProfileFormValues = {
  profile: {
    first_name: string
    last_name: string
  }
  department: string
  position: string
}
