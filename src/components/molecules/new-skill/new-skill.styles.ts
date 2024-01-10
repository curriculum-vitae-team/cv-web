import { Button, styled } from '@mui/material'

export const Card = styled(Button)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 16,
  textTransform: 'none',
  '& > .MuiTypography-root': {
    textAlign: 'left'
  },
  [theme.breakpoints.down('md')]: {
    margin: '0 32px'
  }
}))
