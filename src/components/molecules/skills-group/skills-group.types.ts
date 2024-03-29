import { SkillMastery } from 'cv-graphql'

export type SkillsGroupProps = {
  category: string
  skills: SkillMastery[]
  onUpdate(skill: SkillMastery): void
}
