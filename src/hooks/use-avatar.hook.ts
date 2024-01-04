import { useParams } from 'react-router-dom'
import { MutationFunction, useMutation } from '@apollo/client'
import { DELETE_AVATAR, UPLOAD_AVATAR } from 'graphql/profile'
import { UploadAvatarResult } from 'graphql/profile/profile.types'
import { USER } from 'graphql/users'

export const useAvatarUpload = (): [MutationFunction<UploadAvatarResult>, boolean] => {
  const { userId } = useParams()

  const [uploadAvatar, { loading }] = useMutation<UploadAvatarResult>(UPLOAD_AVATAR, {
    refetchQueries: [{ query: USER, variables: { userId } }]
  })

  return [uploadAvatar, loading]
}

export const useAvatarDelete = (): [MutationFunction, boolean] => {
  const { userId } = useParams()

  const [deleteAvatar, { loading }] = useMutation(DELETE_AVATAR, {
    refetchQueries: [{ query: USER, variables: { userId } }]
  })

  return [deleteAvatar, loading]
}
