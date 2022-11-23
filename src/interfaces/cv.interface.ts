import { IUser } from './user.interface'
import { IProject } from './project.interface'

export interface ICV {
  id: string
  name: string
  description: string
  user: Omit<IUser, 'cvs'>
  projects: IProject[]
  skills: []
  languages: []
  is_template: boolean
}
