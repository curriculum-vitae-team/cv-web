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

export const CV = gql`
  query CV($cvId: ID!) {
    cv(id: $cvId) {
      id
      name
      description
      user {
        id
        profile {
          full_name
        }
        position_name
      }
      projects {
        id
        name
      }
      skills {
        skill_name
        mastery
      }
      languages {
        language_name
        proficiency
      }
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

export const UPDATE_CV = gql`
  mutation UpdateCv($id: ID!, $cv: CvInput!) {
    updateCv(id: $id, cv: $cv) {
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

export const EXPORT_PDF = gql`
  mutation ExportPdf($pdf: ExportPdfInput!) {
    exportPdf(pdf: $pdf)
  }
`
