import { MutationFunction, useMutation } from '@apollo/client'
import { CREATE_USER, USERS } from '@graphql/users'
import { CreateUserResult } from '@graphql/users/users.types'

export const useUserCreate = (): [MutationFunction<CreateUserResult>, boolean] => {
  const [createUser, { loading }] = useMutation<CreateUserResult>(CREATE_USER, {
    refetchQueries: [USERS]
  })
  return [createUser, loading]
}
