import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { TableCell } from '@mui/material'
import { User } from 'cv-graphql'
import { createSortLabel } from '@atoms/sort-label'
import * as Styled from './users-table-head.styles'

const UsersTableHead = () => {
  const { t } = useTranslation()

  return (
    <Styled.Row>
      <TableCell />
      <TableCell>{createSortLabel<User>('profile.first_name', t('First Name'))}</TableCell>
      <TableCell>{createSortLabel<User>('profile.last_name', t('Last Name'))}</TableCell>
      <TableCell>{createSortLabel<User>('email', t('Email'))}</TableCell>
      <TableCell>{createSortLabel<User>('department_name', t('Department'))}</TableCell>
      <TableCell>{createSortLabel<User>('position_name', t('Position'))}</TableCell>
      <TableCell />
    </Styled.Row>
  )
}

export default memo(UsersTableHead)
