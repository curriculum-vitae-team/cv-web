import { Add } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'
import { Typography } from '@mui/material'
import * as Styled from './new-language-card.styles'
import { NewLanguageCardProps } from './new-language-card.types'

export const NewLanguageCard = ({ onClick }: NewLanguageCardProps) => {
  const { t } = useTranslation()

  return (
    <Styled.Card color="secondary" onClick={onClick}>
      <Add /> <Typography>{t('Add language')}</Typography>
    </Styled.Card>
  )
}
