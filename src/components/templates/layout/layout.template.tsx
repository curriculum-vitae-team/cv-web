import { memo, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '@organisms/header'
import { PageLoader } from '@atoms/page-loader'
import { Breadcrumbs } from '@features/breadcrumbs'
import * as Styled from './layout.styles'

const Layout = () => {
  return (
    <>
      <Header />
      <Styled.Layout maxWidth="xl">
        <Breadcrumbs />
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </Styled.Layout>
    </>
  )
}

export default memo(Layout)
