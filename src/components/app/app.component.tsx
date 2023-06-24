import { ApolloProvider } from '@apollo/client'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
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
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <CssBaseline />
          <BreadcrumbsProvider>
            <Router />
          </BreadcrumbsProvider>
          <Notifications />
          <Dialogs />
        </LocalizationProvider>
      </ThemeProvider>
    </ApolloProvider>
  )
}
