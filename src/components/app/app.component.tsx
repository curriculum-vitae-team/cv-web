import { ApolloProvider } from '@apollo/client'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { client } from '@graphql/client'
import { Notifications } from '@features/notifications'
import { Dialogs } from '@features/dialogs'
import { BreadcrumbsProvider } from '@features/breadcrumbs-context'
import { theme } from './app.theme'
import { Router } from '../router'

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BreadcrumbsProvider>
          <Router />
        </BreadcrumbsProvider>
        <Notifications />
        <Dialogs />
      </ThemeProvider>
    </ApolloProvider>
  )
}
