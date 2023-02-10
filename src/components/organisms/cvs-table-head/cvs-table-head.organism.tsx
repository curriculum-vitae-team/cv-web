import { TableCell, TableRow } from '@mui/material'
import { ICV } from '@interfaces/cv.interface'
import { createSortLabel } from '@atoms/sort-label'

export const CVsTableHead = () => {
  return (
    <TableRow>
      <TableCell>Template</TableCell>
      <TableCell>{createSortLabel<ICV>('name', 'Name')}</TableCell>
      <TableCell>Description</TableCell>
      <TableCell>{createSortLabel<ICV>('user.email', 'Employee')}</TableCell>
      <TableCell />
    </TableRow>
  )
}
