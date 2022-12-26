import { ReactiveVar } from '@apollo/client'
import { INotification } from '../../interfaces/notification.interface'

export interface INotificationsService {
  notifications$: ReactiveVar<INotification[]>
  addNotification: (message: string, type?: INotification['type']) => void
  closeNotification: (id: number) => void
}
