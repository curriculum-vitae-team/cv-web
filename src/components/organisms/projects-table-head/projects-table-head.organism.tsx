import { useTranslation } from 'react-i18next'
import { TableCell, TableRow } from '@mui/material'
import { createSortLabel } from '@atoms/sort-label'
import { IProject } from 'interfaces/project.interface'

export const ProjectsTableHead = () => {
  const { t } = useTranslation()

  return (
    <TableRow>
      <TableCell>{createSortLabel<IProject>('name', t('Name'))}</TableCell>
      <TableCell>{createSortLabel<IProject>('internal_name', t('Internal Name'))}</TableCell>
      <TableCell>{createSortLabel<IProject>('domain', t('Domain'))}</TableCell>
      <TableCell>{createSortLabel<IProject>('start_date', t('Start Date'))}</TableCell>
      <TableCell>{createSortLabel<IProject>('end_date', t('End Date'))}</TableCell>
      <TableCell>{createSortLabel<IProject>('team_size', t('Team Size'))}</TableCell>
      <TableCell />
    </TableRow>
  )
}
