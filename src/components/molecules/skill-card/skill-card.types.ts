import { SkillMastery } from 'cv-graphql'

export type SkillCardProps = {
  skill: SkillMastery
  disabled?: boolean
  onUpdate(skill: SkillMastery): void
}
