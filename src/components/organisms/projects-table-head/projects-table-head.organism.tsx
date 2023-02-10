import { TableCell, TableRow } from '@mui/material'
import { IProject } from '@interfaces/project.interface'
import { createSortLabel } from '@atoms/sort-label'

export const ProjectsTableHead = () => {
  return (
    <TableRow>
      <TableCell>{createSortLabel<IProject>('name', 'Name')}</TableCell>
      <TableCell>{createSortLabel<IProject>('internal_name', 'Internal Name')}</TableCell>
      <TableCell>{createSortLabel<IProject>('domain', 'Domain')}</TableCell>
      <TableCell>{createSortLabel<IProject>('start_date', 'Start Date')}</TableCell>
      <TableCell>{createSortLabel<IProject>('end_date', 'End Date')}</TableCell>
      <TableCell>{createSortLabel<IProject>('team_size', 'Team Size')}</TableCell>
      <TableCell />
    </TableRow>
  )
}
