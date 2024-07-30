import { useMutation, useReactiveVar } from '@apollo/client'
import { AuthInput, UserRole } from 'cv-graphql'

import { LOGIN, SIGNUP } from 'graphql/auth'
import { session$ } from 'graphql/auth/session'
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
  const session = useReactiveVar(session$)
  const userId = session ? String(session.sub) : ''
  const isAdmin = session?.role === UserRole.Admin

  return { session, userId, isAdmin }
}
