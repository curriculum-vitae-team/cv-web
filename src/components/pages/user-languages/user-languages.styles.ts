import { Container, styled } from '@mui/material'

export const Page = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  gap: 32
})

export const Languages = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr 1fr'
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr'
  }
}))
