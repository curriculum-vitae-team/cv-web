import { SkillMastery } from 'cv-graphql'

export type SkillsGroupProps = {
  category: string
  skills: SkillMastery[]
  disabled?: boolean
  onUpdate(skill: SkillMastery): void
}
