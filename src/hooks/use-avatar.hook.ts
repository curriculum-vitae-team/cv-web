import { useParams } from 'react-router-dom'
import { MutationFunction, useMutation } from '@apollo/client'
import { DELETE_AVATAR, UPLOAD_AVATAR } from '../graphql/profile'
import { UploadAvatarResult } from '../graphql/profile/profile.types'
import { USER } from '../graphql/users'

export const useAvatar = (): [MutationFunction<UploadAvatarResult>, MutationFunction, boolean] => {
  const { id } = useParams()
  const [uploadAvatar, { loading: uploading }] = useMutation<UploadAvatarResult>(UPLOAD_AVATAR, {
    refetchQueries: [{ query: USER, variables: { id } }]
  })
  const [deleteAvatar, { loading: deleting }] = useMutation(DELETE_AVATAR, {
    refetchQueries: [{ query: USER, variables: { id } }]
  })
  const loading = uploading || deleting
  return [uploadAvatar, deleteAvatar, loading]
}
