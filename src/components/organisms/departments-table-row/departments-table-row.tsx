import { useTranslation } from 'react-i18next'
import { MenuItem, TableCell, TableRow } from '@mui/material'
import { Department } from 'cv-graphql'
import { ActionsMenu } from '@atoms/actions-menu'
import { TableRowProps } from '@templates/table/table.types'
import { useAuth } from 'hooks/use-auth.hook'

export const DepartmentsTableRow = ({ item }: TableRowProps<Department>) => {
  const { isAdmin } = useAuth()
  const { t } = useTranslation()

  const handleUpdate = () => {}

  const handleDelete = () => {}

  return (
    <TableRow>
      <TableCell>{item.name}</TableCell>
      <TableCell>
        <ActionsMenu>
          <MenuItem disabled={!isAdmin} onClick={handleUpdate}>
            {t('Update department')}
          </MenuItem>
          <MenuItem disabled={!isAdmin} onClick={handleDelete}>
            {t('Delete department')}
          </MenuItem>
        </ActionsMenu>
      </TableCell>
    </TableRow>
  )
}
