import { memo } from 'react'
import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { SkillCard } from '@molecules/skill-card'
import { SkillsGroupProps } from './skills-group.types'
import * as Styled from './skills-group.styles'

const SkillsGroup = ({ category, skills, onUpdate }: SkillsGroupProps) => {
  const { t } = useTranslation()

  return (
    <Styled.Group>
      <Typography>{t(category)}</Typography>
      <Styled.Skills>
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} onUpdate={onUpdate} />
        ))}
      </Styled.Skills>
    </Styled.Group>
  )
}

export default memo(SkillsGroup)
