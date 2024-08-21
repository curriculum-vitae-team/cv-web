import { useMutation, useQuery } from '@apollo/client'
import { AddProfileSkillInput, DeleteProfileSkillInput, UpdateProfileSkillInput } from 'cv-graphql'
import {
  ADD_PROFILE_SKILL,
  DELETE_PROFILE_SKILL,
  PROFILE_SKILLS,
  UPDATE_PROFILE_SKILL
} from 'graphql/profile'
import {
  AddProfileSkillResult,
  DeleteProfileSkillResult,
  ProfileResult,
  UpdateProfileSkillResult
} from 'graphql/profile/profile.types'

export const useProfileSkills = (userId: string) => {
  const query = useQuery<ProfileResult>(PROFILE_SKILLS, { variables: { userId } })
  const profile = query.data?.profile

  return { profile, skills: profile?.skills || [], ...query }
}

export const useProfileSkillAdd = () => {
  return useMutation<AddProfileSkillResult, { skill: AddProfileSkillInput }>(ADD_PROFILE_SKILL)
}

export const useProfileSkillUpdate = () => {
  return useMutation<UpdateProfileSkillResult, { skill: UpdateProfileSkillInput }>(
    UPDATE_PROFILE_SKILL
  )
}

export const useProfileSkillDelete = () => {
  return useMutation<DeleteProfileSkillResult, { skill: DeleteProfileSkillInput }>(
    DELETE_PROFILE_SKILL
  )
}
