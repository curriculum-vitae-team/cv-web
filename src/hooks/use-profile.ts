import { useMutation, useQuery } from '@apollo/client'
import { UpdateProfileInput } from 'cv-graphql'
import { UPDATE_PROFILE, PROFILE } from 'graphql/profile'
import { UpdateProfileResult, ProfileResult } from 'graphql/profile/profile.types'
import { USER } from 'graphql/users'

export const useProfile = (userId: string) => {
  const query = useQuery<ProfileResult>(PROFILE, { variables: { userId }, skip: !userId })
  return { profile: query.data?.profile, ...query }
}

export const useProfileUpdate = () => {
  return useMutation<UpdateProfileResult, { profile: UpdateProfileInput }>(UPDATE_PROFILE, {
    refetchQueries: [USER]
  })
}
