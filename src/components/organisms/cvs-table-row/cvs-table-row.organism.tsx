import { Checkbox, MenuItem, TableCell, TableRow } from '@mui/material'
import { TableRowProps } from '../../templates/table/table.types'
import { ICV } from '../../../interfaces/cv.interface'
import { ActionsMenu } from '../../atoms/actions-menu'

export const CVsTableRow = ({ item }: TableRowProps<ICV>) => {
  return (
    <TableRow>
      <TableCell>{item.name}</TableCell>
      <TableCell>{item.description}</TableCell>
      <TableCell>
        <Checkbox checked={item.is_template} readOnly />
      </TableCell>
      <TableCell>{item.user?.email}</TableCell>
      <TableCell>
        <ActionsMenu>
          <MenuItem disabled>CV</MenuItem>
          <MenuItem disabled>Delete CV</MenuItem>
        </ActionsMenu>
      </TableCell>
    </TableRow>
  )
}
