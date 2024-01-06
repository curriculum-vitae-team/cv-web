import { useMutation, useQuery } from '@apollo/client'
import { CvInput } from 'cv-graphql'
import { CREATE_CV, CVS, DELETE_CV } from 'graphql/cvs'
import { CVsResult, CreateCvResult } from 'graphql/cvs/cvs.types'

export const useCvs = () => {
  const query = useQuery<CVsResult>(CVS)
  return { cvs: query.data?.cvs || [], ...query }
}

export const useCvCreate = () => {
  return useMutation<CreateCvResult, { cv: CvInput }>(CREATE_CV, {
    refetchQueries: [CVS]
  })
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
