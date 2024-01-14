import { ApolloProvider } from '@apollo/client'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { client } from 'graphql/client'
import { Notifications } from '@features/notifications'
import { Dialogs } from '@features/dialogs'
import { BreadcrumbsProvider } from '@features/breadcrumbs-context'
import { ThemeProvider } from '@features/theme-provider'
import { Router } from '../router'

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
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
