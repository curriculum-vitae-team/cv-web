import { useMutation, useQuery } from '@apollo/client'
import {
  CreateCvInput,
  UpdateCvInput,
  ExportPdfInput,
  SkillMastery,
  AddCvSkillInput,
  UpdateCvSkillInput,
  DeleteCvInput,
  DeleteCvSkillInput
} from 'cv-graphql'
import { useMemo } from 'react'
import {
  ADD_CV_SKILL,
  CREATE_CV,
  CV,
  CVS,
  CV_SKILLS,
  DELETE_CV,
  DELETE_CV_SKILL,
  EXPORT_PDF,
  UPDATE_CV,
  UPDATE_CV_SKILL
} from 'graphql/cvs'
import {
  AddCvSkillResult,
  CVsResult,
  CreateCvResult,
  CvResult,
  DeleteCvSkillResult,
  ExportPdfResult,
  UpdateCvResult,
  UpdateCvSkillResult
} from 'graphql/cvs/cvs.types'
import { USER_CVS } from 'graphql/users'

export const useCvs = () => {
  const query = useQuery<CVsResult>(CVS)
  return { cvs: query.data?.cvs || [], ...query }
}

export const useCv = (cvId: string) => {
  const query = useQuery<CvResult>(CV, { variables: { cvId } })
  return { cv: query.data?.cv, ...query }
}

export const useCvSkills = (cvId: string) => {
  const query = useQuery<CvResult>(CV_SKILLS, { variables: { cvId } })
  const skills = query.data?.cv.skills || []

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

export const useCvCreate = () => {
  return useMutation<CreateCvResult, { cv: CreateCvInput }>(CREATE_CV, {
    refetchQueries: [CVS, USER_CVS]
  })
}

export const useCvUpdate = () => {
  return useMutation<UpdateCvResult, { cv: UpdateCvInput }>(UPDATE_CV)
}

export const useCvDelete = (cvId: string) => {
  return useMutation<null, { cv: DeleteCvInput }>(DELETE_CV, {
    variables: {
      cv: {
        cvId
      }
    },
    update(cache) {
      const id = cache.identify({ id: cvId, __typename: 'Cv' })
      cache.evict({ id })
      cache.gc()
    }
  })
}

export const useCvSkillAdd = () => {
  return useMutation<AddCvSkillResult, { skill: AddCvSkillInput }>(ADD_CV_SKILL)
}

export const useCvSkillUpdate = () => {
  return useMutation<UpdateCvSkillResult, { skill: UpdateCvSkillInput }>(UPDATE_CV_SKILL)
}

export const useCvSkillDelete = () => {
  return useMutation<DeleteCvSkillResult, { skill: DeleteCvSkillInput }>(DELETE_CV_SKILL)
}

export const usePdfExport = () => {
  return useMutation<ExportPdfResult, { pdf: ExportPdfInput }>(EXPORT_PDF)
}
