import { onError } from '@apollo/client/link/error'
import { addNotification } from './notifications'
import { logout } from './auth/session'

export const errorLink = onError(({ graphQLErrors, networkError }) => {
  const tokenError = graphQLErrors?.some(({ message }) => {
    return message === 'Unauthorized'
  })

  if (tokenError) {
    logout()
    addNotification('Session expired', 'error')
  }

  if (networkError) {
    addNotification(networkError.message, 'error')
  }
})
