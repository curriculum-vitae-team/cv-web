import { TableCell, styled } from '@mui/material'

export const Description = styled(TableCell)(({ theme }) => ({
  maxWidth: 200,
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

export const User = styled(TableCell)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
}))
