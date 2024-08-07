import { memo, Suspense } from 'react'
import { Container } from '@mui/material'
import { PageLoader } from '@atoms/page-loader'
import { Breadcrumbs } from '@features/breadcrumbs'
import { AuthGuard } from '@features/auth-guard'
import { SideMenu } from '@organisms/side-menu'
import * as Styled from './layout.styles'

const Layout = () => {
  return (
    <Styled.Layout>
      <SideMenu />
      <Styled.Scroll>
        <Container maxWidth="xl">
          <Breadcrumbs />
          <Suspense fallback={<PageLoader />}>
            <AuthGuard />
          </Suspense>
        </Container>
      </Styled.Scroll>
    </Styled.Layout>
  )
}

export default memo(Layout)
