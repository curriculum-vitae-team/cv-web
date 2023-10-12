import { styled, Tabs as MuiTabs } from '@mui/material'

export const Tabs = styled(MuiTabs)({
  '& .MuiTab-root': {
    color: '#2e2e2e'
  },
  height: 64,
  paddingBottom: 20,
  position: 'sticky',
  top: 128
})

export const Details = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  width: 720,
  padding: '60px 0',
  [theme.breakpoints.down('md')]: {
    width: '100%'
  }
}))
