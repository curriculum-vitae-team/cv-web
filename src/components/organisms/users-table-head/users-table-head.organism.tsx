import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { TableCell, TableRow } from '@mui/material'
import { createSortLabel } from '@atoms/sort-label'
import { IUser } from 'interfaces/user.interface'

const UsersTableHead = () => {
  const { t } = useTranslation()

  return (
    <TableRow>
      <TableCell />
      <TableCell>{createSortLabel<IUser>('profile.first_name', t('First Name'))}</TableCell>
      <TableCell>{createSortLabel<IUser>('profile.last_name', t('Last Name'))}</TableCell>
      <TableCell>{createSortLabel<IUser>('email', t('Email'))}</TableCell>
      <TableCell>{createSortLabel<IUser>('department_name', t('Department'))}</TableCell>
      <TableCell>{createSortLabel<IUser>('position_name', t('Position'))}</TableCell>
      <TableCell />
    </TableRow>
  )
}

export default memo(UsersTableHead)
