import { TableRow, styled } from '@mui/material'

export const Row = styled(TableRow)(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    '& > .MuiTableCell-root:nth-of-type(3)': {
      display: 'none'
    }
  },
  [theme.breakpoints.down('md')]: {
    '& > .MuiTableCell-root:nth-of-type(4)': {
      display: 'none'
    }
  },
  [theme.breakpoints.down('sm')]: {
    '& > .MuiTableCell-root:nth-of-type(2)': {
      display: 'none'
    }
  }
}))
