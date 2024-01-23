import { useMutation, useQuery } from '@apollo/client'
import {
  AddProfileLanguageInput,
  DeleteProfileLanguageInput,
  UpdateProfileLanguageInput
} from 'cv-graphql'
import {
  ADD_PROFILE_LANGUAGE,
  DELETE_PROFILE_LANGUAGE,
  PROFILE_LANGUAGES,
  UPDATE_PROFILE_LANGUAGE
} from 'graphql/profile'
import {
  AddProfileLanguageResult,
  DeleteProfileLanguageResult,
  ProfileResult,
  UpdateProfileLanguageResult
} from 'graphql/profile/profile.types'

export const useProfileLanguages = (userId: string) => {
  const query = useQuery<ProfileResult>(PROFILE_LANGUAGES, { variables: { userId } })
  const languages = query.data?.profile.languages || []

  return { languages, ...query }
}

export const useProfileLanguageAdd = () => {
  return useMutation<AddProfileLanguageResult, { language: AddProfileLanguageInput }>(
    ADD_PROFILE_LANGUAGE
  )
}

export const useProfileLanguageUpdate = () => {
  return useMutation<UpdateProfileLanguageResult, { language: UpdateProfileLanguageInput }>(
    UPDATE_PROFILE_LANGUAGE
  )
}

export const useProfileLanguageDelete = () => {
  return useMutation<DeleteProfileLanguageResult, { language: DeleteProfileLanguageInput }>(
    DELETE_PROFILE_LANGUAGE
  )
}
