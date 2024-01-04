import { MutationFunction, useMutation, useQuery } from '@apollo/client'
import { UpdateUserInput, User } from 'cv-graphql'
import { CREATE_USER, DELETE_USER, UPDATE_USER, USER, USERS } from 'graphql/users'
import {
  CreateUserResult,
  UpdateUserResult,
  UserResult,
  UsersResult
} from 'graphql/users/users.types'

export const useUser = (userId?: string) => {
  return useQuery<UserResult>(USER, { variables: { userId } })
}

export const useUsers = (): [User[], boolean] => {
  const { data, loading } = useQuery<UsersResult>(USERS)
  return [data?.users || [], loading]
}

export const useUserCreate = (): [MutationFunction<CreateUserResult>, boolean] => {
  const [createUser, { loading }] = useMutation<CreateUserResult>(CREATE_USER, {
    refetchQueries: [USERS]
  })
  return [createUser, loading]
}

export const useUserUpdate = () => {
  return useMutation<UpdateUserResult, { user: UpdateUserInput }>(UPDATE_USER)
}

export const useUserDelete = (item: User): [MutationFunction, boolean] => {
  const [deleteUser, { loading }] = useMutation(DELETE_USER, {
    update(cache) {
      const id = cache.identify({ id: item.id, __typename: 'User' })
      cache.evict({ id })
      cache.gc()
    }
  })

  return [deleteUser, loading]
}
