import { onError } from '@apollo/client/link/error'
import { notificationsService } from './notifications'
import { authService } from './auth/auth.service'

export const errorLink = onError(({ graphQLErrors, networkError }) => {
  const tokenError = graphQLErrors?.some(({ message }) => {
    return message === 'Unauthorized'
  })

  if (tokenError) {
    authService.logout()
    notificationsService.addNotification('Session expired', 'error')
  }

  if (networkError) {
    notificationsService.addNotification(networkError.message, 'error')
  }
})
