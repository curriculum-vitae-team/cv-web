import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { TableCell, TableRow } from '@mui/material'
import { createSortLabel } from '@atoms/sort-label'
import { IUser } from 'interfaces/user.interface'
import * as Styled from './users-table-head.styles'

const UsersTableHead = () => {
  const { t } = useTranslation()

  return (
    <TableRow>
      <TableCell />
      <TableCell>{createSortLabel<IUser>('profile.first_name', t('First Name'))}</TableCell>
      <Styled.LastName>
        {createSortLabel<IUser>('profile.last_name', t('Last Name'))}
      </Styled.LastName>
      <Styled.Email>{createSortLabel<IUser>('email', t('Email'))}</Styled.Email>
      <Styled.Department>
        {createSortLabel<IUser>('department_name', t('Department'))}
      </Styled.Department>
      <TableCell>{createSortLabel<IUser>('position_name', t('Position'))}</TableCell>
      <TableCell />
    </TableRow>
  )
}

export default memo(UsersTableHead)
