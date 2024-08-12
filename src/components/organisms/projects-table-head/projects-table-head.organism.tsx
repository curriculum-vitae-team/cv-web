import { useTranslation } from 'react-i18next'
import { TableCell } from '@mui/material'
import { Project } from 'cv-graphql'
import { createSortLabel } from '@atoms/sort-label'
import * as Styled from './projects-table-head.styles'

export const ProjectsTableHead = () => {
  const { t } = useTranslation()

  return (
    <Styled.Row>
      <TableCell>{createSortLabel<Project>('name', t('Name'))}</TableCell>
      <TableCell>{createSortLabel<Project>('domain', t('Domain'))}</TableCell>
      <TableCell>{createSortLabel<Project>('start_date', t('Start Date'))}</TableCell>
      <TableCell>{createSortLabel<Project>('end_date', t('End Date'))}</TableCell>
      <TableCell />
    </Styled.Row>
  )
}
