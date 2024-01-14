import { ReactiveVar } from '@apollo/client'

export interface IThemeService {
  theme$: ReactiveVar<string>
}
