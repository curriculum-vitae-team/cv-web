import { TextField, styled } from '@mui/material'

export const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: 32
})

export const Description = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    height: 'auto'
  }
})
