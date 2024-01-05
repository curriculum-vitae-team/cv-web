import { styled } from '@mui/material'

export const Page = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: 32,
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr 1fr',
    padding: '0 32px'
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr'
  }
}))
