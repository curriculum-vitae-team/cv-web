import { Container, Typography, styled } from '@mui/material'

export const Profile = styled(Container)({
  height: 'auto !important',
  paddingBottom: 32
})

export const Details = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: 64
})

export const Email = styled(Typography)(({ theme }) => ({
  marginTop: 8,
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  color: theme.palette.text.secondary
}))
