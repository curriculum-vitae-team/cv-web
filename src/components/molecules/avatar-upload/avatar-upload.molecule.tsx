import { ChangeEvent, DragEvent } from 'react'
import { Badge, IconButton, Typography } from '@mui/material'
import { Close, FileUploadOutlined } from '@mui/icons-material'
import { AvatarUploadProps } from './avatar-upload.types'
import * as Styled from './avatar-upload.styles'

export const AvatarUpload = ({ user, onUpload, onDelete }: AvatarUploadProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target
    if (files) {
      onUpload(files[0])
    }
  }

  const handleDragOver = (event: DragEvent) => {
    event.preventDefault()
  }

  const handleDrop = (event: DragEvent) => {
    event.preventDefault()
    onUpload(event.dataTransfer.files[0])
  }

  return (
    <Styled.AvatarUpload>
      <Badge
        badgeContent={
          user.profile.avatar && (
            <IconButton>
              <Close onClick={onDelete} />
            </IconButton>
          )
        }
      >
        <Styled.Avatar src={user.profile.avatar}>
          {user.profile.full_name
            ? user.profile.first_name?.[0] + user.profile.last_name?.[0]
            : user.email[0]}
        </Styled.Avatar>
      </Badge>
      <Styled.Label onDragOver={handleDragOver} onDrop={handleDrop}>
        <Typography variant="h6">
          <FileUploadOutlined fontSize="large" sx={{ mr: 2 }} />
          UPLOAD AVATAR IMAGE
        </Typography>
        <Typography variant="subtitle1" color="GrayText">
          png, jpg or gif no more than 0.5MB
        </Typography>
        <Styled.Input
          type="file"
          accept=".png, .jpg, .jpeg, .gif"
          size={500}
          onChange={handleChange}
        />
      </Styled.Label>
    </Styled.AvatarUpload>
  )
}
