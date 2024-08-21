import { Skill, SkillCategory } from 'cv-graphql'

export type SkillsResult = {
  skills: Skill[]
}

export type SkillTypesResult = {
  skillTypes: string[]
}

export type SkillCategoriesResult = {
  skillCategories: SkillCategory[]
}

export type CreateSkillResult = {
  createSkill: Skill
}

export type UpdateSkillResult = {
  updateSkill: Skill
}
