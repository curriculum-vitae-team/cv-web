import { memo } from 'react'
import { Typography } from '@mui/material'
import { CvSkill } from '@molecules/cv-skill'
import { CvSkillsGroupProps } from './cv-skills-group.types'
import * as Styled from './cv-skills-group.styles'

const CvSkillsGroup = ({ category, skills }: CvSkillsGroupProps) => {
  return (
    <div>
      <Typography>{category}</Typography>
      <Styled.Skills>
        {skills.map((skill) => (
          <CvSkill key={skill.name} skill={skill} />
        ))}
      </Styled.Skills>
    </div>
  )
}

export default memo(CvSkillsGroup)
