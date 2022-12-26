import { ApolloProvider } from '@apollo/client'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { client } from '../../graphql/client'
import { theme } from './app.theme'
import { Router } from '../router'
import { Notifications } from '../features/notifications'

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <Notifications />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </ApolloProvider>
  )
}
