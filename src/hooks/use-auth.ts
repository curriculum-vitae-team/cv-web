import { useMutation, useReactiveVar } from '@apollo/client'
import { AuthInput, UserRole } from 'cv-graphql'

import { LOGIN, SIGNUP } from 'graphql/auth'
import { authService } from 'graphql/auth/auth.service'
import { LoginResult, SignupResult } from 'graphql/auth/auth.types'
import { USERS } from 'graphql/users'
import { client } from 'graphql/client'

type LoginArgs = { variables: { auth: AuthInput } }

export const login = ({ variables }: LoginArgs) => {
  return client.query<LoginResult>({ query: LOGIN, variables })
}

export const useSignup = () => {
  return useMutation<SignupResult, { auth: AuthInput }>(SIGNUP, { refetchQueries: [USERS] })
}

export const useAuth = () => {
  const user$ = useReactiveVar(authService.user$)
  const userId = user$?.id || ''
  const isAdmin = user$?.role === UserRole.Admin

  return { user$, userId, isAdmin }
}
