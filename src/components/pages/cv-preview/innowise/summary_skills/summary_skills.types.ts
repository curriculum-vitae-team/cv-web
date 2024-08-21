import type { SkillMastery } from 'cv-graphql'

export type SummarySkillsProps = {
  skillCategories: Record<string, SkillMastery[]>
}
