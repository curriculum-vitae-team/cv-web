import { useTranslation } from 'react-i18next'
import { TableCell, TableRow } from '@mui/material'
import { createSortLabel } from '@atoms/sort-label'
import type { PositionWithUsers } from '@pages/positions/position.types'

export const PositionsTableHead = () => {
  const { t } = useTranslation()

  return (
    <TableRow>
      <TableCell>{createSortLabel<PositionWithUsers>('name', t('Name'))}</TableCell>
      <TableCell>{createSortLabel<PositionWithUsers>('users', t('Users'))}</TableCell>
      <TableCell />
    </TableRow>
  )
}
