import type { ChangeEvent, DragEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { Badge, IconButton, Typography } from '@mui/material'
import { Close, FileUploadOutlined } from '@mui/icons-material'
import { useAvatarUpload, useAvatarDelete } from 'hooks/use-avatar'
import { fileToBase64 } from 'helpers/file-to-base64.helper'
import { useAuth } from 'hooks/use-auth'
import type { AvatarUploadProps } from './avatar-upload.types'
import * as Styled from './avatar-upload.styles'

export const AvatarUpload = ({ user }: AvatarUploadProps) => {
  const { t } = useTranslation()
  const [uploadAvatar, { loading: uploading }] = useAvatarUpload()
  const [deleteAvatar, { loading: deleting }] = useAvatarDelete()
  const loading = uploading || deleting
  const { userId, isAdmin } = useAuth()
  const isOwnProfile = user.id === userId
  const canUpload = isAdmin || isOwnProfile

  const handleUpload = (files: FileList | null) => {
    const file = files?.[0]

    if (!file) {
      return
    }

    fileToBase64(file).then((avatar) =>
      uploadAvatar({ variables: { avatar: { userId: user.id, ...avatar } } })
    )
  }

  const handleDelete = () => {
    deleteAvatar({ variables: { avatar: { userId: user.id } } })
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleUpload(event.target.files)
  }

  const handleDragOver = (event: DragEvent) => {
    event.preventDefault()
  }

  const handleDrop = (event: DragEvent) => {
    event.preventDefault()
    handleUpload(event.dataTransfer.files)
  }

  return (
    <Styled.AvatarUpload>
      <Badge
        badgeContent={
          user.profile.avatar &&
          canUpload && (
            <IconButton disabled={loading} onClick={handleDelete}>
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
      {canUpload && (
        <Styled.Label onDragOver={handleDragOver} onDrop={handleDrop}>
          <Typography variant="h6">
            <FileUploadOutlined fontSize="large" sx={{ mr: 2 }} />
            {t('Upload avatar image')}
          </Typography>
          <Typography variant="subtitle1">{t('png, jpg or gif no more than 0.5MB')}</Typography>
          <Styled.Input
            type="file"
            accept=".png, .jpg, .jpeg, .gif"
            size={500}
            disabled={loading}
            onChange={handleChange}
          />
        </Styled.Label>
      )}
    </Styled.AvatarUpload>
  )
}
