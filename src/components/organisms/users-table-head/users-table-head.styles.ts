import { TableCell, styled } from '@mui/material'

export const LastName = styled(TableCell)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

export const Email = styled(TableCell)(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    display: 'none'
  }
}))
export const Department = styled(TableCell)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
}))
