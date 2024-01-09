import { gql } from '@apollo/client'

export const SKILLS = gql`
  query Skills {
    skills {
      id
      name
      category
    }
  }
`

export const CREATE_SKILL = gql`
  mutation CreateSkill($skill: CreateSkillInput!) {
    createSkill(skill: $skill) {
      id
      name
      category
    }
  }
`

export const UPDATE_SKILL = gql`
  mutation UpdateSkill($skill: UpdateSkillInput!) {
    updateSkill(skill: $skill) {
      id
      name
      category
    }
  }
`

export const DELETE_SKILL = gql`
  mutation DeleteSkill($skill: DeleteSkillInput!) {
    deleteSkill(skill: $skill) {
      affected
    }
  }
`
