import { memo } from 'react'
import { Typography } from '@mui/material'
import { ProfileSkill } from '@molecules/profile-skill'
import { ProfileSkillsGroupProps } from './profile-skills-group.types'
import * as Styled from './profile-skills-group.styles'

const ProfileSkillsGroup = ({ category, skills }: ProfileSkillsGroupProps) => {
  return (
    <div>
      <Typography>{category}</Typography>
      <Styled.Skills>
        {skills.map((skill) => (
          <ProfileSkill key={skill.name} skill={skill} />
        ))}
      </Styled.Skills>
    </div>
  )
}

export default memo(ProfileSkillsGroup)
