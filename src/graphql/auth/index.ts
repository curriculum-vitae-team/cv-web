import { gql } from '@apollo/client'

export const LOGIN = gql`
  query Login($auth: AuthInput!) {
    login(auth: $auth) {
      user {
        id
        email
        profile {
          id
          full_name
          avatar
        }
        role
        is_verified
      }
      access_token
    }
  }
`

export const SIGNUP = gql`
  mutation Signup($auth: AuthInput!) {
    signup(auth: $auth) {
      user {
        id
        email
        profile {
          id
          full_name
          avatar
        }
        role
        is_verified
      }
      access_token
    }
  }
`
