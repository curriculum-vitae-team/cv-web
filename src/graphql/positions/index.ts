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
  mutation CreatePosition($position: CreatePositionInput!) {
    createPosition(position: $position) {
      id
      name
    }
  }
`

export const UPDATE_POSITION = gql`
  mutation UpdatePosition($position: UpdatePositionInput!) {
    updatePosition(position: $position) {
      id
      name
    }
  }
`

export const DELETE_POSITION = gql`
  mutation DeletePosition($position: DeletePositionInput!) {
    deletePosition(position: $position) {
      affected
    }
  }
`
