import { useTranslation } from 'react-i18next'
import { MenuItem, TableCell, TableRow, Typography } from '@mui/material'
import { ActionsMenu } from '@atoms/actions-menu'
import { TableRowProps } from '@templates/table/table.types'
import { useAuth } from 'hooks/use-auth'
import { useDepartmentDialog } from '@dialogs/department'
import { useDepartmentDelete, useDepartmentUpdate } from 'hooks/use-departments.hook'
import { useConfirmDialog } from '@dialogs/confirm'
import type { DepartmentWithUsers } from '@pages/departments/departments.types'

export const DepartmentsTableRow = ({ item }: TableRowProps<DepartmentWithUsers>) => {
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
      <TableCell>{item.users.length}</TableCell>
      <TableCell>
        <ActionsMenu disabled={!isAdmin}>
          <MenuItem onClick={handleUpdate}>{t('Update department')}</MenuItem>
          <MenuItem onClick={handleDelete}>{t('Delete department')}</MenuItem>
        </ActionsMenu>
      </TableCell>
    </TableRow>
  )
}
