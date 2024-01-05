import { useTranslation } from 'react-i18next'
import { MenuItem, TableCell, TableRow, Typography } from '@mui/material'
import { Department } from 'cv-graphql'
import { ActionsMenu } from '@atoms/actions-menu'
import { TableRowProps } from '@templates/table/table.types'
import { useAuth } from 'hooks/use-auth.hook'
import { useDepartmentDialog } from '@dialogs/department'
import { useDepartmentDelete, useDepartmentUpdate } from 'hooks/use-departments.hook'
import { useConfirmDialog } from '@dialogs/confirm'

export const DepartmentsTableRow = ({ item }: TableRowProps<Department>) => {
  const { isAdmin } = useAuth()
  const { t } = useTranslation()
  const [openDepartmentDialog] = useDepartmentDialog()
  const [openConfirmDialog] = useConfirmDialog()
  const [updateDepartment] = useDepartmentUpdate()
  const [deleteDepartment] = useDepartmentDelete(item.id)

  const handleUpdate = () => {
    openDepartmentDialog({
      title: 'Update department',
      confirmText: 'Update',
      department: item,
      onConfirm({ name }) {
        return updateDepartment({
          variables: {
            department: {
              departmentId: item.id,
              name
            }
          }
        })
      }
    })
  }

  const handleDelete = () => {
    openConfirmDialog({
      dialogTitle: 'Delete department',
      dialogContent: (
        <Typography>
          {t('Are you sure you want to delete department')} <b>{item.name}</b>?
        </Typography>
      ),
      confirmCallback: () => deleteDepartment()
    })
  }

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
