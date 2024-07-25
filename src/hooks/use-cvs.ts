import { useMutation, useQuery } from '@apollo/client'
import {
  CreateCvInput,
  UpdateCvInput,
  ExportPdfInput,
  SkillMastery,
  AddCvSkillInput,
  UpdateCvSkillInput,
  DeleteCvInput,
  DeleteCvSkillInput,
  AddCvProjectInput,
  RemoveCvProjectInput,
  UpdateCvProjectInput
} from 'cv-graphql'
import { useMemo } from 'react'
import {
  ADD_CV_PROJECT,
  ADD_CV_SKILL,
  CREATE_CV,
  CV,
  CVS,
  CV_PROJECTS,
  CV_SKILLS,
  DELETE_CV,
  DELETE_CV_SKILL,
  EXPORT_PDF,
  REMOVE_CV_PROJECT,
  UPDATE_CV,
  UPDATE_CV_PROJECT,
  UPDATE_CV_SKILL
} from 'graphql/cvs'
import {
  AddCvProjectResult,
  AddCvSkillResult,
  CVsResult,
  CreateCvResult,
  CvResult,
  DeleteCvSkillResult,
  ExportPdfResult,
  RemoveCvProjectResult,
  UpdateCvProjectResult,
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
  const cv = query.data?.cv
  const skills = cv?.skills

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

  return { cv, skills: skills || [], groups, ...query }
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

export const useCvProjects = (cvId: string) => {
  const query = useQuery<CvResult>(CV_PROJECTS, { variables: { cvId } })
  const projects = query.data?.cv.projects || []

  return { projects, ...query }
}

export const useCvProjectAdd = () => {
  return useMutation<AddCvProjectResult, { project: AddCvProjectInput }>(ADD_CV_PROJECT)
}

export const useCvProjectUpdate = () => {
  return useMutation<UpdateCvProjectResult, { project: UpdateCvProjectInput }>(UPDATE_CV_PROJECT)
}

export const useCvProjectRemove = () => {
  return useMutation<RemoveCvProjectResult, { project: RemoveCvProjectInput }>(REMOVE_CV_PROJECT)
}

export const usePdfExport = () => {
  return useMutation<ExportPdfResult, { pdf: ExportPdfInput }>(EXPORT_PDF)
}
