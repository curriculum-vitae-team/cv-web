import { styled } from '@mui/material'

export const Counter = styled('div')(({ theme }) => ({
  marginLeft: 12,
  width: 24,
  height: 24,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  color: theme.palette.primary.main,
  fontWeight: 600
}))
