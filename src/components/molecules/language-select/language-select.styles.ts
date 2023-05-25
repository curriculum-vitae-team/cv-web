import { styled, TextField } from '@mui/material'

export const Select = styled(TextField)({
  '& .MuiSelect-select': {
    boxShadow: 'none !important',
    background: 'transparent',
    color: 'white',
    paddingLeft: 12
  },
  '& .MuiSelect-icon': {
    fill: 'white'
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none'
  }
})
