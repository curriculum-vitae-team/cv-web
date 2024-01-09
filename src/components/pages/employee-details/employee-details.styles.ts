import { styled, Tabs as MuiTabs } from '@mui/material'

export const Tabs = styled(MuiTabs)({
  '& .MuiTab-root': {
    color: '#2e2e2e'
  },
  position: 'sticky',
  zIndex: 1,
  top: 108,
  paddingTop: 10,
  background: 'linear-gradient(180deg, rgba(245,245,247,1) 50%, rgba(255,255,255,0) 100%)',
  backdropFilter: 'blur(0.5px)'
})

export const Details = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  width: 720,
  padding: '32px 0',
  [theme.breakpoints.down('md')]: {
    width: '100%'
  }
}))
