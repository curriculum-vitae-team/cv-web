import { TableCell, TableRow } from '@mui/material'
import { createSortLabel } from '../../atoms/sort-label'
import { ILanguage } from '../../../interfaces/language.interface'

export const LanguagesTableHead = () => {
  return (
    <TableRow>
      <TableCell>{createSortLabel<ILanguage>('name', 'Name')}</TableCell>
      <TableCell>{createSortLabel<ILanguage>('native_name', 'Native Name')}</TableCell>
      <TableCell>{createSortLabel<ILanguage>('iso2', 'ISO2')}</TableCell>
      <TableCell />
    </TableRow>
  )
}
