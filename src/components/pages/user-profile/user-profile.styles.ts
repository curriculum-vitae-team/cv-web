import { Typography, styled } from '@mui/material'

export const Profile = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: 60
})

export const Email = styled(Typography)(({ theme }) => ({
  marginTop: 8,
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  color: theme.palette.text.secondary
}))
