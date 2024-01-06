import { Cv } from 'cv-graphql'

export type CvFormValues = {
  name: string
  description: string
}

export type CvDetailsFormProps = {
  cv: Cv
}
