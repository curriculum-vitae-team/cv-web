import { useLazyQuery, useMutation, useReactiveVar } from '@apollo/client'
import { AuthInput, UserRole } from 'cv-graphql'
import { LOGIN, SIGNUP } from 'graphql/auth'
import { authService } from 'graphql/auth/auth.service'
import { LoginResult, SignupResult } from 'graphql/auth/auth.types'

export const useLogin = () => {
  return useLazyQuery<LoginResult, { auth: AuthInput }>(LOGIN)
}

export const useSignup = () => {
  return useMutation<SignupResult, { auth: AuthInput }>(SIGNUP)
}

export const useAuth = () => {
  const user$ = useReactiveVar(authService.user$)
  const isAdmin = user$?.role === UserRole.Admin
  const userId = user$?.id || ''
  const profileId = user$?.profile.id || ''

  return { user$, isAdmin, userId, profileId }
}
