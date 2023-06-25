import { useTranslation } from 'react-i18next'
import { MenuItem, TableCell, TableRow, Typography } from '@mui/material'
import { ActionsMenu } from '@atoms/actions-menu'
import { TableRowProps } from '@templates/table/table.types'
import { useConfirmDialog } from '@dialogs/confirm'
import { usePositionDialog } from '@dialogs/position'
import { IPosition } from 'interfaces/position.interface'
import { useUser } from 'hooks/use-user.hook'
import { usePositionDelete } from 'hooks/use-positions.hook'

export const PositionsTableRow = ({ item }: TableRowProps<IPosition>) => {
  const { isAdmin } = useUser()
  const { t } = useTranslation()
  const [openPositionDialog] = usePositionDialog()
  const [openConfirmDialog] = useConfirmDialog()
  const [deletePosition] = usePositionDelete(item)

  const handleUpdate = () => {
    openPositionDialog({ item })
  }

  const handleDelete = () => {
    openConfirmDialog({
      dialogTitle: 'Delete position',
      dialogContent: (
        <Typography>
          Are you sure you want to delete position <b>{item.name}</b>?
        </Typography>
      ),
      confirmCallback: () => deletePosition()
    })
  }

  return (
    <TableRow>
      <TableCell>{item.name}</TableCell>
      <TableCell>
        <ActionsMenu>
          <MenuItem disabled={!isAdmin} onClick={handleUpdate}>
            {t('Update position')}
          </MenuItem>
          <MenuItem disabled={!isAdmin} onClick={handleDelete}>
            {t('Delete position')}
          </MenuItem>
        </ActionsMenu>
      </TableCell>
    </TableRow>
  )
}
