import { onError } from '@apollo/client/link/error'
import { notificationsService } from './notifications/notifications.service'
import { authService } from './auth/auth.service'

export const errorLink = onError(({ graphQLErrors, networkError }) => {
  graphQLErrors?.forEach(({ message }) => {
    notificationsService.addNotification(message, 'error')

    if (message === 'Unauthorized') {
      authService.logout()
    }
  })

  if (networkError) {
    notificationsService.addNotification(networkError.message, 'error')
  }
})
