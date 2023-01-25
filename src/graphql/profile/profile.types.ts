export type AvatarInput = {
  base64: string | ArrayBuffer | null
  type: string
  size: number
}

export type UploadAvatarResult = {
  uploadAvatar: string
}
