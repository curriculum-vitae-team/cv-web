import { Add } from '@mui/icons-material'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Typography } from '@mui/material'
import * as Styled from './new-skill-card.styles'
import { NewSkillCardProps } from './new-skill-card.types'

const NewSkillCard = ({ onClick }: NewSkillCardProps) => {
  const { t } = useTranslation()

  return (
    <Styled.Card color="secondary" onClick={onClick}>
      <Add /> <Typography>{t('Add skill')}</Typography>
    </Styled.Card>
  )
}

export default memo(NewSkillCard)
