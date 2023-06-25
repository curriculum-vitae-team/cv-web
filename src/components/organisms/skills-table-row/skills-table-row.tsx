import { useTranslation } from 'react-i18next'
import { MenuItem, TableCell, TableRow, Typography } from '@mui/material'
import { ActionsMenu } from '@atoms/actions-menu'
import { TableRowProps } from '@templates/table/table.types'
import { ISkill } from '@interfaces/skill.interface'
import { useSkillDialog } from '@dialogs/skill'
import { useConfirmDialog } from '@dialogs/confirm'
import { useUser } from '@hooks/use-user.hook'
import { useSkillDelete } from '@hooks/use-skills.hook'

export const SkillsTableRow = ({ item }: TableRowProps<ISkill>) => {
  const { isAdmin } = useUser()
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
          Are you sure you want to delete skill <b>{item.name}</b>?
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
