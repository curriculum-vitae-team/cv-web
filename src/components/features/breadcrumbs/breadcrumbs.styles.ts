import { styled, Breadcrumbs as MuiBreadcrumbs } from '@mui/material'

export const Breadcrumbs = styled(MuiBreadcrumbs)(({ theme }) => ({
  position: 'fixed',
  top: 64,
  height: 44,
  zIndex: 3,
  paddingTop: 20,
  backgroundColor: theme.palette.background.default,
  width: '100%',
  maxWidth: theme.breakpoints.values.xl,
  '.MuiBreadcrumbs-ol': {
    flexWrap: 'nowrap'
  },
  '.MuiBreadcrumbs-li': {
    whiteSpace: 'nowrap'
  },
  '& .MuiBreadcrumbs-li:last-child': {
    pointerEvents: 'none',
    opacity: 0.6
  }
}))
