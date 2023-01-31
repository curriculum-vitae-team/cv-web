import { memo, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../../organisms/header'
import { PageLoader } from '../../atoms/page-loader'
import * as Styled from './layout.styles'

const Layout = () => {
  return (
    <>
      <Header />
      <Styled.Layout maxWidth="xl">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </Styled.Layout>
    </>
  )
}

export default memo(Layout)
