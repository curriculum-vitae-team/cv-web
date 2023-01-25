import { memo } from 'react'
import { useMutation, useReactiveVar } from '@apollo/client'
import { TableRow, TableCell, Avatar, MenuItem } from '@mui/material'
import { IUser } from '../../../interfaces/user.interface'
import { TableRowProps } from '../../templates/table/table.types'
import { ActionsMenu } from '../../atoms/actions-menu'
import { DELETE_USER } from '../../../graphql/users'
import { UserRole } from '../../../constants/user-role.constants'
import { authService } from '../../../graphql/auth/auth.service'

const UsersTableRow = ({ item }: TableRowProps<IUser>) => {
  const user = useReactiveVar(authService.user$)
  const [deleteUser] = useMutation(DELETE_USER, {
    update(cache) {
      const id = cache.identify({ id: item.id, __typename: 'User' })
      cache.evict({ id })
      cache.gc()
    }
  })

  const handleDelete = () => {
    deleteUser({ variables: { id: item.id } })
  }

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
        <ActionsMenu>
          <MenuItem disabled={user?.role === UserRole.Employee} onClick={handleDelete}>
            Delete User
          </MenuItem>
        </ActionsMenu>
      </TableCell>
    </TableRow>
  )
}

export default memo(UsersTableRow)
