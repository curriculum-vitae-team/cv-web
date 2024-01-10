import { TableCell, styled } from '@mui/material'

export { Description, User } from '../cvs-table-head/cvs-table-head.styles'

export const Name = styled(TableCell)({
  maxWidth: 120,
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden'
})
