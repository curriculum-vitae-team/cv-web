import { useTranslation } from 'react-i18next'
import { TableCell } from '@mui/material'
import { Cv } from 'cv-graphql'
import { createSortLabel } from '@atoms/sort-label'
import * as Styled from './cvs-table-head.styles'

export const CVsTableHead = () => {
  const { t } = useTranslation()

  return (
    <Styled.Row>
      <TableCell>{createSortLabel<Cv>('name', t('Name'))}</TableCell>
      <TableCell>{t('Description')}</TableCell>
      <TableCell>{createSortLabel<Cv>('user.email', t('Employee'))}</TableCell>
      <TableCell />
    </Styled.Row>
  )
}
