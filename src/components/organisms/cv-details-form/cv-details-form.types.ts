import { Cv } from 'cv-graphql'

export type CvFormValues = {
  name: string
  education: string
  description: string
}

export type CvDetailsFormProps = {
  cv: Cv
}
