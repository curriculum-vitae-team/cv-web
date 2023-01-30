import { memo, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Container } from '@mui/material'
import { Header } from '../../organisms/header'
import { PageLoader } from '../../atoms/page-loader'

const Layout = () => {
  return (
    <>
      <Header />
      <Container maxWidth="xl" sx={{ height: '100%' }}>
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  )
}

export default memo(Layout)
