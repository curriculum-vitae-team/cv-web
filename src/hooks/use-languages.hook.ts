import { MutationFunction, useMutation, useQuery } from '@apollo/client'
import { CREATE_LANGUAGE, DELETE_LANGUAGE, LANGUAGES } from '@graphql/languages'
import { CreateLanguageResult, LanguagesResult } from '@graphql/languages/languages.types'
import { ILanguage } from '@interfaces/language.interface'

export const useLanguages = (): [ILanguage[], boolean] => {
  const { data, loading } = useQuery<LanguagesResult>(LANGUAGES)
  return [data?.languages || [], loading]
}

export const useLanguageCreate = (): [MutationFunction<CreateLanguageResult>, boolean] => {
  const [createLanguage, { loading }] = useMutation<CreateLanguageResult>(CREATE_LANGUAGE, {
    refetchQueries: [LANGUAGES]
  })
  return [createLanguage, loading]
}

export const useLanguageDelete = (item: ILanguage) => {
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
