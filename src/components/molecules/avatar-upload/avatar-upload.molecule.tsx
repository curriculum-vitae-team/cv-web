import { ChangeEvent, DragEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { Badge, IconButton, Typography } from '@mui/material'
import { Close, FileUploadOutlined } from '@mui/icons-material'
import { useAvatarUpload, useAvatarDelete } from 'hooks/use-avatar'
import { fileToBase64 } from 'helpers/file-to-base64.helper'
import { AvatarUploadProps } from './avatar-upload.types'
import * as Styled from './avatar-upload.styles'

export const AvatarUpload = ({ user }: AvatarUploadProps) => {
  const { t } = useTranslation()
  const [uploadAvatar, { loading: isLoading }] = useAvatarUpload()
  const [deleteAvatar, { loading: isDeleting }] = useAvatarDelete()
  const profileId = user.profile.id

  const handleUpload = (file: File) => {
    fileToBase64(file).then((avatar) =>
      uploadAvatar({ variables: { avatar: { profileId, ...avatar } } })
    )
  }

  const handleDelete = () => {
    deleteAvatar({ variables: { avatar: { profileId } } })
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target
    if (files) {
      handleUpload(files[0])
    }
  }

  const handleDragOver = (event: DragEvent) => {
    event.preventDefault()
  }

  const handleDrop = (event: DragEvent) => {
    event.preventDefault()
    handleUpload(event.dataTransfer.files[0])
  }

  return (
    <Styled.AvatarUpload>
      <Badge
        badgeContent={
          user.profile.avatar && (
            <IconButton disabled={isDeleting} onClick={handleDelete}>
              <Close />
            </IconButton>
          )
        }
      >
        <Styled.Avatar src={user.profile.avatar || ''}>
          {user.profile.full_name
            ? user.profile.first_name?.[0] || '' + user.profile.last_name?.[0] || ''
            : user.email[0]}
        </Styled.Avatar>
      </Badge>
      <Styled.Label onDragOver={handleDragOver} onDrop={handleDrop}>
        <Typography variant="h6">
          <FileUploadOutlined fontSize="large" sx={{ mr: 2 }} />
          {t('Upload avatar image')}
        </Typography>
        <Typography variant="subtitle1" color="GrayText">
          {t('png, jpg or gif no more than 0.5MB')}
        </Typography>
        <Styled.Input
          type="file"
          accept=".png, .jpg, .jpeg, .gif"
          size={500}
          disabled={isLoading}
          onChange={handleChange}
        />
      </Styled.Label>
    </Styled.AvatarUpload>
  )
}
