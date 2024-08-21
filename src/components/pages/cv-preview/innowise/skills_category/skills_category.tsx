import { useTranslation } from 'react-i18next'
import { Typography } from '@mui/material'
import * as Styled from './skills_category.styles'
import { SkillsCategoryProps } from './skills_category.types'

export const SkillsCategory = ({ category, skills }: SkillsCategoryProps) => {
  const { t } = useTranslation()

  if (!skills.length) {
    return null
  }

  return (
    <>
      <Styled.Title>{t(category)}</Styled.Title>
      {/* <span>{[...new Set(skills.map(({ category }) => category))].join(', ')}</span> */}
      <Typography>{skills.map((skill) => skill.name).join(', ')}.</Typography>
    </>
  )
}
