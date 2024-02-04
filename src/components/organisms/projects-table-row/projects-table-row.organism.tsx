import { useTranslation } from 'react-i18next'
import { MenuItem, TableCell, Typography } from '@mui/material'
import { Project } from 'cv-graphql'
import { format } from 'date-fns'
import { TableRowProps } from '@templates/table/table.types'
import { ActionsMenu } from '@atoms/actions-menu'
import { useConfirmDialog } from '@dialogs/confirm'
import { useProjectDialog } from '@dialogs/project'
import { useProjectDelete, useProjectUpdate } from 'hooks/use-projects'
import { useAuth } from 'hooks/use-auth'
import { DayMonthYear } from 'constants/format.constant'
import * as Styled from './projects-table-row.styles'

export const ProjectsTableRow = ({ item }: TableRowProps<Project>) => {
  const { t } = useTranslation()
  const { isAdmin } = useAuth()
  const [openProjectDialog] = useProjectDialog()
  const [deleteProject] = useProjectDelete(item.id)
  const [openConfirmDialog] = useConfirmDialog()
  const [updateProject] = useProjectUpdate()

  const handleUpdate = () => {
    openProjectDialog({
      title: 'Update project',
      confirmText: 'Update',
      item,
      onConfirm(values) {
        return updateProject({
          variables: {
            project: {
              projectId: item.id,
              ...values,
              start_date: values.start_date?.toISOString() || '',
              end_date: values.end_date?.toISOString(),
              team_size: Number(values.team_size)
            }
          }
        })
      }
    })
  }

  const handleDelete = () => {
    openConfirmDialog({
      dialogTitle: 'Delete project',
      dialogContent: (
        <Typography>
          {t('Are you sure you want to delete project')} <b>{item.name}</b>?
        </Typography>
      ),
      confirmCallback: () => deleteProject()
    })
  }

  return (
    <Styled.Row>
      <TableCell>{item.name}</TableCell>
      <TableCell>{item.internal_name}</TableCell>
      <TableCell>{item.domain}</TableCell>
      <TableCell>{format(new Date(item.start_date || ''), DayMonthYear)}</TableCell>
      <TableCell>
        {item.end_date ? format(new Date(item.end_date), DayMonthYear) : t('Till now')}
      </TableCell>
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
