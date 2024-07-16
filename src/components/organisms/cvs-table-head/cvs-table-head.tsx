import { useTranslation } from 'react-i18next'
import { TableCell, TableRow } from '@mui/material'
import { Cv } from 'cv-graphql'
import { createSortLabel } from '@atoms/sort-label'
import * as Styled from './cvs-table-head.styles'

export const CvsTableHead = () => {
  const { t } = useTranslation()

  return (
    <TableRow>
      <TableCell>{createSortLabel<Cv>('name', t('Name'))}</TableCell>
      <Styled.Description>{t('Description')}</Styled.Description>
      <Styled.User>{createSortLabel<Cv>('user.email', t('Employee'))}</Styled.User>
      <TableCell />
    </TableRow>
  )
}

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
