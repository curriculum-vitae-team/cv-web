import type { CvProject } from 'cv-graphql'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { MenuItem, TableCell, Typography } from '@mui/material'
import { format } from 'date-fns'
import type { TableRowProps } from '@templates/table/table.types'
import { useCvProjectDialog } from '@dialogs/cv-project'
import { useCv, useCvProjectRemove, useCvProjectUpdate } from 'hooks/use-cvs'
import { useConfirmDialog } from '@dialogs/confirm'
import { useAuth } from 'hooks/use-auth'
import { DayMonthYear } from 'constants/format.constant'
import { ActionsMenu } from '@atoms/actions-menu'
import * as Styled from './cv-projects-table-row.styles'

export const CvProjectsTableRow = ({ item }: TableRowProps<CvProject>) => {
  const { t } = useTranslation()
  const { cvId = '' } = useParams()
  const { cv } = useCv(cvId)
  const [openCvProjectDialog] = useCvProjectDialog()
  const [removeProject] = useCvProjectRemove()
  const [openConfirmDialog] = useConfirmDialog()
  const [updateCvProject] = useCvProjectUpdate()
  const { userId, isAdmin } = useAuth()
  const isOwnCv = cv?.user?.id === userId

  const handleUpdate = () => {
    openCvProjectDialog({
      title: 'Update project',
      confirmText: 'Update',
      item,
      onConfirm({ projectId, start_date, end_date, roles, responsibilities }) {
        return updateCvProject({
          variables: {
            project: {
              cvId,
              projectId,
              start_date: start_date?.toISOString() || '',
              end_date: end_date?.toISOString(),
              roles,
              responsibilities
            }
          }
        })
      }
    })
  }

  const handleDelete = () => {
    openConfirmDialog({
      dialogTitle: 'Remove project',
      dialogContent: (
        <Typography>
          {t('Are you sure you want to remove project')} <b>{item.name}</b>?
        </Typography>
      ),
      confirmCallback: () =>
        removeProject({
          variables: {
            project: {
              cvId,
              projectId: item.project.id
            }
          }
        })
    })
  }

  return (
    <Styled.Row>
      <TableCell>{item.name}</TableCell>
      <TableCell>{item.internal_name}</TableCell>
      <TableCell>{item.domain}</TableCell>
      <TableCell>{item.team_size}</TableCell>
      <TableCell>{format(new Date(item.start_date || ''), DayMonthYear)}</TableCell>
      <TableCell>
        {item.end_date ? format(new Date(item.end_date), DayMonthYear) : t('Till now')}
      </TableCell>
      <TableCell>
        <ActionsMenu disabled={!isOwnCv && !isAdmin}>
          <MenuItem disabled>{t('Project')}</MenuItem>
          <MenuItem onClick={handleUpdate}>{t('Update project')}</MenuItem>
          <MenuItem onClick={handleDelete}>{t('Remove project')}</MenuItem>
        </ActionsMenu>
      </TableCell>
    </Styled.Row>
  )
}
