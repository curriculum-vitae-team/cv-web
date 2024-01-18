import { memo } from 'react'
import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { ProfileSkill, CvSkill } from '@molecules/skill'
import { SkillsGroupProps } from './skills-group.types'
import * as Styled from './skills-group.styles'

const ProfileSkillsGroupComponent = ({ category, skills }: SkillsGroupProps) => {
  const { t } = useTranslation()

  return (
    <Styled.Group>
      <Typography>{t(category)}</Typography>
      <Styled.Skills>
        {skills.map((skill) => (
          <ProfileSkill key={skill.name} skill={skill} />
        ))}
      </Styled.Skills>
    </Styled.Group>
  )
}

export const ProfileSkillsGroup = memo(ProfileSkillsGroupComponent)

const CvSkillsGroupComponent = ({ category, skills }: SkillsGroupProps) => {
  const { t } = useTranslation()

  return (
    <Styled.Group>
      <Typography>{t(category)}</Typography>
      <Styled.Skills>
        {skills.map((skill) => (
          <CvSkill key={skill.name} skill={skill} />
        ))}
      </Styled.Skills>
    </Styled.Group>
  )
}

export const CvSkillsGroup = memo(CvSkillsGroupComponent)
