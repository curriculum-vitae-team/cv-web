import { styled, Breadcrumbs as MuiBreadcrumbs } from '@mui/material'

export const Breadcrumbs = styled(MuiBreadcrumbs)(({ theme }) => ({
  position: 'fixed',
  top: 64,
  height: 64,
  zIndex: 3,
  padding: '20px 0 0 20px',
  backgroundColor: '#f5f5f7',
  width: '100%',
  maxWidth: theme.breakpoints.values.xl,
  '& .MuiBreadcrumbs-li:last-child': {
    color: '#2e2e2e',
    pointerEvents: 'none'
  }
}))
