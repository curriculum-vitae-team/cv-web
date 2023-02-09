import { gql } from '@apollo/client'

export const LANGUAGES = gql`
  query Languages {
    languages {
      id
      iso2
      name
    }
  }
`

export const CREATE_LANGUAGE = gql`
  mutation CreateLanguage($language: LanguageInput!) {
    createLanguage(language: $language) {
      id
      iso2
      name
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
