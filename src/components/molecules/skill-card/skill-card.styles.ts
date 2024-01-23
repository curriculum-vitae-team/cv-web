import { Button, styled } from '@mui/material'

type CardProps = {
  isSelected?: boolean
}

const shouldForwardProp = (prop: string) => prop !== 'isSelected'

export const Card = styled(Button, { shouldForwardProp })<CardProps>(({ theme, isSelected }) => ({
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
    textAlign: 'left',
    color: isSelected ? theme.palette.text.primary : undefined
  }
}))
