import { gql } from '@apollo/client'

export const POSITIONS = gql`
  query Positions {
    positions {
      id
      name
    }
  }
`
