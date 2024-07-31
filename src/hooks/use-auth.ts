import { useMutation, useReactiveVar } from '@apollo/client'
import {
  type AuthInput,
  type ForgotPasswordInput,
  type ForgotPasswordResult,
  UserRole
} from 'cv-graphql'

import { LOGIN, SIGNUP, FORGOT_PASSWORD } from 'graphql/auth'
import { session$ } from 'graphql/auth/session'
import type { LoginResult, SignupResult } from 'graphql/auth/auth.types'
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

export const useForgotPassword = () => {
  return useMutation<{ forgotPassword: ForgotPasswordResult }, { auth: ForgotPasswordInput }>(
    FORGOT_PASSWORD
  )
}
