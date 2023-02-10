import { MenuItem, TableCell, TableRow, Typography } from '@mui/material'
import { ActionsMenu } from '@atoms/actions-menu'
import { TableRowProps } from '@templates/table/table.types'
import { ILanguage } from '@interfaces/language.interface'
import { useConfirmDialog } from '@dialogs/confirm'
import { useAdminRole } from '@hooks/use-admin-role.hook'
import { useLanguageDelete } from '@hooks/use-languages.hook'

export const LanguagesTableRow = ({ item }: TableRowProps<ILanguage>) => {
  const isAdmin = useAdminRole()
  const [openConfirmDialog] = useConfirmDialog()
  const [deleteLanguage] = useLanguageDelete(item)

  const handleDelete = () => {
    openConfirmDialog({
      dialogTitle: 'Delete Language',
      dialogContent: (
        <Typography>
          Are you sure you want to delete language <b>{item.name}</b>?
        </Typography>
      ),
      confirmCallback: () => deleteLanguage()
    })
  }

  return (
    <TableRow>
      <TableCell>{item.name}</TableCell>
      <TableCell>{item.native_name}</TableCell>
      <TableCell>{item.iso2}</TableCell>
      <TableCell>
        <ActionsMenu>
          <MenuItem disabled>Update Language</MenuItem>
          <MenuItem disabled={!isAdmin} onClick={handleDelete}>
            Delete Language
          </MenuItem>
        </ActionsMenu>
      </TableCell>
    </TableRow>
  )
}
