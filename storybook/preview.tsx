import React from 'react'
import { Preview } from '@storybook/react'
import { ApolloProvider } from '@apollo/client'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { client } from '../src/graphql/client'
import { theme } from '../src/components/app/app.theme'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {},
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#f5f5f7'
        }
      ]
    }
  },
  decorators: [
    (story) => (
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {story()}
        </ThemeProvider>
      </ApolloProvider>
    )
  ]
}

export default preview
