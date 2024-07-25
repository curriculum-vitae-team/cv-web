import { styled, Tabs as MuiTabs } from '@mui/material'

export const Tabs = styled(MuiTabs)(({ theme }) => ({
  position: 'sticky',
  zIndex: 1,
  top: 44,
  background: `linear-gradient(180deg, ${theme.palette.background.default} 50%, transparent 100%)`,
  backdropFilter: 'blur(0.5px)'
}))
