import { Profile } from 'cv-graphql'

export type ProfileResult = {
  profile: Profile
}

export type UpdateProfileResult = {
  updateProfile: Profile
}

export type AddProfileSkillResult = {
  addProfileSkill: Profile
}

export type UpdateProfileSkillResult = {
  updateProfileSkill: Profile
}

export type DeleteProfileSkillResult = {
  deleteProfileSkill: Profile
}

export type AddProfileLanguageResult = {
  addProfileLanguage: Profile
}

export type UpdateProfileLanguageResult = {
  updateProfileLanguage: Profile
}

export type DeleteProfileLanguageResult = {
  deleteProfileLanguage: Profile
}

export type UploadAvatarResult = {
  uploadAvatar: string
}
