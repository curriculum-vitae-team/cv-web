import { styled, TableCell, TableHead } from '@mui/material'

export const Thead = styled(TableHead)<{ stickyTop?: number }>(({ stickyTop = 44 }) => ({
  '& > tr:first-child': {
    top: stickyTop
  },
  '& > tr:last-child': {
    top: stickyTop + 56
  }
}))

export const Actions = styled(TableCell)(({ theme }) => ({
  height: 56,
  padding: '0 20px',
  backgroundColor: theme.palette.background.default,
  borderBottom: 'none',

  '& .MuiButton-root': {
    float: 'right'
  }
}))
