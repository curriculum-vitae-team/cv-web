import { SkillMastery } from 'constants/skill-mastery.constants'

export interface ISkill {
  id: string
  name: string
}

export interface ISkillMastery {
  skill_name: string
  mastery: SkillMastery
}
