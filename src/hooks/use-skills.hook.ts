import { MutationFunction, useMutation, useQuery } from '@apollo/client'
import { CREATE_SKILL, DELETE_SKILL, SKILLS } from '@graphql/skills'
import { CreateSkillResult, SkillsResult } from '@graphql/skills/skills.types'
import { ISkill } from '@interfaces/skill.interface'

export const useSkills = (): [ISkill[], boolean] => {
  const { data, loading } = useQuery<SkillsResult>(SKILLS)
  return [data?.skills || [], loading]
}

export const useSkillCreate = (): [MutationFunction<CreateSkillResult>, boolean] => {
  const [createSkill, { loading }] = useMutation<CreateSkillResult>(CREATE_SKILL, {
    refetchQueries: [SKILLS]
  })
  return [createSkill, loading]
}

export const useSkillDelete = (item: ISkill) => {
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
