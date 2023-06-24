import { gql } from '@apollo/client'

export const USERS = gql`
  query Users {
    users {
      id
      email
      profile {
        id
        first_name
        last_name
        full_name
        avatar
      }
      department_name
      position_name
      role
    }
  }
`

export const USER = gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      created_at
      email
      profile {
        id
        first_name
        last_name
        full_name
        avatar
        skills {
          skill_name
          mastery
        }
        languages {
          language_name
          proficiency
        }
      }
      cvs {
        id
      }
      department {
        id
        name
      }
      position {
        id
        name
      }
      role
    }
  }
`

export const USER_FULL_NAME = gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      email
      profile {
        id
        full_name
      }
    }
  }
`

export const USER_CVS = gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      cvs {
        id
        created_at
        name
      }
    }
  }
`

export const CREATE_USER = gql`
  mutation CreateUser($user: CreateUserInput!) {
    createUser(user: $user) {
      id
      profile {
        id
        first_name
        last_name
        full_name
      }
      department {
        id
        name
      }
      position {
        id
        name
      }
    }
  }
`

export const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $user: UpdateUserInput!) {
    updateUser(id: $id, user: $user) {
      id
      profile {
        id
        first_name
        last_name
        full_name
        skills {
          skill_name
          mastery
        }
        languages {
          language_name
          proficiency
        }
      }
      department {
        id
        name
      }
      position {
        id
        name
      }
    }
  }
`

export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      affected
    }
  }
`
