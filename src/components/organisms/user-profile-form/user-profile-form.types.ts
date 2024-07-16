import { User } from 'cv-graphql'

export type UserProfileFormProps = {
  user: User
}

export type UserProfileFormValues = {
  profile: {
    first_name: string
    last_name: string
  }
  departmentId: string
  positionId: string
}
