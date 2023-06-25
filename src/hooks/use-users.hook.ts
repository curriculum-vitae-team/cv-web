import { MutationFunction, useMutation } from '@apollo/client'
import { CREATE_USER, DELETE_USER, USERS } from 'graphql/users'
import { CreateUserResult } from 'graphql/users/users.types'
import { IUser } from 'interfaces/user.interface'

export const useUserCreate = (): [MutationFunction<CreateUserResult>, boolean] => {
  const [createUser, { loading }] = useMutation<CreateUserResult>(CREATE_USER, {
    refetchQueries: [USERS]
  })
  return [createUser, loading]
}

export const useUserDelete = (item: IUser): [MutationFunction, boolean] => {
  const [deleteUser, { loading }] = useMutation(DELETE_USER, {
    update(cache) {
      const id = cache.identify({ id: item.id, __typename: 'User' })
      cache.evict({ id })
      cache.gc()
    }
  })

  return [deleteUser, loading]
}
