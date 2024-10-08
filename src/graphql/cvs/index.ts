import { gql } from '@apollo/client'

export const CVS = gql`
  query Cvs {
    cvs {
      id
      name
      education
      description
      user {
        id
        email
      }
    }
  }
`

export const CV = gql`
  query Cv($cvId: ID!) {
    cv(cvId: $cvId) {
      id
      name
      education
      description
      user {
        id
        profile {
          full_name
        }
        position_name
      }
      languages {
        name
        proficiency
      }
    }
  }
`

export const CREATE_CV = gql`
  mutation CreateCv($cv: CreateCvInput!) {
    createCv(cv: $cv) {
      id
      name
      education
      description
      user {
        id
        email
      }
    }
  }
`

export const UPDATE_CV = gql`
  mutation UpdateCv($cv: UpdateCvInput!) {
    updateCv(cv: $cv) {
      id
      name
      education
      description
      user {
        id
        email
      }
    }
  }
`

export const DELETE_CV = gql`
  mutation DeleteCv($cv: DeleteCvInput!) {
    deleteCv(cv: $cv) {
      affected
    }
  }
`

export const CV_SKILLS = gql`
  query CvSkills($cvId: ID!) {
    cv(cvId: $cvId) {
      id
      user {
        id
      }
      skills {
        name
        categoryId
        mastery
      }
    }
  }
`

export const ADD_CV_SKILL = gql`
  mutation AddCvSkill($skill: AddCvSkillInput!) {
    addCvSkill(skill: $skill) {
      id
      skills {
        name
        categoryId
        mastery
      }
    }
  }
`

export const UPDATE_CV_SKILL = gql`
  mutation UpdateCvSkill($skill: UpdateCvSkillInput!) {
    updateCvSkill(skill: $skill) {
      id
      skills {
        name
        categoryId
        mastery
      }
    }
  }
`

export const DELETE_CV_SKILL = gql`
  mutation DeleteCvSkill($skill: DeleteCvSkillInput!) {
    deleteCvSkill(skill: $skill) {
      id
      skills {
        name
        categoryId
        mastery
      }
    }
  }
`

const CvProject = `
  id
  project {
    id
  }
  name
  domain
  start_date
  end_date
  description
  environment
  roles
  responsibilities
`

export const CV_PROJECTS = gql`
  query CvProjects($cvId: ID!) {
    cv(cvId: $cvId) {
      id
      projects {
        ${CvProject}
      }
    }
  }
`

export const ADD_CV_PROJECT = gql`
  mutation AddCvProject($project: AddCvProjectInput!) {
    addCvProject(project: $project) {
      id
      projects {
        ${CvProject}
      }
    }
  }
`

export const UPDATE_CV_PROJECT = gql`
  mutation UpdateCvProject($project: UpdateCvProjectInput!) {
    updateCvProject(project: $project) {
      id
      projects {
        ${CvProject}
      }
    }
  }
`

export const REMOVE_CV_PROJECT = gql`
  mutation RemoveCvProject($project: RemoveCvProjectInput!) {
    removeCvProject(project: $project) {
      id
      projects {
        ${CvProject}
      }
    }
  }
`

export const EXPORT_PDF = gql`
  mutation ExportPdf($pdf: ExportPdfInput!) {
    exportPdf(pdf: $pdf)
  }
`
