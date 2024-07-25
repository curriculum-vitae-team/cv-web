import { styled } from '@mui/material'

export const Actions = styled('div')(({ theme }) => ({
  position: 'sticky',
  bottom: 16,
  zIndex: 3,
  height: 64,
  width: 'calc(100% + 48px)',
  margin: '0 -24px',
  marginTop: 'auto',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
  gap: 16,
  background: `linear-gradient(180deg, transparent 0%, ${theme.palette.background.default} 50%)`,
  backdropFilter: 'blur(0.5px)',

  '&::after': {
    content: "''",
    width: '100%',
    height: 16,
    position: 'absolute',
    top: '100%',
    background: theme.palette.background.default
  },

  '& .MuiButton-root': {
    gap: 16
  }
}))
