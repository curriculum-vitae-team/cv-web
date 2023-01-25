import { gql } from '@apollo/client'

export const CVS = gql`
  query CVS {
    cvs {
      id
      name
      user {
        id
        email
      }
      is_template
    }
  }
`
