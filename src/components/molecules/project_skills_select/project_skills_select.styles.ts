import { Autocomplete, styled } from '@mui/material'

export const Skills = styled(Autocomplete<string, true>)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    gridColumn: 'span 2'
  },

  '& .MuiOutlinedInput-root': {
    height: 'auto',
    minHeight: 48
  }
}))
