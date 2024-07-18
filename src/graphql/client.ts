import { ApolloClient, InMemoryCache, from } from '@apollo/client'
import { authLink } from './auth_link'
import { errorLink } from './error_link'
import { httpLink } from './http_link'

export const client = new ApolloClient({
  connectToDevTools: false,
  link: from([authLink, errorLink, httpLink]),
  cache: new InMemoryCache()
})
