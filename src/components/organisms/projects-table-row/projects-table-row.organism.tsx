import { MenuItem, TableCell, TableRow } from '@mui/material'
import { TableRowProps } from '../../templates/table/table.types'
import { IProject } from '../../../interfaces/project.interface'
import { ActionsMenu } from '../../atoms/actions-menu'

export const ProjectsTableRow = ({ item }: TableRowProps<IProject>) => {
  return (
    <TableRow>
      <TableCell>{item.name}</TableCell>
      <TableCell>{item.internal_name}</TableCell>
      <TableCell>{item.domain}</TableCell>
      <TableCell>{item.start_date}</TableCell>
      <TableCell>{item.end_date || 'Till now'}</TableCell>
      <TableCell>{item.team_size}</TableCell>
      <TableCell>
        <ActionsMenu>
          <MenuItem disabled>Project</MenuItem>
          <MenuItem disabled>Delete Project</MenuItem>
        </ActionsMenu>
      </TableCell>
    </TableRow>
  )
}
