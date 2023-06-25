import { ISkill } from 'interfaces/skill.interface'

export type SkillsResult = {
  skills: ISkill[]
}

export type CreateSkillResult = {
  createSkill: ISkill
}

export type UpdateSkillResult = {
  updateSkill: ISkill
}
