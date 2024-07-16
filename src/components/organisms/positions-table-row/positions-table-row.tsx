import { useTranslation } from 'react-i18next'
import { MenuItem, TableCell, TableRow, Typography } from '@mui/material'
import { ActionsMenu } from '@atoms/actions-menu'
import { TableRowProps } from '@templates/table/table.types'
import { useConfirmDialog } from '@dialogs/confirm'
import { usePositionDialog } from '@dialogs/position'
import { useAuth } from 'hooks/use-auth'
import { usePositionDelete, usePositionUpdate } from 'hooks/use-positions.hook'
import type { PositionWithUsers } from '@pages/positions/position.types'

export const PositionsTableRow = ({ item }: TableRowProps<PositionWithUsers>) => {
  const { isAdmin } = useAuth()
  const { t } = useTranslation()
  const [openPositionDialog] = usePositionDialog()
  const [openConfirmDialog] = useConfirmDialog()
  const [updatePosition] = usePositionUpdate()
  const [deletePosition] = usePositionDelete(item.id)

  const handleUpdate = () => {
    openPositionDialog({
      title: 'Update position',
      confirmText: 'Update',
      position: item,
      onConfirm({ name }) {
        return updatePosition({
          variables: {
            position: {
              positionId: item.id,
              name
            }
          }
        })
      }
    })
  }

  const handleDelete = () => {
    openConfirmDialog({
      dialogTitle: 'Delete position',
      dialogContent: (
        <Typography>
          {t('Are you sure you want to delete position')} <b>{item.name}</b>?
        </Typography>
      ),
      confirmCallback: () => deletePosition()
    })
  }

  return (
    <TableRow>
      <TableCell>{item.name}</TableCell>
      <TableCell>{item.users.length}</TableCell>
      <TableCell>
        <ActionsMenu disabled={!isAdmin}>
          <MenuItem onClick={handleUpdate}>{t('Update position')}</MenuItem>
          <MenuItem onClick={handleDelete}>{t('Delete position')}</MenuItem>
        </ActionsMenu>
      </TableCell>
    </TableRow>
  )
}
