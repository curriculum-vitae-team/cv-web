import { styled } from '@mui/material'

export const Layout = styled('div')(({ theme }) => ({
  height: '100%',
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'max-content 1fr',
  gridTemplateRows: '1fr',
  gridTemplateAreas: "'navigation page'",

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr max-content',
    gridTemplateAreas: "'page' 'navigation'"
  }
}))

export const Scroll = styled('main')({
  width: '100%',
  gridArea: 'page',
  overflowY: 'scroll'
})
