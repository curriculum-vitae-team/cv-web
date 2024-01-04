import { Button, styled } from '@mui/material'

export const Card = styled(Button)({
  display: 'grid',
  gridTemplateColumns: '0.5fr 1fr',
  alignItems: 'center',
  gap: 16,
  textTransform: 'none'
})
