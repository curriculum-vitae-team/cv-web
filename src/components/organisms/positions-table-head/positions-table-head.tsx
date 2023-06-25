import { useTranslation } from 'react-i18next'
import { TableCell, TableRow } from '@mui/material'
import { createSortLabel } from '@atoms/sort-label'
import { ISkill } from '@interfaces/skill.interface'

export const PositionsTableHead = () => {
  const { t } = useTranslation()

  return (
    <TableRow>
      <TableCell>{createSortLabel<ISkill>('name', t('Name'))}</TableCell>
      <TableCell />
    </TableRow>
  )
}
