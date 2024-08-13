import { TableCell, styled } from '@mui/material'

export const Education = styled(TableCell)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

export const User = styled(TableCell)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
}))
