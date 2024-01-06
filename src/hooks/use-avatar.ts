import { useParams } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { DeleteAvatarInput, UploadAvatarInput } from 'cv-graphql'
import { DELETE_AVATAR, UPLOAD_AVATAR } from 'graphql/profile'
import { UploadAvatarResult } from 'graphql/profile/profile.types'
import { USER } from 'graphql/users'

export const useAvatarUpload = () => {
  const { userId } = useParams()
  return useMutation<UploadAvatarResult, { avatar: UploadAvatarInput }>(UPLOAD_AVATAR, {
    refetchQueries: [{ query: USER, variables: { userId } }]
  })
}

export const useAvatarDelete = () => {
  const { userId } = useParams()
  return useMutation<null, { avatar: DeleteAvatarInput }>(DELETE_AVATAR, {
    refetchQueries: [{ query: USER, variables: { userId } }]
  })
}
