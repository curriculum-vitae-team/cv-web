import { MutationFunction, useMutation, useQuery } from '@apollo/client'
import { Language } from 'cv-graphql'
import { CREATE_LANGUAGE, DELETE_LANGUAGE, LANGUAGES, UPDATE_LANGUAGE } from 'graphql/languages'
import {
  CreateLanguageResult,
  LanguagesResult,
  UpdateLanguageResult
} from 'graphql/languages/languages.types'

export const useLanguages = (): [Language[], boolean] => {
  const { data, loading } = useQuery<LanguagesResult>(LANGUAGES)
  return [data?.languages || [], loading]
}

export const useLanguageCreate = (): [MutationFunction<CreateLanguageResult>, boolean] => {
  const [createLanguage, { loading }] = useMutation<CreateLanguageResult>(CREATE_LANGUAGE, {
    refetchQueries: [LANGUAGES]
  })
  return [createLanguage, loading]
}

export const useLanguageUpdate = (): [MutationFunction<UpdateLanguageResult>, boolean] => {
  const [updateLanguage, { loading }] = useMutation<UpdateLanguageResult>(UPDATE_LANGUAGE, {
    refetchQueries: [LANGUAGES]
  })
  return [updateLanguage, loading]
}

export const useLanguageDelete = (item: Language) => {
  const [deleteLanguage] = useMutation(DELETE_LANGUAGE, {
    variables: {
      id: item.id
    },
    update(cache) {
      const id = cache.identify({ id: item.id, __typename: 'Language' })
      cache.evict({ id })
      cache.gc()
    }
  })
  return [deleteLanguage]
}
