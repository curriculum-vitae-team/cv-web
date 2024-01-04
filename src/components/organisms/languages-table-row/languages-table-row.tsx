import { useTranslation } from 'react-i18next'
import { MenuItem, TableCell, TableRow, Typography } from '@mui/material'
import { Language } from 'cv-graphql'
import { ActionsMenu } from '@atoms/actions-menu'
import { TableRowProps } from '@templates/table/table.types'
import { useLanguageDialog } from '@dialogs/language'
import { useConfirmDialog } from '@dialogs/confirm'
import { useAuth } from 'hooks/use-auth.hook'
import { useLanguageDelete } from 'hooks/use-languages.hook'

export const LanguagesTableRow = ({ item }: TableRowProps<Language>) => {
  const { isAdmin } = useAuth()
  const { t } = useTranslation()
  const [openLanguageDialog] = useLanguageDialog()
  const [openConfirmDialog] = useConfirmDialog()
  const [deleteLanguage] = useLanguageDelete(item)

  const handleUpdate = () => {
    openLanguageDialog({ item })
  }

  const handleDelete = () => {
    openConfirmDialog({
      dialogTitle: 'Delete Language',
      dialogContent: (
        <Typography>
          {t('Are you sure you want to delete language')} <b>{item.name}</b>?
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
          <MenuItem disabled={!isAdmin} onClick={handleUpdate}>
            {t('Update language')}
          </MenuItem>
          <MenuItem disabled={!isAdmin} onClick={handleDelete}>
            {t('Delete language')}
          </MenuItem>
        </ActionsMenu>
      </TableCell>
    </TableRow>
  )
}
