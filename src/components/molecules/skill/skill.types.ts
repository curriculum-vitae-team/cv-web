import { SkillMastery } from 'cv-graphql'

export type SkillCardProps = {
  skill: SkillMastery
  onClick?(): void
}

export type SkillProps = {
  skill: SkillMastery
}
