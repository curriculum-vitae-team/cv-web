import { useMutation, useQuery } from '@apollo/client'
import { CvInput } from 'cv-graphql'
import { CREATE_CV, CV, CVS, DELETE_CV, UPDATE_CV } from 'graphql/cvs'
import { CVsResult, CreateCvResult, CvResult, UpdateCvResult } from 'graphql/cvs/cvs.types'

export const useCvs = () => {
  const query = useQuery<CVsResult>(CVS)
  return { cvs: query.data?.cvs || [], ...query }
}

export const useCv = (cvId: string) => {
  const query = useQuery<CvResult>(CV, { variables: { cvId } })
  return { cv: query.data?.cv, ...query }
}

export const useCvCreate = () => {
  return useMutation<CreateCvResult, { cv: CvInput }>(CREATE_CV, {
    refetchQueries: [CVS]
  })
}

export const useCvUpdate = () => {
  return useMutation<UpdateCvResult, { id: string; cv: CvInput }>(UPDATE_CV)
}

export const useCvDelete = (cvId: string) => {
  return useMutation<null, { cvId: string }>(DELETE_CV, {
    variables: {
      cvId
    },
    update(cache) {
      const id = cache.identify({ id: cvId, __typename: 'Cv' })
      cache.evict({ id })
      cache.gc()
    }
  })
}
