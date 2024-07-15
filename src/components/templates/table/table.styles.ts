import { styled, TableCell, TableHead } from '@mui/material'

const shouldForwardProp = (prop: string) => prop !== 'stickyTop'

export const Thead = styled(TableHead, { shouldForwardProp })<{ stickyTop?: number }>(
  ({ stickyTop = 44 }) => ({
    '& > tr:first-of-type': {
      top: stickyTop
    },
    '& > tr:last-of-type': {
      top: stickyTop + 56
    }
  })
)

export const Actions = styled(TableCell)(({ theme }) => ({
  height: 56,
  padding: '0 20px',
  backgroundColor: theme.palette.background.default,
  borderBottom: 'none',

  '& .MuiButton-root': {
    float: 'right'
  }
}))
