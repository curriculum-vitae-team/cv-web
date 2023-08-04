import { styled } from '@mui/material'

export const Notifications = styled('div')({
  position: 'fixed',
  zIndex: 2000,
  top: 32,
  left: 32,
  width: 520,
  '& > .MuiAlert-root': {
    marginBottom: 8
  }
})
