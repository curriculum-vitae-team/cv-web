import { styled } from '@mui/material'

export const Group = styled('div')({})

export const Skills = styled('div')(({ theme }) => ({
  gridColumn: 'span 2',
  marginTop: 16,
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr 1fr'
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr'
  }
}))
