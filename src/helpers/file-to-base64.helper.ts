import { AvatarInput } from 'graphql/profile/profile.types'

export const fileToBase64 = (file: File): Promise<AvatarInput> => {
  const { type, size } = file
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve({ base64: reader.result, type, size })
    reader.onerror = (error) => reject(error)
  })
}
