import { gql } from '@apollo/client'

export const LANGUAGES = gql`
  query Languages {
    languages {
      id
      iso2
      name
      native_name
    }
  }
`

export const CREATE_LANGUAGE = gql`
  mutation CreateLanguage($language: LanguageInput!) {
    createLanguage(language: $language) {
      id
      iso2
      name
      native_name
    }
  }
`

export const UPDATE_LANGUAGE = gql`
  mutation UpdateLanguage($id: ID!, $language: LanguageInput!) {
    updateLanguage(id: $id, language: $language) {
      id
      iso2
      name
      native_name
    }
  }
`

export const DELETE_LANGUAGE = gql`
  mutation DeleteLanguage($id: ID!) {
    deleteLanguage(id: $id) {
      affected
    }
  }
`
