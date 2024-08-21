import { useMutation, useQuery } from '@apollo/client'
import type {
  CreateSkillInput,
  DeleteResult,
  DeleteSkillInput,
  SkillMastery,
  UpdateSkillInput
} from 'cv-graphql'
import { CREATE_SKILL, DELETE_SKILL, SKILLS, SKILL_CATEGORIES, UPDATE_SKILL } from 'graphql/skills'
import {
  CreateSkillResult,
  SkillCategoriesResult,
  SkillsResult,
  UpdateSkillResult
} from 'graphql/skills/skills.types'
import { mapSkillsIntoCategories } from 'helpers/group_skill_categories'

export const useSkills = () => {
  const query = useQuery<SkillsResult>(SKILLS)
  const skills = query.data?.skills || []

  return { skills, ...query }
}

export const useSkillCategories = () => {
  const query = useQuery<SkillCategoriesResult>(SKILL_CATEGORIES)

  return { categories: query.data?.skillCategories || [], ...query }
}

export const useSkillsWithCategories = (skills: SkillMastery[]) => {
  const { categories } = useSkillCategories()
  const { skillCategories, skillCategoriesDetails } = mapSkillsIntoCategories(skills, categories)

  return { skillCategories, skillCategoriesDetails }
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
