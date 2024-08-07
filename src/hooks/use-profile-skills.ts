import { useMutation, useQuery } from '@apollo/client'
import {
  AddProfileSkillInput,
  DeleteProfileSkillInput,
  SkillMastery,
  UpdateProfileSkillInput
} from 'cv-graphql'
import { useMemo } from 'react'
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
  const skills = profile?.skills

  const groups = useMemo(() => {
    if (!skills) {
      return {}
    }

    return skills.reduce<Record<string, SkillMastery[]>>((acc, cur) => {
      const category = cur.category || 'Other'
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category].push(cur)
      return acc
    }, {})
  }, [skills])

  return { profile, skills: skills || [], groups, ...query }
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
