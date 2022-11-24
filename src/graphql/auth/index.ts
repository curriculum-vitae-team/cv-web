import { gql } from '@apollo/client'

export const LOGIN = gql`
  query Login($email: String!, $password: String!) {
    login(auth: { email: $email, password: $password }) {
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
  mutation Signup($email: String!, $password: String!) {
    signup(auth: { email: $email, password: $password }) {
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
