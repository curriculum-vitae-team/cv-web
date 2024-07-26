import { makeVar } from '@apollo/client'

type Notification = {
  type: 'error' | 'info' | 'success'
  message: string
}

export const notification$ = makeVar<Notification | null>(null)

export const addNotification = (message: string, type: Notification['type'] = 'info') => {
  notification$({ message, type })
}

export const closeNotification = () => {
  notification$(null)
}
