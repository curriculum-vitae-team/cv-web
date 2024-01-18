import { Container, styled } from '@mui/material'

export const AdditionalScroll = styled('div')({
  height: 32
})

export const Footer = styled('div')(({ theme }) => ({
  position: 'fixed',
  left: 0,
  bottom: 0,
  width: '100%',
  padding: '32px 0',
  background: `linear-gradient(180deg, rgba(255,255,255,0) 0%, ${theme.palette.background.default} 40%)`,
  backdropFilter: 'blur(0.5px)'
}))

export const Actions = styled(Container)({
  display: 'flex',
  justifyContent: 'space-between'
})

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
