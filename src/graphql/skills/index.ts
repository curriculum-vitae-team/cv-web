import { gql } from '@apollo/client'

export const SKILLS = gql`
  query Skills {
    skills {
      id
      name
      category {
        id
        order
      }
      category_name
      category_parent_name
    }
  }
`

export const SKILL_CATEGORIES = gql`
  query SkillCategories {
    skillCategories {
      id
      name
      parent {
        id
        name
      }
    }
  }
`

export const CREATE_SKILL = gql`
  mutation CreateSkill($skill: CreateSkillInput!) {
    createSkill(skill: $skill) {
      id
      name
      category_name
    }
  }
`

export const UPDATE_SKILL = gql`
  mutation UpdateSkill($skill: UpdateSkillInput!) {
    updateSkill(skill: $skill) {
      id
      name
      category_name
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
