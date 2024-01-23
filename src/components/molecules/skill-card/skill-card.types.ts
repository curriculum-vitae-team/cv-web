import { SkillMastery } from 'cv-graphql'

export type SkillCardProps = {
  skill: SkillMastery
  onUpdate(skill: SkillMastery): void
}
