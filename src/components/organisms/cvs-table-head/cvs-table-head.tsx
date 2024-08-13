import { useTranslation } from 'react-i18next'
import { TableCell, TableRow } from '@mui/material'
import type { Cv } from 'cv-graphql'
import { createSortLabel } from '@atoms/sort-label'
import * as Styled from './cvs-table-head.styles'

export const CvsTableHead = () => {
  const { t } = useTranslation()

  return (
    <TableRow>
      <TableCell>{createSortLabel<Cv>('name', t('Name'))}</TableCell>
      <Styled.Education>{createSortLabel<Cv>('education', t('Education'))}</Styled.Education>
      <Styled.User>{createSortLabel<Cv>('user.email', t('Employee'))}</Styled.User>
      <TableCell />
    </TableRow>
  )
}
