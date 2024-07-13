import { DialogContent, TextField, styled } from '@mui/material'

export const Column = styled(DialogContent)({
  display: 'flex',
  flexDirection: 'column',
  rowGap: 32
})

export const Description = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    height: 'auto'
  }
})
