import { TextField, styled } from '@mui/material'

export const Input = styled(TextField)(({ theme }) => ({
  width: '50%',
  maxWidth: 320,
  '& input': {
    padding: '6.7px 14px'
  },
  [theme.breakpoints.down('md')]: {
    width: '100%'
  },
  [theme.breakpoints.down('sm')]: {
    width: '70%'
  }
}))
