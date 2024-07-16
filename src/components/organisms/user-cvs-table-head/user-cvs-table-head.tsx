import { TableCell, TableRow } from '@mui/material'
import type { Cv } from 'cv-graphql'
import { useTranslation } from 'react-i18next'
import { createSortLabel } from '@atoms/sort-label'
import * as Styled from './user-cvs-table-head.styles'

export const UserCvsTableHead = () => {
  const { t } = useTranslation()

  return (
    <TableRow>
      <TableCell>{createSortLabel<Cv>('name', t('Name'))}</TableCell>
      <Styled.Description>{t('Description')}</Styled.Description>
      <TableCell />
    </TableRow>
  )
}
