import { makeVar } from '@apollo/client'
import { INotificationsService, INotification } from './notifications.types'

class NotificationsService implements INotificationsService {
  notifications$ = makeVar<INotification[]>([])
  private id = 0

  addNotification(message: string, type: INotification['type'] = 'info') {
    const notifications = this.notifications$()
    const id = (this.id += 1)
    this.notifications$([...notifications, { id, type, message }])
    setTimeout(() => this.closeNotification(id), 5000)
  }

  closeNotification(id: number) {
    const notifications = this.notifications$()
    this.notifications$(notifications.filter((notification) => notification.id !== id))
  }
}

export const notificationsService = new NotificationsService()
