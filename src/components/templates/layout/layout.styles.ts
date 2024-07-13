import { styled } from '@mui/material'

export const Layout = styled('div')(({ theme }) => ({
  height: '100%',
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'max-content 1fr',
  gridTemplateRows: '64px 1fr',
  overflow: 'auto',

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gridTemplateRows: '64px 1fr max-content'
  }
}))
