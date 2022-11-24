import { ISkillMastery } from './skill.interface'
import { ILanguageProficiency } from './language.interface'

export interface IProfile {
  id: string
  first_name: string
  last_name: string
  full_name: string
  avatar: string
  skills: ISkillMastery[]
  languages: ILanguageProficiency[]
}
