import { useTranslation } from 'react-i18next'
import { Checkbox, MenuItem, TableCell, TableRow, Typography } from '@mui/material'
import { Cv } from 'cv-graphql'
import { TableRowProps } from '@templates/table/table.types'
import { ActionsMenu } from '@atoms/actions-menu'
import { useConfirmDialog } from '@dialogs/confirm'
import { useCvDelete } from 'hooks/use-cvs'

export const CVsTableRow = ({ item }: TableRowProps<Cv>) => {
  const { t } = useTranslation()
  const [deleteCv] = useCvDelete(item.id)
  const [openConfirmDialog] = useConfirmDialog()

  const handleDelete = () => {
    openConfirmDialog({
      dialogTitle: 'Delete CV',
      dialogContent: (
        <Typography>
          {t('Are you sure you want to delete CV')} <b>{item.name}</b>?
        </Typography>
      ),
      confirmCallback: () => deleteCv()
    })
  }

  return (
    <TableRow>
      <TableCell>
        <Checkbox checked={item.is_template} readOnly />
      </TableCell>
      <TableCell
        sx={{
          maxWidth: 120,
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden'
        }}
      >
        {item.name}
      </TableCell>
      <TableCell>{item.description}</TableCell>
      <TableCell>{item.user?.email}</TableCell>
      <TableCell>
        <ActionsMenu>
          <MenuItem disabled>{t('CV')}</MenuItem>
          <MenuItem onClick={handleDelete}>{t('Delete CV')}</MenuItem>
        </ActionsMenu>
      </TableCell>
    </TableRow>
  )
}
