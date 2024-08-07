import { Typography, useTheme } from '@mui/material'
import { MouseEvent } from 'react'
import { bulkDeletionService } from '@features/bulk-deletion'
import { getProficiencyColor } from 'helpers/get-proficiency-color'
import { useBulkDeletion } from 'hooks/use_bulk_deletion'
import * as Styled from './language-card.styles'
import { LanguageCardProps } from './language-card.types'

export const LanguageCard = ({ language, disabled, onClick }: LanguageCardProps) => {
  const { isActive$, selectedIds$ } = useBulkDeletion()
  const isSelected = selectedIds$.includes(language.name)
  const color = getProficiencyColor(language.proficiency)
  const theme = useTheme()

  const handleClick = () => {
    if (isActive$) {
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
      disabled={disabled}
      onClick={handleClick}
      onContextMenu={handleContextMenu}
    >
      <Typography color={theme.palette[color].main}>{language.proficiency}</Typography>
      <Typography>{language.name}</Typography>
    </Styled.Card>
  )
}
