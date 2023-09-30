import { styled, DialogContent } from '@mui/material'

export const Column = styled(DialogContent)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  columnGap: 32,
  rowGap: 32,
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr'
  }
}))
