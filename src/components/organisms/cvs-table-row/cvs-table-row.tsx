import { TableCell, TableRow } from '@mui/material'
import { Cv } from 'cv-graphql'
import { TableRowProps } from '@templates/table/table.types'
import { CvsTableMenu } from '@molecules/cvs-table-menu'
import * as Styled from './cvs-table-row.styles'

export const CvsTableRow = ({ item }: TableRowProps<Cv>) => {
  return (
    <TableRow>
      <Styled.Name>{item.name}</Styled.Name>
      <Styled.Description>{item.description}</Styled.Description>
      <Styled.User>{item.user?.email}</Styled.User>
      <TableCell>
        <CvsTableMenu cv={item} />
      </TableCell>
    </TableRow>
  )
}

export const ProfileCvsTableRow = ({ item }: TableRowProps<Cv>) => {
  return (
    <TableRow>
      <Styled.Name>{item.name}</Styled.Name>
      <Styled.Description>{item.description}</Styled.Description>
      <TableCell>
        <CvsTableMenu cv={item} />
      </TableCell>
    </TableRow>
  )
}
