import { useMutation, useQuery } from '@apollo/client'
import {
  AddProfileSkillInput,
  SkillMastery,
  UpdateProfileInput,
  UpdateProfileSkillInput
} from 'cv-graphql'
import { useMemo } from 'react'
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
  const skills = query.data?.profile.skills || []

  const groups = useMemo(() => {
    return skills.reduce<Record<string, SkillMastery[]>>((acc, cur) => {
      const category = cur.category || 'Other'
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category].push(cur)
      return acc
    }, {})
  }, [skills])

  return { skills, groups, ...query }
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
