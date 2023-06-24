import { ISkill } from '@interfaces/skill.interface'

export type CreateSkillFormValues = Omit<ISkill, 'id'>
