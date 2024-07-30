import { useReactiveVar } from '@apollo/client'
import { Navigate, Outlet } from 'react-router-dom'
import { accessToken$ } from 'graphql/auth/session'

export const AuthGuard = () => {
  const accessToken = useReactiveVar(accessToken$)

  if (accessToken) {
    return <Outlet />
  }

  return <Navigate to="/auth/login" />
}
