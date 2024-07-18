import { HttpLink } from '@apollo/client'

export const httpLink = new HttpLink({
  uri: process.env.GRAPHQL_API_URL
})
