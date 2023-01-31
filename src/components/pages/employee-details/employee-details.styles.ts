import { styled, Tabs as MuiTabs } from '@mui/material'

export const Tabs = styled(MuiTabs)({
  '& .MuiTab-root': {
    color: '#2e2e2e'
  },
  paddingTop: 16,
  paddingBottom: 16,
  position: 'sticky',
  top: 64
})

export const Details = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  width: 720,
  padding: '60px 0'
})
