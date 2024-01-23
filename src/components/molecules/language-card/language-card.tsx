import { Typography, useTheme } from '@mui/material'
import { useReactiveVar } from '@apollo/client'
import { MouseEvent } from 'react'
import { bulkDeletionService } from '@features/bulk-deletion'
import { getProficiencyColor } from 'helpers/get-proficiency-color'
import * as Styled from './language-card.styles'
import { LanguageCardProps } from './language-card.types'

export const LanguageCard = ({ language, onClick }: LanguageCardProps) => {
  const entityIds$ = useReactiveVar(bulkDeletionService.entityIds$)
  const isSelected = entityIds$.includes(language.name)
  const color = getProficiencyColor(language.proficiency)
  const theme = useTheme()

  const handleClick = () => {
    if (entityIds$.length) {
      bulkDeletionService.setEntityId(language.name)
      return
    }
    onClick(language)
  }

  const handleContextMenu = (event: MouseEvent) => {
    event.preventDefault()
    bulkDeletionService.setEntityId(language.name)
  }

  return (
    <Styled.Card
      color="secondary"
      isSelected={isSelected}
      onClick={handleClick}
      onContextMenu={handleContextMenu}
    >
      <Typography color={theme.palette[color].main}>{language.proficiency}</Typography>
      <Typography>{language.name}</Typography>
    </Styled.Card>
  )
}
