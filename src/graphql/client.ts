import { ApolloClient, InMemoryCache, from } from '@apollo/client'
import { authLink } from './auth_link'
import { authErrorLink, networkErrorLink } from './error_link'
import { httpLink } from './http_link'

export const client = new ApolloClient({
  connectToDevTools: false,
  link: from([authLink, authErrorLink, networkErrorLink, httpLink]),
  cache: new InMemoryCache()
})

export const publicClient = new ApolloClient({
  connectToDevTools: false,
  link: from([networkErrorLink, httpLink]),
  cache: new InMemoryCache()
})
