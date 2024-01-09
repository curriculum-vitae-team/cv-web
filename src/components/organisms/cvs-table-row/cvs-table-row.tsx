import { useTranslation } from 'react-i18next'
import { MenuItem, TableCell, Typography } from '@mui/material'
import { Cv } from 'cv-graphql'
import { generatePath, useNavigate } from 'react-router-dom'
import { TableRowProps } from '@templates/table/table.types'
import { ActionsMenu } from '@atoms/actions-menu'
import { useConfirmDialog } from '@dialogs/confirm'
import { useCvDelete } from 'hooks/use-cvs'
import { routes } from 'constants/routes'
import * as Styled from './cvs-table-row.styles'

export const CVsTableRow = ({ item }: TableRowProps<Cv>) => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [deleteCv] = useCvDelete(item.id)
  const [openConfirmDialog] = useConfirmDialog()

  const handleDetails = () => {
    navigate(generatePath(routes.cvs.cv, { cvId: item.id }))
  }

  const handleDelete = () => {
    openConfirmDialog({
      dialogTitle: 'Delete CV',
      dialogContent: (
        <Typography>
          {t('Are you sure you want to delete CV')} <b>{item.name}</b>?
        </Typography>
      ),
      confirmCallback: () => deleteCv()
    })
  }

  return (
    <Styled.Row>
      <TableCell
        sx={{
          maxWidth: 120,
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden'
        }}
      >
        {item.name}
      </TableCell>
      <TableCell
        sx={{
          maxWidth: 200,
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden'
        }}
      >
        {item.description}
      </TableCell>
      <TableCell>{item.user?.email}</TableCell>
      <TableCell>
        <ActionsMenu>
          <MenuItem onClick={handleDetails}>{t('CV')}</MenuItem>
          <MenuItem onClick={handleDelete}>{t('Delete CV')}</MenuItem>
        </ActionsMenu>
      </TableCell>
    </Styled.Row>
  )
}
