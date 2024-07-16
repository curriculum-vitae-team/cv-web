import { useTranslation } from 'react-i18next'
import { TableCell, TableRow } from '@mui/material'
import { createSortLabel } from '@atoms/sort-label'
import type { DepartmentWithUsers } from '@pages/departments/departments.types'

export const DepartmentsTableHead = () => {
  const { t } = useTranslation()

  return (
    <TableRow>
      <TableCell>{createSortLabel<DepartmentWithUsers>('name', t('Name'))}</TableCell>
      <TableCell>{createSortLabel<DepartmentWithUsers>('users', t('Users'))}</TableCell>
      <TableCell />
    </TableRow>
  )
}
