import { memo } from 'react'
import { Outlet } from 'react-router-dom'
import { Container } from '@mui/material'
import { Header } from '../../organisms/header'

const Layout = () => {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </>
  )
}

export default memo(Layout)
