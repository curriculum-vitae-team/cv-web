import { styled } from '@mui/material'

export const Label = styled('span')(({ theme }) => ({
  marginLeft: 8,
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))
