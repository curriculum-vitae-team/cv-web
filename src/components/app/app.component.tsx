import { ApolloProvider } from '@apollo/client'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { client } from '../../graphql/client'
import { theme } from './app.theme'
import { Router } from '../router'
import { Notifications } from '../features/notifications'
import { Dialogs } from '../features/dialogs'

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router />
        <Notifications />
        <Dialogs />
      </ThemeProvider>
    </ApolloProvider>
  )
}
