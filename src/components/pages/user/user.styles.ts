import { styled, Tabs as MuiTabs } from '@mui/material'

export const Tabs = styled(MuiTabs)(({ theme }) => ({
  position: 'sticky',
  zIndex: 1,
  top: 44,
  background: theme.palette.background.default
}))
