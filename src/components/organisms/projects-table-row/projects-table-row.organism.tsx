import { useTranslation } from 'react-i18next'
import { MenuItem, TableCell, Typography } from '@mui/material'
import { Project } from 'cv-graphql'
import { TableRowProps } from '@templates/table/table.types'
import { ActionsMenu } from '@atoms/actions-menu'
import { useConfirmDialog } from '@dialogs/confirm'
import { useProjectDialog } from '@dialogs/project'
import { useProjectDelete } from 'hooks/use-projects.hook'
import { useAuth } from 'hooks/use-auth.hook'
import * as Styled from './projects-table-row.styles'

export const ProjectsTableRow = ({ item }: TableRowProps<Project>) => {
  const { t } = useTranslation()
  const { isAdmin } = useAuth()
  const [openProjectDialog] = useProjectDialog()
  const [deleteProject] = useProjectDelete(item)
  const [openConfirmDialog] = useConfirmDialog()

  const handleUpdate = () => {
    openProjectDialog({ item })
  }

  const handleDelete = () => {
    openConfirmDialog({
      dialogTitle: 'Delete project',
      dialogContent: (
        <Typography>
          {t('Are you sure you want to delete project')} <b>{item.name}</b>?
        </Typography>
      ),
      confirmCallback: () => deleteProject({ variables: { id: item.id } })
    })
  }

  return (
    <Styled.Row>
      <TableCell>{item.name}</TableCell>
      <TableCell>{item.internal_name}</TableCell>
      <TableCell>{item.domain}</TableCell>
      <TableCell>{item.start_date}</TableCell>
      <TableCell>{item.end_date || t('Till now')}</TableCell>
      <TableCell>{item.team_size}</TableCell>
      <TableCell>
        <ActionsMenu>
          <MenuItem disabled>{t('Project')}</MenuItem>
          <MenuItem disabled={!isAdmin} onClick={handleUpdate}>
            {t('Update project')}
          </MenuItem>
          <MenuItem disabled={!isAdmin} onClick={handleDelete}>
            {t('Delete project')}
          </MenuItem>
        </ActionsMenu>
      </TableCell>
    </Styled.Row>
  )
}
