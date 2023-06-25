import { useReactiveVar } from '@apollo/client'
import { authService } from 'graphql/auth/auth.service'
import { UserRole } from 'constants/user-role.constants'

export const useUser = () => {
  const user$ = useReactiveVar(authService.user$)
  const isAdmin = user$?.role === UserRole.Admin

  return { user$, isAdmin }
}
