import { useMutation, useQuery } from '@apollo/client'
import { CreateLanguageInput, DeleteLanguageInput, UpdateLanguageInput } from 'cv-graphql'
import { CREATE_LANGUAGE, DELETE_LANGUAGE, LANGUAGES, UPDATE_LANGUAGE } from 'graphql/languages'
import {
  CreateLanguageResult,
  LanguagesResult,
  UpdateLanguageResult
} from 'graphql/languages/languages.types'

export const useLanguages = () => {
  const query = useQuery<LanguagesResult>(LANGUAGES)
  return { languages: query.data?.languages || [], ...query }
}

export const useLanguageCreate = () => {
  return useMutation<CreateLanguageResult, { language: CreateLanguageInput }>(CREATE_LANGUAGE, {
    refetchQueries: [LANGUAGES]
  })
}

export const useLanguageUpdate = () => {
  return useMutation<UpdateLanguageResult, { language: UpdateLanguageInput }>(UPDATE_LANGUAGE)
}

export const useLanguageDelete = (languageId: string) => {
  const [deleteLanguage] = useMutation<null, { language: DeleteLanguageInput }>(DELETE_LANGUAGE, {
    variables: {
      language: { languageId }
    },
    update(cache) {
      const id = cache.identify({ id: languageId, __typename: 'Language' })
      cache.evict({ id })
      cache.gc()
    }
  })
  return [deleteLanguage]
}
