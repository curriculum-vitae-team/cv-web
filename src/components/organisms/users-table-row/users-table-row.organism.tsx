import { memo } from 'react'
import { TableRow, TableCell, Avatar, IconButton } from '@mui/material'
import { MoreVert } from '@mui/icons-material'
import { IUser } from '../../../interfaces/user.interface'
import { TableRowProps } from '../../templates/table/table.types'

const UsersTableRow = ({ item }: TableRowProps<IUser>) => {
  return (
    <TableRow>
      <TableCell>
        <Avatar src={item.profile.avatar}>{item.profile.full_name?.[0] || item.email[0]}</Avatar>
      </TableCell>
      <TableCell>{item.profile.first_name}</TableCell>
      <TableCell>{item.profile.last_name}</TableCell>
      <TableCell>{item.email}</TableCell>
      <TableCell>{item.department_name}</TableCell>
      <TableCell>{item.position_name}</TableCell>
      <TableCell>
        <IconButton>
          <MoreVert />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}

export default memo(UsersTableRow)
