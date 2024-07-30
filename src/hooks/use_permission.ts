import { Cv, Profile, User } from 'cv-graphql'
import { useAuth } from './use-auth'

export const usePermission = () => {
  const { userId, isAdmin } = useAuth()

  const canCreateUser = () => {
    return isAdmin
  }

  const canUpdateUser = (user?: Partial<User>) => {
    return isAdmin || user?.id === userId
  }

  const canDeleteUser = (user?: User) => {
    return isAdmin && user?.id !== userId
  }

  const canUpdateProfile = (profile?: Profile) => {
    return isAdmin || profile?.id === userId
  }

  const canUpdateCv = (cv?: Cv) => {
    return isAdmin || cv?.user?.id === userId
  }

  return { canCreateUser, canUpdateUser, canDeleteUser, canUpdateProfile, canUpdateCv }
}
