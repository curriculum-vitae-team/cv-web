import { TextField, styled } from '@mui/material'

export const Input = styled(TextField)(({ theme }) => ({
  width: '50%',
  maxWidth: 320,

  '& .MuiOutlinedInput-root': {
    borderRadius: 40,
    height: 40
  },
  '& input': {
    textOverflow: 'ellipsis',
    paddingLeft: 10
  },
  [theme.breakpoints.down('md')]: {
    width: '100%'
  },
  [theme.breakpoints.down('sm')]: {
    width: '70%'
  }
}))
