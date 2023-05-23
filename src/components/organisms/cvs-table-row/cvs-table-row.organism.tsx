import { useTranslation } from 'react-i18next'
import { Checkbox, MenuItem, TableCell, TableRow } from '@mui/material'
import { ICV } from '@interfaces/cv.interface'
import { TableRowProps } from '@templates/table/table.types'
import { ActionsMenu } from '@atoms/actions-menu'

export const CVsTableRow = ({ item }: TableRowProps<ICV>) => {
  const { t } = useTranslation()

  return (
    <TableRow>
      <TableCell>
        <Checkbox checked={item.is_template} readOnly />
      </TableCell>
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
      <TableCell>{item.description}</TableCell>
      <TableCell>{item.user?.email}</TableCell>
      <TableCell>
        <ActionsMenu>
          <MenuItem disabled>{t('CV')}</MenuItem>
          <MenuItem disabled>{t('Delete CV')}</MenuItem>
        </ActionsMenu>
      </TableCell>
    </TableRow>
  )
}
