import { useMutation, useQuery } from '@apollo/client'
import { CREATE_SKILL, DELETE_SKILL, SKILLS, UPDATE_SKILL } from 'graphql/skills'
import { CreateSkillResult, SkillsResult, UpdateSkillResult } from 'graphql/skills/skills.types'

export const useSkills = () => {
  const query = useQuery<SkillsResult>(SKILLS)
  return { skills: query.data?.skills || [], ...query }
}

export const useSkillCreate = () => {
  return useMutation<CreateSkillResult>(CREATE_SKILL, {
    refetchQueries: [SKILLS]
  })
}

export const useSkillUpdate = () => {
  return useMutation<UpdateSkillResult>(UPDATE_SKILL, {
    refetchQueries: [SKILLS]
  })
}

export const useSkillDelete = (skillId: string) => {
  return useMutation(DELETE_SKILL, {
    variables: {
      id: skillId
    },
    update(cache) {
      const id = cache.identify({ id: skillId, __typename: 'Skill' })
      cache.evict({ id })
      cache.gc()
    }
  })
}
