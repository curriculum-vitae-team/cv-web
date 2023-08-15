import React from 'react'
import { Preview } from '@storybook/react'
import { ThemeProvider } from '@mui/material'
import { theme } from '../src/components/app/app.theme'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {},
    backgrounds: {
      default: 'default',
      values: [
        {
          name: 'default',
          value: '#f5f5f7'
        }
      ]
    }
  },
  decorators: [(story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>]
}

export default preview
