import { Suspense } from 'react'
import { Tabs, Tab, AppBar, CircularProgress } from '@mui/material'
import { Outlet, NavLink, useLocation } from 'react-router-dom'

const Auth = () => {
  const location = useLocation()

  return (
    <>
      <AppBar>
        <Tabs value={location.pathname} centered>
          <Tab value="/auth/login" label="Login" component={NavLink} to="login" />
          <Tab value="/auth/signup" label="Signup" component={NavLink} to="signup" />
        </Tabs>
      </AppBar>
      <Suspense fallback={<CircularProgress />}>
        <Outlet />
      </Suspense>
    </>
  )
}

export default Auth
