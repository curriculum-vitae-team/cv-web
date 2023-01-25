import { styled, Avatar as MuiAvatar } from '@mui/material'

export const AvatarUpload = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: 32,
  position: 'relative'
})

export const Avatar = styled(MuiAvatar)({
  width: 120,
  height: 120,
  fontSize: '40px'
})

export const Label = styled('label')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '0 auto',
  cursor: 'pointer',
  '& > .MuiTypography-root': {
    display: 'flex',
    alignItems: 'center'
  }
})

export const Input = styled('input')({
  visibility: 'hidden'
})
