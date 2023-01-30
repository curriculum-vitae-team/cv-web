import { ReactiveVar } from '@apollo/client'

export interface INotification {
  id: number
  type: 'error' | 'info' | 'success'
  message: string
}

export interface INotificationsService {
  notifications$: ReactiveVar<INotification[]>
  addNotification: (message: string, type?: INotification['type']) => void
  closeNotification: (id: number) => void
}
