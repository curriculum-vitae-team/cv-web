import { Skill } from 'cv-graphql'

export type SkillsResult = {
  skills: Skill[]
}

export type CreateSkillResult = {
  createSkill: Skill
}

export type UpdateSkillResult = {
  updateSkill: Skill
}
