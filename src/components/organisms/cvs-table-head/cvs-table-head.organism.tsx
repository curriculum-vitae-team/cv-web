import { useTranslation } from 'react-i18next'
import { TableCell, TableRow } from '@mui/material'
import { Cv } from 'cv-graphql'
import { createSortLabel } from '@atoms/sort-label'

export const CVsTableHead = () => {
  const { t } = useTranslation()

  return (
    <TableRow>
      <TableCell>{t('Template')}</TableCell>
      <TableCell>{createSortLabel<Cv>('name', t('Name'))}</TableCell>
      <TableCell>{t('Description')}</TableCell>
      <TableCell>{createSortLabel<Cv>('user.email', t('Employee'))}</TableCell>
      <TableCell />
    </TableRow>
  )
}
