import { useTranslation } from 'react-i18next'
import { TableCell, TableRow } from '@mui/material'
import { Department } from 'cv-graphql'
import { createSortLabel } from '@atoms/sort-label'

export const DepartmentsTableHead = () => {
  const { t } = useTranslation()

  return (
    <TableRow>
      <TableCell>{createSortLabel<Department>('name', t('Name'))}</TableCell>
      <TableCell />
    </TableRow>
  )
}
