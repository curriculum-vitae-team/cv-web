import { IconButton, TableCell, TableRow } from '@mui/material'
import type { Cv } from 'cv-graphql'
import { generatePath, useNavigate, useParams } from 'react-router-dom'
import { KeyboardArrowRight } from '@mui/icons-material'
import { routes } from 'constants/routes'
import { CvsTableMenu } from '@molecules/cvs-table-menu'
import type { TableRowProps } from '@templates/table/table.types'
import { usePermission } from 'hooks/use_permission'
import { TableRowDropdown } from '@molecules/table_row_dropdown'
import { TableRowDescription } from '@atoms/table_row_description'
import * as Styled from './user-cvs-table-row.styles'

export const UserCvsTableRow = ({ item }: TableRowProps<Cv>) => {
  const { userId = '' } = useParams()
  const navigate = useNavigate()
  const { canUpdateUser } = usePermission()

  const handleDetails = () => {
    navigate(generatePath(routes.cvs.details, { cvId: item.id }))
  }

  return (
    <TableRowDropdown content={<TableRowDescription>{item.description}</TableRowDescription>}>
      <TableRow>
        <Styled.Name>{item.name}</Styled.Name>
        <Styled.Education>{item.education}</Styled.Education>
        <TableCell>
          {canUpdateUser({ id: userId }) ? (
            <CvsTableMenu cv={item} />
          ) : (
            <IconButton onClick={handleDetails}>
              <KeyboardArrowRight color="secondary" />
            </IconButton>
          )}
        </TableCell>
      </TableRow>
    </TableRowDropdown>
  )
}
