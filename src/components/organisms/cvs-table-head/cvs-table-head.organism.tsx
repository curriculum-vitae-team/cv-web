import { useTranslation } from 'react-i18next'
import { TableCell, TableRow } from '@mui/material'
import { ICV } from '@interfaces/cv.interface'
import { createSortLabel } from '@atoms/sort-label'

export const CVsTableHead = () => {
  const { t } = useTranslation()

  return (
    <TableRow>
      <TableCell>{t('Template')}</TableCell>
      <TableCell>{createSortLabel<ICV>('name', t('Name'))}</TableCell>
      <TableCell>{t('Description')}</TableCell>
      <TableCell>{createSortLabel<ICV>('user.email', t('Employee'))}</TableCell>
      <TableCell />
    </TableRow>
  )
}
