import { memo, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { useMutation, useQuery } from '@apollo/client'
import { CircularProgress, Typography } from '@mui/material'
import { USER } from '../../../graphql/users'
import { UserResult } from '../../../graphql/users/users.types'
import * as Styled from './employee-profile.styles'
import { AvatarUpload } from '../../molecules/avatar-upload'
import { DELETE_AVATAR, UPLOAD_AVATAR } from '../../../graphql/profile'
import { UploadAvatarResult } from '../../../graphql/profile/profile.types'
import { fileToBase64 } from '../../../helpers/file-to-base64.helper'
import { authService } from '../../../graphql/auth/auth.service'

const EmployeeProfile = () => {
  const { id } = useParams()
  const { data, loading } = useQuery<UserResult>(USER, { variables: { id } })
  const profileId = data?.user.profile.id
  const [uploadAvatar] = useMutation<UploadAvatarResult>(UPLOAD_AVATAR, {
    refetchQueries: [{ query: USER, variables: { id } }]
  })
  const [deleteAvatar] = useMutation(DELETE_AVATAR, {
    refetchQueries: [{ query: USER, variables: { id } }]
  })

  const handleUpload = useCallback(
    (file: File) => {
      fileToBase64(file)
        .then((avatar) => uploadAvatar({ variables: { id: profileId, avatar } }))
        .then(({ data }) => data && authService.updateAvatar(data.uploadAvatar))
    },
    [profileId]
  )

  const handleDelete = useCallback(() => {
    deleteAvatar({ variables: { id: profileId } }).then(() => authService.updateAvatar(''))
  }, [profileId])

  if (loading || !data) {
    return <CircularProgress />
  }

  return (
    <Styled.Profile>
      <AvatarUpload user={data.user} onUpload={handleUpload} onDelete={handleDelete} />
      <Typography variant="h5">{data.user.profile.full_name}</Typography>
      <Typography>{data.user.email}</Typography>
      <Typography>A member since {new Date(+data.user.created_at).toDateString()}</Typography>
      <Typography>
        {data.user.department_name || 'No Department'} / {data.user.position_name || 'No Position'}
      </Typography>
    </Styled.Profile>
  )
}

export default memo(EmployeeProfile)
