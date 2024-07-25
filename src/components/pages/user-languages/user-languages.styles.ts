import { Container, styled } from '@mui/material'

export const Languages = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  gap: 32,
  paddingTop: 32
})

export const Grid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr 1fr'
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr'
  }
}))
