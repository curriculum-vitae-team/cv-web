import { memo } from 'react'
import { generatePath, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { TableCell, Avatar, MenuItem, Typography, IconButton } from '@mui/material'
import { User } from 'cv-graphql'
import { KeyboardArrowRight } from '@mui/icons-material'
import { TableRowProps } from '@templates/table/table.types'
import { ActionsMenu } from '@atoms/actions-menu'
import { useUserDialog } from '@dialogs/user'
import { useConfirmDialog } from '@dialogs/confirm'
import { useAuth } from 'hooks/use-auth'
import { useUserDelete } from 'hooks/use-users'

import { routes } from 'constants/routes'
import * as Styled from './users-table-row.styles'

const UsersTableRow = ({ item }: TableRowProps<User>) => {
  const navigate = useNavigate()
  const { isAdmin, userId } = useAuth()
  const isSelf = item.id === userId
  const { t } = useTranslation()
  const [openUserDialog] = useUserDialog()
  const [deleteUser] = useUserDelete(item.id)
  const [openConfirmDialog] = useConfirmDialog()

  const handleProfile = () => {
    navigate(generatePath(routes.users.profile, { userId: item.id }))
  }

  const handleUpdate = () => {
    openUserDialog({ item, title: 'Update user', saveText: 'Update' })
  }

  const handleDelete = () => {
    openConfirmDialog({
      dialogTitle: 'Delete user',
      dialogContent: (
        <Typography>
          {t('Are you sure you want to delete user')} <b>{item.profile.full_name || item.email}</b>?
        </Typography>
      ),
      confirmCallback: () => deleteUser()
    })
  }

  // const visitProfile = { sx: { cursor: 'pointer' }, onClick: handleProfile }

  return (
    <Styled.Row>
      <TableCell>
        <Avatar src={item.profile.avatar || undefined}>
          {item.profile.full_name?.[0] || item.email[0]}
        </Avatar>
      </TableCell>
      <TableCell>{item.profile.first_name}</TableCell>
      <TableCell>{item.profile.last_name}</TableCell>
      <TableCell>{item.email}</TableCell>
      <TableCell>{item.department?.name}</TableCell>
      <TableCell>{item.position?.name}</TableCell>
      <TableCell>
        {!isAdmin && !isSelf ? (
          <IconButton onClick={handleProfile}>
            <KeyboardArrowRight color="secondary" />
          </IconButton>
        ) : (
          <ActionsMenu>
            <MenuItem onClick={handleProfile}>{t('Profile')}</MenuItem>
            <MenuItem onClick={handleUpdate}>{t('Update user')}</MenuItem>
            <MenuItem disabled={!isAdmin || isSelf} onClick={handleDelete}>
              {t('Delete user')}
            </MenuItem>
          </ActionsMenu>
        )}
      </TableCell>
    </Styled.Row>
  )
}

export default memo(UsersTableRow)
