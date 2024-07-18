import { setContext } from '@apollo/client/link/context'
import { ApolloClient, FetchResult, InMemoryCache, from } from '@apollo/client'
import { UpdateTokenResult } from 'cv-graphql'
import { parseJwt } from 'helpers/parse-jwt'
import { authService } from './auth/auth.service'
import { errorLink } from './error_link'
import { httpLink } from './http_link'
import { UPDATE_TOKEN } from './auth'

const client = new ApolloClient({
  connectToDevTools: false,
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache()
})

let promise: Promise<FetchResult<{ updateToken: UpdateTokenResult }>> | null = null

const updateToken = async () => {
  if (!promise) {
    promise = client.mutate({
      mutation: UPDATE_TOKEN,
      context: {
        headers: {
          authorization: `Bearer ${authService.refresh_token$()}`
        }
      }
    })
  }

  const { data } = await promise

  if (data) {
    authService.setToken(data.updateToken)
    promise = null
  }
}

const verifyToken = async () => {
  const jwtParsed = parseJwt(authService.access_token$())
  const requestTimestamp = Math.floor(Date.now() / 1000) + 5

  if (jwtParsed && jwtParsed.exp < requestTimestamp) {
    await updateToken()
  }
}

export const authLink = setContext(async (_, { headers }) => {
  await verifyToken()

  return {
    headers: {
      ...headers,
      authorization: `Bearer ${authService.access_token$()}`
    }
  }
})
