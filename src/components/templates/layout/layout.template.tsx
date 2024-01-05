import { memo, Suspense } from 'react'
import { Header } from '@organisms/header'
import { PageLoader } from '@atoms/page-loader'
import { Breadcrumbs } from '@features/breadcrumbs'
import { AuthGuard } from '@features/auth-guard'
import * as Styled from './layout.styles'

const Layout = () => {
  return (
    <>
      <Header />
      <Styled.Layout maxWidth="xl">
        <Breadcrumbs />
        <Suspense fallback={<PageLoader />}>
          <AuthGuard />
        </Suspense>
      </Styled.Layout>
    </>
  )
}

export default memo(Layout)
