import { useTranslation } from 'react-i18next'
import { MenuItem, TableCell, TableRow, Typography } from '@mui/material'
import { TableRowProps } from '@templates/table/table.types'
import { IProject } from '@interfaces/project.interface'
import { ActionsMenu } from '@atoms/actions-menu'
import { useProjectDelete } from '@hooks/use-projects.hook'
import { useConfirmDialog } from '@dialogs/confirm'

export const ProjectsTableRow = ({ item }: TableRowProps<IProject>) => {
  const { t } = useTranslation()
  const [deleteProject] = useProjectDelete(item)
  const [openConfirmDialog] = useConfirmDialog()

  const handleDelete = () => {
    openConfirmDialog({
      dialogTitle: 'Delete user',
      dialogContent: (
        <Typography>
          {t('Are you sure you want to delete project')} <b>{item.name}</b>?
        </Typography>
      ),
      confirmCallback: () => deleteProject({ variables: { id: item.id } })
    })
  }

  return (
    <TableRow>
      <TableCell>{item.name}</TableCell>
      <TableCell>{item.internal_name}</TableCell>
      <TableCell>{item.domain}</TableCell>
      <TableCell>{item.start_date}</TableCell>
      <TableCell>{item.end_date || t('Till now')}</TableCell>
      <TableCell>{item.team_size}</TableCell>
      <TableCell>
        <ActionsMenu>
          <MenuItem disabled>{t('Project')}</MenuItem>
          <MenuItem onClick={handleDelete}>{t('Delete project')}</MenuItem>
        </ActionsMenu>
      </TableCell>
    </TableRow>
  )
}
