import { gql } from '@apollo/client'

export const PROFILE = gql`
  query Profile($profileId: ID!) {
    profile(profileId: $profileId) {
      id
      first_name
      last_name
      full_name
      avatar
    }
  }
`

export const PROFILE_SKILLS = gql`
  query ProfileSkills($profileId: ID!) {
    profile(profileId: $profileId) {
      id
      skills {
        name
        category
        mastery
      }
    }
  }
`

export const PROFILE_LANGUAGES = gql`
  query ProfileLanguages($profileId: ID!) {
    profile(profileId: $profileId) {
      id
      languages {
        language_name
        proficiency
      }
    }
  }
`

export const UPDATE_PROFILE = gql`
  mutation UpdateProfile($profile: UpdateProfileInput!) {
    updateProfile(profile: $profile) {
      id
      first_name
      last_name
    }
  }
`

export const ADD_PROFILE_SKILL = gql`
  mutation AddProfileSkill($skill: AddProfileSkillInput!) {
    addProfileSkill(skill: $skill) {
      id
      skills {
        name
        category
        mastery
      }
    }
  }
`

export const UPDATE_PROFILE_SKILL = gql`
  mutation UpdateProfileSkill($skill: UpdateProfileSkillInput!) {
    updateProfileSkill(skill: $skill) {
      id
      skills {
        name
        category
        mastery
      }
    }
  }
`

export const DELETE_PROFILE_SKILL = gql`
  mutation DeleteProfileSkill($skill: DeleteProfileSkillInput!) {
    deleteProfileSkill(skill: $skill) {
      id
      skills {
        name
        category
        mastery
      }
    }
  }
`

export const ADD_PROFILE_LANGUAGE = gql`
  mutation AddProfileLanguage($language: AddProfileLanguageInput!) {
    addProfileLanguage(profile: $language) {
      id
      languages {
        language_name
        proficiency
      }
    }
  }
`

export const UPDATE_PROFILE_LANGUAGE = gql`
  mutation UpdateProfileLanguage($language: UpdateProfileLanguageInput!) {
    updateProfileLanguage(profile: $language) {
      id
      languages {
        language_name
        proficiency
      }
    }
  }
`

export const DELETE_PROFILE_LANGUAGE = gql`
  mutation DeleteProfileLanguage($language: DeleteProfileLanguageInput!) {
    deleteProfileLanguage(profile: $language) {
      id
      languages {
        language_name
        proficiency
      }
    }
  }
`

export const UPLOAD_AVATAR = gql`
  mutation UploadAvatar($avatar: UploadAvatarInput!) {
    uploadAvatar(avatar: $avatar)
  }
`

export const DELETE_AVATAR = gql`
  mutation DeleteAvatar($avatar: DeleteAvatarInput!) {
    deleteAvatar(avatar: $avatar)
  }
`
