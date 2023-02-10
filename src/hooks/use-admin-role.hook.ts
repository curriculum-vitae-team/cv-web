import { useReactiveVar } from '@apollo/client'
import { authService } from '@graphql/auth/auth.service'
import { UserRole } from '../constants/user-role.constants'

export const useAdminRole = () => {
  const user = useReactiveVar(authService.user$)
  return user?.role === UserRole.Admin
}
