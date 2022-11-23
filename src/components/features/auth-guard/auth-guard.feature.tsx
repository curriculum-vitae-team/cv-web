import { useReactiveVar } from '@apollo/client'
import { Navigate, Outlet } from 'react-router-dom'
import { authService } from '../../../graphql/auth/auth.service'

export const AuthGuard = () => {
  const access_token = useReactiveVar(authService.access_token$)

  if (access_token) {
    return <Outlet />
  }

  return <Navigate to="/auth/login" />
}
