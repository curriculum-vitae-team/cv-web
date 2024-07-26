import { makeVar } from '@apollo/client'

type Notification = {
  id: number
  type: 'error' | 'info' | 'success'
  message: string
}

class NotificationsService {
  notifications$ = makeVar<Notification[]>([])
  private id = 0

  addNotification(message: string, type: Notification['type'] = 'info') {
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
