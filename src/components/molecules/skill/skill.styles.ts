import { Button, styled } from '@mui/material'

export const Card = styled(Button)({
  padding: '8px 16px',
  display: 'grid',
  gridTemplateColumns: '0.5fr 1fr',
  alignItems: 'center',
  gap: 16,
  textTransform: 'none',
  '& > .MuiLinearProgress-root': {
    opacity: 0.9
  },
  '& > .MuiTypography-root': {
    textAlign: 'left'
  }
})
