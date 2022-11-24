import { memo, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { CircularProgress, Container } from '@mui/material'
import { Header } from '../../organisms/header'

const Layout = () => {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <Suspense fallback={<CircularProgress />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  )
}

export default memo(Layout)
