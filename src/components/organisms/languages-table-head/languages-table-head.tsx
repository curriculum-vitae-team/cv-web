import { useTranslation } from 'react-i18next'
import { TableCell, TableRow } from '@mui/material'
import { Language } from 'cv-graphql'
import { createSortLabel } from '@atoms/sort-label'

export const LanguagesTableHead = () => {
  const { t } = useTranslation()

  return (
    <TableRow>
      <TableCell>{createSortLabel<Language>('name', t('Name'))}</TableCell>
      <TableCell>{createSortLabel<Language>('native_name', t('Native Name'))}</TableCell>
      <TableCell>{createSortLabel<Language>('iso2', 'ISO2')}</TableCell>
      <TableCell />
    </TableRow>
  )
}
