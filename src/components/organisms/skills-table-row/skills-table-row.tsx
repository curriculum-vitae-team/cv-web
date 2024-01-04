import { useTranslation } from 'react-i18next'
import { MenuItem, TableCell, TableRow, Typography } from '@mui/material'
import { Skill } from 'cv-graphql'
import { ActionsMenu } from '@atoms/actions-menu'
import { TableRowProps } from '@templates/table/table.types'
import { useSkillDialog } from '@dialogs/skill'
import { useConfirmDialog } from '@dialogs/confirm'
import { useAuth } from 'hooks/use-auth.hook'
import { useSkillDelete } from 'hooks/use-skills.hook'

export const SkillsTableRow = ({ item }: TableRowProps<Skill>) => {
  const { isAdmin } = useAuth()
  const { t } = useTranslation()
  const [openSkillDialog] = useSkillDialog()
  const [openConfirmDialog] = useConfirmDialog()
  const [deleteSkill] = useSkillDelete(item)

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
      <TableCell>
        <ActionsMenu>
          <MenuItem disabled={!isAdmin} onClick={handleUpdate}>
            {t('Update skill')}
          </MenuItem>
          <MenuItem disabled={!isAdmin} onClick={handleDelete}>
            {t('Delete skill')}
          </MenuItem>
        </ActionsMenu>
      </TableCell>
    </TableRow>
  )
}
