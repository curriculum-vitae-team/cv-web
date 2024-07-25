import { TextField, styled } from '@mui/material'

export const Form = styled('form')({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  columnGap: 32,
  rowGap: 16,

  '& > .MuiTextField-root': {
    gridColumn: 'span 2'
  }
})

export const Description = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    height: 'auto'
  }
})
