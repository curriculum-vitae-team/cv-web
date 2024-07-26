import { Snackbar, styled } from '@mui/material'

export const Message = styled(Snackbar)(({ theme }) => ({
  '&.error > .MuiSnackbarContent-root': {
    background: theme.palette.error.main,
    color: theme.palette.text.primary
  }
}))
