import { DialogContent, styled } from '@mui/material'

export const Column = styled(DialogContent)({
  display: 'flex',
  flexDirection: 'column',
  '& > .MuiTextField-root': {
    marginTop: 32
  }
})
