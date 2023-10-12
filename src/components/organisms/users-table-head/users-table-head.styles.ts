import { TableRow, styled } from '@mui/material'

export const Row = styled(TableRow)(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    '& > .MuiTableCell-root:nth-child(4)': {
      display: 'none'
    }
  },
  [theme.breakpoints.down('md')]: {
    '& > .MuiTableCell-root:nth-child(3)': {
      display: 'none'
    }
  },
  [theme.breakpoints.down('sm')]: {
    '& > .MuiTableCell-root:nth-child(6)': {
      display: 'none'
    }
  }
}))
