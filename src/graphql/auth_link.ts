import { setContext } from '@apollo/client/link/context'
import { ApolloClient, FetchResult, InMemoryCache, from } from '@apollo/client'
import { UpdateTokenResult } from 'cv-graphql'
import { accessToken$, refreshToken$, session$, setSession } from './auth/session'
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
          authorization: `Bearer ${refreshToken$()}`
        }
      }
    })
  }

  const { data } = await promise

  if (data) {
    setSession(data.updateToken)
    promise = null
  }
}

const verifyToken = async () => {
  const session = session$()
  const requestTimestamp = Math.floor(Date.now() / 1000) + 5

  if (session && session.exp < requestTimestamp) {
    await updateToken()
  }
}

export const authLink = setContext(async (_, { headers }) => {
  await verifyToken()

  return {
    headers: {
      ...headers,
      authorization: `Bearer ${accessToken$()}`
    }
  }
})
