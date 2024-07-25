import { IconButton, TableCell, TableRow } from '@mui/material'
import type { Cv } from 'cv-graphql'
import { KeyboardArrowRight } from '@mui/icons-material'
import { generatePath, useNavigate } from 'react-router-dom'
import type { TableRowProps } from '@templates/table/table.types'
import { CvsTableMenu } from '@molecules/cvs-table-menu'
import { routes } from 'constants/routes'
import { usePermission } from 'hooks/use_permission'
import * as Styled from './cvs-table-row.styles'

export const CvsTableRow = ({ item }: TableRowProps<Cv>) => {
  const navigate = useNavigate()
  const { canUpdateCv } = usePermission()

  const handleDetails = () => {
    navigate(generatePath(routes.cvs.details, { cvId: item.id }))
  }

  return (
    <TableRow>
      <Styled.Name>{item.name}</Styled.Name>
      <Styled.Description>{item.description}</Styled.Description>
      <Styled.User>{item.user?.email}</Styled.User>
      <TableCell>
        {canUpdateCv(item) ? (
          <CvsTableMenu cv={item} />
        ) : (
          <IconButton onClick={handleDetails}>
            <KeyboardArrowRight color="secondary" />
          </IconButton>
        )}
      </TableCell>
    </TableRow>
  )
}
