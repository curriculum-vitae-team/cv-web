import { IUser } from '../../../interfaces/user.interface'

export type AvatarUploadProps = {
  user: IUser
  onUpload: (files: File) => void
  onDelete: () => void
}
