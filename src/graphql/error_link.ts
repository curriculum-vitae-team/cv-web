import { onError } from '@apollo/client/link/error'
import { addNotification } from './notifications'
import { logout } from './auth/session'

export const networkErrorLink = onError(({ networkError }) => {
  if (networkError) {
    addNotification(networkError.message, 'error')
  }
})

export const authErrorLink = onError(({ graphQLErrors }) => {
  const tokenError = graphQLErrors?.some(({ message }) => {
    return message === 'Unauthorized'
  })

  if (tokenError) {
    logout()
    addNotification('Session expired', 'error')
  }
})
