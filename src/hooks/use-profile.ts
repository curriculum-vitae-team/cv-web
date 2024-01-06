import { useMutation, useQuery } from '@apollo/client'
import { AddProfileSkillInput, UpdateProfileInput, UpdateProfileSkillInput } from 'cv-graphql'
import {
  UPDATE_PROFILE,
  ADD_PROFILE_SKILL,
  UPDATE_PROFILE_SKILL,
  PROFILE,
  PROFILE_SKILLS
} from 'graphql/profile'
import {
  UpdateProfileResult,
  AddProfileSkillResult,
  UpdateProfileSkillResult,
  ProfileResult
} from 'graphql/profile/profile.types'
import { USER, USER_FULL_NAME } from 'graphql/users'

export const useProfile = (profileId: string) => {
  const query = useQuery<ProfileResult>(PROFILE, { variables: { profileId } })
  return { profile: query.data?.profile, ...query }
}

export const useProfileSkills = (profileId: string) => {
  const query = useQuery<ProfileResult>(PROFILE_SKILLS, { variables: { profileId } })
  return { skills: query.data?.profile.skills || [], ...query }
}

export const useProfileUpdate = () => {
  return useMutation<UpdateProfileResult, { profile: UpdateProfileInput }>(UPDATE_PROFILE, {
    refetchQueries: [USER, USER_FULL_NAME]
  })
}

export const useProfileSkillAdd = () => {
  return useMutation<AddProfileSkillResult, { skill: AddProfileSkillInput }>(ADD_PROFILE_SKILL)
}

export const useProfileSkillUpdate = () => {
  return useMutation<UpdateProfileSkillResult, { skill: UpdateProfileSkillInput }>(
    UPDATE_PROFILE_SKILL
  )
}
