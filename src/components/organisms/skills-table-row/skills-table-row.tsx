import { useTranslation } from 'react-i18next'
import { MenuItem, TableCell, TableRow, Typography } from '@mui/material'
import { Skill } from 'cv-graphql'
import { ActionsMenu } from '@atoms/actions-menu'
import { TableRowProps } from '@templates/table/table.types'
import { useSkillDialog } from '@dialogs/skill'
import { useConfirmDialog } from '@dialogs/confirm'
import { useAuth } from 'hooks/use-auth'
import { useSkillDelete } from 'hooks/use-skills'

export const SkillsTableRow = ({ item }: TableRowProps<Skill>) => {
  const { isAdmin } = useAuth()
  const { t } = useTranslation()
  const [openSkillDialog] = useSkillDialog()
  const [openConfirmDialog] = useConfirmDialog()
  const [deleteSkill] = useSkillDelete(item.id)

  const handleUpdate = () => {
    openSkillDialog({ item })
  }

  const handleDelete = () => {
    openConfirmDialog({
      dialogTitle: 'Delete Skill',
      dialogContent: (
        <Typography>
          {t('Are you sure you want to delete skill')} <b>{item.name}</b>?
        </Typography>
      ),
      confirmCallback: () => deleteSkill()
    })
  }

  return (
    <TableRow>
      <TableCell>{item.name}</TableCell>
      <TableCell>{t(item.category_parent_name || '')}</TableCell>
      <TableCell>{t(item.category_name || '')}</TableCell>
      <TableCell>
        <ActionsMenu disabled={!isAdmin}>
          <MenuItem onClick={handleUpdate}>{t('Update skill')}</MenuItem>
          <MenuItem onClick={handleDelete}>{t('Delete skill')}</MenuItem>
        </ActionsMenu>
      </TableCell>
    </TableRow>
  )
}
