import { Checkbox, MenuItem, TableCell, TableRow } from '@mui/material'
import { ICV } from '@interfaces/cv.interface'
import { TableRowProps } from '@templates/table/table.types'
import { ActionsMenu } from '@atoms/actions-menu'

export const CVsTableRow = ({ item }: TableRowProps<ICV>) => {
  return (
    <TableRow>
      <TableCell>
        <Checkbox checked={item.is_template} readOnly />
      </TableCell>
      <TableCell
        sx={{
          maxWidth: 120,
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden'
        }}
      >
        {item.name}
      </TableCell>
      <TableCell>{item.description}</TableCell>
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
