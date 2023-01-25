import { gql } from '@apollo/client'

export const UPLOAD_AVATAR = gql`
  mutation UploadAvatar($id: ID!, $avatar: AvatarInput!) {
    uploadAvatar(id: $id, avatar: $avatar)
  }
`

export const DELETE_AVATAR = gql`
  mutation DeleteAvatar($id: ID!) {
    deleteAvatar(id: $id)
  }
`
