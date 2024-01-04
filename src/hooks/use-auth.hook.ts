import { useReactiveVar } from '@apollo/client'
import { UserRole } from 'cv-graphql'
import { authService } from 'graphql/auth/auth.service'

export const useAuth = () => {
  const user$ = useReactiveVar(authService.user$)
  const isAdmin = user$?.role === UserRole.Admin
  const userId = user$?.id || ''
  const profileId = user$?.profile.id || ''

  return { user$, isAdmin, userId, profileId }
}
