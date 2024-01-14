import { styled, Tabs as MuiTabs } from '@mui/material'

export const Tabs = styled(MuiTabs)(({ theme }) => ({
  position: 'sticky',
  zIndex: 1,
  top: 108,
  paddingTop: 10,
  background: `linear-gradient(180deg, ${theme.palette.background.default} 50%, rgba(255,255,255,0) 100%)`,
  backdropFilter: 'blur(0.5px)'
}))

export const Content = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  width: 720,
  padding: '32px 0',
  [theme.breakpoints.down('md')]: {
    width: '100%'
  }
}))
