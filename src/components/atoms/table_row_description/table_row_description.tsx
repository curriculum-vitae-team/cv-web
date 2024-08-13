import { styled, Typography } from '@mui/material'

export const TableRowDescription = styled(Typography)({
  opacity: 0.5,

  '&:not(:last-child)': {
    marginBottom: 16
  }
})
