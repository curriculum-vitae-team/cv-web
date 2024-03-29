import { TextFieldProps } from '@mui/material'
import { Project } from 'cv-graphql'

export type ProjectSelectProps = TextFieldProps & {
  availableProjects?: Project[]
}
