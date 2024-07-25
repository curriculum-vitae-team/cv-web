import { Cv, Profile } from 'cv-graphql'
import { useAuth } from './use-auth'

export const usePermission = () => {
  const { userId, isAdmin } = useAuth()

  const canUpdateProfile = (profile?: Profile) => {
    return isAdmin || profile?.id === userId
  }

  const canUpdateCv = (cv?: Cv) => {
    return isAdmin || cv?.user?.id === userId
  }

  return { canUpdateProfile, canUpdateCv }
}
