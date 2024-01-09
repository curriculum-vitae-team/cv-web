import { styled } from '@mui/material'

export const Skills = styled('div')(({ theme }) => ({
  marginTop: 16,
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '16px 32px',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr 1fr',
    padding: '0 32px'
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr'
  }
}))
