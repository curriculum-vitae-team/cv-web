import { styled, Breadcrumbs as MuiBreadcrumbs } from '@mui/material'

export const Breadcrumbs = styled(MuiBreadcrumbs)(({ theme }) => ({
  position: 'sticky',
  top: 0,
  height: 44,
  zIndex: 3,
  paddingLeft: 20,
  paddingTop: 16,
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
