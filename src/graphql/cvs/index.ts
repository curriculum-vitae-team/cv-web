import { gql } from '@apollo/client'

export const CVS = gql`
  query CVs {
    cvs {
      id
      name
      description
      user {
        id
        email
      }
      is_template
    }
  }
`

export const CREATE_CV = gql`
  mutation CreateCV($cv: CvInput!) {
    createCv(cv: $cv) {
      id
      name
      description
      user {
        id
        email
      }
      is_template
    }
  }
`

export const DELETE_CV = gql`
  mutation DeleteCv($cvId: ID!) {
    deleteCv(id: $cvId) {
      affected
    }
  }
`
