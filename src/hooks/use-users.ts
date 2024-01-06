import { useMutation, useQuery } from '@apollo/client'
import { UpdateUserInput } from 'cv-graphql'
import { CREATE_USER, DELETE_USER, UPDATE_USER, USER, USERS, USER_CVS } from 'graphql/users'
import {
  CreateUserResult,
  UpdateUserResult,
  UserResult,
  UsersResult
} from 'graphql/users/users.types'

export const useUser = (userId?: string) => {
  const query = useQuery<UserResult>(USER, { variables: { userId } })
  return { user: query.data?.user, ...query }
}

export const useUserCvs = (userId: string) => {
  const query = useQuery<UserResult>(USER_CVS, { variables: { userId } })
  return { cvs: query.data?.user.cvs || [], ...query }
}

export const useUsers = () => {
  const query = useQuery<UsersResult>(USERS)
  return { users: query.data?.users || [], ...query }
}

export const useUserCreate = () => {
  return useMutation<CreateUserResult>(CREATE_USER, {
    refetchQueries: [USERS]
  })
}

export const useUserUpdate = () => {
  return useMutation<UpdateUserResult, { user: UpdateUserInput }>(UPDATE_USER)
}

export const useUserDelete = (userId: string) => {
  return useMutation(DELETE_USER, {
    variables: {
      userId
    },
    update(cache) {
      const id = cache.identify({ id: userId, __typename: 'User' })
      cache.evict({ id })
      cache.gc()
    }
  })
}
