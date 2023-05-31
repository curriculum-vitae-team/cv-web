import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useMutation } from '@apollo/client'
import { TableRow, TableCell, Avatar, MenuItem, Typography } from '@mui/material'
import { IUser } from '@interfaces/user.interface'
import { TableRowProps } from '@templates/table/table.types'
import { ActionsMenu } from '@atoms/actions-menu'
import { DELETE_USER } from '@graphql/users'
import { useConfirmDialog } from '@dialogs/confirm'
import { useUser } from '@hooks/use-user.hook'

const UsersTableRow = ({ item }: TableRowProps<IUser>) => {
  const navigate = useNavigate()
  const { isAdmin } = useUser()
  const { t } = useTranslation()
  const [deleteUser] = useMutation(DELETE_USER, {
    update(cache) {
      const id = cache.identify({ id: item.id, __typename: 'User' })
      cache.evict({ id })
      cache.gc()
    }
  })
  const [openConfirmDialog] = useConfirmDialog()

  const handleProfile = () => {
    navigate(`/employees/${item.id}/profile`)
  }

  const handleDelete = () => {
    openConfirmDialog({
      dialogTitle: 'Delete user',
      dialogContent: (
        <Typography>
          {t('Are you sure you want to delete user')} <b>{item.profile.full_name || item.email}</b>?
        </Typography>
      ),
      confirmCallback: () => deleteUser({ variables: { id: item.id } })
    })
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
          <MenuItem onClick={handleProfile}>{t('Profile')}</MenuItem>
          <MenuItem disabled={!isAdmin} onClick={handleDelete}>
            {t('Delete user')}
          </MenuItem>
        </ActionsMenu>
      </TableCell>
    </TableRow>
  )
}

export default memo(UsersTableRow)
