import { IconButton, TableCell, TableRow } from '@mui/material'
import { Cv } from 'cv-graphql'
import { KeyboardArrowRight } from '@mui/icons-material'
import { generatePath, useNavigate, useParams } from 'react-router-dom'
import { TableRowProps } from '@templates/table/table.types'
import { CvsTableMenu } from '@molecules/cvs-table-menu'
import { useAuth } from 'hooks/use-auth'
import { routes } from 'constants/routes'
import * as Styled from './cvs-table-row.styles'

export const CvsTableRow = ({ item }: TableRowProps<Cv>) => {
  const navigate = useNavigate()
  const { user$, isAdmin } = useAuth()
  const isOwnCv = user$?.id === item.user?.id

  const handleDetails = () => {
    navigate(generatePath(routes.cvs.details, { cvId: item.id }))
  }

  return (
    <TableRow>
      <Styled.Name>{item.name}</Styled.Name>
      <Styled.Description>{item.description}</Styled.Description>
      <Styled.User>{item.user?.email}</Styled.User>
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
