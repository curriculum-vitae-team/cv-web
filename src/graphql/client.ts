import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import { authService } from './auth/auth.service'
import { notificationsService } from './notifications/notifications.service'

const httpLink = new HttpLink({
  uri: process.env.GRAPHQL_API_URL
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${authService.access_token$()}`
    }
  }
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message }) => {
      notificationsService.addNotification(message, 'error')
      if (message === 'Unauthorized') {
        authService.clearStorage()
      }
    })
  }
  if (networkError) {
    notificationsService.addNotification(networkError.message, 'error')
  }
})

export const client = new ApolloClient({
  link: from([authLink, errorLink, httpLink]),
  cache: new InMemoryCache()
})
