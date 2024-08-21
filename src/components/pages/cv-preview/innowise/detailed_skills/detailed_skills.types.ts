import { CvProject, SkillMastery } from 'cv-graphql'

export type DetailedSkillsProps = {
  projects: CvProject[]
  skillCategories: Record<string, SkillMastery[]>
}

type SkillUsage = { firstUsed: number; lastUsed: number }

export type UsedSkills = Record<string, SkillUsage>

export type SkillsWithYears = Record<string, (SkillMastery & SkillUsage)[]>
