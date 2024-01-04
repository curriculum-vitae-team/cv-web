import { MutationFunction, useMutation, useQuery } from '@apollo/client'
import { Skill } from 'cv-graphql'
import { CREATE_SKILL, DELETE_SKILL, SKILLS, UPDATE_SKILL } from 'graphql/skills'
import { CreateSkillResult, SkillsResult, UpdateSkillResult } from 'graphql/skills/skills.types'

export const useSkills = (): [Skill[], boolean] => {
  const { data, loading } = useQuery<SkillsResult>(SKILLS)
  return [data?.skills || [], loading]
}

export const useSkillCreate = (): [MutationFunction<CreateSkillResult>, boolean] => {
  const [createSkill, { loading }] = useMutation<CreateSkillResult>(CREATE_SKILL, {
    refetchQueries: [SKILLS]
  })
  return [createSkill, loading]
}

export const useSkillUpdate = (): [MutationFunction<UpdateSkillResult>, boolean] => {
  const [updateSkill, { loading }] = useMutation<UpdateSkillResult>(UPDATE_SKILL, {
    refetchQueries: [SKILLS]
  })
  return [updateSkill, loading]
}

export const useSkillDelete = (item: Skill) => {
  const [deleteSkill] = useMutation(DELETE_SKILL, {
    variables: {
      id: item.id
    },
    update(cache) {
      const id = cache.identify({ id: item.id, __typename: 'Skill' })
      cache.evict({ id })
      cache.gc()
    }
  })
  return [deleteSkill]
}
