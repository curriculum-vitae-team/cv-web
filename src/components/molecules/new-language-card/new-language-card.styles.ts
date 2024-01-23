import { Button, styled } from '@mui/material'

export const Card = styled(Button)({
  display: 'flex',
  alignItems: 'center',
  gap: 16,
  textTransform: 'none',
  '& > .MuiTypography-root': {
    textAlign: 'left'
  }
})
