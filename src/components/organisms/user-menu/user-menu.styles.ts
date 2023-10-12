import { Typography, styled } from '@mui/material'

export const Name = styled(Typography)(({ theme }) => ({
  marginRight: 16,
  maxWidth: 250,
  overflowX: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  [theme.breakpoints.down('md')]: {
    maxWidth: 150
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: 100
  }
}))
