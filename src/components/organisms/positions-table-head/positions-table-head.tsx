import { useTranslation } from 'react-i18next'
import { TableCell, TableRow } from '@mui/material'
import { Position } from 'cv-graphql'
import { createSortLabel } from '@atoms/sort-label'

export const PositionsTableHead = () => {
  const { t } = useTranslation()

  return (
    <TableRow>
      <TableCell>{createSortLabel<Position>('name', t('Name'))}</TableCell>
      <TableCell />
    </TableRow>
  )
}
