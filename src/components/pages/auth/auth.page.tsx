import { Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { Tabs, Tab } from '@mui/material'
import { Outlet, NavLink, useLocation } from 'react-router-dom'
import { PageLoader } from '@atoms/page-loader'
import { routes } from 'constants/routes'

const Auth = () => {
  const location = useLocation()
  const { t } = useTranslation()

  return (
    <>
      <Tabs value={location.pathname} centered component="header">
        <Tab
          value={routes.auth.login}
          label={t('Login')}
          component={NavLink}
          to={routes.auth.login}
        />
        <Tab
          value={routes.auth.signup}
          label={t('Signup')}
          component={NavLink}
          to={routes.auth.signup}
        />
      </Tabs>
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </>
  )
}

export default Auth
