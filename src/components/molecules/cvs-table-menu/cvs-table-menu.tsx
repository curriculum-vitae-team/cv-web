import { useTranslation } from 'react-i18next'
import { MenuItem, Typography } from '@mui/material'
import { generatePath, useNavigate } from 'react-router-dom'
import { ActionsMenu } from '@atoms/actions-menu'
import { useConfirmDialog } from '@dialogs/confirm'
import { useCvDelete } from 'hooks/use-cvs'
import { routes } from 'constants/routes'
import { addNotification } from 'graphql/notifications'
import { CvsTableMenuProps } from './cvs-table-menu.types'

export const CvsTableMenu = ({ cv }: CvsTableMenuProps) => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [deleteCv] = useCvDelete(cv.id)
  const [openConfirmDialog] = useConfirmDialog()

  const handleDetails = () => {
    navigate(generatePath(routes.cvs.details, { cvId: cv.id }))
  }

  const handleDelete = () => {
    openConfirmDialog({
      dialogTitle: 'Delete CV',
      dialogContent: (
        <Typography>
          {t('Are you sure you want to delete CV')} <b>{cv.name}</b>?
        </Typography>
      ),
      confirmCallback() {
        return deleteCv()
          .then(() => addNotification('CV was deleted'))
          .catch((error) => addNotification(error.message, 'error'))
      }
    })
  }

  return (
    <ActionsMenu>
      <MenuItem onClick={handleDetails}>{t('Details')}</MenuItem>
      <MenuItem onClick={handleDelete}>{t('Delete CV')}</MenuItem>
    </ActionsMenu>
  )
}
