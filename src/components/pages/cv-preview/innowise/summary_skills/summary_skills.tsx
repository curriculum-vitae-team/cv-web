import { SkillsCategory } from '../skills_category'
import { SummarySkillsProps } from './summary_skills.types'

export const SummarySkills = ({ skillCategories }: SummarySkillsProps) => {
  return (
    <>
      {Object.entries(skillCategories)
        .filter(([category]) => category !== 'Other')
        .map(([category, skills]) => (
          <SkillsCategory key={category} category={category} skills={skills} />
        ))}
    </>
  )
}
