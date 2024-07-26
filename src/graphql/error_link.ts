import { onError } from '@apollo/client/link/error'
import { addNotification } from './notifications'
import { authService } from './auth/auth.service'

export const errorLink = onError(({ graphQLErrors, networkError }) => {
  const tokenError = graphQLErrors?.some(({ message }) => {
    return message === 'Unauthorized'
  })

  if (tokenError) {
    authService.logout()
    addNotification('Session expired', 'error')
  }

  if (networkError) {
    addNotification(networkError.message, 'error')
  }
})
