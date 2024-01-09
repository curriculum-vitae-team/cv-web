import { useMutation, useQuery } from '@apollo/client'
import { CreateSkillInput, DeleteResult, DeleteSkillInput, UpdateSkillInput } from 'cv-graphql'
import { CREATE_SKILL, DELETE_SKILL, SKILLS, UPDATE_SKILL } from 'graphql/skills'
import { CreateSkillResult, SkillsResult, UpdateSkillResult } from 'graphql/skills/skills.types'

export const useSkills = () => {
  const query = useQuery<SkillsResult>(SKILLS)
  return { skills: query.data?.skills || [], ...query }
}

export const useSkillCreate = () => {
  return useMutation<CreateSkillResult, { skill: CreateSkillInput }>(CREATE_SKILL, {
    refetchQueries: [SKILLS]
  })
}

export const useSkillUpdate = () => {
  return useMutation<UpdateSkillResult, { skill: UpdateSkillInput }>(UPDATE_SKILL, {
    refetchQueries: [SKILLS]
  })
}

export const useSkillDelete = (skillId: string) => {
  return useMutation<DeleteResult, { skill: DeleteSkillInput }>(DELETE_SKILL, {
    variables: {
      skill: {
        skillId
      }
    },
    update(cache) {
      const id = cache.identify({ id: skillId, __typename: 'Skill' })
      cache.evict({ id })
      cache.gc()
    }
  })
}
