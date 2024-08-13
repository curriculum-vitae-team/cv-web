import { TableCell, styled } from '@mui/material'

export { Education, User } from '../cvs-table-head/cvs-table-head.styles'

export const Name = styled(TableCell)({
  maxWidth: 200,
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden'
})
