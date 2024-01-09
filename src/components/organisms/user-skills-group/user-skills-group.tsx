import { memo } from 'react'
import { Typography } from '@mui/material'
import { Skill } from '@items/skill'
import { UserSkillsGroupProps } from './user-skills-group.types'
import * as Styled from './user-skills-group.styles'

const UserSkillsGroup = ({ category, skills }: UserSkillsGroupProps) => {
  return (
    <div>
      <Typography>{category}</Typography>
      <Styled.Skills>
        {skills.map((skill) => (
          <Skill key={skill.name} skill={skill} />
        ))}
      </Styled.Skills>
    </div>
  )
}

export default memo(UserSkillsGroup)
