import { IconButton, TableCell, TableRow } from '@mui/material'
import type { Cv } from 'cv-graphql'
import { generatePath, useNavigate, useParams } from 'react-router-dom'
import { KeyboardArrowRight } from '@mui/icons-material'
import { useAuth } from 'hooks/use-auth'
import { routes } from 'constants/routes'
import { CvsTableMenu } from '@molecules/cvs-table-menu'
import type { TableRowProps } from '@templates/table/table.types'
import * as Styled from './user-cvs-table-row.styles'

export const UserCvsTableRow = ({ item }: TableRowProps<Cv>) => {
  const { userId = '' } = useParams()
  const navigate = useNavigate()
  const { user$, isAdmin } = useAuth()
  const isOwnCv = user$?.id === userId

  const handleDetails = () => {
    navigate(generatePath(routes.cvs.details, { cvId: item.id }))
  }

  return (
    <TableRow>
      <Styled.Name>{item.name}</Styled.Name>
      <Styled.Description>{item.description}</Styled.Description>
      <TableCell>
        {!isOwnCv && !isAdmin ? (
          <IconButton onClick={handleDetails}>
            <KeyboardArrowRight color="secondary" />
          </IconButton>
        ) : (
          <CvsTableMenu cv={item} />
        )}
      </TableCell>
    </TableRow>
  )
}
