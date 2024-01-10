import { memo } from 'react'
import { Typography } from '@mui/material'
import { ProfileSkill, CvSkill } from '@molecules/skill'
import { SkillsGroupProps } from './skills-group.types'
import * as Styled from './skills-group.styles'

const ProfileSkillsGroupComponent = ({ category, skills }: SkillsGroupProps) => {
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

export const ProfileSkillsGroup = memo(ProfileSkillsGroupComponent)

const CvSkillsGroupComponent = ({ category, skills }: SkillsGroupProps) => {
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

export const CvSkillsGroup = memo(CvSkillsGroupComponent)
