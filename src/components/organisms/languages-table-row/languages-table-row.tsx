import { MenuItem, TableCell, TableRow } from '@mui/material'
import { ActionsMenu } from '../../atoms/actions-menu'
import { TableRowProps } from '../../templates/table/table.types'
import { ILanguage } from '../../../interfaces/language.interface'

export const LanguagesTableRow = ({ item }: TableRowProps<ILanguage>) => {
  return (
    <TableRow>
      <TableCell>{item.name}</TableCell>
      <TableCell>{item.native_name}</TableCell>
      <TableCell>{item.iso2}</TableCell>
      <TableCell>
        <ActionsMenu>
          <MenuItem disabled>Details</MenuItem>
          <MenuItem disabled>Delete Language</MenuItem>
        </ActionsMenu>
      </TableCell>
    </TableRow>
  )
}
