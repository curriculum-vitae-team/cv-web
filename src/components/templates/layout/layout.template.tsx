import { Outlet } from 'react-router-dom'
import { Container } from '@mui/material'
import { Header } from '../../organisms/header'

export const Layout = () => {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </>
  )
}
