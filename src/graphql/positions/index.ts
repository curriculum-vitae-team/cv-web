import { gql } from '@apollo/client'

export const POSITIONS = gql`
  query Positions {
    positions {
      id
      name
    }
  }
`

export const CREATE_POSITION = gql`
  mutation CreatePosition($position: PositionInput!) {
    createPosition(position: $position) {
      id
      name
    }
  }
`

export const UPDATE_POSITION = gql`
  mutation UpdatePosition($id: ID!, $position: PositionInput!) {
    updatePosition(id: $id, position: $position) {
      id
      name
    }
  }
`

export const DELETE_POSITION = gql`
  mutation DeletePosition($id: ID!) {
    deletePosition(id: $id) {
      affected
    }
  }
`
