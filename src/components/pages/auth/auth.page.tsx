import { Suspense } from 'react'
import { Tabs, Tab, AppBar } from '@mui/material'
import { Outlet, NavLink, useLocation } from 'react-router-dom'

const Auth = () => {
  const location = useLocation()

  return (
    <>
      <AppBar>
        <Tabs value={location.pathname} centered sx={{ color: 'white' }}>
          <Tab value="/auth/login" label="Login" component={NavLink} to="login" />
          <Tab value="/auth/signup" label="Signup" component={NavLink} to="signup" />
        </Tabs>
      </AppBar>
      <Suspense fallback="loading">
        <Outlet />
      </Suspense>
    </>
  )
}

export default Auth
